import { Photo, Photos } from "@/components/Photo";
import Reveal from "@/components/Reveal";
import { about, competing, footer, hero, now, work } from "@/content/portfolio";

export default function Page() {
  return (
    <>
      <main className="wrap">
        <section className="section section-hero" aria-labelledby="name">
          <Reveal>
            <h1 id="name" className="h-hero">
              {hero.name}
            </h1>
            <p className="quiet mt-3">{hero.location}</p>
          </Reveal>

          <Reveal className="mt-[clamp(2.5rem,8vw,3.5rem)]">
            <p className="max-w-[34ch] text-[clamp(1.2rem,4.6vw,1.45rem)] leading-[1.4] tracking-[-0.018em] text-balance">
              {hero.line}
            </p>
          </Reveal>

          <Reveal className="mt-[clamp(2.75rem,9vw,4rem)]">
            <Photo id={hero.photo} className="hero-portrait" />
          </Reveal>
        </section>

        <hr className="rule" />

        <section className="section" id={about.id} aria-labelledby={`${about.id}-heading`}>
          <Reveal>
            <h2 id={`${about.id}-heading`} className="h-section">
              {about.heading}
            </h2>
          </Reveal>

          <Reveal className="prose mt-[clamp(1.75rem,5vw,2.25rem)]">
            {about.body.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </Reveal>

          <Reveal className="mt-[clamp(2.5rem,7vw,3.25rem)]">
            <Photos ids={about.photos} />
          </Reveal>
        </section>

        <hr className="rule" />

        <section className="section" id={work.id} aria-labelledby={`${work.id}-heading`}>
          <Reveal>
            <h2 id={`${work.id}-heading`} className="h-section">
              {work.heading}
            </h2>
          </Reveal>

          {work.projects.map((project) => (
            <Reveal
              as="article"
              key={project.id}
              id={project.id}
              className="mt-[clamp(3.25rem,10vw,5rem)]"
            >
              <h3 id={`${project.id}-title`}>
                <span className="project-number">{project.number}</span>{" "}
                <span className="h-project mt-[0.45rem] block">{project.title}</span>
              </h3>

              <p className="meta-line mt-[0.6rem]">
                {project.link ? (
                  <>
                    <a href={project.link.href} target="_blank" rel="noopener noreferrer">
                      {project.link.label}
                    </a>
                    {" · "}
                  </>
                ) : null}
                {project.meta}
              </p>

              <div className="prose mt-[clamp(1.5rem,4.5vw,1.9rem)]">
                {project.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                ))}
              </div>

              <dl className="facts mt-[clamp(1.75rem,5vw,2.25rem)] border-t border-rule pt-[1.1rem]">
                {project.facts.map((fact) => (
                  <div key={fact.label} className="mt-[0.35rem] first:mt-0">
                    <dt className="inline">{fact.label}</dt>{" "}
                    <dd className="inline">{fact.value}</dd>
                  </div>
                ))}
              </dl>

              <Photos ids={project.photos} className="mt-[clamp(2rem,6vw,2.75rem)]" />
            </Reveal>
          ))}

          <Reveal as="article" id={work.before.id} className="mt-[clamp(3.25rem,10vw,5rem)]">
            <h3 className="h-item">{work.before.title}</h3>
            <div className="prose mt-[clamp(1.1rem,3.5vw,1.5rem)]">
              {work.before.body.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </section>

        <hr className="rule" />

        <section className="section" id={competing.id} aria-labelledby={`${competing.id}-heading`}>
          <Reveal>
            <h2 id={`${competing.id}-heading`} className="h-section">
              {competing.heading}
            </h2>
          </Reveal>

          {competing.items.map((item) => (
            <Reveal
              as="article"
              key={item.id}
              id={item.id}
              className="mt-[clamp(2.75rem,8vw,4rem)]"
            >
              <h3 className="h-item">
                {item.title}
                {item.qualifier ? (
                  <span className="text-muted"> — {item.qualifier}</span>
                ) : null}
              </h3>

              <div className="prose mt-[clamp(1.1rem,3.5vw,1.5rem)]">
                {item.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                ))}
              </div>

              {item.record ? <p className="quiet mt-[1.5rem]">{item.record}</p> : null}
              {item.note ? <p className="quiet mt-[1.5rem]">{item.note}</p> : null}

              <Photos ids={item.photos} className="mt-[clamp(1.75rem,5vw,2.5rem)]" />
            </Reveal>
          ))}
        </section>

        <hr className="rule" />

        <section className="section" id={now.id} aria-labelledby={`${now.id}-heading`}>
          <Reveal>
            <h2 id={`${now.id}-heading`} className="h-section">
              {now.heading}
            </h2>
          </Reveal>

          <Reveal className="prose mt-[clamp(1.75rem,5vw,2.25rem)]">
            {now.body.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </Reveal>
        </section>
      </main>

      <div className="wrap">
        <hr className="rule" />
      </div>

      <footer className="wrap pt-[clamp(2.75rem,8vw,4rem)] pb-[clamp(4rem,12vw,6rem)]">
        <Reveal>
          <ul className="contacts space-y-[0.5rem]">
            {footer.links.map((link) => (
              <li key={link.href}>
                {link.label}
                <span className="text-muted" aria-hidden="true">
                  {" → "}
                </span>
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.href}
                </a>
              </li>
            ))}
          </ul>

          <p className="contacts mt-[1.75rem]">
            <a href={`mailto:${footer.email}`}>{footer.email}</a>
          </p>

          <p className="quiet mt-[clamp(2.5rem,7vw,3.5rem)]">{footer.signature}</p>
        </Reveal>
      </footer>
    </>
  );
}
