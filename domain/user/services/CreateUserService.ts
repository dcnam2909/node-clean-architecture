import { UserRepository } from "../../../infrastructures/repositories/user/user.repository";
import { CreateUserDto } from "../interfaces/user/dto/CreateUserDto";
import { ICreateUserUseCase } from "../usecase/CreateUserUseCase";

export class CreateUserService implements ICreateUserUseCase {
  constructor(private _userRepository: UserRepository) { }
  async execute(dto: CreateUserDto): Promise<void> {
    this._userRepository.create(dto);
  }
}
