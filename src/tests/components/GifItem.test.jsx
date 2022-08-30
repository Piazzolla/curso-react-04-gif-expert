import { render, screen } from "@testing-library/react"
import { GifItem } from "../../components/GifItem"

describe('Pruebas en GiftItem', () => {
    const title = "Mariano";
    const url = "http://www.google.com/a.jpg";
    test('debe hacer match con el snapshot', () => { 
            const { container } = render( <GifItem title={title} url={url}/>)
            expect( container ).toMatchSnapshot();
    })

    test('debe mostrar la imagen con el URL y el ALT indicado', () => { 
        render( <GifItem title={title} url={url} />);
        
       // screen.debug();// te muestra el sujeto de estudio que trae render
        // expect( screen.getByRole('img').src).toBe( url );
        // expect( screen.getByRole('img').alt).toBe( title );
    //esto mismo mas prolijo:
        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url);
        expect( alt ).toBe( title );


    })

    test('debe mostrar el titulo en el componente', () => { 
        render( <GifItem title={title} url={url} />);
        expect( screen.getByText( title )).toBeTruthy(); //me aseguro de que aparte de la property alt este el <p> con el texto
        
     })
})

