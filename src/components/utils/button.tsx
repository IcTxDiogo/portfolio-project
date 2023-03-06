/* eslint-disable @typescript-eslint/no-misused-promises */
interface ButtonProps {
  children: React.ReactNode;
  id?: number;
  onClick?: (id?: number) => void | Promise<void>;
}

export default function Button({ children, id, onClick }: ButtonProps) {
  async function handleClick() {
    if (onClick) {
      if (id) await onClick(id);
      else await onClick();
    }
  }

  return (
    <>
      <button
        className="m-1 flex h-10 items-center justify-center rounded bg-blue-600 py-2 px-4 font-bold text-white hover:bg-blue-700"
        onClick={handleClick}
      >
        {children}
      </button>
    </>
  );
}
