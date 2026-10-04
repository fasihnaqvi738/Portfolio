import { useEffect, useRef, useState, type ReactNode } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, Braces, Check, Code2, Moon, Network, Mail, Menu, Sun, X } from 'lucide-react'
import { education, navigation, profile, projects, skillGroups, type Project } from './data/site'
import { certifications } from './data/certifications'
import { ProjectArtwork } from './components/ProjectArtwork'
import './App.css'

const rise = { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } }

function SectionHeading({ index, eyebrow, title, aside }: { index: string; eyebrow: string; title: ReactNode; aside?: string }) {
  return <div className="section-heading"><div><span className="eyebrow"><span>{index}</span> / {eyebrow}</span><h2>{title}</h2></div>{aside && <p>{aside}</p>}</div>
}

function ProjectCard({ project, onOpen }: { project: Project; onOpen: (project: Project) => void }) {
  return <motion.article className={`project-card project-${project.visual}`} variants={rise}>
    <button className="project-open" onClick={() => onOpen(project)} aria-label={`View details for ${project.title}`}>
      <div className="project-visual"><ProjectArtwork kind={project.visual} /><span className="visual-number">{project.number}</span></div>
      <div className="project-copy"><div className="project-meta"><span>{project.category}</span><span>{project.number}</span></div><h3>{project.title}<ArrowUpRight size={18} /></h3><p>{project.shortDescription}</p><div className="project-tags">{project.technologies.slice(0, 4).map((tag) => <span key={tag}>{tag}</span>)}{project.technologies.length > 4 && <span>+{project.technologies.length - 4}</span>}</div></div>
    </button>
  </motion.article>
}

