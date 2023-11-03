import React from 'react';
import Checkbox from './Checkbox';

export default {
  title: 'Checkbox',
  component: Checkbox,
};

export const Default = () => (
  <Checkbox label="Check me" checked={false} onChange={() => {}} />
);

export const Checked = () => (
  <Checkbox label="Checked" checked={true} onChange={() => {}} />
);
