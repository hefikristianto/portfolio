import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const url = request.nextUrl.searchParams.get("url");

  if (!url) {
    return new Response("Missing url", { status: 400 });
  }

  const accessKey = process.env.SCREENSHOTONE_ACCESS_KEY;

  if (!accessKey) {
    return new Response("Missing ScreenshotOne access key", { status: 500 });
  }

  const apiUrl = new URL("https://api.screenshotone.com/take");

  apiUrl.searchParams.set("access_key", accessKey);
  apiUrl.searchParams.set("url", url);
  apiUrl.searchParams.set("viewport_width", "1440");
  apiUrl.searchParams.set("viewport_height", "760");
  apiUrl.searchParams.set("device_scale_factor", "1");
  apiUrl.searchParams.set("format", "jpg");
  apiUrl.searchParams.set("image_quality", "88");
  apiUrl.searchParams.set("delay", "2");
  apiUrl.searchParams.set("full_page", "false");
  apiUrl.searchParams.set("block_ads", "true");
  apiUrl.searchParams.set("block_cookie_banners", "true");

  const response = await fetch(apiUrl.toString(), {
    next: {
      revalidate: 3600,
    },
  });

  if (!response.ok) {
    return new Response("Failed to capture screenshot", {
      status: response.status,
    });
  }

  const image = await response.arrayBuffer();

  return new Response(image, {
    headers: {
      "Content-Type": "image/jpeg",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
