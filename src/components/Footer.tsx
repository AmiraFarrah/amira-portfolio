import { Linkedin, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-black/5 py-10">
      <div className="section-shell flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-xl">Amira Farrah</p>
          <p className="mt-1 text-sm text-muted">Technology · Business · Leadership · International</p>
        </div>
        <div className="flex items-center gap-3">
          <a
            className="focus-ring rounded-full border border-black/10 p-3 text-muted transition hover:border-wine/30 hover:text-wine"
            href="mailto:amirafarrah@outlook.fr"
            aria-label="Email Amira"
          >
            <Mail size={18} />
          </a>
          <a
            className="focus-ring rounded-full border border-black/10 p-3 text-muted transition hover:border-wine/30 hover:text-wine"
            href="https://be.linkedin.com/in/amirafarrah/"
            target="_blank"
            rel="noreferrer"
            aria-label="Amira on LinkedIn"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
