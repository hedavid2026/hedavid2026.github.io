import Reveal from '../components/Reveal'

const pillars = [
  {
    plate: '板块 01.A',
    ref: 'DH-AI-01',
    title: '生成式 AI // 银行业智能体银行转型',
    subtitle:
      '从全价值链试点到银行 4.0：智能体银行（Agent Bank）成为未来十年重要转型方向。',
    pipeline: [
      '[业务场景识别 / 45+ 核心用例]',
      '[对话与创造能力嵌入价值链]',
      { text: '[智能体：风控 / 财富 / 运营]', invert: true },
      { text: '[人机共智 · 协同决策]', bold: true },
    ],
    metrics: [
      { label: '时间视野', value: '2035', note: '智能体银行路线图' },
      { label: '覆盖范围', value: '全价值链', note: '前台至中后台' },
    ],
    inventions: [
      '生成式 AI 可拓展至银行业全价值链，发挥“对话”与“创造”能力，替代人、赋能人。',
      '跨境审单、流动性管理、尽调信贷、财富顾问与中后台治理均可由智能体驱动。',
      '竞争关键从单一技术能力转向组织能力与场景重构能力。',
    ],
    primaryCta: '[ 主题：银行转型 2035 ]',
    secondaryCta: '[ 关键词：智能体银行 ]',
  },
  {
    plate: '板块 01.B',
    ref: 'DH-IND-02',
    title: '产业金融 // 对公业务最大增量与新质生产力',
    subtitle:
      '何大勇在 2025 深圳金博会等场合强调：对公产业金融是银行未来最大增量机会之一。',
    pipeline: [
      '[筛选新质生产力客户基座]',
      '[传统制造技改 + 新兴产业]',
      { text: '[供应链 · 投行 · 出海协同]', invert: true },
      { text: '[对公第二曲线 · ROE 保卫]', bold: true },
    ],
    metrics: [
      { label: '重点企业', value: '约 3 万家', note: '新质生产力企业*' },
      { label: '产业赛道', value: '约 300 个', note: '公开演讲表述*' },
    ],
    inventions: [
      '金融市场与零售已近见顶，对公产业金融成为“十五五”最大增量方向之一。',
      '传统产业占比高、技改升级空间大，将带动国资投资、并购、证券化与企业出海等投行/国际化业务。',
      '约 3 万家新质生产力企业、约 300 个赛道，决定银行未来十年客户基础；需摆脱过度依赖房地产与政府平台客户。',
      '产业客户供应链长、结算量大、存款沉淀深，并可外溢至代发、私行与 FICC/外汇/避险等金融市场业务。',
    ],
    primaryCta: '[ 主题：十五五 · 产业金融 ]',
    secondaryCta: '[ 关键词：新质生产力 ]',
  },
  {
    plate: '板块 01.C',
    ref: 'DH-RET-03',
    title: '零售数字化 // 手机银行与财富管理主阵地',
    subtitle:
      '“十五五”另一突破口：零售数字化经营。手机银行从交易工具升级为营销、销售与顾问平台。',
    pipeline: [
      '[经验驱动 → 数据驱动]',
      '[手机银行基建基本完成]',
      { text: '[数字化经营 · 敏捷机制]', invert: true },
      { text: '[全渠道提质增效]', bold: true },
    ],
    metrics: [
      { label: '手机银行 AUM', value: '约 1/3', note: '领先股份制银行观察*' },
      { label: '财富增速', value: '7—8%', note: '近期待行业估算*' },
    ],
    inventions: [
      '领先银行将手机银行升级为营销、销售与投顾平台，服务亿级中长尾客户。',
      '全渠道经营以更低成本覆盖更多客群，是降本增效与增收创利的关键抓手。',
      '下一阶段关键不在“再建工具”，而在科技是否形成零售数字化经营的敏捷机制。',
    ],
    primaryCta: '[ 主题：零售数字化经营 ]',
    secondaryCta: '[ 关键词：手机银行财富 ]',
  },
  {
    plate: '板块 01.D',
    ref: 'DH-DIG-04',
    title: '数字化转型 // 银行 CBOT 1+4 工具箱',
    subtitle:
      '数字化不是信息化搬迁，而是业务模式、客户经营、产品服务与组织协同的体系化升级。',
    pipeline: [
      '[数字化战略规划与转型管理]',
      '[客户旅程 × 客群经营]',
      { text: '[开放数字架构]', invert: true },
      { text: '[敏捷协同落地陪跑]', bold: true },
    ],
    metrics: [
      { label: '工具箱', value: '1+4', note: 'CBOT 框架' },
      { label: '服务模式', value: 'CBOT', note: '咨询·建设·运营·移交' },
    ],
    inventions: [
      '覆盖咨询—实施—运营—移交全流程，避免点状、项目周期式服务。',
      '中小银行数字化须先解决生存问题，再谈全面铺开。',
      '对照监管数字化转型要求，从局部突破走向全行纵深变革。',
    ],
    primaryCta: '[ 主题：CBOT 1+4 工具箱 ]',
    secondaryCta: '[ 关键词：体系化变革 ]',
  },
  {
    plate: '板块 01.E',
    ref: 'DH-CF-05',
    title: '消费金融 // 存量经营与 DOUBLE 增长引擎',
    subtitle:
      '何大勇主笔参与的 BCG 报告指出：消金高增长接近尾声，进入“单客价值提升”的存量经营时代。',
    pipeline: [
      '[高增长时代接近尾声]',
      '[三大客群差异化经营]',
      { text: '[DOUBLE 增长引擎]', invert: true },
      { text: '[存量深耕 · 焕活造血]', bold: true },
    ],
    metrics: [
      { label: '五年增速', value: '约 7%', note: 'BCG 预测*' },
      { label: '2027 规模', value: '约 25 万亿', note: '消金总规模预测*' },
    ],
    inventions: [
      '市场特征转为“客户渗透缓慢增长、单客价值提升为主”；渗透基本见顶，存量信贷余额提升成增长发动机。',
      '三大客群：年利率 6% 以下优选（红海）、7%—16% 次优（银行探索下沉）、17%—24% 大众（消金/小贷主战场）。',
      '三大机遇：深耕存量全生命周期价值；强化数字化风控并试水下沉；提早布局年轻客群成长红利。',
      '提出 DOUBLE 增长引擎，强调消金是完整经营体系（营销、产品、风控、运营、组织），短板决定竞争力；仍可持续为机构“焕活造血”。',
    ],
    primaryCta: '[ 主题：消费金融智胜之道 ]',
    secondaryCta: '[ 关键词：存量经营 DOUBLE ]',
  },
]

