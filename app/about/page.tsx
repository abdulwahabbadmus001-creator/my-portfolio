import type { Metadata } from "next";
import {
  education,
  experience,
  learning,
  training,
  skills,
  social,
} from "@/data/content";
import { SectionTitle } from "@/components/Site";
export const metadata: Metadata = { title: "About" };
export default function About() {
  return (
    <div className="container-page py-20">
      <SectionTitle
        index="About"
        title="Wahab Opeyemi Badmus"
        description="Research, software, AI governance and public-interest technology."
      />
      <div className="grid lg:grid-cols-[1fr_1fr] gap-14">
        <section>
          <h2 className="eyebrow mb-7">Experience</h2>
          {experience.map((e) => (
            <div key={e.place} className="border-l border-[#46605d] pl-5 pb-9">
              <p className="eyebrow">{e.period}</p>
              <h3 className="text-lg mt-2">{e.role}</h3>
              <p className="mt-1">{e.place}</p>
              <p className="muted mt-3 text-sm leading-7">{e.detail}</p>
            </div>
          ))}
        </section>
        <section>
          <h2 className="eyebrow mb-7">Education</h2>
          <h3 className="text-xl">{education.degree}</h3>
          <p className="muted mt-3">{education.school}</p>
          <p className="muted mt-2">
            {education.year} · {education.result}
          </p>
          <p className="muted mt-5 leading-7">{education.methods}</p>
          <h2 className="eyebrow mt-14 mb-7">Programmes & fellowships</h2>
          {training.map((t) => (
            <div key={t.name} className="mb-6">
              <h3>{t.name}</h3>
              <p className="muted text-sm mt-1">{t.date}</p>
            </div>
          ))}
        </section>
      </div>
      <section className="section">
        <SectionTitle index="Study" title="Learning Now" />
        {learning.map((l) => (
          <div
            key={l.name}
            className="flex flex-wrap justify-between gap-3 py-5 border-b border-[#2c393d]"
          >
            <div>
              <h3>{l.name}</h3>
              <p className="muted text-sm mt-1">{l.provider}</p>
            </div>
            <p className="eyebrow">{l.status}</p>
          </div>
        ))}
      </section>
      <section className="section">
        <SectionTitle index="Practice" title="Tools I work with" />
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((s) => (
            <div key={s.name}>
              <h3 className="eyebrow mb-4">{s.name}</h3>
              <p className="muted leading-8">{s.items}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="section">
        <SectionTitle index="Contact" title="Find me elsewhere" />
        <div className="flex flex-wrap gap-7">
          {social.map((s) => (
            <a
              className="text-link"
              key={s.name}
              href={s.url}
              target={s.url.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
            >
              {s.name} ↗
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
