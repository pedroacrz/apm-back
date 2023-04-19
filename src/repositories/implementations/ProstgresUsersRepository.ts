import { User } from "../../entities/user";
import { IUserRepository } from "../../repositories/IUserRepository";

export class PostgresUsersRepository implements IUserRepository {
  private users: User[] = [];

  async save(user: User): Promise<void> {
    this.users.push(user);
  }

  async findByEmail(email: string): Promise<User | undefined> {
    const user = this.users.find((user) => user.email === email);
    return user ? user : undefined;
  }
}
