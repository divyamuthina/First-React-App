import React from 'react';
import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { About } from '../../pages';

describe('About Component', () => {
  test('renders About text', () => {
    render(<About />);
    const aboutElement = screen.getByText(/about/i);
    expect(aboutElement).toBeInTheDocument();
  });
});
