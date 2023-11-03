import React from 'react';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,

  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const Primary = (args) => <Button {...args}/>;

Primary.args = {
  primary: true,
  label: 'Button',
  size: "medium",
};

export const Secondary = (args) => <Button {...args}/>;

Secondary.args = {
  primary: false,
  label: 'Button',
  size: "medium",
};

export const Large = (args) => <Button {...args}/>;

Large.args = {
  primary: false,
  label: 'Button',
  size: "large",
};

export const Small = (args) => <Button {...args}/>;

Small.args = {
  primary: false,
  label: 'Button',
  size: "small",
};

/* export const Secondary = () => <Button label="Button" />;
export const Large = () => <Button size="large" label="Button" />;
export const Small = () => <Button size="small" label="Button" />; */
