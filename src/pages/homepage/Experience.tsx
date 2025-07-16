import WrapperBody from "../../layouts/wrapper";
import profileJson from "../../configs/portfolio.json";
import { FaAward } from "react-icons/fa";
import dayjs from "dayjs";

// Step 1: Define TypeScript interfaces
interface ExperienceItem {
  from: string | number;
  to: string | number;
  logo: string;
  company: string;
  role: string;
  descriptions: string[];
}

interface ProfileData {
  experience: ExperienceItem[];
}

// Step 2: Tell TypeScript what the JSON contains
const profile = profileJson as ProfileData;

// Step 3: Now use it safely
export default function Experience() {
  const experiences: ExperienceItem[] = profile.experience;

  return (
    <div id="experience" className="w-full border-b border-dashed border-zinc-800">
      <WrapperBody>
        <div className="flex flex-col gap-4">
          <p className="flex gap-2 items-center font-['Geist'] font-bold text-2xl">
            <FaAward /> Experience
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {experiences.map((experience, index) => (
              <div
                key={`${experience.from}-${index}`}
                className="flex flex-col gap-6 border border-zinc-800 hover:border-zinc-600 p-8 rounded-lg cursor-pointer"
              >
                <div className="flex flex-col justify-start items-center gap-4">
                  <img
                    src={experience.logo}
                    alt="logo"
                    className="max-w-36 max-h-18 w-full h-full object-contain"
                  />
                  <p className="font-['Geist'] text-center text-white font-semibold">
                    {experience.company}
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-zinc-50 font-semibold">{experience.role}</p>
                    <p className="text-sm text-zinc-500">
                      {dayjs(experience.from).format("MMM YYYY")} ~{" "}
                      {typeof experience.to === "string" &&
                      experience.to.toLowerCase() === "present"
                        ? "Present"
                        : dayjs(experience.to).format("MMM YYYY")}
                    </p>
                  </div>
                  <ul className="text-sm text-zinc-300 mt-3 pl-4">
                    {experience.descriptions.map((description, i) => (
                      <li key={`${index}-${i}`} className="list-disc leading-relaxed">
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
  );
}
