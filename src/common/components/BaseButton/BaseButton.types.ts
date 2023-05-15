import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export interface IBaseButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  text: string;
}
