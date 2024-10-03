import { UserEntity } from "../entities/User.Entity";
import { UserPreviewEntity } from "../entities/UserPreview.Entity";
import { GenricRepostory } from "./Generic.Repository";
import { ResponseRepository } from "./response.Repository";

export interface UserRepository extends GenricRepostory<UserEntity> {}
