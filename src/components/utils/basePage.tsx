import Head from "next/head";

interface BasePageProps {
  children: React.ReactNode;
  title: string;
  className?: string;
}

export default function BasePage({
  children,
  title,
  className,
}: BasePageProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="bg-gray-800 text-white">
        <div className="flex min-h-screen w-full justify-center px-2 sm:px-0">
          <div className={className ? className : ""}>{children}</div>
        </div>
      </div>
    </>
  );
}
