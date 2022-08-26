import { Context } from "../../context";

export const clientMutations = {
  addClient: (_parent, args: { data: AddClientInput; managerId: string }, context: Context) => {
    return context.prisma.client.create({
      data: {
        email: args.data.email,
        name: args.data.name,
        phone: args.data.phone,
        manager: {
          connect: { id: Number(args.managerId) },
        },
      },
    });
  },
};

interface AddClientInput {
  name: string;
  phone: string;
  email: string;
}