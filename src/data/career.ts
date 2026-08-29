export type Opening = {
  slug: string;
  title: string;
  location: string;
  type: string;
  desc: string;
  about: string;
  responsibilities: string[];
  requirements: string[];
};

export const OPENINGS: Opening[] = [
  {
    slug: "recording-mix-engineer",
    title: "Recording & Mix Engineer",
    location: "Lagos",
    type: "Full-time",
    desc: "Push sessions to a cinematic standard — tracking, editing and mixing with patience and precision.",
    about:
      "Every Whalesails release is built to outlast the trend that inspired it. As our Recording & Mix Engineer, you will be the technical backbone of the studio — turning raw performances into the warm, cinematic mixes the label is known for.",
    responsibilities: [
      "Record and track artists across vocal, instrumental and live sessions to a pristine standard.",
      "Edit, align and comp takes with patience and musical judgement.",
      "Mix records to a cinematic, radio- and streaming-ready standard.",
      "Maintain the studio signal chain, microphones and outboard gear.",
      "Collaborate with producers and A&R to protect the label's sound.",
    ],
    requirements: [
      "Proven experience mixing professional releases (portfolio required).",
      "Deep command of a modern DAW and analogue outboard gear.",
      "A meticulous ear and obsessive attention to detail.",
      "Ability to work under deadline without compromising quality.",
    ],
  },
  {
    slug: "ar-artist-development",
    title: "A&R / Artist Development",
    location: "Remote",
    type: "Full-time",
    desc: "Scout and develop long-term talent. You protect the vision, the work and the ownership model.",
    about:
      "Whalesails develops artists for the long game — never the algorithm. As our A&R / Artist Development lead, you will find distinctive voices, then protect and shape them over years, not singles.",
    responsibilities: [
      "Scout and sign artists with durable cultural value.",
      "Shape artistic vision, sound and narrative across projects.",
      "Develop release strategies that build catalogues over time.",
      "Mentor artists through the ownership-first model of the label.",
      "Work cross-functionally with engineering, visual and marketing teams.",
    ],
    requirements: [
      "Strong network across the African and global music scenes.",
      "A proven track record in artist development and A&R.",
      "Excellent taste and instinct balanced with commercial thinking.",
      "Commitment to the label's long-term, ownership-first philosophy.",
    ],
  },
  {
    slug: "visual-director",
    title: "Visual Director",
    location: "Lagos",
    type: "Contract",
    desc: "Own artwork, campaigns and the visual identity that keeps the catalogue timeless.",
    about:
      "The Whalesails visual identity is restrained, cinematic and timeless. As Visual Director, you will own every frame — from single artwork to full campaign direction — ensuring the catalogue feels like one cohesive world.",
    responsibilities: [
      "Direct artwork, photography and motion for every release.",
      "Define and guard the label's visual identity across all touchpoints.",
      "Lead campaign creative from concept to final delivery.",
      "Art-direct shoots and collaborate with photographers and designers.",
      "Keep the visual language timeless rather than trend-hungry.",
    ],
    requirements: [
      "A strong, cohesive portfolio spanning print, digital and motion.",
      "Experience art-directing photoshoots and campaigns.",
      "Mastery of industry-standard design and retouching tools.",
      "A refined sense of cinematic, editorial aesthetics.",
    ],
  },
  {
    slug: "digital-distribution-strategy",
    title: "Digital Distribution & Strategy",
    location: "Remote",
    type: "Full-time",
    desc: "Route releases across streaming platforms and grow the catalogue with intention, never hype.",
    about:
      "Distribution at Whalesails is deliberate. As our Digital Distribution & Strategy lead, you will route every release to the right platforms at the right time, growing the catalogue with intention and real analytics — never manufactured hype.",
    responsibilities: [
      "Manage global distribution across streaming and download platforms.",
      "Build release timelines and territory strategies per project.",
      "Analyse streaming data to inform the label's next moves.",
      "Optimise metadata, artwork and playlist strategy.",
      "Grow the catalogue deliberately across markets.",
    ],
    requirements: [
      "Deep understanding of DSPs, distributors and their dashboards.",
      "Experience with data analytics and streaming reporting.",
      "Strategic thinking with a long-term, anti-hype mindset.",
      "Strong organisation across multiple simultaneous releases.",
    ],
  },
];
