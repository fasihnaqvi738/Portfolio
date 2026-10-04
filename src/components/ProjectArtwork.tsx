import { ArrowUpRight, FileText, Search, Sparkles } from 'lucide-react'
import type { Project } from '../data/site'

export function ProjectArtwork({ kind }: { kind: Project['visual'] }) {
  if (kind === 'property') return <div className="artwork property-art" aria-label="Illustrative room-capture and reconstruction workflow">
    <div className="property-capture"><span>ROOM CAPTURE / INPUT</span><div className="room-frame"><i /><i /><i /><b>R01</b></div><div className="capture-modes"><span>PHOTO</span><span>VIDEO</span><span>RGB-D</span></div></div>
    <div className="pipeline-arrow">→</div><div className="property-output"><span>RECONSTRUCTION / REVIEW</span><div className="point-cloud"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div><div className="plan-outline"><i /><i /><i /><i /></div><small>DIAGNOSTIC CANDIDATE</small></div>
    <span className="illustrative-label">ILLUSTRATIVE WORKFLOW</span>
  </div>
  if (kind === 'legal') {
    return <div className="artwork legal-art" aria-label="Illustration of document search and cited answers">
    <div className="art-window"><div className="art-top"><i /><i /><i /><span>illustrative UI · documents</span><b>•••</b></div>
        <div className="legal-layout"><div className="art-sidebar"><span className="art-line short" /><span className="art-line" /><span className="art-line medium" /><span className="art-line" /></div>
          <div className="doc-sheet"><span className="doc-kicker">AGREEMENT · 24 PAGES</span><strong>Service agreement</strong><span className="art-line" /><span className="art-line wide" /><span className="highlight-line" /><span className="art-line medium" /><span className="art-line wide" /><div className="citation"><Search size={12} /><span>Relevant passage retrieved</span><b>p. 08</b></div></div>
          <div className="answer-card"><Sparkles size={13} /><span>GROUNDED ANSWER</span><p>“The agreement may be terminated with written notice…”</p><a>Source 01 ↗</a></div>
        </div>
      </div>
    </div>
  }
  if (kind === 'analytics') return <div className="artwork analytics-art" aria-label="Illustrative data analytics workspace">
    <div className="analytics-window"><div className="analytics-bar"><span>ILLUSTRATIVE UI · DATA WORKSPACE</span><span>•••</span></div><div className="analytics-content"><div className="data-sheet"><strong>Uploaded data</strong><span className="sheet-row header-row"><i /><i /><i /></span>{Array.from({ length: 5 }, (_, i) => <span className="sheet-row" key={i}><i /><i /><i /></span>)}<small>CSV / EXCEL</small></div><div className="analysis-column"><div className="question-panel"><Search size={12} /><span>Ask a question about this data…</span></div><div className="chart-panel"><span>CHART FROM DATA</span><div className="analysis-chart">{[45, 75, 56, 88, 62, 70].map((height, i) => <i key={i} style={{ height: `${height}%` }} />)}</div></div></div><div className="report-panel"><span className="report-mark">✳</span><b>Business report</b><small>AI-assisted analysis</small><div className="art-line wide" /><div className="art-line" /><div className="report-doc"><FileText size={15} /><span>Download report</span></div></div></div></div>
  </div>
  if (kind === 'finance') return <div className="artwork finance-art" aria-label="Illustration of a personal finance dashboard">
    <div className="finance-window"><div className="finance-head"><span>ILLUSTRATIVE UI · FINANCE</span><div>•••</div></div><strong className="balance">Finance overview<span>Expense and category management</span></strong><div className="chart-label">SPENDING BY CATEGORY <b>OVERVIEW</b></div><div className="bar-chart">{[32, 52, 41, 72, 56, 84, 62, 95, 68, 76, 48, 63].map((height, i) => <i key={i} style={{ height: `${height}%` }} />)}</div><div className="finance-bottom"><span><i className="dot lime" /> Expense management</span><span><i className="dot blue" /> AI-powered insights</span></div></div>
    <div className="insight-float"><Sparkles size={13} /><span>AI INSIGHTS</span><p>A dedicated space for finance insights.</p></div>
  </div>
  if (kind === 'grocery') return <div className="artwork grocery-art" aria-label="Illustrative grocery storefront and product management interface">
    <div className="grocery-window"><div className="grocery-top"><span>ILLUSTRATIVE UI · STORE</span><span>SEARCH / BAG</span></div><div className="grocery-content"><aside><b>Browse categories</b><i /><i /><i /><i /></aside><div className="grocery-products"><div className="grocery-heading"><strong>Storefront</strong><small>PRODUCT DISCOVERY</small></div><div className="grocery-grid">{['Produce', 'Pantry', 'Bakery'].map((item, i) => <div className="grocery-product" key={item}><span className={`product-shape shape-${i}`}><i /><i /><i /></span><b>{item}</b><small>Browse items</small></div>)}</div><div className="stock-note"><span className="stock-dot" />Cart quantities follow available stock</div></div></div></div>
  </div>
  if (kind === 'ml') return <div className="artwork ml-art" aria-label="Illustrative recipe-rating classification workflow">
    <div className="ml-heading"><span>RECIPE FOR RATING</span><span>ILLUSTRATIVE MODEL WORKFLOW</span></div><div className="recipe-cards"><div className="recipe-card"><span className="recipe-emoji">◉</span><b>Recipe features</b><small>Structured inputs</small></div><div className="model-arrow">→</div><div className="model-card"><span>CLASSIFICATION</span><b>Model comparison</b><div className="model-options"><i>Model A</i><i>Model B</i><i className="model-selected">XGBoost</i></div></div><div className="model-arrow">→</div><div className="recipe-result"><span>OUTPUT</span><b>Rating prediction</b><small>README reports XGBoost as most accurate</small></div></div><div className="ml-footnote">COURSE PROJECT · IIT MADRAS</div>
  </div>
  if (kind === 'business') return <div className="artwork business-art" aria-label="Illustrative business data management capstone report">
    <div className="business-stack"><div className="business-sheet back-sheet"><span>CAPSTONE / PROPOSAL</span><b>Business context</b><div className="art-line wide" /><div className="art-line medium" /><div className="art-line wide" /></div><div className="business-sheet front-sheet"><span>CAPSTONE / FINAL SUBMISSION</span><b>From problem to proposal</b><div className="business-steps"><div><i>01</i><b>Understand</b><small>Business problem</small></div><span>→</span><div><i>02</i><b>Analyze</b><small>Collected data</small></div><span>→</span><div><i>03</i><b>Propose</b><small>Possible solutions</small></div></div><div className="business-lines"><i /><i /><i /></div></div></div><span className="business-label">IIT MADRAS · BUSINESS DATA MANAGEMENT</span>
  </div>
  if (kind === 'sales') return <div className="artwork sales-art" aria-label="Illustrative sportswear sales and profit analysis report">
    <div className="sales-report"><div className="sales-cover"><span>DATA ANALYSIS / CASE STUDY</span><strong>Sales &<br />profit analysis</strong><small>SPORTSWEAR COMPANY</small><div className="sales-cover-mark">↗</div></div><div className="sales-pages"><div className="sales-page"><span>BUSINESS QUESTIONS</span><b>Dataset review</b><div className="sales-bars">{[56, 77, 45, 91, 65].map((height, i) => <i key={i} style={{ height: `${height}%` }} />)}</div><div className="art-line wide" /><div className="art-line medium" /></div><div className="sales-page"><span>ANALYSIS SUMMARY</span><b>Problem framing</b><div className="art-line wide" /><div className="art-line" /><div className="art-line medium" /><div className="sales-callout">Identify<br />business problems</div></div></div></div><span className="sales-label">PROJECT REPORT + PRESENTATION</span>
  </div>
  return <div className="artwork resume-art" aria-label="Illustration of a resume analysis report">
    <div className="resume-window"><div className="resume-doc"><div className="avatar-mark">CV</div><strong>Uploaded document</strong><span className="art-line wide" /><span className="art-line medium" /><span className="resume-section">DOCUMENT CONTENT</span><span className="art-line wide" /><span className="art-line" /><span className="resume-section">STRUCTURED ANALYSIS</span><div className="mini-tags"><i /><i /><i /></div></div>
      <div className="score-card"><div className="score-ring"><span>AI</span></div><b>Resume analysis</b><span>Structured overview</span><div className="score-row"><FileText size={13} /> Document processed <ArrowUpRight size={12} /></div></div>
    </div>
  </div>
}
