interface BasePageProps {
  children: React.ReactNode;
}

export default function BasePage({ children }: BasePageProps) {
  return (
    <div className="flex justify-center bg-gray-800 text-center text-white transition-all">
      <div className="min-h-screen w-full max-w-screen-lg">{children}</div>
    </div>
  );
}
