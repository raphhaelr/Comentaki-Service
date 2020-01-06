import React, { useState, useContext } from 'react'
import { AuthContext } from './auth'

const SignInUser = () => {
    const auth = useContext(AuthContext)
      
    const [form, setForm] = useState({ email: '', password: '' })

    const onChange = campo => evt => {
        setForm({
            ...form,
            [campo]: evt.target.value
        })
    }

    const EnterPress = event => {
        if(event.key === 'Enter'){
            auth.signInUser.signInUser(form.email, form.password)
        }
    }

    if (auth.user !== null) {
        return null
    }
    return (
        <React.Fragment>
            <h3>Entrar</h3>
            {
                auth.signInUser.signInUserState !== '' &&
                <p>{auth.signInUser.signInUserState.error}</p>
            }
            <input className='form-control' type='text' placeholder='Seu email' value={form.email} onChange={onChange('email')} onKeyPress={EnterPress}/>
            <input className='form-control' type='password' placeholder='Sua senha' value={form.password} onChange={onChange('password')} onKeyPress={EnterPress}/>
            <br/>
            <button className='btn btn-primary btn-sm' onClick={() => {
                auth.signInUser.signInUser(form.email, form.password)
            }}>Entrar na sua conta</button>
        </React.Fragment>
    )
}
//<button type="button" class="btn btn-primary">Primary</button>
export default SignInUser