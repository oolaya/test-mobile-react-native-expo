import { ResponseRepository } from "./response.Repository";

export interface GenricRepostory<T> {
  getById(id: string): Promise<ResponseRepository<T>>;
  getList(): Promise<ResponseRepository<Array<T>>>;
  create(body: T): Promise<ResponseRepository<T>>;
  update(body: T): Promise<ResponseRepository<T>>;
  delete(id: string): Promise<ResponseRepository<string>>;
}
