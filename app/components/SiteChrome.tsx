import { business } from "@/src/config/business";
/* eslint-disable @next/next/no-html-link-for-pages */

const links = [["Services", "/services"], ["Membership", "/membership"], ["Service area", "/service-area"], ["About", "/about"], ["FAQ", "/faq"]];

export function SiteHeader() {
  return <>
    <div className="utility"><span>Serving {business.serviceAreas.join(", ")}</span><a href={`tel:${business.phoneHref}`}>Call {business.phone}</a></div>
    <header className="site-header">
      <a className="brand" href="/" aria-label="The Gas Man home"><span className="brand-mark">GM</span><span><strong>THE GAS MAN</strong><small>MOBILE FUEL DELIVERY</small></span></a>
      <nav aria-label="Main navigation">{links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav>
      <a className="header-cta" href="/join">Become a member</a>
    </header>
  </>;
}

export function SiteFooter() {
  return <footer className="site-footer"><div><a className="brand footer-brand" href="/"><span className="brand-mark">GM</span><span><strong>THE GAS MAN</strong><small>STAY FUELED. STAY MOVING.</small></span></a><p>{business.description}</p></div><div><strong>Explore</strong><a href="/services">Services</a><a href="/membership">Membership</a><a href="/service-request">Request service</a><a href="/demo">Sales demo</a></div><div><strong>Contact</strong><a href={`tel:${business.phoneHref}`}>{business.phone}</a><a href={`mailto:${business.email}`}>{business.email}</a><span>{business.city}, {business.state}</span></div><div><strong>Service hours</strong>{business.hours.map(h => <span key={h.days}>{h.days}: {h.hours}</span>)}</div><small>© 2026 The Gas Man. Demo website — no real customer data.</small></footer>;
}

export function PublicPage({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return <main className={dark ? "dark-page" : ""}><SiteHeader />{children}<SiteFooter /></main>;
}

export function PageHero({ eyebrow, title, intro, actions }: { eyebrow: string; title: string; intro: string; actions?: React.ReactNode }) {
  return <section className="page-hero"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{intro}</p>{actions && <div className="hero-actions">{actions}</div>}</section>;
}
