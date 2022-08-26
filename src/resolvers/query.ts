import { Context } from "../context"

export const Query = {
  managers: (_parent, _args, context: Context) => {
    return context.prisma.manager.findMany()
  },
  cars: (_parent, _args, context: Context) => {
    return context.prisma.car.findMany()
  },
  clients: (_parent, _args, context: Context) => {
    return context.prisma.client.findMany()
  }
}