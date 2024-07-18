import React from 'react';
import * as S from './ToggleSwitch.styles';

type Props = {
  isOn: boolean;
  handleOnclick: () => void;
};

export const ToggleSwitch = (props: Props) => {
  const {isOn, handleOnclick} = props;

  return (
    <S.Switch data-testid="toggleSwitch">
      <S.Input checked={isOn} onChange={handleOnclick} />
      <S.Span className={`slider round ${isOn ? 'checked' : ''}`}></S.Span>
    </S.Switch>
  );
};
