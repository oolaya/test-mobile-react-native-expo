import { UserEntity } from "../entities/User.Entity";
import { GenricRepostory } from "./Generic.Repository";
import { ResponseRepository } from "./response.Repository";

export interface UserRepository extends GenricRepostory<UserEntity> {}
