import { PostHeader } from "./PostHeader";
import { PostContent } from "./PostContent";
import * as S from "./styles";
import { CommentForm } from "../CommentForm";
import CommentItem from "../CommentItem";

const Post = () => {
  return (
    <S.Wrapper>
      <S.Content>
        <PostHeader />
        <PostContent />
        <CommentForm />
        <S.CommentList>
          <CommentItem />
        </S.CommentList>
      </S.Content>
    </S.Wrapper>
  );
};

export default Post;
