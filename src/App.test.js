import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
 render(<App />);
 //find element role of button and text of 'Change to blue'
 const colorButton=screen.getByRole('button',{name:'Change to blue'});
 expect(colorButton).toHaveStyle({backgroundColor:'red'});
});
test('button turns blue when clicked',() => {
render(<App />);
const colorButton=screen.getByRole('button',{name:'Change to blue'});
fireEvent.click(colorButton);
expect(colorButton).toHaveStyle({backgroundColor:'blue'});
//find the text that
expect(colorButton).toHaveTextContent('Change to red');
});