import { PostEntity } from "../entities/Post.Entity";
import { GenricRepostory } from "./Generic.Repository";

export interface PostRepository extends GenricRepostory<PostEntity> {}
