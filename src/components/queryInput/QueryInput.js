import React from 'react'
import StyledQueryInput from './QueryInput.styles'
import StyledTextArea from '../formItems/TextArea.styles'
import {StyledButton} from '../formItems/Button.styles'


const QueryInput = () => {
    const submitQuery = () => {
        alert('Query submitted')
    }

  return (
    <StyledQueryInput>
        <StyledTextArea label='' />
        <StyledButton onClick={submitQuery} color='success'>
            Submit Query
        </StyledButton>
    </StyledQueryInput>
  )
}

export default QueryInput