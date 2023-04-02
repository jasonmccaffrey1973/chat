import styled from 'styled-components'

export const StyledMain = styled.main`
    {
        grid-area: main;
        display: grid;
        grid-template-rows: 1fr auto;
        grid-template-columns: 1fr;
        grid-template-areas: "answersArea" "questionArea";
        padding: 0.5rem;
    }

`

export default StyledMain