import AuthRepository from "./authRepository";
import PetRepository from "./petRepository";
const repositories = {
  auth: AuthRepository,
  pet: PetRepository,
};
export const RepositoryFactory = {
  get: (name) => repositories[name],
};
