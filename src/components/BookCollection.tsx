"use client";

import BookCard from "@components/DataDisplay/BookCard";
import CustomDialog from "@components/Dialog/CustomDialog";
import CircularIndeterminate from "@components/Feedback/CircularIndeterminate";
import Button from "@components/Inputs/Button";
import { useEffect, useMemo, useRef, useState } from "react";
import { MdErrorOutline, MdOpenInNew, MdWebAssetOff } from "react-icons/md";

import { type Book } from "~/types/books.type";

interface Props {
  readingBooks: Book[];
  toReadBooks: Book[];
  readBooks: Book[];
}

function increaseCoverRes(image: string) {
  return image.concat("&fife=w800-h600");
}

const useIsGoogleBooksApiReady = (attempts = 50): boolean => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    function checkGoogleBooksApi(attemptsLeft: number) {
      if (attemptsLeft <= 0) {
        console.error("Google Books API failed to load.");
        return;
      }
      // @ts-expect-error google global is not recognized
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      if (window.google?.books) {
        setIsReady(true);
      } else {
        setTimeout(() => checkGoogleBooksApi(attemptsLeft - 1), 500);
      }
    }

    checkGoogleBooksApi(attempts);
  }, [attempts]);

  return isReady;
};

const BookViewer = ({ id }: { id: string }) => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const isGoogleBooksApiReady = useIsGoogleBooksApiReady();

  useEffect(() => {
    if (canvasRef.current && isGoogleBooksApiReady) {
      // @ts-expect-error google global is not recognized
      // eslint-disable-next-line
      const viewer = new window.google.books.DefaultViewer(canvasRef.current);
      // eslint-disable-next-line
      viewer.load(id);
    }
  }, [id, isGoogleBooksApiReady]);

  return <div id={"bookViewer"} ref={canvasRef} className={"size-full"}></div>;
};

export default function BookCollection({
  readingBooks,
  toReadBooks,
  readBooks,
}: Props) {
  const isGoogleBooksApiReady = useIsGoogleBooksApiReady();

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
          <div
            className={"flex h-full flex-col items-center justify-center gap-4"}
          >
            <MdWebAssetOff className={"size-20"} />
            <p>No pages available for preview</p>
          </div>
        ) : isGoogleBooksApiReady ? (
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
        ) : (
          <div
            className={"flex h-full flex-col items-center justify-center gap-4"}
          >
            <MdErrorOutline className={"size-20"} />
            <p>
              Your browser does not seem to support book previews 😔. Try
              reloading this page
            </p>
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
