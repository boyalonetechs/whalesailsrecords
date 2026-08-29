export const SERVICES = [
  {
    num: "01",
    title: "Brand Partnership & Activation",
    desc: "Collaborate with Whalesails to develop tailor-made branded solutions for your marketing campaigns and brand activation efforts.",
    img: "/whalesails/img/press-1.jpg",
    round: "l"
  },
  {
    num: "02",
    title: "Music Sync & Licensing",
    desc: "You can leverage our new and existing catalogues for use in games, TV shows, movies or video games.",
    img: "/whalesails/img/press-4.jpg",
    round: "r"
  },
  {
    num: "03",
    title: "Performance & Appearances",
    desc: "We create and manage bespoke events for you or your brands with our key industry partners, spanning technicals to locations. Speak to our event curators today.",
    img: "/whalesails/img/press-2.jpg",
    round: "l"
  },
  {
    num: "04",
    title: "Content Production",
    desc: "Our unique creative team creates custom-made content suitable for you or your brand.",
    img: "/whalesails/img/press-8.jpg",
    round: "r"
  },
];

export const PLATFORMS = [
  {
    name: "Spotify",
    tag: "STREAM",
    url: "https://open.spotify.com/artist/4jUd2ZZE9NoLBiDIsXdQIK?si=kggjJUhoRR2CLLRp33ZtOw&utm_source=copy-link",
  },
  {
    name: "Apple Music",
    tag: "STREAM",
    url: "https://music.apple.com/gb/artist/ario-papa/1755429756",
  },
  {
    name: "Audiomack",
    tag: "STREAM",
    url: "https://audiomack.com/ariopapa",
  },
  {
    name: "Instagram",
    tag: "FOLLOW",
    url: "https://www.instagram.com/iam_ariopapa?igsh=b3I0bTY5eTgzaTJn&utm_source=qr",
  },
  {
    name: "TikTok",
    tag: "FOLLOW",
    url: "https://www.tiktok.com/@ariopapa?_r=1&_t=ZS-97srPTG3a68",
  },
  {
    name: "Facebook",
    tag: "FOLLOW",
    url: "https://www.facebook.com/share/1BGsUgtHeg/?mibextid=wwXIfr",
  },
];

export const CONTACT = {
  email: "info@whalesailsrecords.com",
  location: "Lagos, Nigeria",
};

export type Release = {
  id: number;
  title: string;
  artist: string;
  img: string;
  link: string;
};

export const RELEASES: Release[] = [
  {
    id: 1,
    title: "High Frequency",
    artist: "Ario PaPa",
    img: "/whalesails/artwork-song.png",
    link: "https://ariopapa.com/high-frequency",
  },
  {
    id: 2,
    title: "O Chim oO",
    artist: "Ario PaPa",
    img: "/whalesails/releases/ochimoo.webp",
    link: "https://ariopapa.com/o-chim-oo",
  },
  {
    id: 3,
    title: "Mummy",
    artist: "Ario PaPa",
    img: "/whalesails/releases/mummy.webp",
    link: "https://ariopapa.com/mummy",
  },
  {
    id: 4,
    title: "Nwannem",
    artist: "Ario PaPa",
    img: "/whalesails/releases/nwannem.webp",
    link: "https://ariopapa.com/nwannem",
  },
];