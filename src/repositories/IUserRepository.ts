import { User } from "../entities/user";

export interface IUserRepository {
  save(user: User): Promise<void>;
  findByEmail(email: string): Promise<User | undefined>;
}
