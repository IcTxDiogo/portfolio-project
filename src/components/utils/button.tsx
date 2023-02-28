/* eslint-disable @typescript-eslint/no-misused-promises */
interface ButtonProps {
  name: string;
  id: number;
  onClick?: (id: number) => void | Promise<void>;
}

export default function Button({ name, id, onClick }: ButtonProps) {
  async function handleClick() {
    if (onClick) await onClick(id);
  }

  return (
    <>
      <button
        className="m-0.5 h-10 rounded bg-blue-600 py-2 px-4 font-bold text-white hover:bg-blue-700"
        onClick={handleClick}
      >
        {name}
      </button>
    </>
  );
}
