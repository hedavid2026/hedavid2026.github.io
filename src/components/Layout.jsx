import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import Crosshair from './Crosshair'
import SiteAtmosphere from './SiteAtmosphere'

export default function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="relative bg-transparent text-on-surface min-h-screen flex flex-col">
      <SiteAtmosphere />
      <div className="relative z-[1] flex min-h-screen flex-col">
        <Crosshair color="#147B58" />
        <Header />
        <main className="w-full pt-20 flex-1">
          <div key={pathname} className="page-enter">
            <Outlet />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}
