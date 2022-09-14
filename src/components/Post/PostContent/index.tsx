import React from "react";

import * as S from "./styles";

export const PostContent = () => {
  return (
    <S.Wrapper>
      <S.PostContentParagraph>Fala galeraa 👋</S.PostContentParagraph>
      <S.PostContentParagraph>
        Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no
        NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
      </S.PostContentParagraph>
      <S.PostContentParagraph>
        <S.PostContentLink>👉 jane.design/doctorcare</S.PostContentLink>
      </S.PostContentParagraph>
      <S.PostContentParagraph>
        {["#novoprojeto", "#nlw", "#rocketseat"].map((tag) => (
          <S.PostContentLink>{tag}</S.PostContentLink>
        ))}
      </S.PostContentParagraph>
    </S.Wrapper>
  );
};
