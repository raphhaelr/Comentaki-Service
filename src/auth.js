import React, { useState, useEffect } from 'react'
import firebase from './firebase'


export const AuthContext = React.createContext()

const useCreateUser = () => {
    const [state, setState] = useState({
        error: '',
        success: ''
    })
    const createUser = (email, password) => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(user => {
                if (user) {
                    setState({
                        ...state,
                        success: 'Ok'
                    })
                }
            }).catch(err => {
                setState({
                    ...state,
                    error: err.message
                })
            })
    }
    return [state, createUser]
}

const useSignInUser = () => {
    const [state, setState] = useState({
        error: '',
        success: ''
    })
    const SignInUser = (email, password) => {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(err => {
                setState({
                    ...state,
                    error: err.message
                })
            })
    }
    return [state, SignInUser]
}

const useGetUser = () => {
    const [user, setUser] = useState(null)
    useEffect(() => {
        firebase.auth().onAuthStateChanged(currentUser => {
            if (currentUser) {
                setUser(currentUser)
            } else {
                setUser(null)
            }
        })
    }, [])
    return user
}


const signout = () => {
    firebase
        .auth()
        .signOut()
        .then(() => {
            console.log('signout')
        })
}


export const AuthProvider = ({ children }) => {
    const user = useGetUser()
    const [createUserState, createUser] = useCreateUser()
    const [signInUserState, signInUser] = useSignInUser()
    return (
        <AuthContext.Provider value={{
            user,
            createUser: {
                createUserState, createUser
            },
            signout,
            signInUser: {
                signInUserState, signInUser
            }
        }}>
            {children}
        </AuthContext.Provider>
    )
}
