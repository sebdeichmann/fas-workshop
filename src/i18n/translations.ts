export type Language = "en" | "de";

export type Translation = {
  nav: {
    about: string;
    audience: string;
    outcomes: string;
    structure: string;
    facilitator: string;
    contact: string;
    getInTouch: string;
    toggleMenu: string;
    languageLabel: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    days: string;
    languages: string;
    formats: string;
    imageAlt: string;
  };
  about: {
    eyebrow: string;
    lead: string;
    p2: string;
    p3: string;
  };
  audience: {
    eyebrow: string;
    title: string;
    body: React.ReactNode;
  };
  outcomes: {
    eyebrow: string;
    title: string;
    items: string[];
  };
  structure: {
    eyebrow: string;
    title: string;
    intro: string;
    days: { n: string; title: string; body: string }[];
    imageAlt: string;
    imageCaption: string;
  };
  coreIdea: {
    eyebrow: string;
    title: string;
    intro: string;
    steps: string[];
  };
  facilitator: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    link: string;
    imageAlt: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    body: string;
    cta: string;
  };
  footer: {
    privacy: string;
    imprint: string;
  };
};

import type React from "react";

export const translations: Record<Language, Translation> = {
  en: {
    nav: {
      about: "About",
      audience: "Audience",
      outcomes: "Outcomes",
      structure: "Structure",
      facilitator: "Facilitator",
      contact: "Contact",
      getInTouch: "Request this workshop",
      toggleMenu: "Toggle menu",
      languageLabel: "Switch language",
    },
    hero: {
      eyebrow: "A Course for Educators",
      title: "AI and the Future of Education",
      lead:
        "What do young people need to thrive in a rapidly changing world? And how can we use AI in schools to genuinely support them?",
      days: "5 days",
      languages: "German & English",
      formats: "Adaptable formats",
      imageAlt:
        "Three people in conversation on a sofa, with a humanoid robot reading a book in the background",
    },
    about: {
      eyebrow: "About the course",
      lead:
        "Artificial intelligence is already reshaping our societies — and its most profound impacts are still ahead, while many of these changes remain difficult to fully grasp.",
      p2: "For education, this raises a fundamental question: What are we actually preparing young people for in a world that is rapidly changing?",
      p3: "This course helps participants better understand these developments. It supports them in reflecting — based on educational and psychological foundations — on what young people will need. It also offers guidance on how schools and the use of AI can be adapted in a meaningful and responsible way.",
    },
    audience: {
      eyebrow: "For whom",
      title: "Target group",
      body: null,
    },
    outcomes: {
      eyebrow: "What you take away",
      title: "Learning outcomes",
      items: [
        "Understand how AI is transforming society and the future of work",
        "Identify key human capacities needed in a rapidly changing world",
        "Develop a framework to evaluate the use of AI in education",
      ],
    },
    structure: {
      eyebrow: "Five days",
      title: "Workshop structure",
      intro:
        "A guided journey from understanding to vision to practice — moving from technology and society toward the human capacities education must cultivate.",
      days: [
        {
          n: "01",
          title: "Experiencing AI and Societal Change",
          body:
            "Participants explore what AI is and how it works, combined with hands-on experimentation. They actively experience the capabilities and speed of current systems and reflect on what this means in practice — connected to an exploration of changes in work and society.",
        },
        {
          n: "02",
          title: "Expanding the Perspective and Identifying Key Skills",
          body:
            "The perspective is broadened to include technological progress, societal consequences, and key challenges. Participants develop a shared picture and identify the essential human capacities a changing world will require.",
        },
        {
          n: "03",
          title: "Personal Experience and Learning Processes",
          body:
            "Through guided reflection and biographical work, participants explore their own learning experiences. This process opens a deeper understanding of fundamental theories of learning and education.",
        },
        {
          n: "04",
          title: "Vision and Educational Implications",
          body:
            "Building on these insights, participants rethink education and develop visions for future learning environments — grounded in an understanding of societal change and key principles of learning and motivation.",
        },
        {
          n: "05",
          title: "From Vision to Practice",
          body:
            "Participants translate visions into concrete, actionable steps and explore how AI can be used meaningfully and responsibly in schools.",
        },
      ],
      imageAlt: "Small group of participants seated in a circle in a bright, airy room",
      imageCaption: "Reflective, conversational, hands-on — held in a calm and attentive space.",
    },
    coreIdea: {
      eyebrow: "The thread",
      title: "Core idea of the course",
      intro:
        "The course follows a clear progression. The goal is not to provide fixed answers, but to create a structured way of thinking about AI, human development, and education.",
      steps: [
        "Understanding how AI is transforming the world",
        "Exploring what this means for human life",
        "Identifying key skills and capacities",
        "Understanding how people learn",
        "Translating insights into educational practice",
      ],
    },
    facilitator: {
      eyebrow: "About the facilitator",
      title: "Sebastian Deichmann",
      paragraphs: [
        "Sebastian Deichmann works at the intersection of democratic education, psychology, and the societal impact of emerging technologies.",
        "As an author and educator, he focuses on how schools can support young people in a world shaped by rapid technological change.",
        "His work combines practical experience with a strong foundation in motivation research, helping educators rethink learning environments in a way that truly prepares students for the future.",
      ],
      link: "Visit sebastian-deichmann.de",
      imageAlt: "Sebastian Deichmann",
    },
    contact: {
      eyebrow: "Booking & contact",
      title: "Bring this course to your context.",
      body:
        "The workshop is available in both German and English and can be flexibly adapted to different contexts, including shorter formats. If you are interested, please get in touch.",
      cta: "Get in touch",
    },
    footer: {
      privacy: "Privacy Policy",
      imprint: "Imprint",
    },
  },

  de: {
    nav: {
      about: "Über den Kurs",
      audience: "Zielgruppe",
      outcomes: "Ergebnisse",
      structure: "Aufbau",
      facilitator: "Referent",
      contact: "Kontakt",
      getInTouch: "Workshop anfragen",
      toggleMenu: "Menü öffnen",
      languageLabel: "Sprache wechseln",
    },
    hero: {
      eyebrow: "Ein Kurs für Pädagog:innen",
      title: "KI und die Zukunft der Bildung",
      lead:
        "Was brauchen junge Menschen, um in einer sich schnell verändernden Welt wirklich zu wachsen? Und wie können wir KI in Schulen sinnvoll einsetzen, um sie dabei zu unterstützen?",
      days: "5 Tage",
      languages: "Deutsch & Englisch",
      formats: "Anpassbare Formate",
      imageAlt:
        "Drei Personen im Gespräch auf einem Sofa, im Hintergrund ein humanoider Roboter, der ein Buch liest",
    },
    about: {
      eyebrow: "Über den Kurs",
      lead:
        "Künstliche Intelligenz verändert unsere Gesellschaften bereits jetzt — und ihre tiefgreifendsten Auswirkungen liegen noch vor uns, während vieles davon schwer vollständig zu erfassen bleibt.",
      p2: "Für die Bildung stellt sich damit eine grundlegende Frage: Worauf bereiten wir junge Menschen eigentlich vor in einer Welt, die sich so schnell wandelt?",
      p3: "Dieser Kurs hilft den Teilnehmenden, diese Entwicklungen besser zu verstehen. Er unterstützt dabei, auf pädagogischer und psychologischer Grundlage zu reflektieren, was junge Menschen brauchen werden. Und er gibt Orientierung, wie Schule und der Einsatz von KI sinnvoll und verantwortungsvoll gestaltet werden können.",
    },
    audience: {
      eyebrow: "Für wen",
      title: "Zielgruppe",
      body: null,
    },
    outcomes: {
      eyebrow: "Was Sie mitnehmen",
      title: "Lernergebnisse",
      items: [
        "Verstehen, wie KI Gesellschaft und Arbeitswelt verändert",
        "Zentrale menschliche Fähigkeiten erkennen, die in einer Welt im Wandel gebraucht werden",
        "Einen Rahmen entwickeln, um den Einsatz von KI in der Bildung zu beurteilen",
      ],
    },
    structure: {
      eyebrow: "Fünf Tage",
      title: "Aufbau des Workshops",
      intro:
        "Ein begleiteter Weg vom Verstehen über die Vision zur Praxis — von Technologie und Gesellschaft hin zu den menschlichen Fähigkeiten, die Bildung kultivieren muss.",
      days: [
        {
          n: "01",
          title: "KI und gesellschaftlichen Wandel erfahren",
          body:
            "Die Teilnehmenden erkunden, was KI ist und wie sie funktioniert, verbunden mit eigenem Ausprobieren. Sie erleben unmittelbar die Möglichkeiten und das Tempo aktueller Systeme und reflektieren, was das in der Praxis bedeutet — verknüpft mit einer Auseinandersetzung über Veränderungen in Arbeit und Gesellschaft.",
        },
        {
          n: "02",
          title: "Perspektive weiten und Schlüsselkompetenzen erkennen",
          body:
            "Der Blick wird geweitet auf technologische Entwicklungen, gesellschaftliche Folgen und zentrale Herausforderungen. Die Teilnehmenden entwickeln ein gemeinsames Bild und benennen die wesentlichen menschlichen Fähigkeiten, die eine sich wandelnde Welt erfordern wird.",
        },
        {
          n: "03",
          title: "Eigene Erfahrung und Lernprozesse",
          body:
            "Durch angeleitete Reflexion und biografische Arbeit erkunden die Teilnehmenden ihre eigenen Lernerfahrungen. Dieser Prozess öffnet ein tieferes Verständnis grundlegender Theorien des Lernens und der Bildung.",
        },
        {
          n: "04",
          title: "Vision und Konsequenzen für Bildung",
          body:
            "Auf dieser Grundlage denken die Teilnehmenden Bildung neu und entwickeln Visionen für zukünftige Lernumgebungen — getragen von einem Verständnis gesellschaftlichen Wandels und zentraler Prinzipien von Lernen und Motivation.",
        },
        {
          n: "05",
          title: "Von der Vision zur Praxis",
          body:
            "Die Teilnehmenden übersetzen Visionen in konkrete, umsetzbare Schritte und erkunden, wie KI in der Schule sinnvoll und verantwortungsvoll eingesetzt werden kann.",
        },
      ],
      imageAlt: "Kleine Gruppe von Teilnehmenden, die in einem hellen, weiten Raum im Kreis sitzen",
      imageCaption: "Reflektierend, im Gespräch, praxisnah — getragen von einer ruhigen und aufmerksamen Atmosphäre.",
    },
    coreIdea: {
      eyebrow: "Der rote Faden",
      title: "Grundgedanke des Kurses",
      intro:
        "Der Kurs folgt einem klaren Bogen. Ziel ist es nicht, fertige Antworten zu liefern, sondern eine strukturierte Weise des Denkens über KI, menschliche Entwicklung und Bildung zu eröffnen.",
      steps: [
        "Verstehen, wie KI die Welt verändert",
        "Erkunden, was das für menschliches Leben bedeutet",
        "Zentrale Fähigkeiten und Kompetenzen erkennen",
        "Verstehen, wie Menschen lernen",
        "Erkenntnisse in pädagogische Praxis übersetzen",
      ],
    },
    facilitator: {
      eyebrow: "Über den Referenten",
      title: "Sebastian Deichmann",
      paragraphs: [
        "Sebastian Deichmann arbeitet an der Schnittstelle von demokratischer Bildung, Psychologie und den gesellschaftlichen Auswirkungen neuer Technologien.",
        "Als Autor und Lernbegleiter beschäftigt er sich mit der Frage, wie Schulen junge Menschen in einer sich schnell verändernden Welt wirklich unterstützen können.",
        "Seine Arbeit verbindet praktische Erfahrung mit fundierter Motivationsforschung und hilft dabei, Lernumgebungen neu zu denken – im Hinblick auf die Herausforderungen der Zukunft.",
      ],
      link: "sebastian-deichmann.de besuchen",
      imageAlt: "Sebastian Deichmann",
    },
    contact: {
      eyebrow: "Buchung & Kontakt",
      title: "Holen Sie diesen Kurs in Ihren Kontext.",
      body:
        "Der Workshop ist auf Deutsch und Englisch verfügbar und lässt sich flexibel an unterschiedliche Kontexte anpassen — auch in kürzeren Formaten. Bei Interesse melden Sie sich gerne.",
      cta: "Kontakt aufnehmen",
    },
    footer: {
      privacy: "Datenschutz",
      imprint: "Impressum",
    },
  },
};
