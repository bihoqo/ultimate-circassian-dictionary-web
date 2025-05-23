import Head from "next/head";
import React from "react";
import { useRouter } from "next/navigation";

interface IBlog {
  title: string;
  description: string;
  image: string;
  id: number;
}

const BLOGS_LIST: IBlog[] = [
  {
    title: "Referring to your father as third person in Adyghebze is distressful",
    description: "",
    image: "",
    id: 0,
  },
  {
    title: "Circassian could have had gender distinguishing pronouns",
    description: "",
    image: "",
    id: 1,
  },
];

export default function BlogPage() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Learn Circassian</title>
      </Head>
      <main>
        <div className="mx-auto mt-2 flex w-11/12 flex-col gap-4">
          <input
            className="mx-auto min-w-[400px] rounded-md border border-solid border-black p-4"
            placeholder="Search topic"
          />
          <div className="flex flex-row flex-wrap gap-4">
            {BLOGS_LIST.map((blog, idx) => (
              <div
                onClick={() => router.push(`/blogs/${blog.id}`)}
                key={blog.id}
                className="group w-[300px] hover:cursor-pointer lg:flex lg:max-w-full"
              >
                <div className="flex flex-col justify-between rounded-sm border border-gray-400 bg-indigo-600/10 p-4 leading-normal shadow-md hover:bg-indigo-600/20 hover:shadow-lg">
                  <div className="mb-8">
                    <div className="mb-2 text-xl font-bold text-gray-900">{blog.title}</div>
                    <p className="text-base text-gray-700">
                      {blog.description || "No description available."}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div className="text-3xl text-blue-600 group-hover:underline hover:underline">
                      Enter
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
