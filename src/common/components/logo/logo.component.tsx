import { FC } from 'react';

interface ILogoProps {
  textColor?: 'white' | 'black';
}

export const Logo: FC<ILogoProps> = ({ textColor = 'black' }) => (
  <a className={`text-xl text-${textColor} font-semibold`} href="/">
    🍕 PizzaStack
  </a>
);
