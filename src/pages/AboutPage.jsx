import { Link } from 'react-router-dom'

const competencies = [
  {
    code: '01 // 大中华区金融机构业务',
    desc: '商业银行、保险、资管与财富管理的战略转型与落地陪跑',
    score: '业务负责人',
    tag: 'BCG 大中华区',
  },
  {
    code: '02 // 银行数字化转型',
    desc: '数字化战略、客户旅程、客群经营、开放架构与敏捷协同',
    score: 'CBOT 1+4',
    tag: '体系化变革',
  },
  {
    code: '03 // 生成式 AI 与智能体银行',
    desc: '生成式 AI 全价值链应用，迈向智能体银行范式',
    score: '银行 4.0',
    tag: '视野 2035',
  },
  {
    code: '04 // 财富管理与手机银行',
    desc: '下一代手机银行作为财富管理主阵地与全行经营枢纽',
    score: '手机优先',
    tag: '全渠道经营',
  },
]

const chronology = [
  {
    period: '[2023 – 至今]',
    phase: '阶段三：AI 与银行 4.0',
    phaseClass: 'bg-primary text-on-primary',
    title: '生成式 AI 与智能体银行转型',
    role: 'BCG 董事总经理、全球资深合伙人 // 大中华区金融机构业务',
    body: '推动银行业生成式 AI 全价值链应用讨论，并参与《银行转型2035：迈向智能体银行的范式跃迁》等研究发布。强调未来十年竞争不仅是技术能力，更是组织能力与场景重构能力；银行智能化将从“人主导、AI辅助”迈向“人机共智、协同决策”。',
    tags: ['#生成式AI', '#智能体银行', '#银行4.0'],
  },
  {
    period: '[2020 – 2025]',
    phase: '阶段二：数字化纵深',
    phaseClass: 'bg-secondary text-on-secondary',
    title: '银行数字化转型深水区与零售经营',
    role: 'BCG 金融机构专项中国区负责人 // 中国银行业研究院相关研究牵头',
    body: '围绕银行业保险业数字化转型指导意见落地，系统提出“CBOT 1+4”银行数字化转型实用工具箱；持续倡导手机银行作为财富管理主阵地、全渠道经营降本增收，以及“十五五”阶段产业金融与零售数字化经营两大突破口。',
    tags: ['#CBOT-1+4', '#手机银行', '#产业金融'],
  },
  {
    period: '[2008 – 至今]',
    phase: '阶段一：加入 BCG',
    phaseClass: 'bg-secondary-fixed-dim text-on-surface',
    title: '加入波士顿咨询，深耕大中华区金融业',
    role: '董事总经理、全球资深合伙人 // 北京',
    body: '2008 年加入 BCG。此前在中国银行总行、香港子公司与纽约分行担任高级管理职务。现领导 BCG 大中华区金融行业服务，并牵头中国银行业研究院相关研究及科技相关实践，长期受邀于清华大学五道口金融学院等机构授课。',
    tags: ['#BCG-2008起', '#中国银行', '#五道口'],
  },
]

const axioms = [
  {
    id: '观点一 // 体系化转型',
    quote:
      '“银行数字化转型不会限定在某个领域，更不会一蹴而就；局部、点状、项目周期式的服务已很难满足切实需求。”',
    body: '数字化不是把手工流程搬进系统，而是对业务模式、客户经营、产品服务与组织协同的体系化重塑。',
  },
  {
    id: '观点二 // 产出重于工具',
    quote: '“数字化转型的下半场，关键在于产出，将这些工具变成智能化的经营。”',
    body: '零售银行需要像领先消费互联网平台一样，以数据与算法驱动 O2O 经营，把手机银行做成全行营销、销售与顾问平台。',
  },
  {
    id: '观点三 // 尽早行动',
    quote: '“面对 AI 带来的深刻变革，最大的风险并非尝试后的失败，而是面对变革时的观望与停滞。”',
    body: '2035 年的银行，不会由空想定义，而将由现在开始行动的实践者创造。',
  },
]

