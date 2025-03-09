import { PrismaClient } from "@prisma/client";
import { Router } from "express";
import { CreateUserDto } from "../domain/user/interfaces/user/dto/CreateUserDto";
import { CreateUserService } from "../domain/user/services/CreateUserService";
import { UserRepository } from "../infrastructures/repositories/user/user.repository";

export function UserController() {
  const router = Router();

  const prisma = new PrismaClient();
  const userRepository = new UserRepository(prisma);
  const createUserService = new CreateUserService(userRepository);

  router.post("/", async (req, res) => {
    const dto: CreateUserDto = req.body;
    await createUserService.execute(dto);
    res.status(201).send();
  });

  return router;
}
