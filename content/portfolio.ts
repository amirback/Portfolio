/**
 * All copy lives here. The page only decides how it looks.
 * Photo slots reference ids from content/photos.ts.
 */

export type ExternalLink = {
  label: string;
  href: string;
};

export type Project = {
  id: string;
  number: string;
  title: string;
  /** The italic line under the title: link, status, years. */
  link: ExternalLink | null;
  meta: string;
  body: string[];
  /** Monospaced block after the prose. */
  facts: { label: string; value: string }[];
  photos: string[];
};

export type CompetingItem = {
  id: string;
  title: string;
  /** The part after the em dash in the heading, set quieter. */
  qualifier: string | null;
  body: string[];
  /** Placings and lists — set smaller and quieter than the prose. */
  record: string | null;
  /** The trailing "Also:" line. */
  note: string | null;
  photos: string[];
};

export const site = {
  title: "Amirkhan Panaguzhiyev — Developer",
  description:
    "No one was going to build it here. That's the whole reason I learned how.",
  url: "https://amirkhan.vercel.app",
};

export const hero = {
  name: "Amirkhan Panaguzhiyev",
  location: "Aksay, West Kazakhstan",
  line: "No one was going to build it here. That's the whole reason I learned how.",
  photo: "portrait",
};

export const about = {
  id: "what-im-from",
  heading: "What I'm from",
  body: [
    "There is no one in Aksay to teach you to write software. There was no one to teach me English either, and no one to teach the dombra except the way it has always been taught here — sitting across from an older man and copying his hands until the shape comes out right. I learned all three in roughly that order. It took me years to notice they were the same method.",
    "Aksay has about thirty thousand people. That number explains most things about it. It explains why our businesses had no websites, why my school kept grades on paper, and why, when the floods came in the spring of 2024 and our region was among the worst hit in the country, the only information anyone had was a single river measurement published once a day for an entire city. Thirty thousand people is too few for anyone to build for. So the problems here don't get solved. They just continue.",
    "What I remember from that spring is not the water. It's watching people decide which roads to take based on what someone's cousin had said an hour ago. The information existed. It was simply at the wrong resolution to be of any use to a person standing in a doorway deciding whether to drive.",
    "I've built five things since I started. Two of them are used every week by people who don't know me — one of those by about 2,400 students across five schools. One I built for no reason except to find out whether a browser could do it. One I built and then handed to my brother, because I could not build it, sell it, and support it while also being in school. And one is the first thing I've made that isn't for my region at all.",
    "The pattern I keep running into is that the code is the easy part. The hard part was standing in a café explaining to a man twice my age why he should give money to a teenager. The hard part was five schools' worth of teachers who had never used anything like this, and the Sunday night when a bug meant a class couldn't submit on Monday morning. I used to think building something was the achievement. It's the entry fee.",
  ],
  photos: ["aksay", "flood-2024"],
};

