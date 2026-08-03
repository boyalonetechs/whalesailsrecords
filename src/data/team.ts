export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "member-1",
    name: "Adaora Nwosu",
    role: "FOUNDER & CEO",
    bio: "Career development strategist with over a decade of experience building talent pipelines across Africa.",
    imageUrl: "/logo.png",
  },
  {
    id: "member-2",
    name: "Emeka Okafor",
    role: "HEAD OF CONSULTING",
    bio: "Business transformation lead helping organisations design capital-efficient strategies that deliver measurable results.",
    imageUrl: "/logo.png",
  },
  {
    id: "member-3",
    name: "Tunde Bakare",
    role: "DIGITAL SKILLS DIRECTOR",
    bio: "Digital education advocate powering Dplearn and hands-on training programs for the next generation of creators.",
    imageUrl: "/logo.png",
  },
];
