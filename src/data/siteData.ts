import { EntertainmentProject, MusicTrack } from '../types';

export const IMDB_PROFILE_URL = 'https://www.imdb.com/name/nm5042217/';

export const PRESS_RELEASE_PDF_URL = '/assets/aistudio/USA_FOR_IMMEDIATE_RELEASE_8d51684f.pdf';

export const PRESS_RELEASE_DATA = {
  banner: 'FOR IMMEDIATE RELEASE',
  headline:
    'Creator Ivon Skula (Illurei) Launches New U.S. Sitcom Chill Pill, Expands Feature Film Slate Including The Dresden Codex, Greenwash, and The Thought, and Releases Iconic Track Time of Greatness.',
  dateline: 'LOS ANGELES, November 18, 2026',
  lead:
    'Artist, screenwriter, musician, and producer Ivon Skula, through her production company Illurei, officially announces the development of a new comedy series (sitcom) titled Chill Pill in the United States, collaborating with established Hollywood talent. Alongside the television project, Skula is actively advancing a slate of feature films in pre-production—headlined by the mystery sci-fi crime thriller The Dresden Codex, which she wrote and which has already caught the attention of the producer behind global blockbusters including Kingdom of Heaven, Alien vs. Predator, and The Bourne Supremacy, alongside the action feature Greenwash and the psychological thriller The Thought.',
  quote:
    '“Chill Pill was born as a fresh, ironic, and deeply human response to today’s fast-paced world, and working alongside seasoned Hollywood talent brings an incredible energy to the project. At the same time, I am intensively developing my feature film slate—led by The Dresden Codex, which has drawn interest from the producer of Kingdom of Heaven, Alien vs. Predator, and The Bourne Supremacy, together with the action film Greenwash and the psychological thriller The Thought. Having set these productions in motion, I am diving back full-force into my personal music career, marked symbolically by the release of my iconic track Time of Greatness,”',
  quoteAttribution: 'Ivon Skula',
  internationalAcclaim:
    "These new U.S. ventures build directly on Skula's established international acclaim. Her original short fashion film Mirage, which she directed, earned widespread recognition abroad, winning prestigious festival awards in Cannes (France), Italy, and at the La Jolla International Fashion Film Festival in the United States. Her distinctive visual signature as a photographer and creative director has also been featured in international fashion media, with editorials published in Vogue. These milestones paved the way for her expansion into international film and television production.",
  musicSection:
    'Alongside her film and television slate, Skula is making a major push in music. With her current film projects underway, she is focusing once again on her solo recording career, anchored by the release of her flagship track Time of Greatness. Her catalog also includes her original album LEVON as well as collaborative tracks recorded with the California-based band Stony Point. Her music—including the new release Time of Greatness—is available across all major streaming platforms, including Spotify, Apple Music, and YouTube.',
  closing:
    'Led by Ivon Skula, Illurei focuses on international production and creator-driven projects designed for global audiences. Further details regarding the cast of Chill Pill, premiere dates, and production updates for The Dresden Codex, Greenwash, and The Thought will be announced in the coming months.',
  aboutCompany:
    'Illurei is a production and creative company founded by Ivon Skula, dedicated to the development and production of original film, television, and multimedia properties for the international market.',
  mediaContact: {
    office: 'Illurei – Press Office',
    email: 'contact@luminouscapital.com',
  },
  streamingLinks: [
    {
      label: 'New Release: Time of Greatness – Smart Link / Direct Tracks',
      platform: 'Smart Link',
      url: 'https://found.ee/e49pVy',
    },
    {
      label: 'Spotify: Direct Link to Ivon Skula Spotify Profile',
      platform: 'Spotify',
      url: 'https://open.spotify.com/track/5gYWkoGd4gFQ2NgKxSPPbw?si=OMnbkGAdRnqpmUEaGszIZQ&utm_source=copy-link&sci=spotify%3Acard-config%3A1xyLKzvAv33l0EqJuE1wMH',
    },
    {
      label: 'Apple Music: Direct Link to Ivon Skula Apple Music Profile',
      platform: 'Apple Music',
      url: 'https://music.apple.com/us/album/time-of-greatness-feat-stony-point-single/6836382067',
    },
    {
      label: 'YouTube: Ivon Skula Official Channel',
      platform: 'YouTube',
      url: 'https://youtube.com/@ivonskula',
    },
    {
      label: 'Collaborations: Tracks with California band Stony Point',
      platform: 'YouTube Collaboration',
      url: 'https://youtu.be/QZm9cUHueEI?is=Avexctfij0L8m_Pv',
    },
  ],
};

