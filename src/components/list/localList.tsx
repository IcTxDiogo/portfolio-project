import { useState } from "react";
import { IoAddSharp, IoCloseSharp } from "react-icons/io5";

import type { FormValues } from "./";
import type { todoList } from "@prisma/client";

import { ShowList, FormList } from "@/components/list";
import { Button, iconSize } from "@/components/utils/";

const initialState: todoList[] = [
  {
    id: 1,
    title: "create a new task",
    task: "create a task with a title and a short description",
    done: false,
    userEmail: "guest@nodomain.com",
  },
  {
    id: 2,
    title: "study a new programming language",
    task: "find the most popular and study about",
    done: false,
    userEmail: "guest@nodomain.com",
  },
];

export default function LocalList() {
  const [list, setList] = useState(initialState);
  const [edit, setEdit] = useState<todoList | undefined>(undefined);
  const [toggle, setToggle] = useState(false);

  function formatFormData(data: FormValues) {
    const lastId = list[list.length - 1]?.id;
    if (lastId != undefined)
      return {
        ...data,
        id: lastId + 1,
        done: false,
        userEmail: "guest@nodomain.com",
      } as todoList;
    return {
      ...data,
      id: 1,
      done: false,
      userEmail: "guest@nodomain.com",
    } as todoList;
  }

  function handleDelete(id: number) {
    const newList = list.filter((item) => item.id != id);
    setList(newList);
  }

  function handleSubmit(data: FormValues, id?: number) {
    if (id != undefined) {
      const alteredList = list.map((item) => {
        if (item.id === id)
          return { ...item, title: data.title, task: data.task };
        return item;
      });
      setList(alteredList);
    } else {
      const formatData = formatFormData(data);
      setList((prev) => [...prev, formatData]);
    }
    handleToggle();
  }

  function handleEdit(id?: number) {
    if (id) {
      const setList = list.find((item) => {
        if (item.id === id) return item;
      });
      setEdit(setList);
      setToggle(true);
    }
  }

  function handleToggle() {
    setEdit(undefined);
    setToggle((prev) => !prev);
  }

  return (
    <div className="flex flex-col items-center">
      <ShowList
        list={list}
        setList={setList}
        deleteItem={handleDelete}
        handleEdit={handleEdit}
      />
      <Button onClick={handleToggle}>
        {toggle ? (
          <IoCloseSharp size={iconSize} />
        ) : (
          <IoAddSharp size={iconSize} />
        )}
      </Button>
      {toggle ? (
        <FormList listSubmit={handleSubmit} editItem={edit} setEdit={setEdit} />
      ) : undefined}
    </div>
  );
}
