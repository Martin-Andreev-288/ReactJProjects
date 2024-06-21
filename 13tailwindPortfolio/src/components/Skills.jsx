import { skills } from "../data";
import SectionTitle from "./SectionTitle";
import SkillsCard from "./SkillsCard";
/* nqkolko neshta
1. implementirame skills
2. pravim taka, che da mozhe da se skrolva smooth (v index.html)
3. tova go pravq az - pravim taka, che da ne ni izskacha greshka pri tova pravilo za lipsvashti prop-types */
const Skills = () => {
  return (
    <section className="py-20 align-element" id="skills">
      <SectionTitle text="tech stack" />
      <div className="py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => {
          return <SkillsCard key={skill.id} {...skill} />;
        })}
      </div>
    </section>
  );
};
export default Skills;
