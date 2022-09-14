import React from 'react';
import igniteLogo from '../../assets/ignite-logo.svg'
import * as S from './styles';

export const Header: React.FC = () => {
  return (
    <S.HeaderWrapper>
        <S.HeaderLogo src={igniteLogo} alt="Logo tipo do Ignite" />
    </S.HeaderWrapper>
  )
}

