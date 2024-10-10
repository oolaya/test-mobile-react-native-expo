import { UserEntity } from "@/app/domain/entities/User.Entity";
import { ResponseRepository } from "@/app/domain/repositories/response.Repository";
import { UserRepository } from "@/app/domain/repositories/User.Repository";
import { ApiDummy } from "@/app/infraestructure/dataSources/ApiDummy";

export class UserServices implements UserRepository {
  private apiData: ApiDummy<UserEntity>;
  responseG: ResponseRepository<any> = { code: "", msn: "" };

  constructor(apiData: ApiDummy<UserEntity>) {
    this.apiData = apiData;
  }
  getById(id: string): Promise<ResponseRepository<UserEntity>> {
    return this.apiData.get(`user/${id}`).then((user: any) => {
      this.responseG.code = "200";
      this.responseG.msn = "Ok";
      this.responseG.data = user?.data;
      return this.responseG;
    });
  }
  getList(): Promise<ResponseRepository<UserEntity[]>> {
    throw new Error("Method not implemented.");
  }
  create(body: UserEntity): Promise<ResponseRepository<UserEntity>> {
    throw new Error("Method not implemented.");
  }
  update(body: UserEntity): Promise<ResponseRepository<UserEntity>> {
    throw new Error("Method not implemented.");
  }
  delete(id: string): Promise<ResponseRepository<string>> {
    throw new Error("Method not implemented.");
  }

  // async getUserById(id: string): Promise<ResponseRepository<UserEntity>> {
  //   let user = (await this.apiData.fechUser()).find((z) => z.id == id);
  //   console.log("User ", user);
  //   if (user!!) {
  //     return { code: "200", msn: "Ok", data: user };
  //   } else {
  //     return { code: "200", msn: "Non Data" };
  //   }
  // }
  // async getAll(): Promise<ResponseRepository<Array<UserEntity>>> {
  //   let response: ResponseRepository<Array<UserEntity>> = {
  //     code: "200",
  //     msn: "Todos los usuario",
  //     data: await this.apiData.fechUser(),
  //   };
  //   return response;
  // }
}
