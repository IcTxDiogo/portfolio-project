import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const routerList = createTRPCRouter({
  getByEmailQuery: publicProcedure
    .input(
      z.object({
        userEmail: z.string(),
      })
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.todoList.findMany({
        where: {
          userEmail: input.userEmail,
        },
      });
    }),
  getByEmail: publicProcedure
    .input(
      z.object({
        userEmail: z.string(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.todoList.findMany({
        where: {
          userEmail: input.userEmail,
        },
      });
    }),

  create: publicProcedure
    .input(
      z.object({
        title: z.string(),
        task: z.string(),
        done: z.boolean(),
        userEmail: z.string(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.todoList.create({
        data: input,
      });
    }),

  delete: publicProcedure
    .input(
      z.object({
        id: z.number(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.todoList.delete({
        where: {
          id: input.id,
        },
      });
    }),

  update: publicProcedure
    .input(
      z.object({
        id: z.number(),
        title: z.string(),
        task: z.string(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.todoList.update({
        where: {
          id: input.id,
        },
        data: {
          title: input.title,
          task: input.task,
        },
      });
    }),
  updateDone: publicProcedure
    .input(
      z.object({
        id: z.number(),
        done: z.boolean(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.todoList.update({
        where: {
          id: input.id,
        },
        data: {
          done: input.done,
        },
      });
    }),
});
4;
