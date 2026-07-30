import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowRight, BriefcaseBusiness, Code2, Earth, UsersRound } from 'lucide-react'
import type { MouseEvent } from 'react'

const floatingCards = [
  { label: 'Information Technology', Icon: Code2, className: '-left-6 top-16 sm:-left-12' },
  { label: 'Leadership', Icon: UsersRound, className: '-right-5 top-36 sm:-right-12' },
  { label: 'Business', Icon: BriefcaseBusiness, className: '-left-3 bottom-16 sm:-left-10' },
  { label: 'International', Icon: Earth, className: '-right-4 bottom-8 sm:-right-10' },
]

export function HeroSection() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const smoothX = useSpring(mouseX, { stiffness: 120, damping: 18 })
  const smoothY = useSpring(mouseY, { stiffness: 120, damping: 18 })
  const imageX = useTransform(smoothX, [-0.5, 0.5], [-8, 8])
  const imageY = useTransform(smoothY, [-0.5, 0.5], [-8, 8])

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect()
    mouseX.set((event.clientX - rect.left) / rect.width - 0.5)
    mouseY.set((event.clientY - rect.top) / rect.height - 0.5)
  }

  function resetMouse() {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <section className="section-shell flex min-h-screen items-center pb-16 pt-32">
      <div className="grid w-full items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="eyebrow">Data · Business · Leadership · Impact</p>
          <h1 className="mt-6 max-w-3xl font-display text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">
            Turning data and ideas into practical solutions that create{' '}
            <em className="text-wine">real impact.</em>
          </h1>
         

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#profile"
              className="focus-ring inline-flex items-center gap-2 rounded-full bg-wine px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-wineDark"
            >
               know more about me <ArrowRight size={17} />
            </a>
            <a
              href="#projects"
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-black/10 bg-paper px-6 py-3.5 text-sm font-semibold transition hover:-translate-y-0.5 hover:border-wine/30"
            >
              View my work <ArrowRight size={17} />
            </a>
          </div>

          <div className="mt-10 grid max-w-2xl grid-cols-2 gap-3 rounded-[1.6rem] border border-black/5 bg-paper/80 p-4 shadow-card sm:grid-cols-4">
            {[
              ['4+', 'Years of experience'],
              ['5', 'Countries connected'],
              ['140+', 'People led'],
              ['4', 'Languages spoken'],
            ].map(([value, label]) => (
              <div key={label} className="px-3 py-2 text-center sm:border-r sm:last:border-r-0 sm:border-black/5">
                <p className="font-display text-2xl text-wine">{value}</p>
                <p className="mt-1 text-xs leading-5 text-muted">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.12 }}
          className="relative mx-auto w-full max-w-[560px]"
          onMouseMove={handleMouseMove}
          onMouseLeave={resetMouse}
        >
          <div className="absolute -right-4 top-20 h-72 w-36 rounded-l-full bg-wine sm:-right-8" />
          <div className="absolute -left-4 bottom-14 h-40 w-40 rounded-full bg-wine/90 sm:-left-10" />
          <div className="absolute inset-10 rounded-[4rem] border border-wine/25" />

          <motion.div
            style={{ x: imageX, y: imageY }}
            className="relative z-10 mx-auto w-[74%] overflow-hidden rounded-[4rem_4rem_1.6rem_1.6rem] border-[7px] border-paper bg-paper shadow-soft"
          >
            <img
              src="/amira-portrait.jpg"
              alt="Amira Farrah"
              className="aspect-[4/5] h-full w-full object-cover object-top"
            />
          </motion.div>

          {floatingCards.map(({ label, Icon, className }, index) => (
            <motion.div
              key={label}
              animate={{ y: [0, index % 2 === 0 ? -7 : 7, 0] }}
              transition={{ duration: 4 + index * 0.4, repeat: Infinity, ease: 'easeInOut' }}
              className={`absolute z-20 rounded-2xl border border-black/5 bg-paper/95 px-4 py-4 shadow-card backdrop-blur ${className}`}
            >
              <Icon size={21} className="text-wine" />
              <p className="mt-3 text-sm font-semibold text-ink">{label}</p>
            </motion.div>
          ))}

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-5 text-center font-display text-3xl italic text-wine"
          >
            Amira Farrah
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
