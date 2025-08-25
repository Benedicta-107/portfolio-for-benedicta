import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa"
import headshot from "../assets/profile.webp"

export default function Hero() {
  return (
    <header className="relative overflow-hidden">
      <div className="container-limit py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Benedicta Ibeawuchi
          </h1>
          <p className="mt-3 text-brand font-semibold">
            Full‑Stack Developer
          </p>
          <p className="mt-6 text-slate-300 max-w-xl">
            Motivated and adaptable Full‑Stack Developer with a track record of
            building and deploying web applications with authentication and API
            integrations. Skilled with JavaScript, React, Python, Node.js and PostgreSQL.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a className="btn-primary" href="#projects">View Projects</a>
            <a className="btn-ghost" href="/resume.pdf" target="_blank" rel="noreferrer">Download CV</a>
          </div>

          <div className="mt-8 flex items-center gap-4 text-2xl">
            <a aria-label="GitHub" href="https://github.com/Benedicta-107" target="_blank" rel="noreferrer"><FaGithub/></a>
            <a aria-label="LinkedIn" href="https://www.linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin/></a>
            <a aria-label="Email" href="mailto:benedictaoibeawuchi@gmail.com"><FaEnvelope/></a>
            <a aria-label="WhatsApp" href="https://wa.me/4474542538797" target="_blank" rel="noreferrer"><FaWhatsapp/></a>
          </div>
        </div>

        <div className="justify-self-center">
          <div className="size-48 md:size-64 rounded-full ring-4 ring-brand/60 overflow-hidden">
            <img src={headshot} alt="Benedicta Ibeawuchi" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </header>
  )
}
