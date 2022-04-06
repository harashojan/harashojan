import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { LoaderFunction } from "@remix-run/server-runtime";

export const loader: LoaderFunction = async ({ params }) => {
  return json({ id: params.id });
};
export default function Index() {
  const { id } = useLoaderData();

  return <div>{id}</div>;
}
