export type Post = {
  id: string;
  title: string;
  category: string;
  author: string;
  date: string;
  image: string;
  spanCol?: string;
  lead: string;
  pull: string;
  body: string[];
};

export const CATEGORIES = ["All", "News", "Studio", "Releases", "Culture"];

export const POSTS: Post[] = [
  {
    id: "inside-the-studio",
    title: "Inside the Studio: High Frequency",
    category: "Studio",
    author: "Ario PaPa",
    date: "JUL 2026",
    image: "/whalesails/img/press-5.jpg",
    spanCol: "md:col-span-2",
    lead: "A session log from the making of the new single — the gear, the take, and the instinct that became the hook.",
    pull: "The best takes are never rehearsed. They are earned in the first hour of listening.",
    body: [
      "The room goes dark before it goes loud. That is the ritual now — lights down, monitors up, and the track played once all the way through before a single fader moves. High Frequency started the same way every record we care about starts: with silence long enough to hear what is not there yet.",
      "The skeleton arrived as a voice note recorded at 2 a.m., three minutes of humming over a loop that had been sitting on the hard drive since the spring. What the voice note had that the demo did not was a melody with no apologies — the kind of line that does not ask permission. Everything after that was arrangement, which is another word for discipline.",
      "We tracked the drums in one afternoon. Two takes, no comping. The engineer wanted to fix a flam in the second bar; the producer asked him to leave it. That flam is the record now — proof that the take is the truth and the grid is a suggestion.",
    ],
  },
  {
    id: "why-ownership-matters",
    title: "The Long Game: Why Ownership Matters",
    category: "Culture",
    author: "Editorial",
    date: "JUN 2026",
    image: "/whalesails/img/press-1.jpg",
    lead: "Masters, publishing, and the quiet power of keeping what you make. A plain-language argument for the ownership model.",
    pull: "A catalogue is a career that keeps working while the artist sleeps.",
    body: [
      "The music business has always been a business of promises. Artists are asked to trade control today for exposure tomorrow, and too often the exposure arrives without the cheque. The ownership model exists to invert that equation: the artist keeps the masters, keeps the publishing, and keeps the right to decide what happens next.",
      "Ownership is not glamorous. It is contracts read at midnight, IP structures reviewed twice, and the patience to say no to a deal that would have paid quickly and owned everything. What ownership buys is time — the only currency in music that compounds.",
      "A catalogue is a career that keeps working while the artist sleeps. It is the difference between a hit and a life. Whalesails exists to build the second kind of asset, because we believe the artist who owns their work can afford to be great.",
      "We have structured every agreement at this label around one question: who does this serve in ten years? The answer is never the label alone. That is the whole philosophy, in one line.",
    ],
  },
  {
    id: "session-notes-first-take",
    title: "Session Notes: First Take",
    category: "Studio",
    author: "Whalesails Records",
    date: "JUN 2026",
    image: "/whalesails/img/artist-2.jpg",
    lead: "Raw field notes from the first studio session of the year — what worked, what failed, and what we will never repeat.",
    pull: "Failure in the studio is not a setback. It is the arrangement process made audible.",
    body: [
      "The first session of the year was a failure, and that is the best thing that happened to us in January. We arrived with a plan, a grid, and a running order; we left with a chorus that had changed key twice and a producer who had thrown a chair. The chair survived. The plan did not.",
      "What the day taught us is what every session teaches us when we let it: the room decides. The song we came to record was a song we already knew. The song we actually recorded was the one we discovered at 11 p.m. when the lights had dropped and the first idea stopped being precious.",
      "We are not repeating the mistake of over-planning. From now on, sessions begin with one question — what do we not know yet? — and end when the answer is in the can.",
    ],
  },
  {
    id: "signal-check",
    title: "Signal Check: What's Next for the Label",
    category: "News",
    author: "Editorial",
    date: "MAY 2026",
    image: "/whalesails/img/press-8.jpg",
    lead: "Releases in the pipeline, a new creative partnership, and the roadmap for the second half of the year.",
    pull: "We release when the work is ready — not when the calendar is.",
    body: [
      "The second half of the year is locked: a flagship single, a follow-up project in the final stages, and a creative direction overhaul that has been two years in the making. None of it has a release date that survives contact with the studio, and that is by design. We release when the work is ready, not when the calendar is.",
      "Beyond the music, the label is formalising a creative partnership that will bring a new visual identity to every release — photography, typography and motion treated as first-class elements of the record, not afterthoughts.",
      "Expect the first signal this quarter. The rest will announce itself when it is ready to be heard.",
    ],
  },
  {
    id: "from-lagos-to-the-world",
    title: "From Lagos to the World: The Ario PaPa Story",
    category: "News",
    author: "Editorial",
    date: "MAY 2026",
    image: "/whalesails/img/artist-5.jpg",
    lead: "The flagship artist of Whalesails Records on growing up in Lagos, building a catalogue, and carrying a city's sound outward.",
    pull: "Lagos taught me that sound is never just sound — it is conversation, memory and argument at once.",
    body: [
      "Every city has a frequency, and Lagos runs hot. It is a city of generators and choirs, of traffic that hums in keys, of church bells and club systems competing for the same air. For Ario PaPa, that frequency is the source: the music is not made despite the noise, but from it.",
      "The catalogue he is building with Whalesails is deliberately slow. Three singles, one direction, no chasing the algorithm. The goal is a body of work that a listener discovers in 2026 and still finds true in 2036.",
      "The sound is unmistakably Lagos — the bounce, the restraint, the melody that answers a question no one asked. The reach is the world. Between those two poles lies everything the label is trying to do.",
    ],
  },
  {
    id: "playlist-intelligence",
    title: "Playlist Intelligence: Engineering the Stream",
    category: "Releases",
    author: "Editorial",
    date: "APR 2026",
    image: "/whalesails/img/press-2.jpg",
    spanCol: "md:col-span-2",
    lead: "How we think about streaming — playlists as pipelines, data as a mirror, and why the song always comes first.",
    pull: "The algorithm rewards attention. We reward the people who earn it.",
    body: [
      "Streaming is a mirror, not a master. The numbers tell you what happened — which markets leaned in, which playlists moved the needle, where the drop-off lives. What they never tell you is why. That gap is where A&R still matters, and where it always will.",
      "Our release strategy treats playlists as pipelines: editorial placement, algorithmic surfaces and the artist's own audience each play a role, and each is planned before the single is finalised. The artwork, the title, the drop date — all of it is engineered with the same care as the mix.",
      "But the strategy only works if the song holds. Data does not make a chorus land; a chorus makes the data look good. We build the record first and let the numbers explain it afterwards.",
    ],
  },
];
