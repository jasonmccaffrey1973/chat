import styled from 'styled-components'
import { darken } from 'polished'
import { getColor } from '../../themeAttributes'

export const StyledButton = styled.button`
    {
        background-color: ${({ color }) => getColor(color) };
        color: ${({ color }) => (color === 'light' ? getColor('dark') : getColor('light'))};
        border-radius: 0.25rem;
        border: none;
        padding: 0.33rem 1rem;
        font-size: 0.8rem;
        line-height: 1.2rem;
        cursor: pointer;
        text-transform: uppercase;
        min-width: 8rem;
        box-shadow: 0 0 0.25rem 0 rgba(0, 0, 0, 0.33);
        transition: background-color 300ms ease-in-out;
        &:hover {
            background-color: ${({color}) => darken(0.1, getColor(color))};
            box-shadow: inset 0 0 0.25rem 0 rgba(0, 0, 0, 0.33);
    }
`
