import { FC } from 'react';

interface IMenuItemProps {
  imagePath: string;
  weight: number;
  pizzaName: string;
  ingredients: string;
  price: number;
}

export const MenuItem: FC<IMenuItemProps> = ({ imagePath, weight, pizzaName, ingredients, price }) => {
  return (
    <div className="w-96 shadow-xl roundex-xl bg-white">
      <div className="relative">
        <img className="w-full rounded-t-2xl object-cover object-center h-[247px]" src={imagePath} alt={pizzaName} />
        <span className="rounded-[32px] absolute bottom-1.5 right-3 bg-gray-900/50 text-white text-sm px-2 py-0.5">{weight}g</span>
      </div>
      <div className="p-8">
        <h3 className="text-xl font-semibold mb-2">{pizzaName}</h3>
        <p className="mb-8">{ingredients}</p>
        <span className="text-xl font-semibold">{price}$</span>
      </div>
    </div>
  );
};
