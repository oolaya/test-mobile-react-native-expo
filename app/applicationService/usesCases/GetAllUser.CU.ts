import { UserEntity } from "@/app/domain/entities/User.Entity";
import { ResponseRepository } from "@/app/domain/repositories/response.Repository";
import { UserRepository } from "@/app/domain/repositories/User.Repository";

export class GetAllCU {
  private userRepository: UserRepository;
  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async execute(): Promise<ResponseRepository<Array<UserEntity>>> {
    return await this.userRepository.getAll();
  }
}
