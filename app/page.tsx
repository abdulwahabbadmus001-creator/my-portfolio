import Image from "next/image";
import Link from "next/link";

import { projects, publications, experience, learning } from "@/data/content";

import { SectionTitle } from "@/components/Site";
import { ProjectGrid } from "@/components/Projects";

export default function Home() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <>
      {/* HERO */}
      <section className="container-page py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.25fr_.75fr]">
          <div>
            <p className="eyebrow mb-8">
              Wahab Opeyemi Badmus / Research & Software
            </p>

            <h1 className="max-w-3xl text-[clamp(3.1rem,7vw,6.5rem)] leading-[1.07] tracking-[-.07em]">
              I Build.
              <br />
              I Research.
              <br />I Prompt.
            </h1>

            <p className="mt-8 text-2xl tracking-tight sm:text-3xl">
              Welcome to my world.
            </p>

            <p className="muted mt-8 max-w-lg leading-7">
              Research · Software · AI Governance · Public-Interest Technology
            </p>

            <div className="mt-10 flex flex-wrap gap-6 text-sm">
              <Link href="/work" className="text-link">
                Explore work ↗
              </Link>

              <Link href="/research" className="text-link">
                Read research ↗
              </Link>

              <Link href="/about" className="text-link">
                About me ↗
              </Link>
            </div>
          </div>

          {/* LOCAL PORTRAIT */}
          <figure className="relative aspect-[4/5] overflow-hidden border border-[#2c393d] bg-surface">
            <Image
              src="/images/wahab-cover.webp"
              alt="Portrait of Wahab Opeyemi Badmus"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 35vw"
              className="object-cover grayscale-[25%]"
            />

            <figcaption className="absolute inset-x-0 bottom-0 bg-base/80 p-4 font-mono text-xs">
              WAHAB O. BADMUS / 2026
            </figcaption>
          </figure>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section className="section">
        <div className="container-page">
          <SectionTitle
            index="01"
            title="Selected Work"
            description="Independent products and technical projects developed around practical problems."
          />

          <ProjectGrid items={featuredProjects} />

          <Link href="/work" className="text-link mt-8 inline-block">
            View full project archive →
          </Link>
        </div>
      </section>

      {/* RESEARCH */}
      <section className="section">
        <div className="container-page">
          <SectionTitle
            index="02"
            title="Research & Writing"
            description="AI governance, institutional capacity, African technology and public policy."
          />

          <div className="divide-y divide-[#2c393d] border-t border-[#2c393d]">
            {publications.map((publication) => (
              <a
                key={publication.title}
                href={publication.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-4 py-7 sm:flex-row sm:justify-between"
              >
                <div>
                  <p className="eyebrow mb-3">
                    {publication.type} / {publication.year}
                  </p>

                  <h3 className="text-xl group-hover:text-accent">
                    {publication.title} ↗
                  </h3>

                  <p className="muted mt-2">{publication.subtitle}</p>
                </div>
              </a>
            ))}
          </div>

          <Link href="/research" className="text-link mt-8 inline-block">
            Research focus →
          </Link>
        </div>
      </section>

      {/* EXPERIENCE & LEARNING */}
      <section className="section">
        <div className="container-page grid gap-14 md:grid-cols-2">
          <div>
            <SectionTitle index="03" title="Current Roles" />

            {experience.map((item) => (
              <div
                key={item.place}
                className="mb-7 border-l border-[#46605d] pl-5"
              >
                <p className="eyebrow">{item.period}</p>

                <h3 className="mt-2">{item.role}</h3>

                <p className="muted mt-1">{item.place}</p>
              </div>
            ))}
          </div>

          <div>
            <SectionTitle index="04" title="Learning Now" />

            {learning.map((item) => (
              <div key={item.name} className="mb-7">
                <p className="eyebrow">{item.status}</p>

                <h3 className="mt-2 text-lg">{item.name}</h3>

                <p className="muted">{item.provider}</p>
              </div>
            ))}

            <Link href="/about" className="text-link">
              Education & background →
            </Link>
          </div>
        </div>
      </section>

      {/* PRODUCT PHILOSOPHY */}
      <section className="section">
        <div className="container-page max-w-3xl">
          <p className="eyebrow mb-6">A note on the work</p>

          <p className="text-2xl leading-snug tracking-tight sm:text-3xl">
            I use software projects to investigate problems I encounter:
            record-keeping, unreliable connectivity, language access, cultural
            memory and the infrastructure needed to share knowledge.
          </p>

          <p className="muted mt-7">
            Some become deployed applications. Others remain prototypes,
            research questions or unfinished experiments.
          </p>
        </div>
      </section>
    </>
  );
}
