import React from 'react';
import { render } from '@testing-library/react';
import TextEditor from './Editor';

test('should display text props content when created with it', () => {
  const textEditor = render(<TextEditor text="Testing123"/>);
  const textEditorContent = textEditor.getByText(/Testing123/i);
  expect(textEditorContent).toBeInTheDocument();
});

test('should display placeholder', () => {
  const {getByText} = render(<TextEditor placeholder="Write your entry here..."/>);
  console.log(getByText(/Write your entry here.../i))
  expect(getByText(/Write your entry here.../i)).toHaveStyle('color: grey');
});
