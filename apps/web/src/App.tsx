import { Activity, BriefcaseBusiness, FileText, Gauge, Layers3, Search, ShieldCheck, Sparkles } from "lucide-react";

const modules = [
  { icon: FileText, title: "Resume workspace", description: "Build, import, edit, version, and export targeted resumes.", state: "Foundation planned" },
  { icon: Gauge, title: "ATS analysis", description: "Explainable checks for structure, keywords, readability, and formatting.", state: "Planned" },
  { icon: Search, title: "Job intelligence", description: "Discover, normalize, deduplicate, and compare job opportunities.", state: "Planned" },
  { icon: Sparkles, title: "AI tailoring", description: "Evidence-backed rewrite proposals with review before saving.", state: "Planned" },
  { icon: BriefcaseBusiness, title: "Application tracker", description: "Track saved roles, stages, notes, and follow-up dates.", state: "Planned" },
  { icon: Layers3, title: "Career tools", description: "Cover letters, interview preparation, and profile evidence.", state: "Planned" },
];

export default function App() {
  return (
    <main className="shell">
      <header className="topbar">
        <a className="brand" href="#"><span className="brand-mark">RI</span><span>Resume Intelligence</span></a>
        <span className="status"><i /> Foundation build</span>
      </header>
      <section className="hero">
        <p className="eyebrow">YOUR CAREER WORKSPACE</p>
        <h1>Build a stronger resume.<br /><em>Make every move count.</em></h1>
        <p className="hero-copy">One trusted career profile, tailored resumes, transparent ATS insights, and a smarter job-search workflow.</p>
        <div className="hero-actions"><button disabled>Resume workspace <span>Coming next</span></button><div className="privacy"><ShieldCheck size={16} /> Your data. Your approval. Your control.</div></div>
      </section>
      <section className="section-head"><div><p className="eyebrow">PLATFORM MODULES</p><h2>Everything in one workspace</h2></div><span className="module-count">06 MODULES</span></section>
      <section className="module-grid">
        {modules.map(({ icon: Icon, title, description, state }) => <article className="module-card" key={title}><div className="module-icon"><Icon size={20} /></div><div className="module-state">{state}</div><h3>{title}</h3><p>{description}</p></article>)}
      </section>
      <footer><span><Activity size={15} /> Independent open-source build</span><span>Free-first · Human-approved · Evidence-based</span></footer>
    </main>
  );
}
