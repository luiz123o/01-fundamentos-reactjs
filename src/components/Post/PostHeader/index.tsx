import { formattedDate } from "../../../utils/formattedDates";

import * as S from "./styles";

type AuthorType = {
  name?: string;
  authorAvatarUrl?: string;
  authorJobDescription?: string;
  postTime: Date;
};

interface SideBarInterface {
  author?: AuthorType;
}

const authorMock: AuthorType = {
  name: "Luiz Otávio",
  authorAvatarUrl: "https://avatars.githubusercontent.com/u/43886036?v=4",
  authorJobDescription: "Web developer",
  postTime: new Date(),
};

export const PostHeader = ({ author = authorMock }: SideBarInterface) => {
  const postDateFormattedForTitle = formattedDate({
    date: author.postTime,
    options: {
      dateStyle: "long",
      timeStyle: "short",
    },
  });

  

  return (
    <S.PostHeaderWrapper>
      <S.PostHeader>
        <S.HeaderContent>
          <S.AuthorAvatar src={author.authorAvatarUrl} />
          <S.AuthorInfoContent>
            <S.AuthorName>{author.name}</S.AuthorName>
            <S.AuthorJob>{author.authorJobDescription}</S.AuthorJob>
          </S.AuthorInfoContent>
        </S.HeaderContent>
        <S.PostTime>{`Publicado as ${postDateFormattedForTitle}`}</S.PostTime>
      </S.PostHeader>
    </S.PostHeaderWrapper>
  );
};
