import React from 'react';
import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { NotFound } from '../../pages';

describe('NotFound Component', () => {
  test('renders NotFound text', () => {
    render(<NotFound />);
    const aboutElement = screen.getByText(/notfound/i);
    expect(aboutElement).toBeInTheDocument();
  });
});
