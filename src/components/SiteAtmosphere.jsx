/**
 * Fixed architectural atmosphere behind page content.
 * Paper grain + blueprint grid + soft BCG-green wash.
 */
export default function SiteAtmosphere() {
  return (
    <div className="site-atmosphere" aria-hidden="true">
      <div className="site-atmosphere__wash" />
      <div className="site-atmosphere__grid" />
      <div className="site-atmosphere__grain" />
      <div className="site-atmosphere__beam site-atmosphere__beam--a" />
      <div className="site-atmosphere__beam site-atmosphere__beam--b" />
      <div className="site-atmosphere__marks">
        <span className="site-atmosphere__mark site-atmosphere__mark--tl" />
        <span className="site-atmosphere__mark site-atmosphere__mark--tr" />
        <span className="site-atmosphere__mark site-atmosphere__mark--bl" />
        <span className="site-atmosphere__mark site-atmosphere__mark--br" />
      </div>
      <div className="site-atmosphere__plate">PLATE · ARCHIVAL FIELD</div>
    </div>
  )
}
