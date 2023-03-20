import React from 'react'
import Page from './components/Page/Page'
import Sidebar from './components/sidebar/Sidebar'

const key = process.env.REACT_APP_API_KEY
const title = process.env.REACT_APP_TITLE


const App = () => {
  return (
    <Page title={title}>
      <Sidebar />
    </Page>
  )
}

export default App