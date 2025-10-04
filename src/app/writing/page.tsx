import SectionWrapper from "@components/SectionWrapper";

import { getSortedPostsData } from "~/lib/posts";

export default function Writing() {
  const allPostsData = getSortedPostsData();
  return (
    <SectionWrapper
      id={"writing"}
      fadeInDelay={0.1}
      className={
        "flex scroll-mt-20 flex-col gap-4 text-pretty sm:w-full sm:gap-6"
      }
    >
      <></>
      {/*<ul className={"grid w-full grid-cols-1 gap-8 sm:gap-12 md:grid-cols-2"}>*/}
      {/*  {allPostsData.map((post) => (*/}
      {/*    <li key={post.id}>*/}
      {/*      <WritingCard*/}
      {/*        title={post.title}*/}
      {/*        excerpt={post.excerpt}*/}
      {/*        date={post.date}*/}
      {/*        slug={post.id}*/}
      {/*      />*/}
      {/*    </li>*/}
      {/*  ))}*/}
      {/*</ul>*/}
    </SectionWrapper>
  );
}
