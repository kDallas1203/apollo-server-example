import { Context } from '../../context';

export const managerMutations = {
  addManager: (_parent, args: { data: AddManagerInput }, context: Context) => {
    return context.prisma.manager.create({
      data: {
        email: args.data.email,
        name: args.data.name,
        phone: args.data.phone,
      },
    });
  },

  addClientToManager: (_parent, args: { managerId: string, clientId: string }, context: Context) => {
    return context.prisma.manager.update({
      where: {
        id: Number(args.managerId)
      },
      data: {
        clients: {
          connect: {
            id: Number(args.clientId)
          }
        }
      }
    });
  },
};

interface AddManagerInput {
  name: string;
  phone: string;
  email: string;
}
