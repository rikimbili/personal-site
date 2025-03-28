import CustomImage from "@components/DataDisplay/CustomImage";
import Card from "@components/Surfaces/Card";

interface Props {
  id: string;
  title: string;
  cover: string;
  setPreviewId: (id: string) => void;
  author?: string;
  genre?: string;
  description?: string;
  read?: boolean;
}

export default function BookCard({
  id,
  title,
  cover,
  setPreviewId,
  author = "Unknown Author",
  genre = "Unknown Genre",
  description,
  read = false,
}: Props) {
  return (
    <Card
      onClick={() => setPreviewId(id)}
      className={
        "group relative flex w-full max-w-72 flex-col gap-2 overflow-hidden ring-0 duration-200 ease-in " +
        "hover:-translate-y-1 hover:shadow-lg hover:ease-out dark:ring-indigo-300 dark:hover:ring-2 sm:gap-4"
      }
    >
      <CustomImage
        src={cover}
        alt={title}
        fill
        priority
        draggable={false}
        sizes="(max-width: 800px) 50vw,
              (max-width: 1600px) 33vw,
              20vw"
        containerClassName={"relative aspect-[2/3]"}
        className={"select-none object-cover"}
      />
      <div
        className={
          "absolute bottom-0 flex w-full flex-col gap-2 bg-slate-50/80 px-3 pb-1 pt-3 backdrop-blur-md  dark:bg-slate-950/80"
        }
        style={{ transition: "max-height 0.5s ease-out" }}
      >
        <div>
          <h3 className={"truncate text-center text-base font-semibold"}>
            {title}
          </h3>
        </div>
        <div
          className={
            "flex max-h-0 flex-col justify-between gap-3 text-base group-focus-within:max-h-72 group-hover:max-h-80"
          }
          style={{ transition: "max-height 0.3s ease-out" }}
        >
          <span
            aria-label={"Author"}
            className={"truncate text-center opacity-80"}
          >
            {author}
          </span>
          {description && (
            <p
              aria-label={"Description"}
              className={
                "line-clamp-6 hidden text-center text-sm opacity-80 dark:text-slate-300 sm:[display:-webkit-box]"
              }
            >
              {description}
            </p>
          )}
          <span
            className={
              "mb-2 w-fit self-center rounded-full bg-slate-300 px-3 py-1.5 text-center text-sm font-light transition duration-200 ease-out dark:bg-slate-600"
            }
          >
            {genre}
          </span>
        </div>
      </div>
    </Card>
  );
}
