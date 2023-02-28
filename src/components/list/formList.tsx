/* eslint-disable @typescript-eslint/no-misused-promises */
import { useForm, useFormState } from "react-hook-form";
import { useEffect } from "react";

import type { Dispatch, SetStateAction } from "react";
import type { todoList } from "@prisma/client";
import type { FormValues } from "./";

import { Button } from "@/components/utils/";

interface FormListProps {
  listSubmit: (data: FormValues, id?: number) => void | Promise<void>;
  editItem?: todoList;
  setEdit: Dispatch<SetStateAction<todoList | undefined>>;
}

export default function FormList({
  listSubmit,
  editItem,
  setEdit,
}: FormListProps) {
  const { register, handleSubmit, reset, setValue, control } =
    useForm<FormValues>();
  const { errors } = useFormState({
    control,
  });

  async function onSubmit(data: FormValues) {
    reset();
    if (editItem != undefined) {
      const id = editItem.id;
      await listSubmit(data, id);
      setEdit(undefined);
    } else await listSubmit(data);
  }

  useEffect(() => {
    if (editItem != undefined) {
      setValue("title", editItem.title);
      setValue("task", editItem.task);
    }
  });

  return (
    <>
      <div className="mt-2 rounded-xl bg-gray-600 px-5 pb-2">
        <h2 className="p-4">New Task</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid py-2">
            <label className="text-left">
              Title<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="title"
              className="rounded-xl bg-blue-600 p-2 !outline-none"
              {...register("title", {
                required: { value: true, message: "this field is Required" },
              })}
            />
            {errors.title && <p>{errors.title.message}</p>}
          </div>
          <div className="grid py-2">
            <label className="text-left">
              Task<span className="text-red-500">*</span>
            </label>
            <textarea
              id="title"
              rows={3}
              className="rounded-xl bg-blue-600 p-2 !outline-none"
              {...register("task", {
                required: { value: true, message: "this field is Required" },
              })}
            />
            {errors.task && <p>{errors.task.message}</p>}
          </div>
          <Button name={editItem ? "Finish  edit" : "Add Task"} id={0} />
        </form>
      </div>
    </>
  );
}
