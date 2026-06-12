export type Exhibition = {
  slug: string
  title: string
  subtitle: string
  dates: string[]
  time?: string
  images: string[]
  excerpt: string
  description: string[]
}

export const exhibitions: Exhibition[] = [
  {
    slug: "getaways",
    title: "JOHNNY DEFEO",
    subtitle: "GETAWAYS",
    dates: ["May 17, 2023 — Jun 17, 2023", "at FDP Collection, NYC"],
    time: "3:00 PM – 5:00 PM",
    images: [
      "https://www.datocms-assets.com/103879/1691079688-fairfax_dorn_projects_johnny-defeo-01.jpg?auto=format&fit=fill",
      "https://www.datocms-assets.com/103879/1691079695-fairfax_dorn_projects_johnny-defeo-02.jpg?auto=format&fit=fill",
      "https://www.datocms-assets.com/103879/1691079700-fairfax_dorn_projects_johnny-defeo-03.jpg?auto=format&fit=fill",
      "https://www.datocms-assets.com/103879/1691079705-fairfax_dorn_projects_johnny-defeo-04.jpg?auto=format&fit=fill",
      "https://www.datocms-assets.com/103879/1691079709-fairfax_dorn_projects_johnny-defeo-05.jpg?auto=format&fit=fill",
      "https://www.datocms-assets.com/103879/1691079713-fairfax_dorn_projects_johnny-defeo-06.jpg?auto=format&fit=fill",
    ],
    excerpt: "DeFeo's paintings depict escapist tableaus of homes that emerge from a rich mix of fantasy and luxury.",
    description: [
      "FDP Collection and KDR305 present Getaways by Artist Johnny Defeo. DeFeo's paintings depict escapist tableaus of homes that emerge from a rich mix of fantasy and luxury, with views of sun-drenched domestic interiors in exaggerated environments.",
      "DeFeo defines each space with a series of parameters set by his senses, capturing a feeling of who may have lived or worked in these spaces. Each reimagined location is filled with vibrantly rendered furniture, paintings, sculptures, knickknacks, vegetation, and scenery.",
      "DeFeo's works are a quiet commentary on the real estate industry and land ownership, simultaneously covetable yet absurd through his eyes.",
      "Johnny DeFeo is a Taos-based artist who earned his MFA from the University of Colorado.",
    ],
  },
  {
    slug: "rios-de-agua-viva",
    title: "JOEL GAITAN",
    subtitle: "RÍOS DE AGUA VIVA",
    dates: ["Aug 19, 2022 — Sep 18, 2022", "at The Living Room, East Hampton"],
    images: [
      "https://www.datocms-assets.com/103879/1691078694-fairfax_dorn_projects_joel_gaitan_0.jpg?auto=format&fit=fill",
    ],
    excerpt: "Joel Gaitan presents new paintings drawing from the landscape and ecology of his native Nicaragua.",
    description: [
      "Ríos de Agua Viva presents new paintings by Joel Gaitan, drawing from the landscape and ecology of his native Nicaragua.",
      "Gaitan's luminous canvases evoke the rivers, flora, and light of Central America, filtered through a personal mythology.",
    ],
  },
  {
    slug: "bounce-back",
    title: "THAI MAINHARD",
    subtitle: "BOUNCE (BACK)",
    dates: ["Jul 22, 2022 — Aug 14, 2022", "at The Living Room, East Hampton"],
    images: [],
    excerpt: "Thai Mainhard's Bounce (Back) explores resilience through layered abstract compositions.",
    description: [
      "Bounce (Back) is an exhibition of new works by Thai Mainhard. The paintings explore resilience, repetition, and return through layered abstract compositions.",
    ],
  },
  {
    slug: "calor-universal",
    title: "CALOR UNIVERSAL",
    subtitle: "IN COLLABORATION WITH PACE AND MENDES WOODS DM",
    dates: ["Jul 2, 2022 — Jul 17, 2022", "at The Living Room, East Hampton"],
    images: [],
    excerpt: "A group exhibition in collaboration with Pace and Mendes Wood DM exploring heat and universal energy.",
    description: [
      "Calor Universal is a group exhibition organized in collaboration with Pace Gallery and Mendes Wood DM, bringing together artists whose work engages with heat, energy, and universal forces.",
    ],
  },
  {
    slug: "eternal-circle",
    title: "LUCIEN SHAPIRO",
    subtitle: "ETERNAL CIRCLE",
    dates: ["Jun 2022", "at The Living Room, East Hampton"],
    images: [],
    excerpt: "Lucien Shapiro's sculptural works explore cycles, ritual, and transformation.",
    description: [
      "Eternal Circle brings together sculptures by Lucien Shapiro that explore cycles, ritual, and transformation through found and fabricated objects.",
    ],
  },
  {
    slug: "crystallography",
    title: "ELAN GENTRY",
    subtitle: "CRYSTALLOGRAPHY",
    dates: ["May 2022", "at FDP Collection, NYC"],
    images: [],
    excerpt: "Elan Gentry explores mineral structure and natural geometry through photographic works.",
    description: [
      "Crystallography is an exhibition of photographic and mixed-media works by Elan Gentry, exploring the structure of minerals and natural geometry.",
    ],
  },
  {
    slug: "puffer-halo",
    title: "ELAINE STOCKI",
    subtitle: "PUFFER HALO",
    dates: ["Apr 2022", "at FDP Collection, NYC"],
    images: [],
    excerpt: "Elaine Stocki's paintings examine domestic space and the intimacy of everyday objects.",
    description: [
      "Puffer Halo presents new paintings by Elaine Stocki that examine domestic space, the warmth of everyday objects, and the intimacy of the interior.",
    ],
  },
  {
    slug: "a-particular-kind-of-heaven",
    title: "ISABEL ROWER",
    subtitle: "A PARTICULAR KIND OF HEAVEN",
    dates: ["Mar 2022", "at FDP Collection, NYC"],
    images: [],
    excerpt: "Isabel Rower presents paintings navigating between the sacred and the mundane.",
    description: [
      "A Particular Kind of Heaven presents paintings by Isabel Rower that navigate the terrain between the sacred and the everyday, invoking devotion, longing, and grace.",
    ],
  },
  {
    slug: "shadows-spanning-two-nights",
    title: "MIRANDA FENGYUAN ZHANG",
    subtitle: "SHADOWS SPANNING TWO NIGHTS",
    dates: ["Feb 2022", "at FDP Collection, NYC"],
    images: [],
    excerpt: "Miranda Fengyuan Zhang's works explore memory, dusk, and liminal time through painting.",
    description: [
      "Shadows Spanning Two Nights is an exhibition of new paintings by Miranda Fengyuan Zhang, exploring memory, dusk, and the liminal hours between day and night.",
    ],
  },
  {
    slug: "an-impulsive-forage",
    title: "REBECCA MANSON",
    subtitle: "AN IMPULSIVE FORAGE",
    dates: ["Jan 2022", "at FDP Collection, NYC"],
    images: [],
    excerpt: "Rebecca Manson's paintings are grounded in the materiality of foraging and organic gathering.",
    description: [
      "An Impulsive Forage presents new paintings by Rebecca Manson grounded in the act of foraging — organic, instinct-driven, and materially rich.",
    ],
  },
]

export function getExhibition(slug: string): Exhibition | undefined {
  return exhibitions.find((e) => e.slug === slug)
}
