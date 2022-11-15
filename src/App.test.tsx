import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import App from './App';

// TODO: Falla la prueba hay que corregirla.
describe('App', () => {
  it('Renders hello world', () => {
    // Arrange,
    render(<App />);
    // Act
    // Expect
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Hello world!'
    );
  });
});
