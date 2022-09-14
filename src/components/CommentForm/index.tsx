import React from 'react';
import Button from '../Button';

import * as S from './styles';

export const CommentForm = () => {
  return (
    <S.FormContent>
        <S.FormDescription>Deixe seu feedback</S.FormDescription>
        <S.FormTextArea placeholder='Deixe um comentário' />
        <S.FormButton type="submit" buttonLabel={'Comentar'} />
    </S.FormContent>
  )
}

