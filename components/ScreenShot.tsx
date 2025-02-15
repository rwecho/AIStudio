import Image from 'next/image'

const ScreenShot = ({ screenshot_key }: { screenshot_key: string }) => {
  const url = `/api/screenshot?key=${screenshot_key}`
  return <Image alt={'title'} src={url} width={300} height={100} objectFit="center" unoptimized />
}

export default ScreenShot
