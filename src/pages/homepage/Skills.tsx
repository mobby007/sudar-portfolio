import WrapperBody from "../../layouts/wrapper";
import profile from "../../configs/portfolio.json";
import { FaBrain } from "react-icons/fa";

export default function Skills() {
  return (
    <div id="skills" className="w-full border-b border-dashed border-zinc-800">
      <WrapperBody>
        <div className="flex flex-col gap-4">
          <p className="flex gap-2 items-center font-['Geist'] font-bold text-2xl"><FaBrain />Skills</p>
          <div className="flex flex-wrap gap-4">
            {profile.skills.map((skill) => (
              <div key={skill}>
                <p className="text-sm border border-zinc-800 hover:border-zinc-600 px-4 py-2 rounded-lg cursor-pointer">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </WrapperBody>
    </div>
  )
}