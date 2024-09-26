import Image from "next/image";
import Gallery from "@/app/ui/gallery";

export default function Page() {
  return (
    <div className="flex flex-row gap-[10px] pt-[30px]">
      <div className="flex flex-col items-center pt-[3px] gap-[5px]">
        <Image
          width={40}
          height={40}
          className=" max-w-[50px] rounded-[2px] "
          src="/kharazmi.JFIF"
          alt="kharazmi"
        />
        <div className="w-[1px] h-[80px] sm:h-[60px] lg:h-[40px] xl:h-[60px] 2xl:h-[35px] bg-gray-300 dark:bg-gray-700"></div>
        <Image
          width={40}
          height={40}
          className=" max-w-[50px] rounded-[2px] "
          src="/nahira.JFIF"
          alt="kharazmi"
        />
        <div className="w-[1px] h-[848px] sm:h-[385px] lg:h-[340px] xl:h-[345px] bg-gray-300 dark:bg-gray-700"></div>
        <div className="w-[20px] h-[20px] rounded-[50%] bg-gray-300 dark:bg-gray-700"></div>
      </div>
      <div className=" flex flex-col pt-[10px] gap-[60px]">
        <div>
          <p className="text-justify">
            Bachelor of computer (software) engineering at{" "}
            <span className="font-bold dark:text-gray-300">
              Kharazmi university
            </span>{" "}
            (2018-2022)
          </p>
        </div>
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
          <p className="text-justify w-fit px-[5px] rounded-[5px] font-bold text-[14px] bg-green-800 text-white">
            #OPENTOWORK
          </p>
        </div>
        <div className="text-[13px]">
          <p>Download link for resume (pdf):</p>
          <a
            target="_blank"
            href="https://cvbuilder.me/Builder/Pdf/en/Template4/832ecea4-2e4d-44de-b446-d7e572c47472/MyResume-902[www.cvbuilder.me]48.pdf"
            className="  flex flex-row items-center w-fit hover:underline"
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
