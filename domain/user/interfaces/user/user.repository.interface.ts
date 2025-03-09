import { ICreateUserRepository } from "./repository/CreateUserRepo.interface";

export interface IUserRepository {
  create(dto: ICreateUserRepository): Promise<number>;
}
