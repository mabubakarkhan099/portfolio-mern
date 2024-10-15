'use client'
import { useState } from "react";
import { personalSkills } from "./skillsData";
const skillBulletStyle = `flex items-center`;
const iconStyle = `mobile:text-4xl text-5xl p-2`;
const headingStyle = `p-2 text-xl`;

function SkillsSection() {
  const skills = personalSkills;
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <>
      <div className="grid mobile:grid-cols-2 sm:grid-cols-3 gap-2 skills-section">
        {skills.map((skill) => (
          <div key={skill.name} className={`skill relative grid grid-cols-4 ${skillBulletStyle} ${skill.bgColor} text-white`} onMouseEnter={() => setHoveredSkill(skill)} onMouseLeave={() => setHoveredSkill(null)}>
            <div className={`icon ${skill.hoverBgColor} col-span-1 aspect-square flex items-center justify-center h-full`}>
              <skill.icon className={`${iconStyle}`} />
            </div>
            <p className={`heading col-span-3 ${headingStyle}`}>{skill.name}</p>
          </div>
        ))}
      </div>
      <div className="p-5 relative">
        {hoveredSkill ? (
          <div className="relative">
            {/* Text content */}
            <div className=" relative z-10">
              <h2 className="text-2xl font-bold">{hoveredSkill.name}</h2>
              <p className="text-xl">{hoveredSkill.description}</p>
            </div>
            {/* Skill icon */}
            <div className="absolute right-0 top-4 bottom-0 flex justify-center">
              <hoveredSkill.icon className="text-9xl text-gray-200 z-0" />
            </div>
          </div>
        ) : (
          <p className="text-xl">Hover over a skill to see more information</p>
        )}
      </div>
    </>
  );
}

export default SkillsSection;
