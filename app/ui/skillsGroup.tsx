import { skill as skillType } from "@/app/utils/types";
import Image from "next/image";

export default function SkillsGroup({
  title,
  items,
}: {
  title: string;
  items: skillType[];
}): React.ReactNode {
  return (
    <div>
      <p className="mb-[5px] text-[13px]">{title} :</p>
      <div className="flex flex-row gap-[40px] content-center">
        {items.map((item) => (
          <div className="flex flex-row content-center" key={item.text}>
            {item.src ? (
              <Image src={item.src} width={20} height={20} alt={item.text} />
            ) : null}
            <div>{item.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
