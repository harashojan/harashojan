import { Link, useLoaderData } from "@remix-run/react";
import { HeadersFunction, LoaderFunction } from "@remix-run/server-runtime";
import { format } from "date-fns";
import { client } from "~/lib/client.server";
import { Content } from "~/types";

export const headers: HeadersFunction = () => {
  return {
    "Cache-Control": "max-age=0, s-maxage=60, stale-while-revalidate=60",
  };
};

export const loader: LoaderFunction = async () => {
  // microcms-js-sdkを使って一覧を取得
  const { contents } = await client.getList<Content[]>({
    endpoint: "posts",
  });
  return contents;
};

export default function Index() {
  const posts = useLoaderData<Content[]>();

  return (
    <div className="mx-auto flex h-min max-w-5xl justify-between px-6 py-10">
      <main className="h-full w-full space-y-12">
        <div className="text-4xl font-bold sm:text-6xl">
          <p>
            I'm <span className="text-blue-600">harashojan.</span>
          </p>
          <p className="">Software Engineer</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold">About me</h2>
          <p className="my-3 text-gray-600">
            I'm a design engineer living in Japan, I love web and UI, and I'm
            involved in UI from both design and development sides.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-bold">Posts</h2>
          <div className="my-4">
            <header className="sticky top-0 bg-white py-2 text-xl font-semibold">
              <h3 className="text-xl font-bold">2022</h3>
            </header>
            <div className="space-y-8">
              {posts.map((post) => (
                <Link key={post.id} to={`/posts/${post.id}`}>
                  <div className="group py-2">
                    {format(new Date(post.createdAt), "MM-dd")}
                    <span className="text-sm text-gray-600"></span>
                    <p className="cursor-pointer text-lg font-semibold group-hover:underline">
                      {post.title}
                    </p>
                    <p className="text-sm text-gray-500 line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <div className="sticky top-10 h-full pl-6 sm:w-64">
        <picture className="mx-auto">
          <img
            src="./profile.png"
            alt="a"
            className="mx-auto"
            width={100}
            height={100}
          />
        </picture>
        <div>
          <Link to={""}>Twitter</Link>
        </div>
      </div>
    </div>
  );
}