export const CONTACT_INFO = {
  emails: [
    {
      label: 'Primary Inquiries',
      address: 'contact@luminouscapital.com',
    },
    {
      label: 'Illurei Entertainment',
      address: 'illureiinc@gmail.com',
    },
  ],
  phones: [
    {
      display: '+1 (650) 564-7670',
      href: 'tel:+16505647670',
      region: 'United States',
    },
    {
      display: '+43 (650) 941-6297',
      href: 'tel:+436509416297',
      region: 'Austria',
    },
  ],
  locations: ['Vienna, Austria', 'New York, USA'],
};

export const VISION_METRICS = [
  {
    value: '70',
    description: 'Percent reduction in carbon footprint',
  },
  {
    value: '40',
    description: 'Percent increase in green spaces',
  },
  {
    value: '90',
    description: 'Percent renewable energy usage',
  },
];

export const BIO_CITIES_PILLARS = [
  {
    id: 'green-infrastructure',
    title: 'Green Infrastructure',
    description:
      'Integrating natural systems into urban design to improve air quality, manage stormwater, and enhance biodiversity.',
    icon: 'leaf',
  },
  {
    id: 'renewable-energy',
    title: 'Renewable Energy',
    description:
      'Implementing cutting-edge renewable energy solutions to power cities sustainably and reduce carbon emissions.',
    icon: 'zap',
  },
  {
    id: 'circular-economy',
    title: 'Circular Economy',
    description:
      'Designing systems that eliminate waste and pollution by keeping products and materials in use and regenerating natural systems.',
    icon: 'recycle',
  },
  {
    id: 'smart-buildings',
    title: 'Smart Buildings',
    description:
      'Creating energy-efficient structures that adapt to environmental conditions and occupant needs while minimizing resource use.',
    icon: 'building',
  },
] as const;

export const MISSION_STEPS = [
  {
    step: '1',
    title: 'Project Inception',
    description:
      'The vision for bio-sustainable cities takes shape through collaborative research and planning.',
  },
  {
    step: '2',
    title: 'Prototype Development',
    description:
      'Initial concepts are tested and refined through small-scale implementations and simulations.',
  },
  {
    step: '3',
    title: 'Partnership Formation',
    description:
      'Strategic alliances with urban planners, environmental organizations, and technology innovators.',
  },
  {
    step: '4',
    title: 'Implementation Phase',
    description:
      'Bringing bio-city concepts to life through pilot projects and urban transformations.',
  },
];

