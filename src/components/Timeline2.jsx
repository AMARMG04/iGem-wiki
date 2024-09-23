import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from '../assets/fish.png'
import { Rocket, Globe, Leaf, Brain } from 'lucide-react'

const timelineData = [
  {
    year: "2020",
    name: "Project Alpha",
    description: "Launched our first major product, revolutionizing the industry with cutting-edge technology and user-centric design.",
    image: Image,
    icon: "rocket",
  },
  {
    year: "2021",
    name: "Global Expansion",
    description: "Opened offices in 5 new countries, expanding our global reach and establishing a strong international presence in key markets.",
    image: Image,
    icon: "globe",
  },
  {
    year: "2022",
    name: "Sustainability Initiative",
    description: "Implemented company-wide sustainability practices, reducing our carbon footprint by 50% and setting new industry standards for environmental responsibility.",
    image: Image,
    icon: "leaf",
  },
  {
    year: "2023",
    name: "AI Integration",
    description: "Integrated advanced AI capabilities into all our products, enhancing user experience and setting new benchmarks for intelligent software solutions.",
    image: Image,
    icon: "brain",
  },
]

const iconComponents = {
  rocket: Rocket,
  globe: Globe,
  leaf: Leaf,
  brain: Brain,
}

export default function Timeline2() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-16">Company Timeline</h1>
      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-full">
          <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
            <path d="M0,0 Q50,100 100,0" stroke="rgba(34, 197, 94, 0.2)" strokeWidth="2" fill="none" vectorEffect="non-scaling-stroke" />
          </svg>
        </div>
        {timelineData.map((item, index) => (
          <TimelineItem key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  )
}

function TimelineItem({ item, index }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 1000], [0, 500])
  const opacity = useTransform(y, (latest) => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect()
      return rect.top < window.innerHeight && rect.bottom > 0 ? 1 : 0
    }
    return 0
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        } else {
          setIsVisible(false)
        }
      },
      {
        threshold: 0.1,
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  const isEven = index % 2 === 0
  const IconComponent = iconComponents[item.icon]

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      className={`mb-24 flex justify-between items-center w-full ${isEven ? 'flex-row-reverse' : ''}`}
    >
      <div className="order-1 w-5/12"></div>
      <motion.div
        className="z-20"
        initial={{ scale: 0 }}
        animate={isVisible ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
      >
        <div className="flex items-center justify-center w-32 h-32 bg-blue-600 rounded-full shadow-xl">
          <IconComponent className="w-16 h-16 text-white" />
        </div>
      </motion.div>
      <motion.div
        className="order-1 bg-white rounded-lg shadow-xl w-5/12 px-6 py-4"
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
      >
        <h3 className="mb-3 font-bold text-gray-800 text-2xl">{item.year}</h3>
        <h4 className="mb-3 font-bold text-blue-600 text-xl">{item.name}</h4>
        <div className="flex flex-col items-center mb-4">
          {/* <Image
            src={item.image}
            alt={item.name}
            width={200}
            height={200}
            className="rounded-lg mb-4"
          /> */}
          <p className="text-lg leading-relaxed tracking-wide text-gray-800">{item.description}</p>
        </div>
      </motion.div>
    </motion.div>
  )
}
