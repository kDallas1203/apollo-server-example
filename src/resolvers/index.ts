import { Context } from "../context";
import { Mutation } from "./mutation";
import { Query } from "./query";

const Manager = {
  clients: (parent, _args, context: Context) => {
    return context.prisma.manager.findUnique({ where: { id: parent.id } }).clients();
  },
};

const Client = {
  manager: (parent, _args, context: Context) => {
    return context.prisma.client.findUnique({ where: { id: parent.id } }).manager();
  },
  cars: (parent, _args, context: Context) => {
    return context.prisma.client.findUnique({ where: { id: parent.id } }).cars();
  },
}

const Car = {
  owner: (parent, _args, context: Context) => {
    return context.prisma.car.findUnique({ where: { id: parent.id } }).owner();
  },
}

export const resolvers = {
  Manager,
  Client,
  Car,
  Query,
  Mutation
}