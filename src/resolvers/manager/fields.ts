import { Context } from "../../context";

export const managerFields = {
  Manager: {
    clients: (parent, _args, context: Context) => {
      return context.prisma.manager.findUnique({ where: { id: parent.id } }).clients();
    },
  }
}