import QuestionCard from "@/components/shared/cards/QuestionCard";
import Filter from "@/components/shared/Filter";
import HomeFilters from "@/components/shared/home/HomeFilters";
import NoResult from "@/components/shared/NoResult";
import LocalSearchbar from "@/components/shared/search/LocalSearchBar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";

export default function Home() {
  const questions = [
    {
      _id: "1",
      title: "How to optimize the performance of a React application?",
      tags: [
        { _id: "t1", name: "react" },
        { _id: "t2", name: "performance" },
        { _id: "t3", name: "optimization" },
      ],
      author: {
        _id: "u1",
        name: "Alex Petrov",
        picture: "/assets/images/avatar1.png",
        clerkId: "clerk_1",
      },
      upvotes: ["u3", "u4", "u7", "u8"],
      views: 320000000,
      answers: [{}, {}, {}, {}, {}],
      createdAt: new Date("2025-01-10"),
    },
    {
      _id: "2",
      title: "What is the difference between useEffect and useLayoutEffect?",
      tags: [
        { _id: "t4", name: "react" },
        { _id: "t5", name: "hooks" },
        { _id: "t6", name: "javascript" },
      ],
      author: {
        _id: "u2",
        name: "Maria Kowalska",
        picture: "/assets/images/avatar2.png",
        clerkId: "clerk_2",
      },
      upvotes: ["u1", "u5", "u6"],
      views: 280,
      answers: [{}, {}, {}],
      createdAt: new Date("2025-10-15"),
    },
    {
      _id: "3",
      title: "How to connect Docker to a Node.js application?",
      tags: [
        { _id: "t7", name: "nodejs" },
        { _id: "t8", name: "docker" },
        { _id: "t9", name: "devops" },
      ],
      author: {
        _id: "u3",
        name: "Piotr Nowak",
        picture: "/assets/images/avatar3.png",
        clerkId: "clerk_3",
      },
      upvotes: ["u1", "u2"],
      views: 198,
      answers: [{}, {}, {}, {}],
      createdAt: new Date("2025-10-08"),
    },
    {
      _id: "4",
      title: "Best practices for using TypeScript with React",
      tags: [
        { _id: "t10", name: "typescript" },
        { _id: "t11", name: "react" },
        { _id: "t12", name: "frontend" },
      ],
      author: {
        _id: "u4",
        name: "Julia Nowicka",
        picture: "/assets/images/avatar4.png",
        clerkId: "clerk_4",
      },
      upvotes: ["u2", "u3", "u4", "u5", "u6"],
      views: 500,
      answers: [{}, {}, {}, {}, {}, {}, {}, {}],
      createdAt: new Date("2025-04-22"),
    },
    {
      _id: "5",
      title: "How to use PostgreSQL in a Next.js application?",
      tags: [
        { _id: "t13", name: "nextjs" },
        { _id: "t14", name: "postgresql" },
        { _id: "t15", name: "database" },
      ],
      author: {
        _id: "u5",
        name: "Oleh Ivanenko",
        picture: "/assets/images/avatar5.png",
        clerkId: "clerk_5",
      },
      upvotes: ["u1", "u2", "u3"],
      views: 145,
      answers: [{}, {}],
      createdAt: new Date("2025-05-30"),
    },
  ];
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"
        />

        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>

      <HomeFilters />
      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There’s no question to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved! 💡"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
      <div className="mt-10">
        {/* <Pagination
          pageNumber={searchParams?.page ? +searchParams.page : 1}
          isNext={result.isNext}
        /> */}
      </div>
    </>
  );
}
