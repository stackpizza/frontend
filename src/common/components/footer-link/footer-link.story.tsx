import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FooterLink } from './footer-link.component';

export default {
  title: 'Common/Footer/Link',
  component: FooterLink,
} as ComponentMeta<typeof FooterLink>;

const Template: ComponentStory<typeof FooterLink> = (args) => (
  <ul>
    <FooterLink {...args} />
  </ul>
);

export const View = Template.bind({});

View.args = {
  href: 'tel:+380505050505',
  children: '+38(050)50-50-505',
};
