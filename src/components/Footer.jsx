export default function Footer() {
  return (
    <footer className="w-full bg-surface border-t-[4px] border-primary mt-unit-2xl">
      <div className="w-full page-gutter mx-auto py-unit-2xl grid grid-cols-1 md:grid-cols-4 gap-gutter-desktop">
        <div className="flex flex-col gap-unit-xs">
          <div className="text-label-caps text-primary font-bold">所属机构</div>
          <p className="text-label-mono text-secondary">波士顿咨询公司（BCG）</p>
          <p className="text-label-mono text-secondary">
            董事总经理、全球资深合伙人 · 北京
          </p>
        </div>
        <div className="flex flex-col gap-unit-xs">
          <div className="text-label-caps text-primary font-bold">官方简介</div>
          <p className="text-label-mono text-secondary">bcg.com/about/people/experts/david-he</p>
          <p className="text-label-mono text-secondary">大中华区金融行业 / 中国银行业研究院</p>
        </div>
        <div className="flex flex-col gap-unit-xs">
          <div className="text-label-caps text-primary font-bold">版式说明</div>
          <p className="text-label-mono text-secondary">字体：Playfair Display · JetBrains Mono</p>
          <p className="text-label-mono text-secondary">文案依据：公开资料 2020—2025</p>
        </div>
        <div className="flex flex-col gap-unit-xs">
          <div className="text-label-caps text-primary font-bold">版权声明</div>
          <p className="text-label-mono text-secondary">
            © 何大勇。本站为课程项目个人档案演示。
          </p>
          <p className="text-label-mono text-secondary">机构信息仅作署名引用</p>
        </div>
      </div>
      <div className="w-full border-t border-secondary-fixed py-unit-xs page-gutter flex items-center justify-between gap-unit-md">
        <span className="text-label-mono text-secondary">档案编号 · BCG-档案-01</span>
        <span className="text-label-mono text-secondary">文档索引 · 何大勇公开资料综述</span>
      </div>
    </footer>
  )
}
