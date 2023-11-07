import React from 'react';
import CharacterList from './CharacterList ';

export default {
  title: 'CharacterList',
  component: CharacterList,
  argTypes: {
    selectedOption: {
      options: ['name', 'image'],
      control: { type: 'select' },
    },
  },
};

const Template = (args) => <CharacterList {...args} />;

export const Default = Template.bind({});
Default.args = {
  selectedOption: 'name',
};