import React, { useState } from "react";
import skills from "../Skills";

function Skill() {
  const [skill, setSkill] = useState(skills);

  return (
    <main className="p-4  skill_section" id="skill">
      <h1 className="text-center display-2 mb-4">Skills</h1>

      <ul className="list-group text-center">
        {skill.map((ele) => (
          <li className={"list-group-item"} key={ele.name}>
            <strong className={"me-5"}>{ele.name}</strong>{" "}
            <img src={ele.img} height={"30px"} width={"30px"} />
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Skill;
