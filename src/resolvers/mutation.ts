import { Context } from '../context';

export const Mutation = {
  addManager: (_parent, args: { data: AddManagerInput }, context: Context) => {
    return context.prisma.manager.create({
      data: {
        email: args.data.email,
        name: args.data.name,
        phone: args.data.phone,
      },
    });
  },

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

  addCar: (_parent, args: { data: AddCarInput; clientId: string }, context: Context) => {
    return context.prisma.car.create({
      data: {
        model: args.data.model,
        owner: {
          connect: { id: Number(args.clientId) },
        },
      },
    });
  },
};

interface AddManagerInput {
  name: string;
  phone: string;
  email: string;
}

interface AddClientInput {
  name: string;
  phone: string;
  email: string;
}

interface AddCarInput {
  model: string;
}
