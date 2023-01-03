import { ComponentStory, ComponentMeta } from '@storybook/react';
import MenuItem from './menu-item.component';

export default {
  title: 'Component/Menu',
  component: MenuItem,
} as ComponentMeta<typeof MenuItem>;

const Template: ComponentStory<typeof MenuItem> = (args) => <MenuItem {...args} />;

export const View = Template.bind({});

View.args = {
  imagePath: '/assets/images/carbonara.jpeg',
  weight: 550,
  pizzaName: 'Pizza Carbonara',
  ingridients: 'Guanciale, eggs, Parmesan, black pepper, spaghetti',
  price: 4.5,
};
