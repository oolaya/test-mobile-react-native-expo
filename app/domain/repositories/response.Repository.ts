export interface ResponseRepository<T> {
  code: string;
  msn: string;
  data?: T;
}
