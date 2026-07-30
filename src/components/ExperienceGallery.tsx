import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const galleryItems = [
  { image: '/gallery/international-1.jpeg', title: 'International Relations', location: 'Tunisia', description: 'A professional meeting connected to international relations and public engagement.' },
  { image: '/gallery/international-2.jpeg', title: 'DHL Experience', location: 'Germany', description: 'A visit focused on learning more about DHL operations and global supply-chain work.' },
  { image: '/gallery/international-3.jpeg', title: 'International Work Environment', location: 'Brussels, Belgium', description: 'Working in an international setting with people from different backgrounds.' },
  { image: '/gallery/international-4.jpeg', title: 'UCB Visit', location: 'Belgium', description: 'A company visit connected to partnership development and international talent work.' },
  { image: '/gallery/international-5.jpeg', title: 'Cross-cultural Collaboration', location: 'International project', description: 'Working with an international team during a shared project and community activity.' },
]

export function ExperienceGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const close = () => setActiveIndex(null)
  const previous = () => setActiveIndex((i) => i === null || i === 0 ? galleryItems.length - 1 : i - 1)
  const next = () => setActiveIndex((i) => i === null || i === galleryItems.length - 1 ? 0 : i + 1)

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (activeIndex === null) return
      if (event.key === 'Escape') close()
      if (event.key === 'ArrowLeft') previous()
      if (event.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [activeIndex])

  return (
    <>
      <div className="mt-7">
        <div className="mb-3 flex items-center justify-between">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/40">Moments from my experience</p>
          <p className="text-xs text-white/35">Click to open</p>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {galleryItems.map((item, index) => (
            <button key={item.image} type="button" onClick={() => setActiveIndex(index)}
              className="focus-ring group relative h-28 w-24 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:h-32 sm:w-28">
              <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
              <p className="absolute bottom-2 left-2 right-2 text-left text-[11px] font-medium leading-4 text-white">{item.title}</p>
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={close}>
            <motion.div className="relative w-full max-w-5xl overflow-hidden rounded-[2rem] bg-paper text-ink shadow-2xl"
              initial={{ opacity: 0, scale: 0.96, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }} onClick={(e) => e.stopPropagation()}>
              <button type="button" onClick={close} className="focus-ring absolute right-4 top-4 z-20 rounded-full bg-black/65 p-2.5 text-white" aria-label="Close gallery"><X size={20} /></button>
              <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
                <div className="relative min-h-[430px] bg-black">
                  <AnimatePresence mode="wait">
                    <motion.img key={galleryItems[activeIndex].image} src={galleryItems[activeIndex].image}
                      alt={galleryItems[activeIndex].title} className="h-full max-h-[78vh] w-full object-contain"
                      initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -18 }} />
                  </AnimatePresence>
                  <button type="button" onClick={previous} className="focus-ring absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-3 text-white" aria-label="Previous image"><ChevronLeft size={24} /></button>
                  <button type="button" onClick={next} className="focus-ring absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-3 text-white" aria-label="Next image"><ChevronRight size={24} /></button>
                </div>
                <div className="flex flex-col justify-between p-7 sm:p-9">
                  <div>
                    <p className="eyebrow">{galleryItems[activeIndex].location}</p>
                    <h3 className="mt-4 font-display text-3xl sm:text-4xl">{galleryItems[activeIndex].title}</h3>
                    <p className="mt-5 leading-8 text-muted">{galleryItems[activeIndex].description}</p>
                  </div>
                  <div className="mt-10 flex items-center justify-between border-t border-black/10 pt-5">
                    <span className="text-sm text-muted">{activeIndex + 1} / {galleryItems.length}</span>
                    <div className="flex gap-2">
                      {galleryItems.map((item, index) => (
                        <button key={item.image} type="button" onClick={() => setActiveIndex(index)}
                          className={`h-2.5 rounded-full transition ${index === activeIndex ? 'w-8 bg-wine' : 'w-2.5 bg-black/15'}`}
                          aria-label={`Go to image ${index + 1}`} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
