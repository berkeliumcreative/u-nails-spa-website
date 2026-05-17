// @ts-nocheck
"use client";

import { Italiana, Inter } from "next/font/google";
import content from "../data/content.json";

const display = Italiana({ subsets: ["latin"], weight: ["400"] });
const body = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600"] });

// Soft spa palette
const BLUSH = "#D4A5A5";
const BLUSH_DEEP = "#B0807F";
const SAGE = "#8B9B7A";
const SAGE_DEEP = "#5C6B4D";
const CREAM = "#FBF7F3";
const WARM = "#F2E8DE";
const TEXT = "#3C2E2A";
const MUTED = "#8C7770";

export default function Page() {
  const phoneTel = "tel:" + content.contact.phone.replace(/[^0-9]/g, "");
  const mapUrl = "https://maps.google.com/maps?output=embed&q=" + encodeURIComponent(content.contact.mapEmbedQuery);

  return (
    <main className={body.className} style={{ backgroundColor: CREAM, color: TEXT }}>
      <style jsx global>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        .fade-up { animation: fadeUp 1.2s cubic-bezier(.2,.7,.2,1) forwards; }
        .fade-in { animation: fadeIn 1.5s ease-out forwards; }
        .float { animation: float 6s ease-in-out infinite; }
        .d1 { animation-delay: .15s; opacity: 0; }
        .d2 { animation-delay: .35s; opacity: 0; }
        .d3 { animation-delay: .55s; opacity: 0; }
      `}</style>

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: "rgba(251,247,243,0.92)", backdropFilter: "blur(16px)", borderBottom: `1px solid ${BLUSH}22` }}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#top" className={display.className} style={{ fontSize: "1.6rem", color: TEXT, letterSpacing: "0.15em" }}>
            U · NAILS
          </a>
          <div className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.25em]" style={{ color: TEXT }}>
            <a href="#services" className="hover:opacity-60 transition">Services</a>
            <a href="#story" className="hover:opacity-60 transition">Our studio</a>
            <a href="#visit" className="hover:opacity-60 transition">Visit</a>
          </div>
          <a href={phoneTel} className="px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.2em] transition-colors hover:opacity-90" style={{ backgroundColor: SAGE_DEEP, color: CREAM }}>
            Book now
          </a>
        </div>
      </nav>

      {/* HERO — centered editorial */}
      <section id="top" className="relative min-h-[100vh] flex flex-col items-center justify-center px-6 pt-24 overflow-hidden">
        {/* Soft floating circles */}
        <div className="absolute top-32 left-1/4 w-40 h-40 rounded-full float" style={{ backgroundColor: BLUSH, opacity: 0.15 }} />
        <div className="absolute bottom-40 right-1/4 w-56 h-56 rounded-full float" style={{ backgroundColor: SAGE, opacity: 0.12, animationDelay: "2s" }} />

        <div className="relative z-10 text-center max-w-4xl">
          <p className="fade-in d1 text-xs uppercase tracking-[0.5em] mb-8" style={{ color: BLUSH_DEEP }}>
            Laguna Hills · since 2017
          </p>
          <h1 className={display.className + " fade-up d1"} style={{ fontSize: "clamp(3rem, 9vw, 7.5rem)", color: TEXT, lineHeight: 1.02, letterSpacing: "-0.005em" }}>
            Quiet hands.<br />
            <span style={{ color: BLUSH_DEEP, fontStyle: "italic" }}>Calm hours.</span>
          </h1>
          <p className="fade-up d2 mt-10 text-lg leading-loose max-w-xl mx-auto" style={{ color: MUTED }}>
            {content.hero.subheading}
          </p>
          <div className="fade-up d3 mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <a href={phoneTel} className="px-9 py-4 rounded-full text-sm tracking-[0.15em] uppercase transition-transform hover:scale-105" style={{ backgroundColor: BLUSH_DEEP, color: CREAM }}>
              Call to book
            </a>
            <a href="#services" className="px-9 py-4 rounded-full text-sm tracking-[0.15em] uppercase border transition-colors hover:bg-rose-100/20" style={{ borderColor: BLUSH_DEEP, color: BLUSH_DEEP }}>
              View services
            </a>
          </div>
        </div>
        {/* Hero photo at bottom */}
        <div className="relative z-10 w-full max-w-5xl mt-20 fade-up d3">
          <div className="aspect-[16/7] rounded-t-[100px] bg-cover bg-center" style={{ backgroundImage: `url("${content.hero.image}")` }} />
        </div>
      </section>

      {/* STORY */}
      <section id="story" className="px-6 py-24 md:py-32" style={{ backgroundColor: WARM }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.5em] mb-6" style={{ color: SAGE_DEEP }}>Our studio</p>
          <h2 className={display.className} style={{ fontSize: "clamp(2.25rem, 5vw, 3.5rem)", color: TEXT, lineHeight: 1.05, letterSpacing: "-0.005em" }}>
            {content.about.heading}
          </h2>
          <div className="mt-10 space-y-6 text-lg leading-loose" style={{ color: MUTED }}>
            {content.about.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>
      </section>

      {/* SERVICES — soft cards */}
      <section id="services" className="px-6 py-24 md:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.5em] mb-4" style={{ color: BLUSH_DEEP }}>Services & pricing</p>
            <h2 className={display.className} style={{ fontSize: "clamp(2.25rem, 5vw, 3.5rem)", color: TEXT, lineHeight: 1.05 }}>
              For your <span style={{ fontStyle: "italic", color: BLUSH_DEEP }}>hands and feet.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {content.services.map((s, i) => (
              <div key={i} className="pb-7" style={{ borderBottom: `1px solid ${BLUSH}33` }}>
                <div className="flex items-baseline justify-between gap-6 mb-2">
                  <h3 className={display.className} style={{ fontSize: "1.6rem", color: TEXT }}>{s.title}</h3>
                  {s.price && <span className={display.className + " whitespace-nowrap"} style={{ fontSize: "1.4rem", color: BLUSH_DEEP }}>{s.price}</span>}
                </div>
                <p className="text-sm leading-relaxed" style={{ color: MUTED }}>{s.description}</p>
              </div>
            ))}
          </div>
          <p className="mt-12 text-center text-xs uppercase tracking-[0.3em]" style={{ color: MUTED }}>
            Add-ons available · French tip $5 · Removal $10 · Hot stone +$10
          </p>
        </div>
      </section>

      {/* GALLERY */}
      {content.gallery && (
        <section className="px-6 py-24" style={{ backgroundColor: WARM }}>
          <div className="max-w-6xl mx-auto">
            <p className="text-xs uppercase tracking-[0.5em] mb-3 text-center" style={{ color: SAGE_DEEP }}>The studio</p>
            <h2 className={display.className + " text-center mb-14"} style={{ fontSize: "clamp(1.8rem, 4vw, 2.75rem)", color: TEXT }}>
              A look <span style={{ fontStyle: "italic", color: BLUSH_DEEP }}>inside</span>
            </h2>
            <div className="grid grid-cols-3 gap-3 md:gap-6">
              {content.gallery.map((src, i) => (
                <div key={i} className={`${i === 1 ? "aspect-[3/4]" : "aspect-[3/4] mt-12"} rounded-[80px_80px_8px_8px] bg-cover bg-center transition-transform hover:scale-[1.02]`} style={{ backgroundImage: `url("${src}")` }} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* REVIEWS */}
      <section className="px-6 py-24 md:py-32">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs uppercase tracking-[0.5em] mb-4" style={{ color: BLUSH_DEEP }}>Kind words</p>
            <h2 className={display.className} style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)", color: TEXT }}>
              From <span style={{ fontStyle: "italic", color: BLUSH_DEEP }}>our regulars</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {content.reviews.slice(0, 3).map((r, i) => (
              <div key={i} className="p-8 rounded-3xl" style={{ backgroundColor: WARM, border: `1px solid ${BLUSH}22` }}>
                <div className="flex gap-1 mb-4" style={{ color: BLUSH_DEEP }}>
                  {Array.from({ length: r.rating || 5 }).map((_, j) => <span key={j}>★</span>)}
                </div>
                <p className={display.className} style={{ fontSize: "1.1rem", color: TEXT, lineHeight: 1.5, fontStyle: "italic" }}>"{r.text}"</p>
                <p className="mt-5 text-xs uppercase tracking-[0.3em]" style={{ color: SAGE_DEEP }}>— {r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISIT */}
      <section id="visit" className="px-6 py-24 md:py-32" style={{ backgroundColor: BLUSH }}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.5em] mb-4" style={{ color: CREAM, opacity: 0.85 }}>Find us</p>
            <h2 className={display.className} style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: CREAM, lineHeight: 1, letterSpacing: "-0.005em" }}>
              Visit <span style={{ fontStyle: "italic", color: SAGE_DEEP }}>U Nails.</span>
            </h2>
            <p className="mt-6 text-base" style={{ color: CREAM, opacity: 0.9 }}>{content.contact.address}</p>
            <a href={phoneTel} className={display.className + " block mt-3"} style={{ fontSize: "1.85rem", color: CREAM }}>
              {content.contact.phone}
            </a>
            <table className="mt-10 w-full">
              <tbody>
                {Object.entries(content.contact.hours).map(([day, time]) => (
                  <tr key={day} style={{ borderBottom: `1px solid ${CREAM}30` }}>
                    <td className={display.className + " py-3 text-base"} style={{ color: CREAM }}>{day}</td>
                    <td className="py-3 text-right text-sm" style={{ color: String(time).toLowerCase() === "closed" ? SAGE_DEEP : CREAM, opacity: String(time).toLowerCase() === "closed" ? 1 : 0.9, fontWeight: 500 }}>{String(time)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <a href={phoneTel} className="inline-block mt-10 px-9 py-4 rounded-full text-sm uppercase tracking-[0.2em] transition-transform hover:scale-105" style={{ backgroundColor: SAGE_DEEP, color: CREAM }}>
              Book your visit
            </a>
          </div>
          <div className="rounded-[40px] overflow-hidden h-[520px]">
            <iframe title="U Nails location" width="100%" height="100%" loading="lazy" style={{ border: 0 }} referrerPolicy="no-referrer-when-downgrade" src={mapUrl} />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: CREAM, borderTop: `1px solid ${BLUSH}22` }}>
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between text-sm" style={{ color: MUTED }}>
          <div>
            <p className={display.className} style={{ fontSize: "1.6rem", color: TEXT, letterSpacing: "0.15em" }}>U · NAILS &amp; SPA</p>
            <p className="mt-2 text-xs uppercase tracking-[0.3em]">A studio in Laguna Hills · since 2017</p>
          </div>
          <div className="flex flex-wrap gap-5 text-xs uppercase tracking-[0.3em]">
            {content.social && Object.entries(content.social).map(([k, v]) => (
              <a key={k} href={String(v)} target="_blank" rel="noreferrer" className="capitalize hover:text-rose-700 transition" style={{ color: BLUSH_DEEP }}>{k}</a>
            ))}
          </div>
        </div>
        <div className="py-4 text-center text-xs uppercase tracking-[0.3em]" style={{ borderTop: `1px solid ${BLUSH}22`, color: MUTED }}>
          © {new Date().getFullYear()} U Nails & Spa
        </div>
      </footer>
    </main>
  );
}