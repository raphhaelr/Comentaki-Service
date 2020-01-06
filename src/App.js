import React from 'react'

import './style.css'
import NewComment from './NewComment'
import Comments from './Comments'
import { AuthProvider } from './auth'
import CreateUser from './CreateUser'
import UserInfo from './UserInfo'
import SignInUser from './SignInUser'
import HeaderComments from './HeaderComments'

function App() {
  

  return (
    <AuthProvider>
      <div>
        <HeaderComments/>
        <NewComment />
        <Comments />
        <CreateUser/>
        <SignInUser/>
        <UserInfo />
      </div>
    </AuthProvider>
  )
}

export default App;
