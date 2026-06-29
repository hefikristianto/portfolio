type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="mb-4 text-sm uppercase tracking-[0.35em] text-white/35">
        {eyebrow}
      </p>

      <h2 className="text-4xl font-semibold tracking-[-0.06em] text-white sm:text-6xl">
        {title}
      </h2>

      <p className="mt-6 text-base leading-7 text-white/45 sm:text-lg">
        {description}
      </p>
    </div>
  );
}
