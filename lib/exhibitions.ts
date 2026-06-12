export type Exhibition = {
  slug: string
  title: string
  subtitle: string
  dateStart: string
  dateEnd?: string
  location: string
  time?: string
  excerpt: string
  description: string[]
}

export const exhibitions: Exhibition[] = [
  {
    slug: "getaways",
    title: "JOHNNY DEFEO",
    subtitle: "GETAWAYS",
    dateStart: "May 17, 2023",
    dateEnd: "Jun 17, 2023",
    location: "at FDP Collection, NYC",
    time: "3:00 PM – 5:00 PM",
    excerpt:
      "FDP Collection and KDR305 present Getaways by Artist Johnny DeFeo. DeFeo's paintings depict escapist tableaus of homes that emerge from a rich mix of fantasy and luxury, with views of sun-drenched domestic interiors in exaggerated environments.",
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
    dateStart: "Aug 19, 2022",
    dateEnd: "Sep 18, 2022",
    location: "at The Living Room, East Hampton",
    excerpt:
      "FDP presents Ríos de Agua Viva by artist Joel Gaitan. The title is deeply rooted in Gaitan's beliefs and Nicaraguan family customs. Gaitan's work studies matters of self-identity, sexuality, and ancestral lineage by celebrating life, death, and the afterlife.",
    description: [],
  },
  {
    slug: "bounce-back",
    title: "THAI MAINHARD",
    subtitle: "BOUNCE (BACK)",
    dateStart: "Jul 22, 2022",
    dateEnd: "Aug 14, 2022",
    location: "at The Living Room, East Hampton",
    excerpt:
      "FDP presents Bounce (Back) by artist Thai Mainhard. Mainhard explores the human experience of life and death and of grief and adaptation through abstract works with dense blocks of color.",
    description: [],
  },
  {
    slug: "calor-universal",
    title: "CALOR UNIVERSAL",
    subtitle: "IN COLLABORATION WITH PACE AND MENDES WOODS DM",
    dateStart: "Jul 2, 2022",
    dateEnd: "Jul 17, 2022",
    location: "at The Living Room, East Hampton",
    excerpt:
      "FDP, Pace Gallery, and Mendes Wood DM present Calor Universal. Curated by German Dushá, this exhibition brings together a cross-generational group of artists whose work engages with heat, energy, and universal forces.",
    description: [],
  },
  {
    slug: "eternal-circle",
    title: "LUCIEN SHAPIRO",
    subtitle: "ETERNAL CIRCLE",
    dateStart: "May 25, 2022",
    dateEnd: "Jun 26, 2022",
    location: "at The Living Room, East Hampton",
    excerpt:
      "FDP presents Eternal Circle by artist Lucien Shapiro. Shapiro creates a body of work that ultimately returns to the root, to the center of the circle, guiding us through a journey of connection and oneness.",
    description: [],
  },
  {
    slug: "crystallography",
    title: "ELAN GENTRY",
    subtitle: "CRYSTALLOGRAPHY",
    dateStart: "Aug 26, 2021",
    location: "at The Living Room, East Hampton",
    excerpt:
      "The Living Room is pleased to present Crystallography, a collection of crystals specially curated by Elan Gentry. Through Living Ceremony, Elan anoints groups into the multidimensional fabric of holographic inner space.",
    description: [],
  },
  {
    slug: "puffer-halo",
    title: "ELAINE STOCKI",
    subtitle: "PUFFER HALO",
    dateStart: "Aug 10, 2021",
    location: "at FDP Collection, NYC",
    excerpt:
      "FDP and Ballroom Marfa are pleased to exhibit seven new pieces by Elaine Stocki that explore abstraction through a remarkable process blending abstract expressionism, color field and assemblage.",
    description: [],
  },
  {
    slug: "a-particular-kind-of-heaven",
    title: "ISABEL ROWER",
    subtitle: "A PARTICULAR KIND OF HEAVEN",
    dateStart: "Jul 22, 2021",
    location: "at The Living Room, East Hampton",
    excerpt:
      "FDP presents Isabel Rower's first solo exhibition. Working primarily with clay, Rower utilizes the forms of everyday objects to explore the transformative properties of material and the elements of nature.",
    description: [],
  },
  {
    slug: "shadows-spanning-two-nights",
    title: "MIRANDA FENGYUAN ZHANG",
    subtitle: "SHADOWS SPANNING TWO NIGHTS",
    dateStart: "Jul 8, 2021",
    location: "at The Living Room, East Hampton",
    excerpt:
      "FDP presents Miranda Fengyuan Zhang's solo exhibition. Through the weaving of recycled threads, Zhang reconciles visceral experiences into an interplay of evocative shapes and colors.",
    description: [],
  },
  {
    slug: "an-impulsive-forage",
    title: "REBECCA MANSON",
    subtitle: "AN IMPULSIVE FORAGE",
    dateStart: "Jun 16, 2021",
    dateEnd: "Jul 5, 2021",
    location: "at The Living Room, East Hampton",
    excerpt:
      "FDP presents selected ceramic sculptures from Manson's studio. As a master of clay, Manson captures the vulnerabilities of nature, expressing the relationship between beauty and decay.",
    description: [],
  },
]

export function getExhibition(slug: string): Exhibition | undefined {
  return exhibitions.find((e) => e.slug === slug)
}
