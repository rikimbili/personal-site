import Image from "next/future/image";

export default function Hero() {
  return (
    <section
      className={
        "flex select-none items-center sm:h-[22rem] md:h-[32rem] lg:h-[48rem]"
      }
    >
      <div className={"relative -z-10 hidden h-full w-4/5 sm:block"}>
        <Image
          src={"/../public/images/hero_photo.png"}
          alt={"Hero Photo"}
          className={"object-contain"}
          fill
          priority
        />
      </div>
      <span className={"text-center text-lg sm:text-xl lg:text-2xl"}>
        <h2
          className={"mb-6 text-4xl sm:mb-8 sm:text-5xl lg:mb-12 lg:text-6xl"}
        >
          Hey there 👋
        </h2>
        <p>
          My name is <b>Raciel</b> Antela Pardo.
        </p>
        <p>
          I'm a software developer interested in building responsive and
          approachable web and mobile applications
        </p>
      </span>
    </section>
  );
}
