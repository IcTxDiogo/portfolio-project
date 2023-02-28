import Head from "next/head";

interface BasePageProps {
  children: React.ReactNode;
  title: string;
}

export default function BasePage({ children, title }: BasePageProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="bg-gray-800 text-center text-white transition-all">
        <div className="flex min-h-screen w-full justify-center">
          <div className="flex justify-center px-2 sm:w-3/4">{children}</div>
        </div>
      </div>
    </>
  );
}
