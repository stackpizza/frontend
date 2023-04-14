import { FC } from 'react';
import { IPizza } from '../../types/pizza';
import { MenuItem } from '../menu-item/menu-item.component';

interface IMenuListProps {
  Items: IPizza[];
}

const MenuList: FC<IMenuListProps> = ({ Items }) => {
  return (
    <section className="flex flex-wrap gap-10 justify-center">
      {Items.map(({ image, title, price, ...pizza }) => (
        <MenuItem {...pizza} pizzaName={title} price={price * 0.1} imagePath={`assets/images/${image}`} key={`pizza-id=${pizza.id}`} />
      ))}
    </section>
  );
};

export default MenuList;
