import { createButton } from './Button';

export default {
  title: 'Example/Button',
  argTypes: {
    label: { control: 'text', defaultValue: 'button', type: { name: 'string', required: false } },
    onClick: { action: 'onClick' },
    size: {
      control: { type: 'select' },
      defaultValue: 'md',
      options: ['sm', 'md', 'lg', 'xl'],
    },
    mode: {
      control: { type: 'select' },
      options: [
        'base',
        'accent',
        'outline-base',
        'outline-accent',
        'primary',
        'alternative',
        'secondary',
        'ghost',
      ],
    },
  },
};

const Template = ({ label, ...args }) => {
  return createButton({ label, ...args });
};

export const base = Template.bind({});
base.args = {
  mode: 'base',
};

export const accent = Template.bind({});
accent.args = {
  mode: 'accent',
};

export const outlineBase = Template.bind({});
outlineBase.args = {
  mode: 'outline-base',
};

export const outlineAccent = Template.bind({});
outlineAccent.args = {
  mode: 'outline-accent',
};

export const primary = Template.bind({});
primary.args = {
  mode: 'primary',
};

export const alternative = Template.bind({});
alternative.args = {
  mode: 'alternative',
};

export const secondary = Template.bind({});
secondary.args = {
  mode: 'secondary',
};

export const ghost = Template.bind({});
ghost.args = {
  mode: 'ghost',
};
