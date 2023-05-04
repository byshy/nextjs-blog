import TeamSolarify from "./teamSolarify/team-solarify";

export default function Home() {
  let memberSize = 100;
  let circleSize = 400;
  let teamMembers = [
    {
      image: "https://picsum.photos/20/300",
      name: "Basel",
    },
    {
      image: "https://picsum.photos/20/30",
      name: "Norhan",
    },
    {
      image: "https://picsum.photos/200/30",
      name: "Mohammed",
    },
    {
      image: "https://picsum.photos/200/300",
      name: "Hadeel",
    },
  ];
  return (
    <TeamSolarify
      memberSize={memberSize}
      circleSize={circleSize}
    >
        {teamMembers.map((member, index) =>
          member.name
        )}
    </TeamSolarify>
  );
}
