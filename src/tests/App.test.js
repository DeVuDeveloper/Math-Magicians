import { fireEvent, render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from '../App';

const Mock = () => (

  <App />

);

describe('testing components', () => {
  it('if render Title', () => {
    render(<App />);
    screen.getByText('Welcome to my page !');
  });
  it('if link calculator works ', () => {
    render(<App />);

    fireEvent.click(screen.getByText('Calculator'));
    screen.getByText("Let's do some math!");
  });
  it('if link Quotes works', () => {
    render(<App />);
    fireEvent.click(screen.getByText('Quotes'));
    screen.getByText('Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding. -William Paul Thurston');
  });
  it('if App is displaying right', () => {
    const display = renderer
      .create(<Mock />)
      .toJSON();
    expect(display).toMatchSnapshot();
  });
});
