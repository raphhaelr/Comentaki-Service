import React, { useState, useContext } from 'react'
import { AuthContext } from '../auth'
import { Redirect } from 'react-router-dom'

const FormDisplayName = ({ displayName, user }) => {
    const [newDisplayName, setNewDisplayName] = useState(displayName)

    const onChange = evt => {
        setNewDisplayName(evt.target.value)
    }

    const sleep = time => new Promise(resolve => setTimeout(resolve, time))

    const save = async () => {
        if (newDisplayName !== '') {
            user.updateProfile({ displayName: newDisplayName })
            await sleep(500)
            window.location.assign('/comment')
        }
    }

    return (
        <React.Fragment>
            <label>Digite um novo nome:</label>
            <input className='form-control' type='text' value={newDisplayName} onChange={onChange} />
            <br />
            <button className='btn btn-primary btn-sm' onClick={save}>Save display name</button>
        </React.Fragment>
    )
}


const UserInfo = () => {
    const auth = useContext(AuthContext)

    if (auth.user === null) {
        return <Redirect to='/' />
    }

    const { displayName } = auth.user
    const [alternativeDisplayName] = auth.user.email.split('@')
    const dn = displayName || alternativeDisplayName

    return (
        <React.Fragment>
            <p className='font-weight-bold'>Seu nome de perfil atual é {dn} !</p>
            <FormDisplayName displayName={dn} user={auth.user} />
        </React.Fragment>
    )
}

export default UserInfo