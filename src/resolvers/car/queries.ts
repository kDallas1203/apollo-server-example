import { Context } from "../../context"

export const carQueries = {
  cars: (_parent, _args, context: Context) => {
    return context.prisma.car.findMany()
  },
}