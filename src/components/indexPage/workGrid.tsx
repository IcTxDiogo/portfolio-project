import Link from "next/link";

import type { Work } from "./";

interface WorkGridProps {
  work: Work[];
}

export default function WorkGrid({ work }: WorkGridProps) {
  return (
    <div className="flex flex-col gap-3 sm:grid sm:grid-cols-2 lg:grid-cols-3">
      {work.map((item, index) => (
        <Link
          href={item.href}
          key={index}
          className="rounded-lg bg-blue-600 p-4 shadow-md hover:bg-blue-700"
        >
          <h2 className="mb-2 text-lg font-semibold">
            {item.title.toUpperCase()}
          </h2>
          <p className="text-justify">{item.description}</p>
        </Link>
      ))}
    </div>
  );
}
