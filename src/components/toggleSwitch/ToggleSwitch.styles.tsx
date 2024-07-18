import styled from 'styled-components';
import {colors} from 'resources/colors';

export const Input = styled.input.attrs({type: 'checkbox'})`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background-color: ${colors.blue};
  }

  &:checked + span:before {
    transform: translateX(23.4px);
    background-color: ${colors.white};
  }

  &:focus + span {
    box-shadow: 0 0 1px ${colors.blue};
  }
`;

export const Span = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${colors.lightblue};
  transition: 0.4s;
  border-radius: 30.6px;

  &:before {
    position: absolute;
    content: '';
    height: 23.4px;
    width: 23.4px;
    left: 3.6px;
    bottom: 3.6px;
    background-color: ${colors.yellow};
    transition: 0.4s;
    border-radius: 50%;
  }
`;

export const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 54px;
  height: 30.6px;
`;
