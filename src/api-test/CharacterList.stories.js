import React from 'react';
import CharacterList from './CharacterList ';
import { within, userEvent } from '@storybook/testing-library';

export default {
  title: 'CharacterList',
  component: CharacterList,
  argTypes: {
    selectedOption: {
      options: ['name', 'image'],
      control: { type: 'select' },
    },
  },
  parameters: {
    actions: {
      handles: ['onChange .character-select'],
    },
  },
};

const Template = (args) => <CharacterList {...args} />;

export const Default = Template.bind({});
Default.args = {
  selectedOption: 'name',
};

Default.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);

   await userEvent.selectOptions(
    canvas.getByRole('combobox', { name: 'Select Character' }),
    'name'
  );

  await userEvent.selectOptions(
    canvas.getByRole('combobox', { name: 'Select Character' }),
    'image'
  );

};