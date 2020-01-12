import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { AuthProvider } from './auth'
import './style.css'
import CreateUser from './pages/CreateUser'
import UserInfo from './elements/UserInfo'
import Header from './elements/Header.js'
import CommentsPage from './pages/CommentsPage'
import SignInUser from './pages/SignInUser'

function App() {
  return (
    <Router>
      <AuthProvider>
        <div>
          <Header />
          <Route path='/' exact component={SignInUser} />
          <Route path='/comment' exact component={CommentsPage} />
          <Route path='/register' exact component={CreateUser} />
          <Route path='/userconfig' exact component={UserInfo} />
        </div>
      </AuthProvider>
    </Router>
  )
}

export default App;
