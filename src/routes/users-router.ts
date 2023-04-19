import { Router, Request, Response } from "express";
import { createUserController } from "../use-cases/create-user";

const router = Router();

router.post("/users", (request: Request, response: Response) => {
  return createUserController.handle(request, response);
});

export { router };
