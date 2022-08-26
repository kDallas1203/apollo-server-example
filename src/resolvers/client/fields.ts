import { Context } from "../../context";

export const clientFields = {
  Client: {
    manager: (parent, _args, context: Context) => {
      return context.prisma.client.findUnique({ where: { id: parent.id } }).manager();
    },
    cars: (parent, _args, context: Context) => {
      return context.prisma.client.findUnique({ where: { id: parent.id } }).cars();
    },
  }
}