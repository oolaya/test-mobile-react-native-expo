import { UserEntity } from "@/app/domain/entities/User.Entity";
import { ResponseRepository } from "@/app/domain/repositories/response.Repository";
import { UserRepository } from "@/app/domain/repositories/User.Repository";
import { UserApiDT } from "@/app/infraestructure/dataSources/UserApiDT";

export class UserServices implements UserRepository {
  private apiData: UserApiDT;

  constructor(apiData: UserApiDT) {
    this.apiData = apiData;
  }

  async getUserById(id: string): Promise<ResponseRepository<UserEntity>> {
    let user = (await this.apiData.fechUser()).find((z) => z.id == id);
    console.log("User ", user);
    if (user!!) {
      return { code: "200", msn: "Ok", data: user };
    } else {
      return { code: "200", msn: "Non Data" };
    }
  }
  async getAll(): Promise<ResponseRepository<Array<UserEntity>>> {
    let response: ResponseRepository<Array<UserEntity>> = {
      code: "200",
      msn: "Todos los usuario",
      data: await this.apiData.fechUser(),
    };
    return response;
  }
}
