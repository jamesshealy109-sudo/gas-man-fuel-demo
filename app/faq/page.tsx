import { faqs } from "@/src/lib/demo-data";import { PageHero,PublicPage } from "../components/SiteChrome";
export default function Faq(){return <PublicPage><PageHero eyebrow="HELP CENTER" title="Fuel delivery, minus the guesswork." intro="Straight answers about delivery, safety, fuel types, billing, and memberships."/><section className="faq-page">{faqs.map(([q,a],i)=><details key={q} open={i===0}><summary><span>0{i+1}</span>{q}<b>+</b></summary><p>{a}</p></details>)}</section></PublicPage>}

