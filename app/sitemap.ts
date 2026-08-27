import type { MetadataRoute } from "next";
export default function sitemap():MetadataRoute.Sitemap{const base="https://thegasmanfuel.com";return ["","/services","/membership","/about","/service-area","/faq","/contact"].map(path=>({url:`${base}${path}`,lastModified:new Date(),changeFrequency:"monthly",priority:path===""?1:.7}))}

