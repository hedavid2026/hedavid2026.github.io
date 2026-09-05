import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import Crosshair from './Crosshair'

export default function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="bg-surface text-on-surface paper-noise min-h-screen flex flex-col">
      {/* 未传入 containerRef 时默认跟随整个窗口 */}
      <Crosshair color="#147B58" />
      <Header />
      <main className="w-full pt-20 flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
