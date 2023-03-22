import React from 'react'
import Footer from './components/footer/Footer'
import Page from './components/page/Page'
import Sidebar from './components/sidebar/Sidebar'
import Header from './components/header/Header'
import Main from './components/main/Main'

// const ChatGPTkey = process.env.REACT_APP_API_KEY
const title = process.env.REACT_APP_TITLE


const App = () => {
  return (
    <Page title={title}>
      <Sidebar />
      <Header />
      <Main />
      <Footer />
    </Page>
  )
}

export default App