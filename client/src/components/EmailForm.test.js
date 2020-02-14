import React from 'react';
import ReactDOM from 'react-dom';
import EmailForm from './EmailForm';

it('The email form is visible', () => {
  const div = document.createElement('form');
  ReactDOM.render(<EmailForm />, div);
  ReactDOM.unmountComponentAtNode(form);
});
