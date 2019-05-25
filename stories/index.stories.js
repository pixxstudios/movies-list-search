import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';

import Button from '../src/components/button/index';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('Default', () => <Button DEFAULT />)
  .add('Primary', () => <Button PRIMARY />)
  .add('Disabled', () => <Button DISABLED />)
;
