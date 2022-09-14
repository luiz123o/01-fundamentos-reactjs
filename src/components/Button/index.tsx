import React, { ComponentProps } from 'react'

import * as S from './styles'

export type ButtonProps = ComponentProps<typeof S["Button"]> & {
  buttonLabel: React.ReactElement | string;
  icon?: React.ReactElement | null;
  as?: string;
  href?: string;
};

const Button = ({
    buttonLabel = 'label',
    icon = null,
    ...props
}: ButtonProps) => {
    return (
        <S.Button   {...props}>
            {icon}
            {buttonLabel}
        </S.Button>
    )
}

export default Button