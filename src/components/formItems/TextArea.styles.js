import styled from 'styled-components'

export const StyledTextArea = styled.textarea`
    {
        width: 20rem;
        height: 7rem;
        display: block;
        padding: 0.5rem;
        margin 0.5rem auto;
        border: 1px solid hsla(0, 0%, 80%, 1.00);
        border-radius: 0.15rem;
        color: hsla(0, 0%, 20%, 1.00);
        background-color: hsla(0, 0%, 100%, 1.00);
        box-shadow: inset 0.125rem 0.125rem 0.25rem 0 rgba(0, 0, 0, 0.25);
        resize: none;
        font-size: 1rem;
        line-height: 1.5rem;
        overflow: auto;
    }`

export default StyledTextArea