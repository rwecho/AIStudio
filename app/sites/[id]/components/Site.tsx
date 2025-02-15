'use client'
import { useSiteContext } from '@/app/contexts/SiteContext'
import { withTheme } from '@/app/hoc/withTheme'
import { motion } from 'framer-motion'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'

const SiteContent = () => {
  const { site } = useSiteContext()
  const screenshot = `/api/screenshot?key=${site.screenshot_key}`

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto p-8"
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl"
      >
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-6"
        >
          {site.languages[0].title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-lg text-gray-400 "
        >
          {site.languages[0].description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="w-full relative mt-6"
        >
          <Image
            src={screenshot}
            alt={site.languages[0].title}
            width={768}
            height={432}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4aHRoaHiMeIx4nJSgrKCwmJy0vMjU5NDk1OS9FRUlNRU1dYWFhcXF5jY2NqKiopKL/2wBDAR"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={75}
            priority
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8"
        >
          <ReactMarkdown className="prose prose-invert prose-sm sm:prose-base lg:prose-lg prose-pre:bg-gray-800/50 prose-pre:border prose-pre:border-gray-700 prose-pre:rounded-lg prose-img:rounded-xl prose-headings:bg-gradient-to-r prose-headings:from-purple-400 prose-headings:to-pink-600 prose-headings:bg-clip-text prose-headings:text-transparent max-w-none">
            {site.languages[0].detail}
          </ReactMarkdown>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default withTheme(SiteContent)
