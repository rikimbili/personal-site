"use client";

import SpotlightCard from "@components/Surfaces/SpotlightCard";
import Link from "next/link";

interface Props {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
}

export default function WritingCard({ title, excerpt, date, slug }: Props) {
  return (
    <Link href={`/writing/${slug}`}>
      <SpotlightCard
        className={`relative flex size-full flex-col gap-2 pb-4 sm:gap-4`}
      >
        <div className={"flex grow flex-col gap-4 px-4 sm:px-6"}>
          <h3 className={"text-xl font-semibold sm:text-2xl"}>{title}</h3>
          <p className={"text-center"}>{excerpt}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">{date}</p>
        </div>
      </SpotlightCard>
    </Link>
  );
}
