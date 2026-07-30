import { HeroSection } from '../components/HeroSection'
import { ExperienceGallery } from '../components/ExperienceGallery'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Download,
  ExternalLink,
  Linkedin,
  Mail,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import {
  education,
  experiences,
  milestones,
  pillars,
  projects,
  skills,
} from '../data/siteData'

export function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />

        <section className="border-y border-black/5 bg-paper/70 py-8">
          <div className="section-shell grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
  ['UN', 'Invited to the United Nations'],
  ['Foreign Minister', 'Official invitation by Tunisia’s Foreign Minister in NYC'],
  ['140+', 'People led'],
  ['4', 'Languages spoken'],
].map(([value, label]) => (
              <div key={value} className="rounded-2xl px-2 py-4">
                <p className="font-display text-3xl text-wine">{value}</p>
                <p className="mt-2 text-sm leading-6 text-muted">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="section-shell py-28">
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
              <SectionHeading eyebrow="About" title="A profile shaped by more than one discipline." />
              <div className="space-y-6 text-lg leading-9 text-muted">
                <p>
                  I started with Business Intelligence, where I learned how data can support
                  everyday decisions. I then moved into Big Data Analytics and later into Data
                  Science and Artificial Intelligence, while continuing to work on practical
                  projects involving dashboards, APIs, databases and automation.
                </p>
                <p>
                  Alongside the technical side, I spent several years in international leadership
                  roles. I worked on finance, legal coordination, talent management, business
                  development, partnerships and large events. That combination has made me
                  comfortable moving between technical details, business needs and people.
                </p>
                <p>
                  I am particularly interested in work where data has to be collected, cleaned,
                  connected and turned into something dependable for real users.
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        <section id="profile" className="bg-ink py-28 text-white">
          <div className="section-shell">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/55">My profile</p>
              <h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight sm:text-5xl">
                Four parts of my experience that work together.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/60">
                Each pillar reflects a different part of my background, but the strongest work
                usually happens when several of them come together.
              </p>
            </Reveal>

            <div className="mt-14 grid gap-5 md:grid-cols-2">
              {pillars.map((pillar, index) => (
                <Reveal key={pillar.title}>
                  <motion.article
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.2 }}
                    className="h-full rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-7 sm:p-8"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                        <pillar.icon size={23} />
                      </div>
                      <span className="font-display text-2xl text-white/25">0{index + 1}</span>
                    </div>
                    <h3 className="mt-8 font-display text-3xl">{pillar.title}</h3>
                    <p className="mt-4 leading-7 text-white/60">{pillar.description}</p>
                    <div className="mt-7 grid gap-2 sm:grid-cols-2">
                      {pillar.items.map((item) => (
                        <div key={item} className="rounded-xl border border-white/10 px-3 py-2.5 text-sm text-white/75">
                          {item}
                        </div>
                      ))}
                    </div>
                    <div className="mt-7 border-t border-white/10 pt-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/40">
                        In practice
                      </p>
                      <p className="mt-3 leading-7 text-white/85">{pillar.proof}</p>
                    </div>

                    {pillar.title === 'International' && <ExperienceGallery />}
                  </motion.article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section-shell py-28">
          <Reveal>
            <SectionHeading
              eyebrow="Experience"
              title="A timeline built around responsibility and contribution."
              copy="From software development to national leadership and international business development, each role added a different layer to how I work."
            />
          </Reveal>

          <div className="relative mt-16">
            <div className="absolute left-[11px] top-2 hidden h-[calc(100%-1rem)] w-px bg-black/10 md:block" />
            <div className="space-y-6">
              {experiences.map((experience) => (
                <Reveal key={`${experience.role}-${experience.company}`}>
                  <article className="relative md:pl-12">
                    <div className="absolute left-0 top-8 hidden h-6 w-6 rounded-full border-[7px] border-canvas bg-wine md:block" />
                    <div className="card p-6 sm:p-8">
                      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                        <div>
                          <p className="text-sm font-semibold text-wine">{experience.period}</p>
                          <h3 className="mt-3 font-display text-2xl sm:text-3xl">{experience.role}</h3>
                          <p className="mt-2 text-sm font-medium text-muted">
                            {experience.company} · {experience.location}
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {experience.tags.map((tag) => (
                            <span key={tag} className="rounded-full bg-canvas px-3 py-1.5 text-xs font-medium text-muted">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <p className="mt-6 max-w-3xl text-base leading-8 text-muted">{experience.summary}</p>
                      <ul className="mt-6 grid gap-3 lg:grid-cols-3">
                        {experience.highlights.map((highlight) => (
                          <li key={highlight} className="rounded-2xl border border-black/5 bg-canvas/60 p-4 text-sm leading-6 text-muted">
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="bg-paper/70 py-28">
          <div className="section-shell">
            <Reveal>
              <SectionHeading
                eyebrow="Selected work"
                title="Projects and systems that solved a real need."
                copy="These examples come from academic and professional work. Each case study focuses on the context, my contribution and the practical result."
              />
            </Reveal>

            <div className="mt-14 grid gap-6 lg:grid-cols-2">
              {projects.map((project) => (
                <Reveal key={project.slug}>
                  <article className="card h-full overflow-hidden">
                    <img src={project.image} alt="" className="h-56 w-full object-cover" />
                    <div className="p-6 sm:p-8">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-wine">{project.category}</p>
                      <h3 className="mt-3 font-display text-3xl">{project.title}</h3>
                      <p className="mt-4 leading-7 text-muted">{project.intro}</p>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.technologies.map((item) => (
                          <span key={item} className="rounded-full bg-canvas px-3 py-1.5 text-xs font-medium text-muted">
                            {item}
                          </span>
                        ))}
                      </div>
                      <Link
                        to={`/projects/${project.slug}`}
                        className="focus-ring mt-7 inline-flex items-center gap-2 rounded-lg text-sm font-semibold text-ink hover:text-wine"
                      >
                        Read case study <ArrowRight size={16} />
                      </Link>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section-shell py-28">
          <Reveal>
            <SectionHeading
              eyebrow="Skills"
              title="Tools grouped by how I use them."
              copy="I prefer showing practical areas of work rather than percentages or self-rated skill bars."
            />
          </Reveal>
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((group) => (
              <Reveal key={group.title}>
                <div className="card h-full p-6">
                  <h3 className="font-display text-2xl">{group.title}</h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="rounded-full border border-black/10 px-3 py-2 text-sm text-muted">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="education" className="bg-sand/45 py-28">
          <div className="section-shell">
            <Reveal>
              <SectionHeading
                eyebrow="Education"
                title="From business intelligence to data science and AI."
                copy="My studies follow a clear progression: understanding business data, working with larger data systems, and now developing deeper technical and analytical skills."
              />
            </Reveal>

            <div className="mt-14 grid gap-5 lg:grid-cols-3">
              {education.map((item, index) => (
                <Reveal key={item.degree}>
                  <article className="card h-full p-7">
                    <p className="font-display text-4xl text-wine/25">0{index + 1}</p>
                    <p className="mt-8 text-sm font-semibold text-wine">{item.period}</p>
                    <h3 className="mt-3 font-display text-2xl leading-tight">{item.degree}</h3>
                    <p className="mt-4 text-sm font-medium text-muted">
                      {item.school} · {item.location}
                    </p>
                    <p className="mt-5 leading-7 text-muted">{item.detail}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="certificates" className="section-shell py-28">
          <Reveal>
            <SectionHeading
              eyebrow="Milestones"
              title="Recognition and moments that marked my path."
              copy="This section can later include certificates as well. For now, it highlights the milestones already documented in my CV."
            />
          </Reveal>
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {milestones.map((item) => (
              <Reveal key={item.title}>
                <article className="card p-7">
                  <h3 className="font-display text-2xl">{item.title}</h3>
                  <p className="mt-4 leading-7 text-muted">{item.detail}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="contact" className="section-shell pb-28">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] bg-wine px-6 py-12 text-white shadow-soft sm:px-12 sm:py-16 lg:px-16">
              <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/55">Contact</p>
                  <h2 className="mt-5 max-w-3xl font-display text-4xl leading-tight sm:text-5xl">
                    Let’s talk about roles, projects or collaborations.
                  </h2>
                  <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
                    I am interested in opportunities where data, technology and business come together in a practical way.
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <a
                    href="mailto:amirafarrah@outlook.fr"
                    className="focus-ring flex items-center justify-between rounded-2xl bg-white px-5 py-4 font-semibold text-ink transition hover:-translate-y-0.5"
                  >
                    <span className="flex items-center gap-3"><Mail size={19} /> Email me</span>
                    <ArrowRight size={18} />
                  </a>
                  <a
                    href="https://be.linkedin.com/in/amirafarrah/"
                    target="_blank"
                    rel="noreferrer"
                    className="focus-ring flex items-center justify-between rounded-2xl border border-white/20 px-5 py-4 font-semibold transition hover:bg-white/10"
                  >
                    <span className="flex items-center gap-3"><Linkedin size={19} /> LinkedIn</span>
                    <ExternalLink size={18} />
                  </a>
                  <a
                    href="/Amira_Farrah_CV.pdf"
                    download
                    className="focus-ring flex items-center justify-between rounded-2xl border border-white/20 px-5 py-4 font-semibold transition hover:bg-white/10"
                  >
                    <span className="flex items-center gap-3"><Download size={19} /> Download CV</span>
                    <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  )
}