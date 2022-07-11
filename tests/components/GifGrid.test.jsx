import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Testing of GifGrid component', () => {

    const category = 'One Punch';

    test('should show loading at first', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render(<GifGrid category = { category }/>);
        expect( screen.getByText('Cargando...'));
        expect( screen.getByText(category));

    });

    test('should show items when useFetchGifs loads images', () => {
        
        const gifs = [
            {
                id: 'ABC',
                title: 'Master',
                url: 'https://eliangerard.github.io/icon.png',
            },
            {
                id: '123',
                title: 'Chief',
                url: 'https://eliangerard.github.io/icon.png',
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });
        render(<GifGrid category = { category }/>);
        expect( screen.getAllByRole('img').length).toBe(2);

    })

})