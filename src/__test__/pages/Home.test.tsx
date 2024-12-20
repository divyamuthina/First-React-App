import React from 'react';
import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Home } from '../../pages';

describe('Home Component', () => {
  test('renders Home text', () => {
    render(<Home />);
    const aboutElement = screen.getByText(/home/i);
    expect(aboutElement).toBeInTheDocument();
  });
});
