import { initialPostsState } from "../state/post.state";
import { PostActions, EnumPostAction } from "../actions/post.actions";

export function postReducer(

state=initialPostsState,
action: PostActions


){
    switch (action.type){

case EnumPostAction.GetPostsSuccess:{

    return{
        ...state,
        posts: action.payload
    };
}
default:
    return state;
    }





} 