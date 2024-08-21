import Image from "next/image";
import Gallery from "@/app/ui/gallery";

export default function Page() {
  return (
    <div>
      <div className="pt-[30px] flex flex-col gap-[20px]">
        <div>
          <p className="text-justify mb-[10px]">
            2 years experience in{" "}
            <span className="font-bold dark:text-gray-300 ">Nahira Inc.</span>{" "}
            and developed over 10 responsive web pages such as shop and driver
            app admin panel, online card games, sport blogs, etc. using ReactJS,
            JQuery, GraphQL, SocketIO, Material UI, etc.
          </p>
          <Gallery />
        </div>
        <div>
          <p className="text-justify">
            Bachelor of computer engineering at{" "}
            <span className="font-bold dark:text-gray-300">
              Kharazmi university
            </span>{" "}
            (2018-2022)
          </p>
        </div>
        <div>
          <p>Download link for resume (pdf):</p>
          <a
            target="_blank"
            href="https://cvbuilder.me/Builder/Pdf/en/Template4/832ecea4-2e4d-44de-b446-d7e572c47472/MyResume-541[www.cvbuilder.me]968.pdf"
            className="  flex flex-row items-center w-fit"
          >
            <Image
              width={18}
              height={18}
              className="mr-[6px]"
              src="/pdf.svg"
              alt="resume"
            />{" "}
            PDF resume
          </a>
        </div>
      </div>
    </div>
  );
}
