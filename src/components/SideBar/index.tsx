import { PencilLine } from 'phosphor-react'
import Button from '../Button';

import * as S from './styles';

type UserType = {
    name?: string;
    profileCoverUrl?: string;
    profileAvatarUrl?: string;
    profileJobDescription?: string;
}

interface SideBarInterface {
    user?: UserType
}

const userMock: UserType = {
    name: "Luiz Otávio",
    profileCoverUrl: "https://images.unsplash.com/photo-1503252947848-7338d3f92f31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50",
    profileAvatarUrl: 'https://avatars.githubusercontent.com/u/43886036?v=4',
    profileJobDescription: 'Web developer'
}

export const SideBar = ({ user = userMock }: SideBarInterface) => {
    return (
        <S.Wrapper>
            <S.ImgCover src={user.profileCoverUrl} />
            <S.ProfileContent>
                <S.ProfileAvatar src={user.profileAvatarUrl} />
                <S.ProfileName>{user.name}</S.ProfileName>
                <S.ProfileJob>{user.profileJobDescription}</S.ProfileJob>
            </S.ProfileContent>
            <S.ProfileFooter>
                <Button icon={<PencilLine />} buttonLabel={'Editar Perfil'} />
            </S.ProfileFooter>
        </S.Wrapper>
    )
}

