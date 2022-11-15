import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { WrappedApp, App } from './App';

// TODO: Falla la prueba hay que corregirla.
describe('App', () => {
  it('Renders hello world', () => {
    // Arrange,
    render(<WrappedApp />);
    // Act
    // Expect
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Mi portafolio profesional'
    );
  });

  it('Renders not found if invalid path', () => {
    render(
      <MemoryRouter initialEntries={['/not-found-page']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Content Not found'
    );
  });
});
