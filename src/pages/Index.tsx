import { ArrowRight, Check, MessageCircle, Sparkles } from "lucide-react";
import { SiteNav } from "@/components/SiteNav";
import heroImg from "@/assets/fas-hero.png";
import workshopImg from "@/assets/fas-zukunftswerkstatt.png";
import sebastianImg from "@/assets/facilitator.jpg";

const formatCards = [
  {
    title: "Einstieg & Orientierung",
    meta: "120-180 Minuten",
    body: "Ein gemeinsamer Einstieg in den roten Faden: Welt im Wandel, Kinder und Jugendliche, Bildung und freie Schulen.",
    price: "ab 300 €",
  },
  {
    title: "Pädagogischer Tag",
    meta: "1 Tag",
    body: "Verstehen, was auf uns zukommt, was Kinder brauchen und welche Fragen sich daraus für eure Schule ergeben.",
    price: "ab 800 €",
  },
  {
    title: "Vertiefungsworkshop",
    meta: "2 Tage",
    body: "Die Perspektive des ersten Tages vertiefen: Motivation, Lernen, psychologische Grundbedürfnisse und KI einordnen.",
    price: "ab 1.500 €",
  },
  {
    title: "Zukunftswerkstatt",
    meta: "3 Tage",
    body: "Die Erkenntnisse in konkrete Schulentwicklung, Pilotprojekte, Prioritäten und nächste Schritte übersetzen.",
    price: "ab 2.100 €",
  },
];

const questions = [
  "Wie verändert sich unsere Welt?",
  "Was bedeutet das für Kinder und Jugendliche?",
  "Welche Fähigkeiten und Erfahrungen werden wichtiger?",
  "Wie können wir Kinder gezielt dabei unterstützen, diese Fähigkeiten zu entwickeln?",
  "Welche praktischen Konsequenzen ergeben sich daraus für unsere Schulen?",
];

const formatDetails = [
  {
    eyebrow: "120-180 Minuten",
    title: "Einstieg & Orientierung",
    subtitle: "Ein gemeinsamer Einstieg in den roten Faden der Workshops.",
    suited: [
      "Online oder, je nach Entfernung, auch vor Ort möglich",
      "wie sich unsere Welt durch KI und gesellschaftlichen Wandel verändert",
      "was diese Veränderungen für Kinder und Jugendliche bedeuten",
      "welche Fähigkeiten und Erfahrungen wichtiger werden",
      "welche Fragen sich daraus für euer Team, eure Initiative oder euer Netzwerk ergeben",
    ],
    contentLabel: "Inhalte",
    result:
      "Ihr bekommt einen ersten gemeinsamen Bezugsrahmen und könnt sortieren, welche Fragen für eure Schule, Initiative oder euer Netzwerk gerade besonders wichtig sind.",
    price: ["Gründungsinitiativen: ab 300 €", "bestehende Schulen: ab 500 €"],
  },
  {
    eyebrow: "1 Tag",
    title: "Pädagogischer Tag",
    subtitle: "Verstehen, was auf uns zukommt, und was Kinder brauchen.",
    suited: [
      "Verständnis der gesellschaftlichen Veränderungen durch KI",
      "Auswirkungen auf Kinder und Jugendliche",
      "erste Ableitungen für Bildung und freie Schulen",
      "welche Fähigkeiten und Erfahrungen wichtiger werden",
      "welche Fragen sich daraus für eure Schule ergeben",
      "erste Ansatzpunkte für gemeinsames Weiterdenken",
    ],
    contentLabel: "Inhalte",
    result:
      "Nach diesem Tag habt ihr ein gemeinsames Verständnis darüber, worauf wir Kinder vorbereiten wollen, welche Fähigkeiten und Erfahrungen wichtiger werden und welche Fragen sich daraus für eure Schule ergeben.",
    price: ["Gründungsinitiativen: ab 800 €", "bestehende Schulen: ab 1.000 €", "zzgl. Reisekosten"],
  },
  {
    eyebrow: "2 Tage",
    title: "Vertiefungsworkshop",
    subtitle: "Die Perspektive des ersten Tages vertiefen und pädagogisch fundieren.",
    suited: [
      "Motivation und Lernen",
      "Selbstbestimmungstheorie",
      "psychologische Grundbedürfnisse",
      "Selbstwirksamkeit",
      "Entwicklung von Kompetenzen",
      "ausgewählte KI-Anwendungen",
      "Einordnung von Chancen und Risiken",
    ],
    contentLabel: "Weitere Inhalte",
    result:
      "Nach diesen zwei Tagen habt ihr ein deutlich tieferes Verständnis sowohl der gesellschaftlichen Veränderungen und der Fähigkeiten, die Kinder künftig besonders brauchen, als auch der pädagogischen und psychologischen Grundlagen, mit denen ihr diese Fähigkeiten in eurer Schule gezielt stärken und entwickeln könnt.",
    price: ["Gründungsinitiativen: ab 1.500 €", "bestehende Schulen: ab 1.900 €", "zzgl. Reisekosten"],
  },
  {
    eyebrow: "3 Tage",
    title: "Zukunftswerkstatt & Schulentwicklung",
    subtitle: "Welche praktischen Konsequenzen ergeben sich daraus für unsere Schulen?",
    suited: [
      "gemeinsame Zukunftsbilder",
      "Entwicklung erster Pilotprojekte",
      "Prioritäten für die nächsten Jahre",
      "konkrete nächste Schritte",
      "Übertragung in die eigene Praxis",
      "Schulentwicklung im KI-Zeitalter",
    ],
    contentLabel: "Weitere Inhalte",
    result:
      "Ihr verlasst den Workshop mit einem fundierten Verständnis der aktuellen Entwicklungen, einem klaren pädagogischen Kompass und konkreten Ideen, ersten Pilotprojekten und nächsten Schritten für die Weiterentwicklung eurer Schule.",
    price: ["Gründungsinitiativen: ab 2.100 €", "bestehende Schulen: ab 2.700 €", "zzgl. Reisekosten"],
  },
];

