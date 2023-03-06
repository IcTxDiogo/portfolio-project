import { createTRPCRouter } from "./trpc";
import { routerList } from "./routers/routerList";

export const appRouter = createTRPCRouter({
  list: routerList,
});

export type AppRouter = typeof appRouter;