export const ENTERTAINMENT_PROJECTS: EntertainmentProject[] = [
  {
    id: 'the-thought',
    title: 'The Thought',
    subtitle: 'Psychological Thriller · Feature Film',
    format: 'Feature Film',
    tagline: 'When one man controls every thought, who is left to think?',
    description:
      'Psychological thriller feature film in Illurei’s active pre-production slate exploring perception, collective autonomy, and control.',
    image: '/assets/aistudio/1000088381_d33ba20a.png',
    imageAlt: 'The Thought official theatrical movie poster',
    aspectRatio: '848 / 1264',
    credits: 'Illurei Feature Slate · Presented by Loren Emersen · #TheThoughtFilm',
    highlights: ['Theatrical Key Art', 'Psychological Thriller', 'Official Film Artwork'],
  },
  {
    id: 'chill-pill',
    title: 'Chill Pill',
    subtitle: 'The TV Series · U.S. Sitcom',
    format: 'Television Series',
    tagline: 'A fresh, ironic, and deeply human response to today’s fast-paced world.',
    description:
      'New U.S. comedy series (sitcom) developed by Ivon Skula through Illurei in collaboration with established Hollywood talent.',
    image: '/assets/aistudio/1000090572_c22dec79.png',
    imageAlt: 'Chill Pill The TV Series official promotional poster',
    aspectRatio: '843 / 1264',
    credits: 'Created by Ivon Skula · Illurei Entertainment',
    highlights: ['U.S. Comedy Series', 'Ensemble Key Art', 'In Development'],
  },
  {
    id: 'greenwash-poster',
    title: 'The Greenwash Project',
    subtitle: 'Theatrical Poster · Feature Film',
    format: 'Feature Film',
    tagline: 'Some cities are greener than they look.',
    description:
      'Minimalist theatrical release poster featuring the emerald watercolor skyline motif bridging ecological themes and investigative cinema.',
    image: '/assets/aistudio/1000088414_3f737f0c.png',
    imageAlt: 'The Greenwash Project minimalist theatrical poster with IMDb and Green Light Films marks',
    aspectRatio: '848 / 1264',
    credits: 'Green Light Films · Listed on IMDb',
    highlights: ['Theatrical One-Sheet', 'Green Light Films', 'IMDb Featured'],
  },
  {
    id: 'greenwash-press-sheet',
    title: 'The Greenwash Project — Feature Dossier',
    subtitle: 'Official Synopsis, Cast & Critical Overview',
    format: 'Official Film Dossier',
    tagline: 'When corporations go green, the truth often drowns in watercolor.',
    description:
      'An investigative journalist uncovers a multinational corporation’s vast greenwashing campaign, revealing the destruction behind the eco-friendly facade. From the Parthenon to boardrooms, the truth is anything but clean.',
    image: '/assets/aistudio/1000088382_a5a54a37.png',
    imageAlt: 'The Greenwash Project official synopsis, cast, awards, and critics feature sheet',
    aspectRatio: '848 / 1264',
    credits: 'Director: Sarah Jenkins · Writers: M. T. Lynch, J. Reed · Runtime: 104 min',
    highlights: ['8.4/10 Rating', 'Sundance Best Doc Winner', 'Academy Award Nominee'],
  },
  {
    id: 'levon-live',
    title: 'Levon',
    subtitle: 'Original Album & Live Stage Production',
    format: 'Music & Live Stage',
    tagline: 'Live performance energy from keys to center stage.',
    description:
      'Visual showcase for Ivon Skula’s original album LEVON and live stage music production.',
    image: '/assets/aistudio/1000090577_b76bd026.jpg',
    imageAlt: 'Levon live stage concert performance with synthesizer keyboard in foreground',
    aspectRatio: '1080 / 2400',
    credits: 'Ivon Skula · Illurei Entertainment Music Division',
    highlights: ['Original Album LEVON', 'Live Stage Production', 'Concert Visuals'],
  },
];

export const DEFAULT_MUSIC_TRACKS: MusicTrack[] = [
  {
    id: 'time-of-greatness',
    title: 'Time of Greatness (feat. Stony Point)',
    artist: 'Ivon Skula · Stony Point',
    project: 'Flagship Single Release',
    durationSec: 212,
    bpm: 98,
    rootHz: 246.94, // B3
    chordHz: [246.94, 293.66, 369.99, 440.0], // Bm7
  },
  {
    id: 'levon-overture',
    title: 'LEVON (Stage Overture)',
    artist: 'Ivon Skula · Live Keys Session',
    project: 'Original Album LEVON',
    durationSec: 194,
    bpm: 96,
    rootHz: 220, // A3
    chordHz: [220, 261.63, 329.63, 392.0], // Am7
  },
  {
    id: 'bio-cities-horizon',
    title: 'Future Cities Horizon',
    artist: 'Illurei Sound Lab',
    project: 'Bio Cities Project Score',
    durationSec: 218,
    bpm: 84,
    rootHz: 196, // G3
    chordHz: [196, 246.94, 293.66, 369.99], // Gmaj7
  },
  {
    id: 'the-thought-pulse',
    title: 'Glass Corridor (Main Theme)',
    artist: 'Illurei Score Ensemble',
    project: 'The Thought',
    durationSec: 176,
    bpm: 108,
    rootHz: 146.83, // D3
    chordHz: [146.83, 174.61, 220.0, 261.63], // Dm7
  },
];
