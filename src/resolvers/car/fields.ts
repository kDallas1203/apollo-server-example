import { Context } from "../../context";

export const carFields = {
  Car: {
    owner: (parent, _args, context: Context) => {
      return context.prisma.car.findUnique({ where: { id: parent.id } }).owner();
    },
  }
}