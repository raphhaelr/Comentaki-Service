import React, { useState, useContext } from 'react'
import { AuthContext } from '../auth'
import { Link, Redirect } from 'react-router-dom'
import { NavLink } from 'reactstrap'
import HeaderComments from '../elements/Comments/HeaderComments'

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
        if (event.key === 'Enter') {
            auth.signInUser.signInUser(form.email, form.password)
        }
    }

    if (auth.user !== null) {
        return <Redirect to='/comment' />
    }

    return (
        <React.Fragment>
            <HeaderComments />
            <br />
            <h3>Sign In</h3>
            {
                auth.signInUser.signInUserState !== '' &&
                <p>{auth.signInUser.signInUserState.error}</p>
            }
            <input className='form-control' type='text' placeholder='Seu email' value={form.email} onChange={onChange('email')} onKeyPress={EnterPress} />
            <input className='form-control' type='password' placeholder='Sua senha' value={form.password} onChange={onChange('password')} onKeyPress={EnterPress} />
            <button className='btn btn-primary btn-sm' onClick={() => {
                auth.signInUser.signInUser(form.email, form.password)
            }}>Entrar na sua conta</button>
            <br />
            <label>OR</label>
            <NavLink tag={Link} to='/register'>Create account</NavLink>
        </React.Fragment>
    )
}

export default SignInUser