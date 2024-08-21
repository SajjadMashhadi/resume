import Profile from "./ui/profile";

export default function Home(): React.ReactNode {
  return (
    <main className="pt-5 flex flex-col gap-5">
      <div>
        <div className="text-3xl font-bold dark:text-white">
          Sajjad Mashhadi
        </div>
        <div className="text-[12px] text-gray-500 mt-[5px]">Iran, 1998</div>
      </div>
      <p className="text-justify">
        I{"'"}m a Motivated Front End Developer with 4 years of experience in
        creating responsive and user-friendly web applications. Proficient in
        JS, React, Next, TypeScript, etc. Adept at collaborating with
        cross-functional teams to deliver high-quality software solutions that
        enhance user experience.
      </p>
      <Profile />
      <p className="text-justify">
        Developed and maintained responsive web applications, collaborated with
        UX/UI designers to implement modern design principles.
      </p>

      <p className="text-justify"></p>
    </main>
  );
}
