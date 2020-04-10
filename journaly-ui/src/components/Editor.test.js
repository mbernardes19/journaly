import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TextEditor from './Editor';
import axios from 'axios';

test('should display text props content when created with it', () => {
  const {getByText} = render(<TextEditor text="Testing123"/>);
  const textEditorContent = getByText(/Testing123/i);
  expect(textEditorContent).toBeInTheDocument();
});

// test('should enable writing on editor element when clicked', () => {
//   const {getByTestId} = render(<TextEditor/>)
//   const editorContainer = getByTestId(/editor-container/i)
//   fireEvent.click(editorContainer)
//   const focusedEl = document.activeElement;
//   console.log(focusedEl);
// });
