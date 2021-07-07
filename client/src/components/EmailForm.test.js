import React from 'react';
import * as rtl from '@testing-library/react';
import EmailForm from './EmailForm';

it('renders correctly emailForm', () => {
    const wrapper = (<EmailForm />)
  
    expect(<EmailForm/>).toMatchSnapshot();
  });