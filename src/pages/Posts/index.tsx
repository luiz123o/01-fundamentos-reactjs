import React from "react";
import { Header } from "../../components/Header";
import Post from "../../components/Post";
import { SideBar } from "../../components/SideBar";

import * as S from "./styles";

export const Posts: React.FC = () => {
  return (
    <S.PostWrapper>
      <Header />
      <S.PostContent>
        <SideBar />
        <S.PostMain>
          <Post />
          <Post />
        </S.PostMain>
      </S.PostContent>      
    </S.PostWrapper>
  );
};
