import React, { useState, useContext } from 'react'
import { AuthContext } from '../auth'
import { NavLink } from 'reactstrap'
import { Link, Redirect } from 'react-router-dom'
import HeaderComments from '../elements/Comments/HeaderComments'

const CreateUser = () => {
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
            auth.createUser.createUser(form.email, form.password)
        }
    }

    if (auth.user !== null) {
        return <Redirect to='/comment' />
    }
    return (
        <React.Fragment>
            <HeaderComments />
            <br />
            <h3>Criar nova conta</h3>
            {
                auth.createUser.createUserState !== '' &&
                <p>{auth.createUser.createUserState.error}</p>
            }
            <input className='form-control' type='text' placeholder='Seu email' value={form.email} onChange={onChange('email')} onKeyPress={EnterPress} />
            <input className='form-control' type='password' placeholder='Sua senha' value={form.password} onChange={onChange('password')} onKeyPress={EnterPress} />
            <button className='btn btn-primary btn-sm' onClick={() => {
                auth.createUser.createUser(form.email, form.password)
            }}>Criar conta</button>
            <br />
            <label>OR</label>
            <NavLink tag={Link} to='/'>Sign in with a account</NavLink>
        </React.Fragment>
    )
}

export default CreateUser