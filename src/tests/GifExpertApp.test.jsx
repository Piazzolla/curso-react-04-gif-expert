import { render, screen } from "@testing-library/react";
import { GifExpertApp } from '../GifExpertApp';

describe('Pruebas en <GifExpertApp />', () => { 
    test('Debe matchear con el snapshot', () => { 
        const {container } = render(<GifExpertApp />);
        expect(container).toMatchSnapshot();
    });

    test('debe verificar que las categorias no se repitan', () => { 
        const {container } = render(<GifExpertApp />);
        
      //  TODO...


     });

     test('Verifico que este el titulo', () => { 
        const title = 'GifExpertApp';
        const {container } = render(<GifExpertApp />);
        expect( screen.getByText( title )).toBeTruthy();
     });
 })