const papers = [
  {
    item: '条目 01',
    date: '2025',
    title: '《银行转型2035：迈向智能体银行的范式跃迁》',
    meta: 'BCG 研究 // 智能体银行',
    body: '系统梳理银行核心业务场景智能化路径，提出智能体银行作为未来十年重要转型方向。',
  },
  {
    item: '条目 02',
    date: '2025',
    title: '“十五五”银行业转型发展：产业金融与数字化经营',
    meta: '主题演讲 // 深圳国际金融博览会',
    body: '指出银行业面临 ROE 下滑与马太效应加剧，最大增量机会集中在对公产业金融与零售数字化经营两大领域。',
  },
  {
    item: '条目 03',
    date: '2023.12',
    title: '《下一代手机银行：银行财富管理主阵地》',
    meta: 'BCG × 北京银行',
    body: '论证手机银行成为财富管理主阵地、中长尾客户经营载体、生态场景融合基地与全行协同枢纽。',
  },
  {
    item: '条目 04',
    date: '2023',
    title: '银行数字化转型实用工具箱（CBOT 1+4）',
    meta: '实用工具箱 // 合著发布',
    body: '覆盖数字化战略与转型管理、客户旅程、客群经营、开放数字架构与敏捷协同，支持从规划到落地的陪跑。',
  },
]

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="w-full page-gutter pt-unit-xl pb-unit-lg">
        <div className="flex flex-col gap-unit-xs">
          <div className="flex flex-wrap items-center justify-between gap-unit-sm pb-unit-xs">
            <span className="text-label-caps text-primary tracking-widest">
              [章节 03 // 专业履历与个人档案]
            </span>
            <span className="text-label-mono text-secondary">
              信源：BCG 官网 // 公开演讲 2020—2025
            </span>
          </div>
          <div className="w-full h-[4px] bg-primary" />
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-gutter-desktop pt-unit-md pb-unit-sm">
            <div className="xl:col-span-8 flex flex-col justify-between">
              <h1 className="font-display text-[52px] md:text-[84px] lg:text-[104px] leading-[0.95] tracking-[-0.035em] text-primary">
                以确定性推动转型。
                <span className="italic font-normal"> 何大勇。</span>
              </h1>
              <p className="text-label-mono text-secondary tracking-widest pt-unit-sm">
                董事总经理、全球资深合伙人 // BCG // 大中华区金融机构业务
              </p>
            </div>
            <div className="xl:col-span-4 flex flex-col justify-between pt-unit-xs xl:pt-0">
              <div className="flex flex-col gap-unit-2xs">
                <span className="text-label-caps text-secondary">定位 / 分类</span>
                <p className="text-body-base text-on-surface">
                  波士顿咨询公司（BCG）董事总经理、全球资深合伙人，常驻北京。领导大中华区金融行业咨询，并牵头中国银行业研究院相关研究与科技相关实践。
                </p>
              </div>
              <div className="pt-unit-md flex flex-col gap-unit-xs">
                <div className="flex items-center justify-between text-label-mono text-secondary pb-unit-2xs gap-unit-xs flex-wrap">
                  <span>驻地：北京</span>
                  <span>加入 BCG：2008</span>
                  <span>PMP 认证</span>
                </div>
                <a
                  href="https://www.bcg.com/about/people/experts/david-he"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-between bg-primary text-on-primary text-label-caps px-unit-md py-unit-sm hover:bg-surface hover:text-primary border border-primary transition-arch"
                >
                  <span>[ 查看 BCG 专家页 → ]</span>
                  <span className="text-label-mono">BCG.COM</span>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full h-px bg-outline-variant" />
        </div>
      </section>

      <section className="w-full page-gutter py-unit-lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop">
          <div className="lg:col-span-6 flex flex-col gap-unit-xl">
            <div className="flex items-center justify-between flex-wrap gap-unit-xs">
              <span className="text-label-caps text-primary tracking-widest">
                [板块 03-A // 履历综述]
              </span>
              <span className="text-label-mono text-secondary">章节索引：03.1</span>
            </div>

            <div className="flex flex-col gap-unit-md">
              <div className="flex items-start gap-unit-md">
                <div className="w-14 h-14 bg-primary text-on-primary flex items-center justify-center font-display text-[36px] shrink-0">
                  转
                </div>
                <p className="text-body-lg text-on-surface leading-relaxed">
                  未来五年，中国银行业与保险业将在创新、转型与增长的主旋律下快速变化。对有清晰转型议程、雄心勃勃的领导者而言，这是最好的取胜时机。——何大勇，BCG
                  董事总经理、全球资深合伙人
                </p>
              </div>
              <p className="text-body-base text-on-surface leading-relaxed">
                何大勇深耕中国宏观经济与金融政策、商业银行、保险、资产管理、财富管理、金融科技与企业全球化。2008
                年加入 BCG 前，曾于中国银行总行、香港子公司与纽约分行任高级管理职务。持有芝加哥大学布斯商学院金融方向
                MBA，以及北京交通大学工学学士与硕士学位；长期受邀在清华大学五道口金融学院与中国保险行业协会授课。
              </p>
            </div>

            <div className="w-full border border-primary p-unit-md bg-surface-container-low">
              <div className="flex items-center justify-between mb-unit-sm flex-wrap gap-unit-xs">
                <span className="text-label-caps text-primary">教育与资质</span>
                <span className="text-label-mono text-secondary">档案号 · DH-BCG</span>
              </div>
              <ul className="m-0 p-0 list-none flex flex-col gap-unit-xs text-body-sm text-on-surface">
                <li className="flex gap-unit-xs">
                  <span className="text-label-mono font-bold">—</span>
                  <span>芝加哥大学布斯商学院 MBA（金融）</span>
                </li>
                <li className="flex gap-unit-xs">
                  <span className="text-label-mono font-bold">—</span>
                  <span>北京交通大学工学硕士 / 学士</span>
                </li>
                <li className="flex gap-unit-xs">
                  <span className="text-label-mono font-bold">—</span>
                  <span>2006 年 A.T. Kearney 全球案例大赛冠军队队长（芝加哥大学）</span>
                </li>
                <li className="flex gap-unit-xs">
                  <span className="text-label-mono font-bold">—</span>
                  <span>项目管理专业人士认证（PMP）</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-unit-sm">
              <div className="flex items-baseline justify-between flex-wrap gap-unit-xs">
                <h3 className="text-headline-sm text-primary">专业焦点矩阵</h3>
                <span className="text-label-mono text-secondary">公开记录 // 2025</span>
              </div>
              <div className="w-full bg-surface-container-lowest">
                {competencies.map((row) => (
                  <div
                    key={row.code}
                    className="p-unit-sm bg-surface hover:bg-surface-container-low transition-arch flex flex-col md:flex-row md:items-center justify-between gap-unit-xs"
                  >
                    <div className="flex flex-col">
                      <span className="text-label-caps text-primary">{row.code}</span>
                      <span className="text-caption text-secondary">{row.desc}</span>
                    </div>
                    <div className="flex items-center gap-unit-md text-right flex-wrap justify-end">
                      <span className="text-label-mono font-bold text-primary">{row.score}</span>
                      <span className="text-label-caps px-unit-xs py-unit-2xs bg-secondary-fixed text-primary">
                        {row.tag}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-between bg-surface-container-low p-unit-md md:p-unit-lg">
            <div className="flex flex-col gap-unit-lg">
              <div className="flex items-center justify-between pb-unit-xs flex-wrap gap-unit-xs">
                <span className="text-label-caps text-primary font-bold tracking-widest">
                  [时间线 // BCG 与此前履历]
                </span>
                <span className="text-label-mono text-secondary">时期：2008—2025</span>
              </div>

              {chronology.map((item) => (
                <div
                  key={item.period}
                  className="p-unit-md bg-surface flex flex-col gap-unit-xs hover:bg-surface-container transition-arch"
                >
                  <div className="flex flex-wrap items-center justify-between gap-unit-xs">
                    <span className="text-label-mono text-primary font-bold">{item.period}</span>
                    <span className={`text-label-caps px-unit-xs py-unit-2xs ${item.phaseClass}`}>
                      {item.phase}
                    </span>
                  </div>
                  <h4 className="text-headline-sm text-primary pt-unit-2xs">{item.title}</h4>
                  <p className="text-label-mono text-secondary">{item.role}</p>
                  <p className="text-body-base text-on-surface pt-unit-xs leading-relaxed">
                    {item.body}
                  </p>
                  <div className="flex flex-wrap gap-unit-xs pt-unit-xs">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-label-mono bg-surface-container-high px-unit-xs py-unit-2xs text-secondary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="pt-unit-md flex items-center justify-between text-secondary text-label-mono text-caption gap-unit-sm flex-wrap">
              <span>档案编号：2025-BCG-履历</span>
              <span>已对照公开信源核实</span>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-primary text-on-primary py-unit-2xl my-unit-lg">
        <div className="w-full page-gutter mx-auto flex flex-col gap-unit-xl">
          <div className="flex flex-col gap-unit-xs">
            <div className="flex flex-wrap items-center justify-between gap-unit-sm text-secondary-fixed-dim">
              <span className="text-label-caps tracking-widest">[板块 03-B // 公开观点]</span>
              <span className="text-label-mono">摘自演讲与研究报告</span>
            </div>
            <div className="w-full h-px bg-secondary" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-desktop">
            {axioms.map((axiom) => (
              <div
                key={axiom.id}
                className="flex flex-col justify-between p-unit-lg bg-white/10 min-h-[340px]"
              >
                <div className="flex flex-col gap-unit-md">
                  <span className="text-label-mono text-secondary-fixed-dim">{axiom.id}</span>
                  <blockquote className="text-headline-sm italic text-on-primary leading-snug m-0">
                    {axiom.quote}
                  </blockquote>
                </div>
                <p className="text-body-sm text-secondary-fixed pt-unit-md">{axiom.body}</p>
              </div>
            ))}
          </div>

          <div className="p-unit-lg bg-white/5 flex flex-col md:flex-row items-start justify-between gap-unit-lg">
            <div className="max-w-3xl flex flex-col gap-unit-xs">
              <span className="text-label-caps tracking-widest text-secondary-fixed">
                研究与学术参与
              </span>
              <p className="text-body-base text-secondary-fixed leading-relaxed">
                在宏观金融、商业银行、财富与资产管理、保险与金融科技等领域持续发表研究与评论；多年受邀于清华大学五道口金融学院与中国保险行业协会授课。近五年公开议题覆盖数字化转型工具箱、生成式
                AI、手机银行与财富管理、全渠道经营，以及“十五五”产业金融与零售数字化经营。
              </p>
            </div>
            <div className="flex flex-col gap-unit-2xs text-right text-label-mono text-secondary-fixed-dim">
              <span>所属：BCG 北京</span>
              <span>研究院：中国银行业</span>
              <span>授课：清华五道口</span>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full page-gutter py-unit-xl">
        <div className="flex flex-col gap-unit-lg">
          <div className="flex flex-col gap-unit-xs">
            <div className="flex flex-wrap items-center justify-between gap-unit-sm">
              <span className="text-label-caps text-primary tracking-widest">
                [精选著述与演讲 // 近五年]
              </span>
              <span className="text-label-mono text-secondary">档案登记 // 四个亮点</span>
            </div>
            <h2 className="text-headline-lg text-primary">研究亮点与公开议题</h2>
            <div className="w-full h-[4px] bg-primary mt-unit-2xs" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-gutter-desktop">
            {papers.map((paper) => (
              <div
                key={paper.item}
                className="flex flex-col justify-between p-unit-md bg-surface-container-low hover:bg-surface-container transition-arch min-h-[380px]"
              >
                <div className="flex flex-col gap-unit-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-label-mono text-primary font-bold">{paper.item}</span>
                    <span className="text-label-caps text-secondary">{paper.date}</span>
                  </div>
                  <h3 className="text-headline-sm text-primary leading-tight">{paper.title}</h3>
                  <span className="text-label-mono text-secondary">{paper.meta}</span>
                  <p className="text-body-sm text-on-surface pt-unit-xs leading-normal">
                    {paper.body}
                  </p>
                </div>
                <div className="pt-unit-md">
                  <span className="inline-flex items-center justify-between w-full py-unit-xs text-label-caps text-primary">
                    <span>[ 公开记录 ]</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-unit-lg p-unit-md bg-surface-container flex flex-col sm:flex-row items-center justify-between gap-unit-sm">
            <div className="flex items-center gap-unit-md">
              <span className="material-symbols-outlined text-primary text-[28px]">verified</span>
              <div className="flex flex-col">
                <span className="text-label-caps text-primary font-bold">信源说明</span>
                <span className="text-label-mono text-secondary">
                  履历对齐 BCG 专家页与公开媒体报道（2020—2025）
                </span>
              </div>
            </div>
            <Link
              to="/contact"
              className="bg-primary text-on-primary text-label-caps px-unit-md py-unit-xs hover:bg-surface hover:text-primary border border-primary transition-arch"
            >
              [ 建立联络 ]
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
