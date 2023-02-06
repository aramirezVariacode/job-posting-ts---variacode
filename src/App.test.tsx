import React from 'react';
import { render, screen } from '@testing-library/react';
import jobPostingAPi from './api/jobPostingApi';
import { JobPostingApp } from './JobPostingApp';

test('renders learn react link', () => {
  render(<JobPostingApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
