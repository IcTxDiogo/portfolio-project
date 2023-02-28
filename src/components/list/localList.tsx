import { useState } from "react";

import ShowList from "./showList";
import type { FormValues } from "./formList";
import FormList from "./formList";
import Button from "../utils/button";
import type { todoList } from "@prisma/client";

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

  function handleEdit(id: number) {
    const setList = list.find((item) => {
      if (item.id === id) return item;
    });
    setEdit(setList);
    setToggle(true);
  }

  function handleToggle() {
    setEdit(undefined);
    setToggle((prev) => !prev);
  }

  return (
    <>
      <ShowList
        list={list}
        setList={setList}
        deleteItem={handleDelete}
        handleEdit={handleEdit}
      />
      <Button
        name={toggle ? "Close" : "New Task"}
        id={0}
        onClick={handleToggle}
      />
      {toggle ? (
        <FormList listSubmit={handleSubmit} editItem={edit} setEdit={setEdit} />
      ) : undefined}
    </>
  );
}
