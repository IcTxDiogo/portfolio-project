import Link from "next/link";
import type { work } from "./main";

interface WorkGridProps {
  work: work[];
}

export default function WorkGrid({ work }: WorkGridProps) {
  return (
    <div className="grid grid-cols-1 gap-8 p-10  sm:grid-cols-2 lg:grid-cols-3">
      {work.map((item) => (
        <Link
          href={item.href}
          key={item.id}
          className="rounded-lg bg-blue-600 p-6 shadow-md hover:bg-blue-700"
        >
          <h2 className="mb-2 text-lg font-semibold">
            {item.title.toUpperCase()}
          </h2>
          <p className="mb-4 ">{item.description}</p>
        </Link>
      ))}
    </div>
  );
}
