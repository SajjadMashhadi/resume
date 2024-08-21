export default function Modal({
  title,
  description,
  technologies,
}: {
  title: string;
  description: string;
  technologies: string[];
}): React.ReactNode {
  return (
    <>
      <div className="transition-all duration-500  w-fit absolute top-[-120px] z-[1000] bg-[rgb(244_244_244)] dark:bg-[rgb(33_44_58)] min-w-[200px] min-h-[100px] text-sm p-[10px] rounded-[5px]  dark:shadow-[0_4px_8px_0_#0e0e0ed4,0_6px_20px_0_#0e0e0ed4]">
        <div className="font-bold text-lg dark:text-white ">{title}</div>
        <p>{description}</p>
        <div className="text-xs text-[#7f7f7f]">
          <span>technologies: </span>
          {technologies.map((item, index) => (
            <span key={item}>
              {item} {index + 1 < technologies.length && "-"}
            </span>
          ))}
        </div>
      </div>
      <div className=" absolute top-[-20px] left-[50px] z-[1500] w-0 h-0 border-t-[10px] border-t-[rgb(244_244_244)] dark:border-t-[rgb(33_44_58)] border-x-[10px] border-x-transparent border-solid "></div>
    </>
  );
}
