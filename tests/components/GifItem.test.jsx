import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

let title = 'Curso';
let url = 'https://www.udemy.com/course/react-cero-experto/learn/lecture/19784000#overview';

describe('GifItem component tests', ()=> {
    test('Should match with snapshot', ()=> {
        const {container} = render(<GifItem title= {title} url={url}/>);
        expect(container).toMatchSnapshot();
    });
    test('debe mostrar la imagen con el url y el alt indicado', () => {
        render( <GifItem title={title} url = {url}/>);
        //expect(screen.getByRole('img').src).toBe(url);

        const {src, alt} = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( alt );
    });
    test('debe mostrar el titulo del componente', () => {
        render(<GifItem title = {title} url={url}/>);
        expect( screen.getByText(title)).toBeTruthy();
    })
})