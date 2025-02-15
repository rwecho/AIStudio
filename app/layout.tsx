import type { Metadata } from 'next'
import './globals.css'
import { AntdRegistry } from '@ant-design/nextjs-registry'

export const metadata: Metadata = {
  title: 'AI Studio X - Share and learn AI projects',
  description:
    'AI Studio X is a platform for AI enthusiasts to share their projects and learn from each other.',
}

const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang="en">
    <body>
      <AntdRegistry>{children}</AntdRegistry>
    </body>
  </html>
)

export default RootLayout
