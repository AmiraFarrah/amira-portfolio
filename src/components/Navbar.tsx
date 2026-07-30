import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const links = [
  ['About', '#about'],
  ['Profile', '#profile'],
  ['Experience', '#experience'],
  ['Projects', '#projects'],
  ['Skills', '#skills'],
  ['Education', '#education'],
  ['Contact', '#contact'],
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => setOpen(false), [location])

  const href = (anchor: string) => location.pathname === '/' ? anchor : `/${anchor}`

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-canvas/85 backdrop-blur-xl">
      <div className="section-shell flex h-20 items-center justify-between">
        <Link to="/" className="focus-ring rounded-lg font-display text-xl">
          Amira Farrah
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map(([label, anchor]) => (
            <a
              key={label}
              href={href(anchor)}
              className="focus-ring rounded-md text-sm font-medium text-muted transition hover:text-ink"
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          href="/Amira_Farrah_CV.pdf"
          download
          className="focus-ring hidden rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-wine lg:inline-flex"
        >
          Download CV
        </a>

        <button
          className="focus-ring rounded-xl p-2 lg:hidden"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-black/5 bg-paper px-5 py-5 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {links.map(([label, anchor]) => (
              <a
                key={label}
                href={href(anchor)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-muted hover:bg-canvas hover:text-ink"
              >
                {label}
              </a>
            ))}
            <a
              href="/Amira_Farrah_CV.pdf"
              download
              className="mt-3 rounded-xl bg-ink px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Download CV
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
