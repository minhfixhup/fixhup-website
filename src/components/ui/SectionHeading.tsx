export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  const alignClasses = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-3 ${alignClasses}`}>
      {eyebrow ? (
        <span className="text-xs font-bold uppercase tracking-widest text-coral">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="max-w-2xl text-3xl font-bold leading-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-xl text-base text-body">{description}</p>
      ) : null}
    </div>
  );
}