const pilotTopics = [
  "neue Lernformate",
  "Mentoring",
  "demokratische Schulentwicklung",
  "KI im Schulalltag",
  "Selbstwirksamkeit",
  "Begleitung von Veränderungsprozessen",
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-ink">
      <SiteNav />

      <section className="relative overflow-hidden bg-gradient-hero pt-36 md:pt-48 pb-20 md:pb-32">
        <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 fade-in-up">
            <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-teal-mid mb-6">
              Workshops für freie Schulen
            </p>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-teal-deep mb-8">
              KI und Freie Schulen
            </h1>
            <p className="font-serif italic text-xl md:text-2xl text-ink-soft leading-relaxed mb-10 max-w-2xl">
              Worauf bereiten wir Kinder eigentlich vor?
            </p>
            <p className="text-lg leading-relaxed text-ink-soft max-w-2xl mb-5">
              Auch wir freie Schulen stehen vor einer besonderen Herausforderung: Wie begleiten wir Kinder in einer Welt, die sich durch KI schneller verändert als jemals zuvor?
            </p>
            <p className="text-lg leading-relaxed text-ink-soft max-w-2xl mb-10">
              Ich unterstütze euch dabei, die Veränderungen besser zu verstehen, Chancen und Risiken einzuordnen und eigene Antworten für eure Schule zu entwickeln.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#formate"
                className="inline-flex items-center justify-center gap-3 px-7 py-3.5 bg-primary text-primary-foreground text-sm tracking-wide hover:bg-primary/90 transition-all duration-300 shadow-soft hover:shadow-card"
              >
                Formate ansehen
                <ArrowRight className="w-4 h-4" aria-hidden />
              </a>
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center gap-3 px-7 py-3.5 border border-teal-soft text-teal-deep text-sm tracking-wide hover:bg-teal-wash transition-all duration-300"
              >
                Workshop anfragen
              </a>
            </div>
          </div>

          <div className="md:col-span-5 fade-in">
            <div className="relative aspect-[3/2] overflow-hidden shadow-card bg-paper-warm">
              <img src={heroImg} alt="Menschen in einer freien Schule im Gespräch über Lernen und Zukunft" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section id="warum" className="py-24 md:py-36">
        <div className="max-w-5xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <p className="text-xs uppercase tracking-[0.25em] text-teal-mid mb-4">Warum diese Workshops?</p>
            <h2 className="font-serif text-4xl md:text-5xl text-teal-deep leading-tight">
              Wir freie Schulen bringen vieles mit, was künftig noch wichtiger wird.
            </h2>
          </div>
          <div className="md:col-span-7 space-y-6 text-lg leading-relaxed text-ink-soft">
            <p>
              Viele von uns haben freie Schulen gegründet oder mit aufgebaut, weil wir überzeugt sind, dass Kinder mehr brauchen als reine Wissensvermittlung. Selbstbestimmung, Eigenverantwortung, Beziehung, Kreativität und demokratische Teilhabe gehören zu dem, was viele freie Schulen seit Jahren stark macht.
            </p>
            <p>
              Genau deshalb ist das Thema KI für uns nicht nur eine technische Frage. Der rote Faden der Workshops ist größer: Wie verändert sich unsere Welt, was bedeutet das für Kinder und Jugendliche, welche Fähigkeiten und Erfahrungen werden wichtiger, und welche praktischen Konsequenzen ergeben sich daraus für unsere Schulen?
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-paper-warm border-y border-border/60">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <div className="max-w-2xl mb-12">
            <p className="text-xs uppercase tracking-[0.25em] text-teal-mid mb-4">Leitfragen</p>
            <h2 className="font-serif text-4xl md:text-5xl text-teal-deep leading-tight">
              Die Workshops öffnen einen gemeinsamen Denkraum.
            </h2>
          </div>
          <ol className="space-y-px">
            {questions.map((question, index) => (
              <li key={question} className="grid grid-cols-[auto_1fr] gap-7 py-6 border-t border-border/70 last:border-b">
                <span className="font-serif text-2xl text-teal-mid tabular-nums">0{index + 1}</span>
                <p className="font-serif text-xl md:text-2xl leading-snug text-ink">{question}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="formate" className="py-24 md:py-36">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-12 gap-12 mb-16 items-end">
            <div className="md:col-span-7">
              <p className="text-xs uppercase tracking-[0.25em] text-teal-mid mb-4">Welches Format passt?</p>
              <h2 className="font-serif text-4xl md:text-5xl text-teal-deep leading-tight">
                Vom ersten Impuls bis zur konkreten Schulentwicklung.
              </h2>
            </div>
            <p className="md:col-span-5 text-base leading-relaxed text-ink-soft">
              Je nach Situation kann der Workshop als Einstieg, pädagogischer Tag, Vertiefung oder Zukunftswerkstatt gestaltet werden. Alle Formate können auch als schulinterne Fortbildung stattfinden.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {formatCards.map((format) => (
              <article key={format.title} className="border border-border/70 bg-background p-6 shadow-soft">
                <p className="text-xs uppercase tracking-[0.2em] text-teal-mid mb-4">{format.meta}</p>
                <h3 className="font-serif text-2xl leading-tight text-teal-deep mb-4">{format.title}</h3>
                <p className="text-sm leading-relaxed text-ink-soft mb-6">{format.body}</p>
                <p className="text-sm text-ink">{format.price}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 border-l-2 border-teal-soft pl-6 max-w-3xl">
            <p className="text-base leading-relaxed text-ink-soft">
              Die vorgestellten Formate dienen als Orientierung. Inhalte, Schwerpunkte und Umfang können gemeinsam an die Bedürfnisse eures Teams angepasst werden.
            </p>
            <p className="text-base leading-relaxed text-ink-soft mt-4">
              Wenn ihr andere Schwerpunkte setzen oder ein individuelles Format entwickeln möchtet, sprecht mich gerne an.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-36 bg-gradient-soft">
        <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-4 md:sticky md:top-28">
            <div className="aspect-[3/2] overflow-hidden shadow-card mb-5">
              <img src={workshopImg} alt="Zukunftswerkstatt mit gemeinsamer Planung und kreativer Schulentwicklung" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <p className="text-sm italic leading-relaxed text-ink-soft">
              Gemeinsames Entwickeln, offene Gespräche und der Blick darauf, was sich in der eigenen Schule praktisch verändern kann.
            </p>
          </div>

          <div className="md:col-span-8 space-y-6">
            {formatDetails.map((format) => (
              <article key={format.title} className="bg-background/75 backdrop-blur-sm border border-border/70 p-8 md:p-10 shadow-soft">
                <p className="text-xs uppercase tracking-[0.25em] text-teal-mid mb-4">{format.eyebrow}</p>
                <h3 className="font-serif text-3xl md:text-4xl text-teal-deep leading-tight mb-4">{format.title}</h3>
                <p className="font-serif text-xl text-ink leading-snug mb-7">{format.subtitle}</p>
                <div className="mb-8">
                  <p className="text-sm uppercase tracking-[0.18em] text-ink-soft mb-4">Ergebnis</p>
                  <p className="text-base leading-relaxed text-ink-soft">{format.result}</p>
                </div>
                <div className="mb-8">
                  <p className="text-sm uppercase tracking-[0.18em] text-ink-soft mb-4">{format.contentLabel}</p>
                  <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3">
                    {format.suited.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
                        <Check className="w-4 h-4 mt-0.5 text-teal-mid shrink-0" aria-hidden />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-t border-border/70 pt-6">
                  <p className="text-sm uppercase tracking-[0.18em] text-ink-soft mb-4">Orientierungspreis</p>
                  <ul className="grid sm:grid-cols-3 gap-2">
                    {format.price.map((item) => (
                      <li key={item} className="text-sm text-ink">{item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="begleitung" className="py-24 md:py-36">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <div className="max-w-2xl mb-14">
            <p className="text-xs uppercase tracking-[0.25em] text-teal-mid mb-4">Nach dem Workshop</p>
            <h2 className="font-serif text-4xl md:text-5xl text-teal-deep leading-tight mb-6">
              Begleitung von Pilotprojekten
            </h2>
            <p className="text-lg leading-relaxed text-ink-soft">
              Oft entstehen im Workshop gute Ideen, aber im Alltag ist dann wieder viel los. Nach einem Zwei- oder Dreitagesworkshop kann ich euch deshalb auf Wunsch weiter begleiten, damit aus ersten Ansätzen tragfähige Schritte werden.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border/70 border border-border/70">
            {pilotTopics.map((topic) => (
              <div key={topic} className="bg-background p-6 flex items-center gap-4">
                <Sparkles className="w-4 h-4 text-teal-mid shrink-0" aria-hidden />
                <p className="text-base text-ink">{topic}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="sebastian" className="py-24 md:py-36 bg-paper-warm border-y border-border/60">
        <div className="max-w-5xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 flex justify-center md:justify-start">
            <div className="aspect-square w-64 md:w-80 rounded-full overflow-hidden shadow-card bg-background">
              <img src={sebastianImg} alt="Sebastian Deichmann" className="w-full h-full object-cover" style={{ objectPosition: "center 12%" }} loading="lazy" />
            </div>
          </div>
          <div className="md:col-span-7">
            <p className="text-xs uppercase tracking-[0.25em] text-teal-mid mb-4">Über Sebastian</p>
            <h2 className="font-serif text-4xl md:text-5xl text-teal-deep leading-tight mb-8">Sebastian Deichmann</h2>
            <div className="space-y-5 text-lg leading-relaxed text-ink-soft">
              <p>
                Ich bin Mitgründer der Demokratischen Schule Infinita und arbeite seit 2013 an einer freien Alternativschule. Viele Fragen, die freie Schulen heute beschäftigen, kenne ich deshalb nicht nur aus Büchern oder Vorträgen, sondern aus dem Schulalltag.
              </p>
              <p>
                Ich bin Autor von „Grenzenlos Lernen“ und beschäftige mich seit Jahren mit demokratischer Bildung, Motivation, Selbstbestimmung und der Frage, wie Lernen gelingen kann. Mit der Entwicklung von KI ist für mich eine neue, sehr grundlegende Frage dazugekommen.
              </p>
              <p>
                Wie können wir Kinder auf eine Welt vorbereiten, die sich schneller verändert als jemals zuvor, ohne dabei das Menschliche aus dem Blick zu verlieren? Aus dieser Frage sind diese Workshops entstanden.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="kontakt" className="py-28 md:py-40">
        <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-teal-mid mb-6">Kontakt</p>
          <h2 className="font-serif text-4xl md:text-6xl text-teal-deep leading-[1.1] mb-8">
            Interesse an einem Vortrag, Workshop oder einer Begleitung?
          </h2>
          <p className="text-lg md:text-xl text-ink-soft leading-relaxed mb-12 max-w-2xl mx-auto">
            Wenn ihr gemeinsam auf diese Fragen schauen möchtet, freue ich mich über eine Nachricht. Dann klären wir in Ruhe, welches Format für eure Schule, Initiative oder euer Netzwerk sinnvoll ist.
          </p>
          <a
            href="https://sebastian-deichmann.de/kontakt"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-500 shadow-soft hover:shadow-card group"
          >
            <MessageCircle className="w-5 h-5" aria-hidden />
            <span className="text-base tracking-wide">Kontakt aufnehmen</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" aria-hidden />
          </a>
        </div>
      </section>

      <footer className="py-10 border-t border-border/60 bg-paper-warm">
        <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-ink-soft">© {new Date().getFullYear()} Sebastian Deichmann</p>
          <div className="flex items-center gap-6 text-sm text-ink-soft">
            <a href="https://sebastian-deichmann.de/datenschutzerklarung/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-deep transition-colors">
              Datenschutz
            </a>
            <span aria-hidden className="opacity-40">|</span>
            <a href="https://sebastian-deichmann.de/impressum/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-deep transition-colors">
              Impressum
            </a>
            <span aria-hidden className="opacity-40">|</span>
            <a href="https://sebastian-deichmann.de" className="hover:text-teal-deep transition-colors">
              sebastian-deichmann.de
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
