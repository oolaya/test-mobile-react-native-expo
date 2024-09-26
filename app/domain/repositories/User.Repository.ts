import { UserEntity } from "../entities/User.Entity";
import { ResponseRepository } from "./response.Repository";

export interface UserRepository {
  getUserById(id: string): Promise<ResponseRepository<UserEntity>>;
  getAll(): Promise<ResponseRepository<Array<UserEntity>>>;
}
