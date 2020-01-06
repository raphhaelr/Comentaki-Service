import React, { useState, useContext } from 'react'
import { AuthContext } from './auth'

const CreateUser = () => {
    const auth = useContext(AuthContext)

    const [form, setForm] = useState({ email: '', password: '' })

    const onChange = campo => evt => {
        setForm({
            ...form,
            [campo]: evt.target.value
        })
    }

    const EnterPress = event =>{
        if(event.key === 'Enter'){
            auth.createUser.createUser(form.email, form.password)
        }
    }

    if(auth.user !== null){
        return null
    }
    return (
        <React.Fragment>
            {
                auth.createUser.createUserState !== '' &&
                <p>{auth.createUser.createUserState.error}</p>
            }
            <h3>Criar nova conta</h3>
            <input className='form-control' type='text' placeholder='Seu email' value={form.email} onChange={onChange('email')} onKeyPress={EnterPress}/>
            <input className='form-control' type='password' placeholder='Sua senha' value={form.password} onChange={onChange('password')} onKeyPress={EnterPress}/>
            <br/>
            <button className='btn btn-primary btn-sm' onClick={() => {
                auth.createUser.createUser(form.email, form.password)
            }}>Criar conta</button>
        </React.Fragment>
    )
}

export default CreateUser