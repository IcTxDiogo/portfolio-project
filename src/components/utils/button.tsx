interface ButtonProps {
  name: string;
  id?: number;
  onClick: (id: number | undefined) => void;
}

export default function Button({ name, id, onClick }: ButtonProps) {
  return (
    <>
      <button
        className="m-0.5 h-10 rounded bg-blue-600 py-2 px-4 font-bold text-white hover:bg-blue-700"
        onClick={() => onClick(id)}
      >
        {name}
      </button>
    </>
  );
}
