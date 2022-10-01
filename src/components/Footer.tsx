import WebsiteInfo from "./Info/WebsiteInfo";
import CurrentlyPlaying from "./Widgets/CurrentlyPlaying";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-4 self-center rounded-t-2xl bg-slate-800/90 px-8 pt-2 pb-4 text-base sm:w-full sm:gap-6 sm:pt-4 sm:pb-6 sm:text-xl">
      <WebsiteInfo className={"lg:-mb-14"} />
      <div
        className={
          "flex w-full flex-wrap-reverse justify-center gap-4 sm:gap-6 lg:justify-between"
        }
      >
        <span className={"text-justify"}>
          &copy; {new Date().getFullYear()} Raciel Antela Pardo.
        </span>
        <CurrentlyPlaying />
      </div>
    </footer>
  );
}
