import { Link } from 'react-router-dom'

const indexRows = [
  {
    code: '001 // 首页',
    title: '个人档案入口',
    action: '进入首页',
    to: '/',
  },
  {
    code: '002 // 研究',
    title: '银行业转型研究主题（2020—2025）',
    action: '查看研究',
    to: '/works',
  },
  {
    code: '003 // 履历',
    title: 'BCG 董事总经理、全球资深合伙人',
    action: '查看履历',
    to: '/about',
  },
  {
    code: '004 // 联络',
    title: '专业联络与演示留言',
    action: '前往联络',
    to: '/contact',
  },
]

export default function IndexPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="w-full page-gutter pt-unit-xl pb-unit-void border-b-[8px] border-primary min-h-[calc(100vh-5rem)] flex flex-col justify-center">
        <div className="flex flex-wrap items-center justify-between gap-unit-sm mb-unit-lg pb-unit-sm border-b border-primary">
          <span className="text-label-caps text-primary tracking-widest flex items-center gap-unit-xs">
            <span className="inline-block w-2.5 h-2.5 bg-primary" />
            [章节 01 // 档案索引]
          </span>
          <span className="text-label-mono text-secondary">BCG 专家 · 北京</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-end">
          <div className="lg:col-span-9">
            <p className="text-label-mono text-secondary tracking-widest mb-unit-md">
              波士顿咨询公司 · 董事总经理、全球资深合伙人
            </p>
            <h1 className="text-display-hero text-primary mb-unit-lg">
              何大勇
              <br />
              <span className="italic text-headline-xl">David He.</span>
            </h1>
            <p className="text-body-lg text-on-surface max-w-2xl">
              领导 BCG 大中华区金融行业咨询，深耕商业银行、保险、财富管理与金融科技转型——从数字化经营到生成式
              AI 与智能体银行。
            </p>
          </div>
          <div className="lg:col-span-3 flex flex-col gap-unit-sm lg:border-l-[4px] lg:border-primary lg:pl-gutter-desktop">
            <Link
              to="/works"
              className="w-full text-center bg-primary text-on-primary text-label-caps py-unit-sm border border-primary hover:bg-surface hover:text-primary transition-arch"
            >
              [ 查看研究 → ]
            </Link>
            <Link
              to="/about"
              className="w-full text-center bg-surface text-primary text-label-caps py-unit-sm border border-primary hover:bg-primary hover:text-on-primary transition-arch"
            >
              [ 阅读履历 ]
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full page-gutter py-unit-2xl">
        <div className="flex items-center justify-between mb-unit-lg flex-wrap gap-unit-sm">
          <h2 className="text-headline-lg text-primary">章节目录</h2>
          <span className="text-label-mono text-secondary">共 4 个板块 · 基于公开资料</span>
        </div>
        <div className="border-t border-outline-variant">
          {indexRows.map((row) => (
            <Link
              key={row.code}
              to={row.to}
              className="group flex flex-col sm:flex-row sm:items-center justify-between gap-unit-xs py-unit-lg border-b border-outline-variant hover:bg-primary hover:text-on-primary transition-arch px-unit-sm -mx-unit-sm"
            >
              <span className="text-label-mono text-secondary group-hover:text-secondary-fixed">
                {row.code}
              </span>
              <span className="text-headline-sm flex-1 sm:px-unit-lg">{row.title}</span>
              <span className="text-label-caps text-secondary group-hover:text-secondary-fixed">
                {row.action} →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