export const work = {
  id: "work",
  heading: "Work",
  projects: [
    {
      id: "peak",
      number: "01",
      title: "Peak",
      link: { label: "peak-ten-ecru.vercel.app", href: "https://peak-ten-ecru.vercel.app" },
      meta: "built alone, 2024–present",
      body: [
        "My school kept lesson materials in group chats and grades on paper. Things went missing constantly — mine included. I built Peak so that I would stop losing my own assignments.",
        "Teachers put courses in one place: text, video, materials, tests that grade themselves the moment a student submits. Students see their own progress instead of asking. There is XP, there are levels and streaks and badges, because the same mechanics that keep fourteen-year-olds returning to a game work on homework if you point them at it.",
        "It began with five hundred students in one school. It's now in five schools. None of that growth was technical. It was persuading teachers who had never used software like this and staying reachable when it broke — which is how I found out that having users means having obligations. A tab someone can close is a hobby. A class that can't submit on Monday is not.",
      ],
      facts: [
        {
          label: "Stack:",
          value:
            "Next.js, Supabase, TailwindCSS. Real-time progress tracking, automatic grading, teacher–student messaging, teacher analytics.",
        },
        { label: "Now:", value: "2,400 students · 5 schools · 120 courses · 48 teachers" },
      ],
      photos: ["peak-interface", "peak-classroom"],
    },
    {
      id: "tasqyn",
      number: "02",
      title: "Tasqyn",
      link: { label: "tasqyn.vercel.app", href: "https://tasqyn.vercel.app" },
      meta: "built alone, 2025–present",
      body: [
        "After the 2024 floods I wanted to know why nobody had good information, and the answer turned out to be resolution rather than secrecy. One gauge, one reading, one bulletin a day, for a city. Accurate and useless.",
        "Tasqyn is built on the assumption that the people standing in the water are the sensors. You tap what you see — water, a blocked road, someone who needs help, someone who can give it — and you report depth the way a person actually describes it: ankle, knee, waist, over your head. The app converts it. Location fills itself in. If there's no signal, the report waits and sends itself later. Everything in the design serves one number: it has to take less than ten seconds, because nobody fills in a form with water in their yard.",
        "The real problem was never the map. It was why anyone should believe a stranger's report. Two neighbours confirming promotes it; two denying removes it. The alert level is assembled from parts that are all printed on the screen, so you can see where the number came from and disagree with it. And what residents report sits as a layer on top of the official river data rather than replacing it — I was trying to help the emergency service, not argue with it.",
        "I should be honest about where this stands. Tasqyn has not yet been through a flood. It was built for Uralsk, the data sources are national, and the next peak is spring 2027. Whether it works is a question the river will answer, not me.",
      ],
      facts: [
        {
          label: "Stack:",
          value:
            "Next.js, OpenStreetMap, Copernicus GloFAS river discharge, Open-Meteo, offline-first report queue, Russian/Kazakh/English, separate dashboard for emergency services.",
        },
      ],
      photos: ["tasqyn-map", "tasqyn-work"],
    },
    {
      id: "brain",
      number: "03",
      title: "Brain",
      link: { label: "brain-weld.vercel.app", href: "https://brain-weld.vercel.app" },
      meta: "built alone, 2025–present",
      body: [
        "Exam preparation in Kazakhstan is something you buy. The students who need it most are the ones who can't, which I know because I teach some of them. Brain is free, runs in a browser, and works on an old phone, because an old phone is what my students have.",
        "It isn't a pile of materials. A fifteen-minute diagnostic finds where the gaps actually are, and then it asks for one thing a day — one task, not a list of twenty topics that a sixteen-year-old will read once and never open again. After each answer it recalculates both the plan and the projected score. Progress is a map of topics that fill in, because a percentage tells a student nothing they can act on.",
        "Peak and Brain solve opposite halves of the same problem. Peak is for a school with a teacher running the course. Brain is for a student sitting alone at a kitchen table with neither. I built both because where I live you usually have neither.",
      ],
      facts: [
        {
          label: "Stack:",
          value:
            "Next.js, Supabase, adaptive diagnostic with an ELO-based difficulty engine, teacher and parent dashboards. Six subjects, three languages, covering the national exam, SAT and IELTS.",
        },
      ],
      photos: ["brain-map", "brain-students"],
    },
    {
      id: "horsteppe",
      number: "04",
      title: "Horsteppe",
      link: { label: "horsteppe.vercel.app", href: "https://horsteppe.vercel.app" },
      meta: "founder, in development · Startup Orda 2.0",
      body: [
        "This is the first thing I've built that isn't for my region.",
        "Most AI video tools give you five seconds of footage and leave the actual work — the edit — to you. Horsteppe takes a sentence and returns a finished film: script, scenes, voiceover, subtitles, and the cut. Two decisions shaped it. Expensive generation goes only where something genuinely has to move, and everything else is a camera moving across a still frame, which is the difference between a demo and something a person can afford to finish. And if a provider fails halfway, the pipeline switches and the video still arrives, because a job that dies at eighty percent is worth nothing to whoever is waiting for it.",
        "Where it's going is a system you hand an entire project to — your script, your footage, your budget — that works out for itself what to generate, what to reuse, and where paying for the expensive model is justified, then edits the result the way an editor would rather than fading between scenes. That part is not finished. I'm saying so because a portfolio full of finished things is a portfolio that stopped being ambitious.",
      ],
      facts: [
        {
          label: "Stack:",
          value:
            "Next.js, multi-provider generation pipeline with failover, speech and subtitle generation, automated assembly.",
        },
      ],
      photos: ["horsteppe-interface", "horsteppe-frame"],
    },
    {
      id: "namaz-sundial",
      number: "05",
      title: "Namaz Sundial",
      link: { label: "amirback.github.io/Namaz-time", href: "https://amirback.github.io/Namaz-time" },
      meta: "solo project",
      body: [
        "A sundial in a browser that calculates Islamic prayer times and casts a real shadow — moving as the sun moves, for any place and any date.",
        "This one is useful to nobody but me. I wanted to know how far a browser could be pushed, so I spent the project on physically based materials, image-based lighting and post-processing, and then spent most of it fighting performance instead of adding anything. The worst bug was mine: a quality guard I had written was silently switching off shadows on weaker devices — the shadow being, of course, the entire point. I fixed it by letting the shadow get coarse instead of letting it disappear. I think about that fix more than it deserves. It's a good description of what optimisation usually costs you.",
      ],
      facts: [
        { label: "Stack:", value: "Three.js, WebGL, live weather data, adaptive quality tiers." },
      ],
      photos: ["sundial-render", "sundial-shadow"],
    },
  ] satisfies Project[],
  before: {
    id: "before-these",
    title: "Before these",
    body: [
      "A business directory for Aksay. My first real product, and the one I no longer run. Cafés and repair shops here can't justify a website, so I built one platform for all of them and spent as much time knocking on doors as writing code, convincing owners who had never dealt with a teenager. I signed up forty-eight businesses. Then I found the limit of one person: I could build it, or sell it, or support it, but not all three while also being a student. I handed it to my brother, who runs it now. Giving away something I had made was harder than making it, and I would rather have that in this list than leave it out.",
    ],
  },
};

