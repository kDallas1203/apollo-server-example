import { carQueries, carFields, carMutations } from "./car";
import { clientFields, clientMutations, clientQueries } from "./client";
import { managerFields, managerMutations, managerQueries } from "./manager";

export const resolvers = {
  Query: {
    ...carQueries,
    ...managerQueries,
    ...clientQueries,
  },
  Mutation: {
    ...carMutations,
    ...managerMutations,
    ...clientMutations,
  },

  ...carFields,
  ...clientFields,
  ...managerFields,
}