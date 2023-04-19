import { User } from "../../entities/user";
import { IMailProvider } from "../../provider/IMailProvider";
import { IUserRepository } from "../../repositories/IUserRepository";
import { ICreateUserRequestDto } from "./create-user-dto";
import { welcome_template } from "../../template/welcome";
export class CreateUserUseCase {
  constructor(
    private userRepository: IUserRepository,
    private mailProvider: IMailProvider
  ) {}
  async execute(data: ICreateUserRequestDto) {
    const userAlreadyExists = await this.userRepository.findByEmail(data.email);

    if (userAlreadyExists) throw new Error("Usuário já existe.");

    const user = new User(data, undefined);

    await this.userRepository.save(user);

    await this.mailProvider.sendMail({
      to: {
        name: data.name,
        email: data.email,
      },
      from: {
        name: "Equipe blabla",
        email: "equipe@equipe.com",
      },
      subject: "Seja bem vindo a plataforma",
      body: welcome_template(user.name),
    });
  }
}
