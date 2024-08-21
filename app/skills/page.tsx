import { skillsData } from "@/app/utils/data";
import SkillsGroup from "../ui/skillsGroup";

export default function Page() {
  return (
    <div>
      <div className="pt-[30px] flex flex-col gap-[30px]">
        {skillsData.map((item) => (
          <SkillsGroup key={item.title} title={item.title} items={item.items} />
        ))}
      </div>
    </div>
  );
}
