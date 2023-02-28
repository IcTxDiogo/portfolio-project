import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

import type { FormValues } from "./";
import type { todoList } from "@prisma/client";

import { ShowList, FormList } from "./";
import { Button } from "@/components/utils";

import { api } from "../../utils/api";

export default function SyncList() {
  const [list, setList] = useState([] as todoList[]);
  const [edit, setEdit] = useState<todoList | undefined>(undefined);
  const [toggle, setToggle] = useState(false);

  const { data: sessionData } = useSession();

  const { mutateAsync: getByEmail } = api.list.getByEmail.useMutation();
  const { mutateAsync: create } = api.list.create.useMutation();
  const { mutateAsync: update } = api.list.update.useMutation();
  const { mutateAsync: updateDone } = api.list.updateDone.useMutation();
  const { mutateAsync: deleteItems } = api.list.delete.useMutation();

  const { data, status, error } = api.list.getByEmailQuery.useQuery({
    userEmail: sessionData?.user.email ? sessionData?.user.email : "",
  });

  useEffect(() => {
    if (status === "success") {
      setList(data);
    }
    if (status === "error") console.log(error);
  }, [data, status, error]);

  async function handleDelete(id: number) {
    await deleteItems({ id: id }).then(updateList);
  }

  function handleEdit(id: number) {
    const setList = list.find((item) => {
      if (item.id === id) return item;
    });
    setEdit(setList);
    setToggle(true);
  }

  async function handleDone(id: number, done: boolean) {
    if (id) await updateDone({ id: id, done: !done }).then(updateList);
  }

  async function handleSubmit(data: FormValues, id?: number) {
    handleToggle();
    if (id != undefined) {
      await update({ ...data, id: id }).then(updateList);
    } else {
      await create({
        ...data,
        done: false,
        userEmail: sessionData?.user.email ? sessionData?.user.email : "",
      }).then(updateList);
    }
  }

  function handleToggle() {
    setEdit(undefined);
    setToggle((prev) => !prev);
  }

  async function updateList() {
    const result = await getByEmail({
      userEmail: sessionData?.user.email ? sessionData?.user.email : "",
    });

    setList(result);
  }

  return (
    <>
      <ShowList
        list={list}
        setList={setList}
        deleteItem={handleDelete}
        handleEdit={handleEdit}
        handleDone={handleDone}
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
