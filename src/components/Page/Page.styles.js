import styled from 'styled-components'

export const StyledPage = styled.div`
    {
        display: grid;
        grid-template-rows: auto 1fr auto;
        grid-template-columns: auto 1fr;
        grid-template-areas:
            "sideBar header"
            "sideBar main"
            "sideBar footer";
        height: 100vh;
        width: 100%;
        header {
            grid-area: header;
        }
        #sideBar {
            grid-area: sideBar;
            min-width: 20rem;
        }
        main {
            grid-area: main;
        }
        footer {
            grid-area: footer;
        }
    }
`
export default StyledPage
