import { UserEntity } from "@/app/domain/entities/User.Entity";
import { ResponseRepository } from "@/app/domain/repositories/response.Repository";
import { UserRepository } from "@/app/domain/repositories/User.Repository";

export class GetUserCU {
  private userRepository: UserRepository;
  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async execute(id: string): Promise<ResponseRepository<UserEntity>> {
    return await this.userRepository.getById(id);
  }
}
