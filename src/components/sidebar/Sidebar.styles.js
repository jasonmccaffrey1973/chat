import styled from 'styled-components'

export const StyledSidebar = styled.div`
  {
    --divider-color: hsla(0, 0%, 100%, 0.33);
    display: grid;
    grid-template-rows: auto 1fr auto;
    grid-template-columns: 1fr;
    grid-template-areas:
      "top"
      "middle"
      "bottom";
    height: 100vh;
    padding: 1rem;
    background-color: #000;
    color: #fff;
    box-shadow: 0 0 0.5rem 0.25rem rgba(0, 0, 0, 0.5);
    .top {
      grid-area: top;
      padding-bottom: 0.5rem;
    }
    .top::after {
        content: "";
        display: block;
        width: 100%;
        height: 1px;
        background-color: var(--divider-color);
        margin-block: 1.5rem 0.33rem;
    }
    .middle {
      grid-area: middle;
    }
    .bottom {
      grid-area: bottom;
    }
    .bottom::before {
        content: "";
        display: block;
        width: 100%;
        height: 1px;
        background-color: var(--divider-color);
        margin-block: 0.33rem 0.5rem;
    }
  }
`
export default StyledSidebar