import { Context } from "../../context"

export const clientQueries = {
  clients: (_parent, _args, context: Context) => {
    return context.prisma.client.findMany()
  }
}