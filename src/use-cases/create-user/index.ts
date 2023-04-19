import { MailTrapMailProvider } from "../../provider/implementations/MailTrapMailProvider";
import { PostgresUsersRepository } from "../../repositories/implementations/ProstgresUsersRepository";
import { CreateUserController } from "./create-user-controller";
import { CreateUserUseCase } from "./create-user-use-case";

const mailTrapMailProvider = new MailTrapMailProvider();
const postgresUsersRepository = new PostgresUsersRepository();

const createUserUseCase = new CreateUserUseCase(
  postgresUsersRepository,
  mailTrapMailProvider
);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserController };
