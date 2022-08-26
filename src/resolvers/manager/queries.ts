import { Context } from "../../context"

export const managerQueries = {
  managers: (_parent, _args, context: Context) => {
    return context.prisma.manager.findMany()
  },
}