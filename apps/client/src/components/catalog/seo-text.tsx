interface SeoTextProps {
  title: string;
  paragraphs: string[];
}

export function SeoText({ title, paragraphs }: SeoTextProps) {
  return (
    <section className="mt-[136px] mb-[100px]">
      <h2 className="font-unbounded font-bold text-[48px] uppercase mb-6">{title}</h2>
      <div className="space-y-3">
        {paragraphs.map((text, index) => (
          <p key={index} className="text-black leading-relaxed">
            {text}
          </p>
        ))}
      </div>
    </section>
  );
}
