/**
 * Every section is introduced as a shell command instead of a heading.
 * The <h2> is still a real <h2> — `title` is what screen readers and search
 * engines get, `cmd`/`flags` are the decoration.
 */
export default function SectionHead({
  id,
  title,
  cmd,
  flags,
  blurb,
}: {
  id: string;
  title: string;
  cmd: string;
  flags?: string;
  blurb?: string;
}) {
  return (
    <header className="mb-5">
      <h2 id={`${id}-title`} className="cmd">
        <span className="prompt" aria-hidden="true">
          $
        </span>
        <span className="argv">{cmd}</span>
        {flags && (
          <span className="flag" aria-hidden="true">
            {flags}
          </span>
        )}
        <span className="sr-only">{title}</span>
      </h2>
      {blurb && (
        <p className="prose mt-2.5 max-w-[64ch] text-[13.5px] text-muted">{blurb}</p>
      )}
      <hr className="rule mt-4" />
    </header>
  );
}
