import Image from 'next/image'
import { useState } from 'react'

const ScreenShot = ({ screenshot_key }: { screenshot_key: string }) => {
  const [isError, setIsError] = useState(false)
  const url = `/api/screenshot?key=${screenshot_key}`

  if (isError) {
    return (
      <div className="w-[300px] h-[100px] bg-gray-200 flex items-center justify-center">
        Image failed to load
      </div>
    )
  }

  return (
    <Image
      alt={'screenshot'}
      src={url}
      width={300}
      height={100}
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4aHRoaHiMeIx4nJSgrKCwmJy0vMjU5NDk1OS9FRUlNRU1dYWFhcXF5jY2NqKiopKL/2wBDAR"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      quality={75}
      priority
      onError={() => setIsError(true)}
      className="object-cover"
    />
  )
}

export default ScreenShot
