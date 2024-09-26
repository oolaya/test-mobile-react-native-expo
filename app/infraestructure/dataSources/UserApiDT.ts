import { UserEntity } from "@/app/domain/entities/User.Entity";

export class UserApiDT {
  data: Array<UserEntity> = [
    {
      email: { email: "oolaya@ucompensar.edu.co" },
      id: "1",
      name: "Oscar Olaya",
    },
    {
      email: { email: "oolaya1@ucompensar.edu.co" },
      id: "2",
      name: "Oscar Olaya1",
    },
    {
      email: { email: "oolaya2@ucompensar.edu.co" },
      id: "3",
      name: "Oscar2 Olaya2",
    },
  ];

  async fechUser(): Promise<Array<UserEntity>> {
    return await this.data;
  }
}
