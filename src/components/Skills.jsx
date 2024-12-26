import skillsData from "../json/skills.json";
import SkillCard from "./SkillCard";

export default function Skills() {
  return (
    <>
      <div
      id="skill-container"
        className="skill-container pb-20 pt-24 bg-gradient-to-r from-stone-950 to-indigo-950"
        style={{ zIndex: 100, position: "relative" }}
      >
        <h3 className="text-rose-600 text-center text-3xl font-bold mb-16 overflow-y-hidden">
          Skills and <span className="text-white">Tech Stack</span>
        </h3>
        <div className="skill flex flex-wrap justify-center gap-5 mx-5 align-center">
          {skillsData.map((skill, index) => (
            <div key={index} className="w-1/8 overflow-y-hidden">
              <SkillCard name={skill.name} path={skill.path} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
