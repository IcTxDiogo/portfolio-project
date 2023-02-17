import type { Dispatch, SetStateAction } from "react";
import type { Data } from "../../pages/list";
import Button from "../utils/button";

interface ShowListProps {
  list: Data[];
  setList: Dispatch<SetStateAction<Data[]>>;
  deleteItem: (id: number) => void;
  setEdit: Dispatch<SetStateAction<Data | undefined>>;
}

export default function ShowList({
  list,
  setList,
  deleteItem,
  setEdit,
}: ShowListProps) {
  function toggleDone(id: number | undefined) {
    const alteredList = list.map((item) => {
      if (item.id === id) return { ...item, done: !item.done };
      return item;
    });
    setList(alteredList);
  }

  function handleEdit(id: number | undefined) {
    const setList = list.filter((item) => {
      if (item.id === id) return item;
    });
    setEdit(setList[0]);
  }

  function handleDelete(id: number | undefined) {
    if (id != undefined) deleteItem(id);
  }

  return (
    <div>
      <h1 className="py-5 text-center text-4xl">To-do List</h1>
      {list.map((item) => (
        <div
          key={item.id}
          className="my-2 flex justify-between rounded-xl bg-gray-600 px-4 text-left"
        >
          <div
            className={`my-2 grid h-fit basis-3/4 divide-y pr-5 ${
              item.done ? "line-through" : ""
            }`}
          >
            <h2 className="mb-2 text-xl">{item.title.toUpperCase()}</h2>
            <p className="py-2 text-justify">{item.task}</p>
          </div>
          <div className="grid basis-1/4 gap-1 py-2">
            <Button name={"Done"} onClick={toggleDone} id={item.id} />
            <Button name={"Edit"} onClick={handleEdit} id={item.id} />
            <Button name={"Delete"} onClick={handleDelete} id={item.id} />
          </div>
        </div>
      ))}
    </div>
  );
}
