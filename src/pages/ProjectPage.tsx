import { ArrowLeft, ExternalLink, Github } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { projects } from '../data/siteData'

export function ProjectPage() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    return <Navigate to="/" replace />
  }

  return (
    <>
      <Navbar />
      <main className="section-shell pb-24 pt-32">
        <Link
          to="/#projects"
          className="focus-ring inline-flex items-center gap-2 rounded-lg text-sm font-semibold text-muted hover:text-wine"
        >
          <ArrowLeft size={17} /> Back to projects
        </Link>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <p className="eyebrow">{project.category}</p>
            <h1 className="mt-5 font-display text-5xl leading-tight sm:text-6xl">{project.title}</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted">{project.intro}</p>
          </div>
          <img
            src={project.image}
            alt=""
            className="w-full rounded-[1.75rem] border border-black/5 shadow-card"
          />
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          <section className="card p-7">
            <p className="eyebrow">The challenge</p>
            <p className="mt-5 leading-8 text-muted">{project.challenge}</p>
          </section>

          <section className="card p-7 lg:col-span-2">
            <p className="eyebrow">My contribution</p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-3">
              {project.contribution.map((item) => (
                <li key={item} className="rounded-2xl bg-canvas p-4 text-sm leading-6 text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="card p-7 lg:col-span-2">
            <p className="eyebrow">Outcome</p>
            <p className="mt-5 text-lg leading-8 text-muted">{project.outcome}</p>
          </section>

          <section className="card p-7">
            <p className="eyebrow">Tools & methods</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.technologies.map((item) => (
                <span key={item} className="rounded-full border border-black/10 px-3 py-2 text-sm text-muted">
                  {item}
                </span>
              ))}
            </div>
          </section>
        </div>

        <section className="mt-12 rounded-[2rem] bg-ink p-8 text-white sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
            Replace these links later
          </p>
          <h2 className="mt-4 font-display text-3xl">Project links</h2>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#" onClick={(event) => event.preventDefault()} className="focus-ring inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink">
              <ExternalLink size={17} /> Live demo
            </a>
            <a href="#" onClick={(event) => event.preventDefault()} className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold">
              <Github size={17} /> GitHub
            </a>
            <a href="#" onClick={(event) => event.preventDefault()} className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold">
              Case study PDF
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