const benchmarks = [
  {
    code: '生成式AI_2023',
    sponsor: 'BCG《银行业生成式AI应用报告》',
    cluster: '全价值链试点与生产力释放',
    impact: '对话/创造能力嵌入业务链',
  },
  {
    code: '产业金融_2025',
    sponsor: '深圳金博会 / 证券时报等报道',
    cluster: '对公产业金融与新质生产力客户',
    impact: '明确对公最大增量方向',
  },
  {
    code: '手机银行财富_2023',
    sponsor: 'BCG × 北京银行联合报告',
    cluster: '下一代手机银行与财富管理',
    impact: '手机银行定位为经营主阵地',
  },
  {
    code: 'CBOT工具箱_2023',
    sponsor: '银行数字化转型实用工具箱发布',
    cluster: '战略·旅程·客群·架构·敏捷',
    impact: '从规划到落地的体系化陪跑',
  },
  {
    code: '消费金融_2023',
    sponsor: '《守正创新，行稳致远——消费金融“智胜”之道》',
    cluster: '存量经营 · DOUBLE 增长引擎',
    impact: '预测五年约 7% 增速 / 2027 约 25 万亿',
  },
  {
    code: '十五五_2025',
    sponsor: '《“十五五”银行业转型发展》主题演讲',
    cluster: '产业金融 + 零售数字化经营',
    impact: '两大突破口并重',
  },
]