function ProjectDialog({ project, onClose }: { project: Project; onClose: () => void }) {
  const reduceMotion = useReducedMotion()
  const dialogRef = useRef<HTMLElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'Tab') {
        const focusable = dialogRef.current?.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')
        if (!focusable?.length) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus() }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus() }
      }
    }
    window.addEventListener('keydown', onKeyDown)
    document.body.classList.add('dialog-open')
    closeRef.current?.focus()
    return () => { window.removeEventListener('keydown', onKeyDown); document.body.classList.remove('dialog-open') }
  }, [onClose])
  return <motion.div className="dialog-scrim" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
    <motion.section ref={dialogRef} className="project-dialog" role="dialog" aria-modal="true" aria-labelledby="dialog-title" initial={{ opacity: 0, y: reduceMotion ? 0 : 18, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 10, scale: 0.99 }}>
      <button ref={closeRef} className="dialog-close icon-button" onClick={onClose} aria-label="Close project details"><X size={19} /></button><div className="dialog-art"><ProjectArtwork kind={project.visual} /></div><div className="dialog-content"><span className="eyebrow">PROJECT {project.number} / {project.category}</span><h2 id="dialog-title">{project.title}</h2><p>{project.fullDescription}</p><h3>What it includes</h3><ul className="highlight-list">{project.highlights.map((item) => <li key={item}><Check size={15} />{item}</li>)}</ul><h3>Built with</h3><div className="project-tags dialog-tags">{project.technologies.map((tag) => <span key={tag}>{tag}</span>)}</div><div className="dialog-actions">{project.githubUrl ? <a className="button button-primary" href={project.githubUrl} target="_blank" rel="noreferrer"><Code2 size={17} /> View repository <ArrowUpRight size={15} /></a> : <span className="repo-note">Repository link can be added in <code>src/data/site.ts</code>.</span>}{project.liveUrl && <a className="button button-secondary" href={project.liveUrl} target="_blank" rel="noreferrer">Live project <ArrowUpRight size={15} /></a>}</div></div>
    </motion.section>
  </motion.div>
}

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => document.documentElement.dataset.theme === 'light' ? 'light' : 'dark')
  const [active, setActive] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const syncSystemTheme = (event: MediaQueryListEvent) => {
      let savedTheme: string | null = null
      try {
        savedTheme = localStorage.getItem('fasih-portfolio-theme')
      } catch { /* Treat unavailable storage as no saved preference. */ }
      if (savedTheme === 'light' || savedTheme === 'dark') return
      const nextTheme = event.matches ? 'dark' : 'light'
      document.documentElement.dataset.theme = nextTheme
      setTheme(nextTheme)
    }
    media.addEventListener('change', syncSystemTheme)
    return () => media.removeEventListener('change', syncSystemTheme)
  }, [])

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = nextTheme
    setTheme(nextTheme)
    try { localStorage.setItem('fasih-portfolio-theme', nextTheme) } catch { /* Keep the selected theme for this page session. */ }
  }

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) setActive(entry.target.id) })
    }, { rootMargin: '-35% 0px -55% 0px' })
    document.querySelectorAll<HTMLElement>('main section[id]').forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id: string) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: reduceMotion ? 'instant' : 'smooth' })
  }
  const socialLinks = [
    ...(profile.linkedin ? [{ label: 'LinkedIn', href: profile.linkedin, icon: Network }] : []),
    ...(profile.email ? [{ label: 'Email', href: `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}&su=Portfolio%20inquiry`, icon: Mail }] : []),
  ]

  return <>
    <a className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-[#d3ee63] focus:px-4 focus:py-3 focus:text-sm" href="#main-content">Skip to content</a>
    <header className="site-header"><a className="wordmark" href="#home" onClick={(e) => { e.preventDefault(); scrollTo('home') }} aria-label={`${profile.name}, home`}><span className="wordmark-mark brand-monogram" aria-hidden="true"><span>FN</span><i /></span><span>{profile.name}<small>SOFTWARE · AI</small></span></a>
      <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">{navigation.map(([label, id]) => <a key={id} className={active === id ? 'active' : ''} href={`#${id}`} onClick={(e) => { e.preventDefault(); scrollTo(id) }}>{label}</a>)}</nav>
      <div className="theme-control"><span className="theme-label">Theme</span><button className="theme-toggle icon-button" type="button" onClick={toggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`} aria-pressed={theme === 'dark'} title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>{theme === 'dark' ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}</button></div>
      <a className="header-contact" href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact') }}>Let’s talk <ArrowUpRight size={15} /></a>
      <button className="menu-toggle icon-button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
    </header>

    <main id="main-content">
      <section className="hero section-shell" id="home"><div className="hero-main"><motion.div initial="hidden" animate="visible" variants={rise} transition={{ duration: 0.65, ease: 'easeOut' }}>
      <span className="availability"><i /> BUILDING SOFTWARE & AI SYSTEMS</span><span className="hero-intro">Hello, I’m {profile.name}.</span><h1>I build <span>Software</span><br />with <em>Intelligence</em><span className="hero-period">.</span></h1><p className="hero-description">Software Engineer working across thoughtful product engineering and practical AI systems—from backend foundations to LLM-powered experiences.</p>
        <div className="hero-actions"><button className="button button-primary" onClick={() => scrollTo('projects')}>Explore my work <ArrowDownRight size={16} /></button><a className="button button-quiet" href={profile.github} target="_blank" rel="noreferrer"><Code2 size={16} /> GitHub <ArrowUpRight size={14} /></a><a className="button button-quiet" href={profile.leetcode} target="_blank" rel="noreferrer"><Braces size={16} /> LeetCode <ArrowUpRight size={14} /></a></div>
      </motion.div>
      <motion.div className="hero-side-note" initial={{ opacity: 0, x: 14 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.65 }}><p>From a useful first interface to the systems behind it, I like understanding how the whole thing works.</p><span className="note-place">{profile.location}</span></motion.div></div>
        <motion.div className="hero-visual" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16, duration: 0.8 }}>
          <div className="visual-topline"><span>WORKING PRINCIPLES</span></div><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="hero-core"><div className="core-glyph">f<span>.</span></div><span>BUILD / LEARN / REFINE</span></div><div className="orbit-node node-ai"><span className="node-symbol">✳</span><b>Applied AI</b><small>RAG · LLMs · NLP</small></div><div className="orbit-node node-systems"><span className="node-symbol">⌘</span><b>Systems</b><small>APIs · data · backend</small></div><div className="orbit-node node-product"><span className="node-symbol">↗</span><b>Product thinking</b><small>Useful, usable software</small></div><div className="visual-caption"><span>Curiosity, made tangible.</span><span>NEW DELHI · IN</span></div>
        </motion.div>
        <div className="hero-bottom"><span><ArrowDown size={15} /> SCROLL TO EXPLORE</span><span>SOFTWARE ENGINEERING <i /> AI / ML <i /> GENAI</span></div>
      </section>

      <section className="about-section section-pad" id="about"><div className="section-shell"><SectionHeading index="01" eyebrow="A little about me" title={<>Built by curiosity.<br /><em>Grounded in practice.</em></>} aside="I’m a Computer Science and Data Science graduate who learns best by building things that work end to end." /><div className="about-content"><div className="about-story"><p>I’m interested in the space where <strong>software engineering meets machine learning</strong>. I’ve built full-stack applications, explored retrieval-augmented generation, and worked through the details that make an AI feature useful: data flow, document processing, APIs, and a clear interface.</p><p>I’m continuing to build my foundations in machine learning and practical AI systems. I’m hands-on by nature, and always looking for the next system to understand.</p></div><div className="about-facts"><div><span>01 / FOCUS</span><b>AI &amp;<br />Software Systems</b></div><div><span>02 / BASED IN</span><b>{profile.location}</b></div><div><span>03 / CURRENTLY</span><b>Building stronger<br />AI foundations</b></div></div></div></div></section>

      <section className="projects-section section-pad" id="projects"><div className="section-shell"><SectionHeading index="02" eyebrow="Selected projects" title={<>Things I’ve<br /><em>put into the world.</em></>} aside="A selection of practical projects across product engineering, document intelligence, and generative AI. Open a project to see how it fits together." /><motion.div className="projects-grid" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.12 }} variants={{ visible: { transition: { staggerChildren: 0.12 } } }}>{projects.map((project) => <ProjectCard project={project} key={project.number} onOpen={setSelectedProject} />)}</motion.div><p className="project-footnote">Project details are kept in one place, so the collection can grow as the work does. <ArrowRight size={15} /></p></div></section>

      <section className="skills-section section-shell section-pad" id="skills"><SectionHeading index="03" eyebrow="Tools & interests" title={<>A practical<br /><em>set of building blocks.</em></>} aside="A growing toolkit, organized around the kinds of problems I enjoy working on." /><div className="skills-layout"><div className="skills-intro"><span className="skills-aside-mark">✳</span><p>I care about how the pieces connect: from a data model and API to the interface and the intelligence behind it.</p><span className="skills-caption">THE TOOLKIT IS ALWAYS EVOLVING</span></div><div className="skill-groups">{skillGroups.map((group, i) => <div className="skill-group" key={group.title}><div className="skill-group-heading"><span>0{i + 1}</span><div><h3>{group.title}</h3><small>{group.note}</small></div></div><div className="skill-chips">{group.skills.map((skill) => <span className={group.title === 'Currently Developing' ? 'learning-chip' : ''} key={skill}>{skill}</span>)}</div></div>)}</div></div></section>

      <section className="education-section section-pad" id="education"><div className="section-shell"><SectionHeading index="04" eyebrow="Education" title={<>Foundations for<br /><em>what comes next.</em></>} aside="Formal study gave me a base in Computer Science and Data Science; building keeps filling in the edges." /><div className="education-layout"><div className="education-list">{education.map((item) => <article className="education-item" key={item.school}><span className="education-index">{item.index}</span><div className="education-body"><div className="education-title"><img src={item.logo} alt={`${item.school} logo`} loading="lazy" /><h3>{item.school}</h3></div><p>{item.degree}</p>{item.minors && <p className="education-minors">Minors: {item.minors}</p>}<span>{item.detail}</span></div></article>)}</div></div></div></section>

      <section className="certifications-section section-pad" id="certifications"><div className="section-shell"><SectionHeading index="05" eyebrow="Certifications" title={<>Coursework &amp; Credentials<br /><em>earned along the way.</em></>} aside="Verified course certificates, skills assessments, and academic minors." /><motion.div className="certifications-grid" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.12 }} variants={{ visible: { transition: { staggerChildren: 0.07 } } }}>{certifications.map((certification, index) => <motion.a className={`credential-card credential-${certification.kind}`} href={certification.url} target="_blank" rel="noreferrer" key={certification.url} variants={rise}><div className="credential-topline"><span>{certification.kindLabel}</span><span>{String(index + 1).padStart(2, '0')}</span></div><div><h3>{certification.title}</h3><p>{certification.issuer}</p></div><span className="credential-link">View credential <ArrowUpRight size={14} /></span></motion.a>)}</motion.div></div></section>

      <section className="contact-section section-shell" id="contact"><div className="contact-panel"><div className="contact-topline"><span>06 / CONTACT</span><span>NEW DELHI, INDIA</span></div><div className="contact-main"><div><span className="eyebrow">Have something interesting in mind?</span><h2>Let’s make<br /><em>something useful.</em></h2></div><p>I’m interested in thoughtful teams, real engineering problems, and good conversations about software and AI.</p></div><div className="contact-bottom"><div className="contact-links">{socialLinks.map(({ label, href, icon: Icon }) => <a href={href} key={label} target="_blank" rel="noreferrer"><Icon size={16} /> {label} <ArrowUpRight size={13} /></a>)}</div></div></div><footer><a href="#home" onClick={(e) => { e.preventDefault(); scrollTo('home') }}><span className="brand-monogram brand-monogram-footer" aria-hidden="true"><span>FN</span><i /></span>{profile.name}</a><span>© 2026 Syed Mohd Fasih Naqvi · All rights reserved</span><a href="#home" onClick={(e) => { e.preventDefault(); scrollTo('home') }}>BACK TO TOP <ArrowUpRight size={13} /></a></footer></section>
    </main>
    <AnimatePresence>{selectedProject && <ProjectDialog project={selectedProject} onClose={() => setSelectedProject(null)} />}</AnimatePresence>
  </>
}

export default App
