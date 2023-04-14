import { ComponentStory, ComponentMeta } from '@storybook/react';
import MenuList from './menu-list.component';

export default {
  title: 'Component/Menu/List',
  component: MenuList,
} as ComponentMeta<typeof MenuList>;

const Template: ComponentStory<typeof MenuList> = () => <MenuList />;

export const View = Template.bind({});
