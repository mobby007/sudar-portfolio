import WrapperBody from "../../layouts/wrapper";
import profile from "../../configs/portfolio.json";
import { FaAward } from "react-icons/fa";
import dayjs from "dayjs";

export default function Experience() {
  return (
    <div id="experience" className="w-full border-b border-dashed border-zinc-800">
      <WrapperBody>
        <div className="flex flex-col gap-4">
          <p className="flex gap-2 items-center font-['Geist'] font-bold text-2xl"><FaAward />Experience</p>
          <div className="grid grid-cols-2 gap-4">
            {profile.experience.map((experience) => (
              <div
                key={experience.from}
                className="flex gap-6 border border-zinc-800 hover:border-zinc-600 p-6 rounded-lg cursor-pointer"
              >
                <div className="flex flex-col justify-center items-center gap-4">
                  <img src={experience.logo} alt="logo" className="w-32" />
                  <p className="font-['Geist'] text-white font-bold cursor-pointer">
                    {experience.company}
                  </p>
                </div>
                <div>
                  <p className="text-zinc-50 font-semibold">{experience.role}</p>
                  <p className="text-sm text-zinc-500">
                    {dayjs(experience.from).format('MMM YYYY')} ~ {dayjs(experience.to).format('MMM YYYY')}
                  </p>
                  <ul className="text-sm text-zinc-300 mt-3 pl-4">
                    {experience.descriptions.map((description, index) => (
                      <li key={`${experience.from}-${index}`} className="list-disc">
                        {description}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </WrapperBody>
    </div>
  )
}