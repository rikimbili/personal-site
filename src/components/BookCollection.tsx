"use client";

import BookCard from "@components/DataDisplay/BookCard";
import CustomDialog from "@components/Dialog/CustomDialog";
import CircularIndeterminate from "@components/Feedback/CircularIndeterminate";
import Button from "@components/Inputs/Button";
import { useEffect, useMemo, useRef, useState } from "react";
import { MdOpenInNew } from "react-icons/md";

import { type Book } from "~/types/books.type";

interface Props {
  readingBooks: Book[];
  toReadBooks: Book[];
  readBooks: Book[];
}

function increaseCoverRes(image: string) {
  return image.concat("&fife=w800-h600");
}

const BookViewer = ({ id }: { id: string }) => {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      // @ts-expect-error google global is not recognized
      // eslint-disable-next-line
      const viewer = new google.books.DefaultViewer(canvasRef.current);
      // eslint-disable-next-line
      viewer.load(id);
    }
  }, [id]);

  return <div id={"bookViewer"} ref={canvasRef} className={"size-full"}></div>;
};

export default function BookCollection({
  readingBooks,
  toReadBooks,
  readBooks,
}: Props) {
  const [previewBookId, setPreviewBookId] = useState<string | null>(null);

  const bookToPreview = useMemo(() => {
    if (!previewBookId) return null;
    return (
      readingBooks.find((book) => book.id === previewBookId) ??
      toReadBooks.find((book) => book.id === previewBookId) ??
      readBooks.find((book) => book.id === previewBookId) ??
      null
    );
  }, [previewBookId, readingBooks, toReadBooks, readBooks]);

  return (
    <>
      {readingBooks.length > 0 && (
        <section className={"flex w-full flex-col gap-4"}>
          <h2 className={"text-xl"}>Currently Reading</h2>
          <div
            className={
              "grid w-full grid-cols-2 gap-4 sm:gap-8 md:grid-cols-3 xl:grid-cols-4"
            }
          >
            {readingBooks.map((book) => (
              <BookCard
                key={book.id}
                id={book.id}
                title={book.volumeInfo.title}
                author={book.volumeInfo.authors?.[0]}
                cover={increaseCoverRes(
                  book.volumeInfo.imageLinks?.thumbnail ?? "",
                )}
                genre={book.volumeInfo.categories?.[0]}
                description={book.volumeInfo.description}
                setPreviewId={setPreviewBookId}
              />
            ))}
          </div>
        </section>
      )}
      {(toReadBooks.length > 0 || readBooks.length > 0) && (
        <section className={"flex w-full flex-col gap-4"}>
          <h2 className={"text-xl"}>My Collection</h2>
          <div
            className={
              "grid w-full grid-cols-2 gap-4 sm:gap-8 md:grid-cols-3 xl:grid-cols-4"
            }
          >
            {readBooks.map((book) => (
              <BookCard
                key={book.id}
                id={book.id}
                title={book.volumeInfo.title}
                author={book.volumeInfo.authors?.[0]}
                cover={increaseCoverRes(
                  book.volumeInfo.imageLinks?.thumbnail ?? "",
                )}
                genre={book.volumeInfo.categories?.[0]}
                description={book.volumeInfo.description}
                setPreviewId={setPreviewBookId}
                read
              />
            ))}
            {toReadBooks.map((book) => (
              <BookCard
                key={book.id}
                id={book.id}
                title={book.volumeInfo.title}
                author={book.volumeInfo.authors?.[0]}
                cover={increaseCoverRes(
                  book.volumeInfo.imageLinks?.thumbnail ?? "",
                )}
                genre={book.volumeInfo.categories?.[0]}
                description={book.volumeInfo.description}
                setPreviewId={setPreviewBookId}
              />
            ))}
          </div>
        </section>
      )}
      <CustomDialog
        isOpen={!!previewBookId}
        onClose={() => setPreviewBookId(null)}
        title={bookToPreview?.volumeInfo.title}
        className={"size-full"}
      >
        {bookToPreview?.accessInfo.viewability === "NO_PAGES" ? (
          <div className={"flex h-full items-center justify-center"}>
            <p>No pages available for preview 😔</p>
          </div>
        ) : (
          <div className={"relative z-0 h-full"}>
            <BookViewer id={previewBookId ?? ""} />
            <div
              className={
                "absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2"
              }
            >
              <CircularIndeterminate className={"size-12"} />
            </div>
          </div>
        )}
        <Button
          href={bookToPreview?.volumeInfo.canonicalVolumeLink}
          target="_blank"
          rel="noopener noreferrer"
          className={"ml-auto mr-4 w-fit"}
          variant="outlined"
        >
          Go to book <MdOpenInNew />
        </Button>
      </CustomDialog>
    </>
  );
}
