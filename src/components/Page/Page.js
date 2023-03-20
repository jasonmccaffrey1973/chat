import React from 'react'
import StyledPage from './Page.styles'


const Page = ({children, title="Chat Appilcation"}) => {
    document.title = title
  return (
    <StyledPage id='applicationPage'>
        {children}
    </StyledPage>
  )
}

export default Page