interface BasePageProps {
  children: React.ReactNode;
}

export default function BasePage({ children }: BasePageProps) {
  return (
    <div className="bg-gray-800 text-center text-white transition-all">
      <div className="flex min-h-screen w-full justify-center">
        <div className="flex justify-center px-2 sm:w-3/4">{children}</div>
      </div>
    </div>
  );
}
