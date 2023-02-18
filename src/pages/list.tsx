import { useState } from "react";

import BasePage from "../components/utils/basePage";
import ShowList from "../components/list/showList";
import type { FormValues } from "../components/list/formList";
import FormList from "../components/list/formList";
import Button from "../components/utils/button";
import BaseFooter from "../components/utils/baseFooter";

export interface Data {
  id: number;
  title: string;
  task: string;
  done: boolean;
}

const initialState: Data[] = [
  {
    id: 1,
    title: "first task",
    task: "make a to-do app for save you daily tasks make a to-do app for save you daily tasks make a to-do app for save you daily tasks make a to-do app for save you daily tasks make a to-do app for save you daily tasks make a to-do app for save you daily tasks make a to-do app for save you daily tasks make a to-do app for save you daily tasks ",
    done: false,
  },
  {
    id: 2,
    title: "first task",
    task: "make a to-do app for save you daily tasks",
    done: false,
  },
  {
    id: 3,
    title: "first task",
    task: "make a to-do app for save you daily tasks",
    done: false,
  },
];

export default function List() {
  const [list, setList] = useState(initialState);
  const [edit, setEdit] = useState<Data | undefined>(undefined);
  const [toggle, setToggle] = useState(false);

  function deleteItem(id: number) {
    const newList = list.filter((item) => item.id != id);
    setList(newList);
  }

  function listSubmit(data: FormValues, id?: number) {
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
  }

  function formatFormData(data: FormValues) {
    const lastId = list[list.length - 1]?.id;
    if (lastId != undefined)
      return { ...data, id: lastId + 1, done: false } as Data;
    return { ...data, id: 1, done: false } as Data;
  }

  return (
    <BasePage>
      <div className="w-full max-w-3xl">
        <ShowList
          list={list}
          setList={setList}
          deleteItem={deleteItem}
          setEdit={setEdit}
        />
        <Button
          name={toggle ? "Close" : "New Task"}
          onClick={() => setToggle((prev) => !prev)}
        />
        {toggle ? (
          <FormList listSubmit={listSubmit} editItem={edit} setEdit={setEdit} />
        ) : undefined}
        <BaseFooter />
      </div>
    </BasePage>
  );
}
