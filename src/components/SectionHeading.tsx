type Props = {
  eyebrow: string
  title: string
  copy?: string
}

export function SectionHeading({ eyebrow, title, copy }: Props) {
  return (
    <div>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {copy && <p className="section-copy">{copy}</p>}
    </div>
  )
}
