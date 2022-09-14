import { ThumbsUp, Trash } from "phosphor-react";
import { formattedDate } from "../../utils/formattedDates";


import * as S from "./styles";

type CommentType = {
  name?: string;
  commentAvatarUrl?: string;
  commentDescription?: string;
  postTime: Date;
};

interface CommentItemProps {
  data?: CommentType;
}
const commentMock: CommentType = {
  name: "Luiz Otávio",
  commentAvatarUrl: "https://avatars.githubusercontent.com/u/43886036?v=4",
  commentDescription: "Web developer",
  postTime: new Date(),
};

const CommentItem = ({ data = commentMock }: CommentItemProps) => {
  const postDateFormattedForTitle = formattedDate({
    date: data.postTime,
    options: {
      dateStyle: "long",
      timeStyle: "short",
    },
  });
  return (
    <S.CommentContainer>
      <S.CommentImage src={data.commentAvatarUrl} alt={data.name} />
      <S.CommentBox>
        <S.CommentContent>
          <S.CommentHeader>
            <S.CommentAuthorContent>
              <S.CommentAuthorName>{data.name}</S.CommentAuthorName>
              <S.CommentAuthorPostTime
                title={postDateFormattedForTitle}
                dateTime={String(data.postTime)}
              >
                Publicado agora
              </S.CommentAuthorPostTime>
            </S.CommentAuthorContent>
            <S.CommentDeleteButton
              buttonLabel={""}
              icon={<Trash size={24} />}
            />
          </S.CommentHeader>

          <S.CommentDescription>Muito bom parabéns!!</S.CommentDescription>
        </S.CommentContent>
        <S.CommentFooter>
          <S.CommentLikeButton
            buttonLabel={
              <>
                Aplaudir <span>20</span>
              </>
            }
            icon={<ThumbsUp size={20} />}
          />
        </S.CommentFooter>
      </S.CommentBox>
    </S.CommentContainer>
  );
};

export default CommentItem;
