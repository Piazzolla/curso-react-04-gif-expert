import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe('pruebas en <GifGrid/>', () => { 
    const category = 'One Punch';
    test('debe mostrar el loading inicialmente', () => { 
 
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render( <GifGrid category={ category }/>);
        expect( screen.getByText('Cargando...') );
        expect( screen.getByText(category) );
     });


     //no evaluo aca el hook useFetchGifs porque no es responsabilidad de GifGrid que funcione (prueba unitaria)
     test('debe mostrar items cuando se cargan las imagenes', () => { 
        const gifs = [{
            id: 'ABC',
            title: 'Saitama',
            url: 'https//lalala/saitama.jpg'
        },
        {
            id: 'BCD',
            title: 'lalalaa',
            url: 'https//lalala/saitama.jpg'
        }]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })

        render( <GifGrid category={ category }/>);
        expect( screen.getAllByRole('img').length).toBe(2);

      })
 })