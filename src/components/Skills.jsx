import skillsData from "../json/skills.json";
import SkillCard from "./SkillCard";

export default function Skills() {
  return (
    <div
      id="skill-container"
      className="pb-20 pt-24 bg-gradient-to-r from-stone-950 to-indigo-950"
      style={{ zIndex: 100, position: "relative" }}
    >
      <h3 className="text-rose-600 text-center text-3xl font-bold mb-16">
        Skills and <span className="text-white">Tech Stack</span>
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5 px-5 max-w-7xl mx-auto">
        {skillsData.map((skill, index) => (
          <SkillCard
            key={index}
            name={skill.name}
            path={skill.path}
          />
        ))}
      </div>
    </div>
  );
}