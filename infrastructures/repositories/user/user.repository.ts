import { PrismaClient } from "@prisma/client";
import { ICreateUserRepository } from "../../../domain/user/interfaces/user/repository/CreateUserRepo.interface";
import { IUserRepository } from "../../../domain/user/interfaces/user/user.repository.interface";

export class UserRepository implements IUserRepository {
  private prisma: PrismaClient;
  constructor(_prisma: PrismaClient) {
    this.prisma = _prisma;
  }
  async create(dto: ICreateUserRepository): Promise<number> {
    const user = await this.prisma.user.create({ data: dto });
    return user.id;
  }
}
