import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App', () => {
  it('renders the name in the hero', () => {
    render(<App />);
    expect(screen.getAllByText(/Pragati Ravi Gangoji/i).length).toBeGreaterThan(0);
  });

  it('renders primary navigation CTA', () => {
    render(<App />);
    expect(screen.getByText(/View Projects/i)).toBeInTheDocument();
  });
});
