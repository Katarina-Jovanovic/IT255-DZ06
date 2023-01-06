import { Post } from "src/app/services/Post";

export interface PostState{

posts: Array<Post>;


}
export const initialPostsState: PostState={

    posts: []
};