export const competing = {
  id: "competing",
  heading: "Competing",
  items: [
    {
      id: "hackathons",
      title: "Hackathons",
      qualifier: null,
      body: [
        "Since 2024 I've competed in more than thirty and led the team in twenty-one of them. In the others I was whatever was missing: editor, engineer, marketer, the one who presents. Leading is not mostly a technical job. It is deciding in the second hour what we are not going to build, and it is being the one who says the pitch out loud at the end. In forty-eight hours, scope beats skill almost every time.",
        "Media Hackathon 2025 — first place, 100,000 KZT. Forty-eight hours to make a commercial for a real client. I set the concept and made the call to put AI-generated animation into live footage, which most teams weren't willing to try. What stayed with me wasn't winning. It was realising that the tool is worth having not because it's fast, but because it lets you attempt the version you'd never have had time to finish by hand.",
      ],
      record: null,
      note: "Also: NASA Space Apps Challenge · Future Minds Hub · Hack Alem AI",
      photos: ["hackathon-team", "hackathon-award"],
    },
    {
      id: "robotics-club",
      title: "Robotics club",
      qualifier: "founder and president, 50 members",
      body: [
        "My school didn't have one. I persuaded the administration to give us a room, recruited students with no experience, and taught them myself. Competitions gave us real deadlines: a part breaking at midnight and a fix that has to exist by morning. I also started things the school had never had — a demo day, a discovery night, a food showcase, a KVN — because a club survives only if people have a reason to come back to it, and the reason is rarely robots.",
      ],
      record:
        "Roboland 2024 — second place, regional, 3D design. Also competed at Central Asia FIRST Championship / ALEM TECH FEST, Almaty TechCup, and the Robotek Grand Tournament in Astana. Five categories: robotics, 3D design, sumo, robot football, drones.",
      note: null,
      photos: ["robotics-club", "robotics-competition"],
    },
    {
      id: "teaching",
      title: "Teaching",
      qualifier: "since ninth grade",
      body: [
        "English first, then robotics and programming once I had enough to give away. I ran a holiday coding camp and co-founded the debate club. Most of my students start exactly where I started: knowing nothing, with nobody nearby to ask. I'm trying to be the person I didn't have. It's also the reason Brain is free and always will be.",
      ],
      record: null,
      note: null,
      photos: ["teaching-lesson"],
    },
    {
      id: "dombra",
      title: "Dombra",
      qualifier: "republican level",
      body: [
        "I learned the dombra before I learned anything else on this page. Five or six placements at republican competitions, plus placements in republican debate competitions built around performance.",
        "It doesn't belong next to robotics, which is exactly why I keep it here. The dombra is the first place I understood that everything worth being good at is made of repetition nobody watches. Nothing I've built since has contradicted that.",
      ],
      record: null,
      note: null,
      photos: ["dombra-performance", "dombra-diploma"],
    },
  ] satisfies CompetingItem[],
};

export const now = {
  id: "now",
  heading: "Now",
  body: [
    "I'm building Horsteppe and competing with it at Startup Orda 2.0. It's the first thing I've made where the question isn't whether my town needs it.",
    "In 2026 I interviewed for a mobile development internship at Yandex and wasn't selected. I'd come from web development with no Swift at all and taught myself the scope of the interview from nothing, on the theory that the fastest way I've ever learned anything is to commit to a date first. The theory survived the rejection. I'm keeping it.",
    "What I want next is straightforward: to be somewhere the people around me are working on harder problems than I can find here, and to come back knowing how to solve the ones I left.",
  ],
};

export const footer = {
  links: [
    { label: "Instagram", href: "https://instagram.com/radianceys" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/amirkhan-panaguzhiyev-1ba636406" },
    { label: "GitHub", href: "https://github.com/amirback" },
  ] satisfies ExternalLink[],
  email: "amirkhan17.01.10@gmail.com",
  signature: "Built by Amirkhan Panaguzhiyev",
};
