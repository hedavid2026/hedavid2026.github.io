import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react'

const navItems = [
  { to: '/', label: '[01] 首页', end: true },
  { to: '/works', label: '[02] 研究主题' },
  { to: '/about', label: '[03] 履历背景' },
  { to: '/contact', label: '[04] 联络渠道' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface border-b-[4px] border-primary">
      <div className="h-20 w-full page-gutter mx-auto flex items-center justify-between gap-unit-md">
        <Link to="/" className="flex items-baseline gap-unit-md min-w-0">
          <span className="text-label-caps text-primary tracking-widest truncate">
            何大勇 · BCG 个人档案
          </span>
          <span className="hidden lg:inline-block text-label-mono text-secondary shrink-0">
            董事总经理、全球资深合伙人 · 北京
          </span>
        </Link>

        <nav className="hidden xl:flex items-center gap-unit-xl">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                [
                  'text-label-caps py-unit-xs transition-arch',
                  isActive
                    ? 'border-b-2 border-primary text-primary font-bold'
                    : 'text-on-surface-variant hover:text-primary',
                ].join(' ')
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-unit-md shrink-0">
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center justify-center bg-primary text-on-primary text-label-caps px-unit-md py-unit-xs border border-primary hover:bg-surface hover:text-primary transition-arch"
          >
            [ 建立联络 → ]
          </Link>
          <button
            type="button"
            className="xl:hidden w-8 h-8 bg-primary text-on-primary flex items-center justify-center"
            aria-label="打开导航"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="material-symbols-outlined text-[18px]">
              {open ? 'close' : 'menu'}
            </span>
          </button>
          <div className="hidden xl:flex w-8 h-8 bg-primary items-center justify-center">
            <span className="material-symbols-outlined text-on-primary text-[18px]">
              person
            </span>
          </div>
        </div>
      </div>

      {open && (
        <nav className="xl:hidden border-t border-outline-variant bg-surface page-gutter py-unit-md flex flex-col gap-unit-sm">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                [
                  'text-label-caps py-unit-sm transition-arch',
                  isActive ? 'text-primary font-bold' : 'text-on-surface-variant',
                ].join(' ')
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="sm:hidden mt-unit-xs inline-flex items-center justify-center bg-primary text-on-primary text-label-caps px-unit-md py-unit-sm border border-primary"
          >
            [ 建立联络 → ]
          </Link>
        </nav>
      )}
    </header>
  )
}
