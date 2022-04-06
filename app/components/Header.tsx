import { Link } from "@remix-run/react";

export const Header = () => {
  return (
    <header className="border-b p-6">
      <h1 className="text-xl font-bold hover:text-blue-600">
        <Link to="/">harashojan.dev</Link>
      </h1>
    </header>
  );
};
