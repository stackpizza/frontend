import pizzaMenu from '@app/mocks/pizza.json';
import { MenuItem } from '../menu-item/menu-item.component';

const MenuList = () => {
  return (
    <section className="flex flex-wrap gap-10 justify-center">
      {pizzaMenu.map(({ image, title, price, ...pizza }) => (
        <MenuItem {...pizza} pizzaName={title} price={price * 0.1} imagePath={`assets/images/${image}`} />
      ))}
    </section>
  );
};

export default MenuList;
