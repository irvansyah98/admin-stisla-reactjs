import React from 'react'
import {
  Content,
  Sidebar,
  Footer,
  Header
} from './index';

const Layout = () => {

  return (
    <div id="app">
        <div className="main-wrapper main-wrapper-1">
            <div className="navbar-bg"></div>
            <Header/>
            <Sidebar/>
            <div className="main-content">
                <Content/>
            </div>
            <Footer/>
        </div>
    </div>
  )
}

export default Layout;