function PipelineBox({ step }) {
  const text = typeof step === 'string' ? step : step.text
  const invert = typeof step === 'object' && step.invert
  const bold = typeof step === 'object' && step.bold

  return (
    <div
      className={[
        'border border-primary p-unit-xs text-center text-label-mono',
        invert ? 'bg-primary text-on-primary' : 'bg-surface',
        bold ? 'font-bold' : '',
      ].join(' ')}
    >
      {text}
    </div>
  )
}

export default function WorksPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="w-full page-gutter pt-unit-xl pb-unit-2xl">
        <Reveal className="flex flex-col gap-unit-md border-b-[4px] border-primary pb-unit-xl">
          <div className="flex flex-wrap items-center justify-between gap-unit-sm">
            <div className="flex items-center gap-unit-xs">
              <span className="inline-block w-2 h-2 bg-primary pulse-dot" />
              <span className="text-label-caps text-primary">
                [章节 02 // 研究主题与公开成果 2020—2025]
              </span>
            </div>
            <div className="text-label-mono text-secondary">档案编号：何大勇-BCG-研究</div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-baseline pt-unit-sm">
            <div className="lg:col-span-8 flex flex-col gap-unit-xs">
              <h1 className="text-headline-xl text-primary tracking-tight">
                银行业转型研究与咨询焦点
              </h1>
              <p className="text-label-mono tracking-wider text-secondary">
                五大支柱：智能体银行 · 产业金融 · 零售数字化 · CBOT 1+4 · 消费金融
              </p>
            </div>
            <div className="lg:col-span-4">
              <div className="border border-primary p-unit-md bg-surface flex flex-col gap-unit-2xs lift-hover">
                <span className="text-label-caps text-secondary">索引摘要 // 近五年公开焦点</span>
                <div className="text-headline-sm text-primary">5 大研究支柱</div>
                <div className="text-label-mono text-on-surface-variant">
                  BCG 董事总经理、全球资深合伙人
                  <br />
                  大中华区金融机构业务负责人
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="w-full page-gutter pb-unit-3xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter-desktop items-stretch">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.ref} delay={(i % 2) * 90 + Math.floor(i / 2) * 60} as="div" className="h-full">
            <article
              className="border border-primary border-t-[4px] flex flex-col justify-between bg-surface/90 p-unit-lg h-full lift-hover"
            >
              <div className="flex flex-col gap-unit-lg">
                <div className="flex flex-col gap-unit-2xs border-b border-primary/20 pb-unit-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-label-caps bg-primary text-on-primary px-unit-2xs py-[2px]">
                      {pillar.plate}
                    </span>
                    <span className="text-label-mono text-secondary">档案：{pillar.ref}</span>
                  </div>
                  <h2 className="text-headline-sm text-primary pt-unit-xs">{pillar.title}</h2>
                  <p className="text-body-base text-secondary italic">{pillar.subtitle}</p>
                </div>

                <div className="flex flex-col gap-unit-xs">
                  <span className="text-label-caps text-secondary">[逻辑脉络 // 公开论述]</span>
                  <div className="bg-surface-container-low border border-primary p-unit-md flex flex-col gap-unit-xs">
                    {pillar.pipeline.map((step, i) => (
                      <div key={i}>
                        <PipelineBox step={step} />
                        {i < pillar.pipeline.length - 1 && (
                          <div className="text-center text-label-mono text-primary font-bold py-unit-2xs">
                            ↓
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-unit-xs border-y border-primary/20 py-unit-sm">
                  {pillar.metrics.map((m) => (
                    <div key={m.label} className="flex flex-col">
                      <span className="text-label-mono text-secondary">{m.label}</span>
                      <span className="text-headline-sm text-primary">{m.value}</span>
                      <span className="text-label-mono text-caption text-secondary">{m.note}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-unit-xs">
                  <span className="text-label-caps text-secondary">公开观点要点：</span>
                  <ul className="text-body-sm text-on-surface flex flex-col gap-unit-2xs list-none p-0 m-0">
                    {pillar.inventions.map((item) => (
                      <li key={item} className="flex items-baseline gap-unit-xs">
                        <span className="text-label-mono text-caption font-bold">—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-col gap-unit-xs pt-unit-lg border-t border-primary/20 mt-unit-lg">
                <div className="w-full text-center bg-primary text-on-primary text-label-caps py-unit-xs border border-primary">
                  {pillar.primaryCta}
                </div>
                <div className="w-full text-center bg-surface text-primary text-label-caps py-unit-xs border border-primary">
                  {pillar.secondaryCta}
                </div>
              </div>
            </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
        <p className="text-caption text-secondary mt-unit-md">
          * 手机银行 AUM、财富增速、新质生产力企业数量、消金增速与规模等数据，来自何大勇公开演讲及证券时报、中国日报网、证券日报等对 BCG 报告的报道，仅供主题索引，非独立审计结论。消费金融板块主要依据 2023 年《守正创新，行稳致远——消费金融“智胜”之道》报告发布相关公开报道整理。
        </p>
        </Reveal>
      </section>

      <section className="w-full page-gutter pb-unit-3xl">
        <Reveal delay={80}>
        <div className="bg-primary text-on-primary p-unit-xl border-t-[8px] border-secondary-fixed">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-on-primary/20 pb-unit-md gap-unit-sm">
            <div>
              <span className="text-label-caps text-secondary-fixed tracking-widest block">
                [板块 02-B // 精选公开里程碑]
              </span>
              <h3 className="text-headline-lg text-on-primary mt-unit-2xs">
                公开记录 2023—2025
              </h3>
            </div>
            <div className="text-label-mono text-secondary-fixed md:text-right">
              整理自 BCG 发布与财经媒体报道
            </div>
          </div>

          <div className="w-full overflow-x-auto mt-unit-lg">
            <table className="w-full text-left border-collapse min-w-[720px]">
              <thead>
                <tr className="border-b border-on-primary/30">
                  <th className="text-label-caps py-unit-sm text-secondary-fixed font-bold tracking-wider">
                    条目编号
                  </th>
                  <th className="text-label-caps py-unit-sm text-secondary-fixed font-bold tracking-wider">
                    公开语境
                  </th>
                  <th className="text-label-caps py-unit-sm text-secondary-fixed font-bold tracking-wider">
                    焦点
                  </th>
                  <th className="text-label-caps py-unit-sm text-secondary-fixed font-bold tracking-wider text-right">
                    信号
                  </th>
                </tr>
              </thead>
              <tbody className="text-label-mono">
                {benchmarks.map((row) => (
                  <tr
                    key={row.code}
                    className="border-b border-on-primary/10 hover:bg-on-primary/5 transition-arch"
                  >
                    <td className="py-unit-md font-bold text-on-primary">
                      <span className="inline-flex items-center gap-unit-xs">
                        <span className="w-2 h-2 bg-on-primary inline-block" />
                        {row.code}
                      </span>
                    </td>
                    <td className="py-unit-md text-secondary-fixed">{row.sponsor}</td>
                    <td className="py-unit-md text-secondary-fixed">{row.cluster}</td>
                    <td className="py-unit-md text-right font-bold text-on-primary">
                      {row.impact}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-unit-xl pt-unit-md border-t border-on-primary/20 flex flex-col md:flex-row justify-between items-start md:items-center gap-unit-sm text-secondary-fixed text-label-mono text-caption">
            <div>
              官方简介：{' '}
              <span className="text-on-primary tracking-widest">
                bcg.com/about/people/experts/david-he
              </span>
            </div>
            <div className="flex items-center gap-unit-md">
              <span>分类：公开媒体综述</span>
              <span className="border border-on-primary text-on-primary px-unit-xs py-unit-2xs font-bold text-[9px] tracking-widest">
                基于信源
              </span>
            </div>
          </div>
        </div>
        </Reveal>
      </section>
    </div>
  )
}
