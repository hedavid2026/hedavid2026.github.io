import { useState } from 'react'
import Reveal from '../components/Reveal'

const mandateOptions = [
  { value: 'digital-transform', label: '银行数字化转型 / CBOT 体系咨询交流' },
  { value: 'genai-agent-bank', label: '生成式AI与智能体银行议题交流' },
  { value: 'mobile-wealth', label: '手机银行与数字化财富管理' },
  { value: 'industrial-finance', label: '产业金融与“十五五”转型议题' },
  { value: 'consumer-finance', label: '消费金融与存量经营 / DOUBLE 引擎' },
  { value: 'omnichannel', label: '零售全渠道经营与降本增效' },
  { value: 'keynote', label: '闭门分享 / 主题演讲邀请' },
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [nda, setNda] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  const resetForm = () => {
    setSubmitted(false)
    setNda(false)
  }

  return (
    <div className="flex flex-col w-full">
      <section className="w-full page-gutter pt-unit-xl pb-unit-2xl border-b-[8px] border-primary">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-unit-md mb-unit-lg pb-unit-sm border-b border-primary rule-draw">
          <span className="text-label-caps tracking-widest text-primary flex items-center gap-unit-xs">
            <span className="inline-block w-2.5 h-2.5 bg-primary pulse-dot" />
            [章节 04 // 专业联络]
          </span>
          <div className="flex items-center gap-unit-md text-label-mono text-secondary flex-wrap">
            <span>所属：BCG 北京</span>
            <span>·</span>
            <span>职务：董事总经理、全球资深合伙人</span>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-baseline">
          <div className="lg:col-span-8 hero-stagger">
            <h1 className="text-display-hero text-primary tracking-tight font-normal mb-unit-md">
              直接联络。
              <br />
              <span className="italic text-headline-xl">建立专业沟通。</span>
            </h1>
            <p className="text-label-mono tracking-widest text-secondary mt-unit-sm max-w-3xl">
              本页为课程项目演示 · 正式业务请通过 BCG 官方渠道联络
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col justify-between self-stretch pt-unit-md lg:pt-0 lg:border-l-[4px] lg:border-primary lg:pl-gutter-desktop hero-stagger">
            <div className="bg-primary text-on-primary p-unit-md lift-hover">
              <div className="text-label-caps tracking-widest text-secondary-container mb-unit-2xs flex items-center gap-2">
                <span className="inline-block w-2 h-2 bg-surface" />
                官方简介
              </div>
              <div className="text-headline-sm text-on-primary font-bold leading-tight">
                BCG 专家页
              </div>
              <div className="text-label-mono text-surface-container-high mt-unit-2xs">
                bcg.com/about/people/experts/david-he
              </div>
            </div>
            <div className="mt-unit-md pt-unit-sm border-t border-primary/20 flex items-center justify-between text-caption text-secondary gap-unit-sm">
              <span>驻地：北京</span>
              <span>业务：金融机构</span>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full page-gutter py-unit-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop">
          <Reveal className="lg:col-span-5 flex flex-col gap-unit-xl">
            <div className="border-[4px] border-primary p-unit-lg bg-surface relative lift-hover">
              <div className="absolute -top-3 left-unit-md bg-surface px-unit-xs text-label-caps text-primary border border-primary font-bold">
                板块 04-A // 公开档案
              </div>
              <div className="pt-unit-xs">
                <h2 className="text-headline-lg text-primary mb-1">何大勇（David He）</h2>
                <p className="text-label-mono text-secondary mb-unit-lg pb-unit-sm border-b border-primary">
                  董事总经理、全球资深合伙人 // BCG
                </p>
                <div className="flex flex-col">
                  {[
                    ['常驻地：', '中国北京'],
                    [
                      '官方简介：',
                      <a
                        key="bcg"
                        className="text-label-mono text-primary underline hover:bg-primary hover:text-on-primary transition-arch"
                        href="https://www.bcg.com/about/people/experts/david-he"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        BCG 官网 · 何大勇
                      </a>,
                    ],
                    [
                      '领英：',
                      <a
                        key="li"
                        className="text-label-mono text-primary underline hover:bg-primary hover:text-on-primary transition-arch"
                        href="https://www.linkedin.com/in/david-dayong-%E5%A4%A7%E5%8B%87-he-%E4%BD%95-47698633"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        David Dayong He
                      </a>,
                    ],
                    ['业务负责：', '大中华区金融机构与保险业务'],
                    ['学术：', '清华大学五道口金融学院客座授课'],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="py-unit-xs flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-secondary-fixed"
                    >
                      <span className="text-label-caps text-secondary">{label}</span>
                      <span className="text-label-mono text-primary font-bold text-right">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-[4px] border-primary bg-primary text-on-primary p-unit-lg">
              <div className="flex items-center justify-between border-b border-surface/30 pb-unit-xs mb-unit-md">
                <span className="text-label-caps text-surface tracking-widest">[ 联络说明 ]</span>
                <span className="text-label-mono text-caption text-surface-dim">课程演示</span>
              </div>
              <p className="text-body-sm text-surface-container-high leading-relaxed mb-unit-md">
                本页表单仅用于个人网站课程演示。如需与何大勇先生进行正式业务联络，请通过 BCG
                官网专家页或机构官方渠道提交，请勿将本演示表单视为真实收件渠道。
              </p>
              <a
                href="https://www.bcg.com/about/people/experts/david-he"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex py-unit-xs px-unit-md bg-surface text-primary border border-surface text-label-caps tracking-widest items-center justify-center hover:bg-transparent hover:text-surface hover:border-surface transition-arch"
              >
                [ 打开 BCG 专家页 → ]
              </a>
            </div>

            <div className="border border-primary p-unit-md bg-surface-container-lowest lift-hover">
              <div className="flex items-center justify-between mb-unit-xs">
                <span className="text-label-caps text-primary font-bold">关注焦点</span>
                <span className="text-label-mono text-caption text-secondary">公开主题</span>
              </div>
              <div className="space-y-2 text-body-sm text-secondary">
                {[
                  ['主要领域', '银行与保险'],
                  ['近期视野', '智能体银行 / 2035'],
                  ['工作驻地', '北京 / 大中华区'],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-baseline justify-between border-b border-secondary-fixed pb-1 gap-unit-sm"
                  >
                    <span>{label}</span>
                    <span className="text-label-mono text-primary font-bold text-right">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-7 flex flex-col">
            <div className="border-[4px] border-primary p-unit-lg lg:p-unit-xl bg-surface flex flex-col h-full">
              <div className="border-b-[4px] border-primary pb-unit-sm mb-unit-lg flex items-baseline justify-between gap-unit-sm">
                <div>
                  <span className="text-label-caps text-secondary tracking-widest">
                    [ 演示留言台 ]
                  </span>
                  <h3 className="text-headline-lg text-primary font-normal">课程项目联系表单</h3>
                </div>
                <span className="text-label-mono text-secondary hidden sm:inline-block">
                  表单 DEMO-04
                </span>
              </div>

              {!submitted ? (
                <form className="flex flex-col gap-unit-lg flex-1" onSubmit={handleSubmit}>
                  <div className="flex flex-col gap-1">
                    <label className="text-label-caps text-primary font-bold" htmlFor="field-institution">
                      01. 机构 / 组织 *
                    </label>
                    <input
                      className="w-full bg-transparent border-b-2 border-primary py-unit-xs px-0 text-body-base text-primary placeholder:text-secondary/50 focus:outline-none focus:border-b-[4px] transition-arch"
                      id="field-institution"
                      placeholder="例如：高校 / 银行 / 研究机构"
                      required
                      type="text"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-label-caps text-primary font-bold" htmlFor="field-name">
                      02. 姓名与身份 *
                    </label>
                    <input
                      className="w-full bg-transparent border-b-2 border-primary py-unit-xs px-0 text-body-base text-primary placeholder:text-secondary/50 focus:outline-none focus:border-b-[4px] transition-arch"
                      id="field-name"
                      placeholder="例如：张伟，研究生 / 战略分析师"
                      required
                      type="text"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-label-caps text-primary font-bold" htmlFor="field-email">
                      03. 回信邮箱 *
                    </label>
                    <input
                      className="w-full bg-transparent border-b-2 border-primary py-unit-xs px-0 text-body-base text-primary placeholder:text-secondary/50 focus:outline-none focus:border-b-[4px] transition-arch"
                      id="field-email"
                      placeholder="例如：name@university.edu"
                      required
                      type="email"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-label-caps text-primary font-bold" htmlFor="field-mandate">
                      04. 感兴趣的主题 *
                    </label>
                    <div className="relative">
                      <select
                        className="w-full bg-transparent border-b-2 border-primary py-unit-xs px-0 text-body-base text-primary appearance-none cursor-pointer focus:outline-none focus:border-b-[4px] transition-arch"
                        id="field-mandate"
                        required
                        defaultValue=""
                      >
                        <option disabled value="">
                          请选择讨论主题
                        </option>
                        {mandateOptions.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <span className="material-symbols-outlined text-primary text-[18px]">
                          expand_more
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-between gap-unit-sm">
                      <label className="text-label-caps text-primary font-bold" htmlFor="field-scope">
                        05. 留言内容 *
                      </label>
                      <span className="text-label-mono text-caption text-secondary">仅演示</span>
                    </div>
                    <textarea
                      className="w-full bg-surface border-2 border-primary p-unit-sm text-body-base text-primary placeholder:text-secondary/50 focus:outline-none focus:border-[4px] transition-arch resize-y mt-1"
                      id="field-scope"
                      placeholder="请简要描述您的问题或希望讨论的内容……"
                      required
                      rows={4}
                    />
                  </div>

                  <div className="pt-unit-xs">
                    <label className="flex items-start gap-unit-sm cursor-pointer group select-none">
                      <button
                        type="button"
                        className={`w-5 h-5 border-2 border-primary mt-0.5 shrink-0 flex items-center justify-center transition-arch ${
                          nda ? 'bg-primary' : 'bg-surface'
                        }`}
                        aria-pressed={nda}
                        onClick={() => setNda((v) => !v)}
                      >
                        {nda && (
                          <span className="material-symbols-outlined text-[16px] text-on-primary">
                            check
                          </span>
                        )}
                      </button>
                      <span className="text-label-mono text-primary font-bold group-hover:underline">
                        [√] 我理解本表单仅为课程演示，并非 BCG 官方联络渠道
                      </span>
                    </label>
                  </div>

                  <div className="pt-unit-sm mt-auto">
                    <button
                      className="w-full bg-primary text-on-primary py-unit-md px-unit-lg text-label-caps text-[clamp(16px,2vw,24px)] tracking-widest border-[2px] border-primary flex items-center justify-between hover:bg-surface hover:text-primary transition-arch group"
                      type="submit"
                    >
                      <span>[ 提交演示留言 ]</span>
                      <span className="material-symbols-outlined text-[24px] group-hover:translate-x-2 transition-transform duration-100">
                        arrow_forward
                      </span>
                    </button>
                  </div>
                </form>
              ) : (
                <div className="flex flex-col items-center justify-center p-unit-xl border-[4px] border-primary bg-primary text-on-primary my-auto text-center">
                  <span className="material-symbols-outlined text-[48px] text-surface mb-unit-sm">
                    mark_email_read
                  </span>
                  <h4 className="text-headline-lg mb-unit-xs">演示留言已记录</h4>
                  <p className="text-label-mono text-surface-container-high max-w-md mb-unit-md">
                    演示表单已保存在前端本地状态。正式联络请访问 BCG 专家页。
                  </p>
                  <button
                    className="border border-surface px-unit-md py-unit-xs text-label-caps hover:bg-surface hover:text-primary transition-arch"
                    onClick={resetForm}
                    type="button"
                  >
                    [ 再发一条演示留言 ]
                  </button>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="w-full page-gutter pb-unit-2xl">
        <Reveal delay={80} className="border-t-[4px] border-primary pt-unit-lg">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter-desktop">
            <div className="md:col-span-4 flex flex-col gap-unit-2xs">
              <div className="text-label-caps text-primary font-bold flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">school</span>
                教育背景
              </div>
              <p className="text-label-mono text-primary font-bold">芝加哥大学布斯商学院 MBA（金融）</p>
              <p className="text-caption text-secondary">北京交通大学 — 工学学士 / 硕士</p>
            </div>
            <div className="md:col-span-4 flex flex-col gap-unit-2xs">
              <div className="text-label-caps text-primary font-bold flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">work</span>
                此前经历
              </div>
              <p className="text-label-mono text-primary font-bold">中国银行</p>
              <p className="text-caption text-secondary">
                加入 BCG（2008）前，曾在总行、香港子公司与纽约分行担任高级管理职务。
              </p>
            </div>
            <div className="md:col-span-4 flex flex-col gap-unit-2xs">
              <div className="text-label-caps text-primary font-bold flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">menu_book</span>
                学术参与
              </div>
              <p className="text-label-mono text-primary font-bold">清华大学五道口金融学院</p>
              <p className="text-caption text-secondary">
                长期受邀授课；并与中国保险行业协会等有交流。
              </p>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  )
}
