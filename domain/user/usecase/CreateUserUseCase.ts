import { CreateUserDto } from "../interfaces/user/dto/CreateUserDto";

export interface ICreateUserUseCase {
  execute(dto: CreateUserDto): Promise<void>;
}
