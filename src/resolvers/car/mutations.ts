import { Context } from "../../context";

export const carMutations = {
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

interface AddCarInput {
  model: string;
}
