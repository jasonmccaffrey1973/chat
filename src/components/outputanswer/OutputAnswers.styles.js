import styled from 'styled-components'
import { getColor } from '../../themeAttributes'
import {darken } from 'polished'


export const StyledOutputAnswers = styled.div`
    {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: calc(100% - 0.5rem);
        padding: 0.5rem;
        overflow-y: auto;
        background-color: ${darken(0.166666, getColor('light'))};
        border-radius: 0.5rem;
    }`

export default StyledOutputAnswers