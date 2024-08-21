import Image from "next/image";

export default function Background() {
  return (
    <div className="pt-[30px]">
      <p className="text-justify">
        Feel free to send a message if you need me on your team, as I{"'"}m
        currently open to work.
      </p>
      <div>
        <div className="flex flex-col justify-center gap-[10px] mt-[25px] text-sm text-[lightslategray]">
          <a
            target="_blank"
            href="https://t.me/Sajjadmashhadi"
            className="flex flex-row items-center w-fit"
          >
            <Image
              width={20}
              height={20}
              src="/telegram.svg"
              alt="telegram"
              className="mr-[6px]"
            />{" "}
            @sajjadmashhadi
          </a>
          <a
            target="_blank"
            href="mailto:sajjadmashhadi7@gmail.com"
            className="  flex flex-row items-center w-fit"
          >
            <Image
              width={20}
              height={20}
              className="mr-[6px]"
              src="/email.svg"
              alt="email"
            />{" "}
            sajjadmashhadi7@gmail.com
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/sajjad-mashhadi/"
            className="  flex flex-row items-center  w-fit"
          >
            <Image
              width={20}
              height={20}
              className="inline-block mr-[6px] w-[20px] h-[20px]"
              src="/icons8-linkedin.svg"
              alt="linkedin"
            />
            sajjad-mashhadi
          </a>
        </div>
      </div>
    </div>
  );
}
