import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('Tests with useFetchGifs custom hook', () => {
    test('should return the initial state', () => {
        const { result } = renderHook( () => useFetchGifs('One Piece'));
        const { images, isLoading } = result.current;

        expect( images.length ).toBe(0);
        expect( isLoading).toBeTruthy();

    });
    test('should return an images array and isLoading bool at false', async () => {
        const { result } = renderHook( () => useFetchGifs('One Piece'));
        await waitFor(
            ()=> expect(result.current.images.length).toBeGreaterThan(0)
        );

        const {images, isLoading } = result.current;
        expect( images.length ).toBeGreaterThan(0);
        expect( isLoading).toBeFalsy();

    });
})