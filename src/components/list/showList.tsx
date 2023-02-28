import type { Dispatch, SetStateAction } from "react";

import Button from "../utils/button";
import type { todoList } from "@prisma/client";

interface ShowListProps {
  list: todoList[];
  setList: Dispatch<SetStateAction<todoList[]>>;
  deleteItem: (id: number) => void | Promise<void>;
  handleEdit: (id: number) => void;
  handleDone?: (id: number, done: boolean) => Promise<void>;
}

export default function ShowList({
  list,
  setList,
  deleteItem,
  handleEdit,
  handleDone,
}: ShowListProps) {
  async function toggleDone(id: number) {
    if (handleDone) {
      const actualDone = list.find((item) => {
        if (item.id === id) return item;
      });
      if (actualDone) await handleDone(id, actualDone.done);
    } else {
      const alteredList = list.map((item) => {
        if (item.id === id) return { ...item, done: !item.done };
        return item;
      });
      setList(alteredList);
    }
  }

  async function handleDelete(id: number) {
    await deleteItem(id);
  }

  return (
    <div>
      {list.map((item) => (
        <div
          key={item.id}
          className="my-2 rounded-xl bg-gray-600 px-4 text-left us:flex us:justify-between"
        >
          <div
            className={`h-fit w-full divide-y us:pr-2  ${
              item.done ? "line-through" : ""
            }`}
          >
            <h2 className="mb-2 text-xl">{item.title.toUpperCase()}</h2>
            <p className="py-2 text-justify">{item.task}</p>
          </div>
          <div className="flex w-full flex-col justify-center py-2 us:w-40">
            <Button name={"Done"} onClick={toggleDone} id={item.id} />
            <Button name={"Edit"} onClick={handleEdit} id={item.id} />
            <Button name={"Delete"} onClick={handleDelete} id={item.id} />
          </div>
        </div>
      ))}
    </div>
  );
}
