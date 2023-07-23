import React from 'react'
import { useReducer } from 'react'

function SignIn() {
    const classes = {
        inputStyles: "block w-1/2 text-sm text-slate-500 file: mr - 4 file: py - 2 file: px - 4 file: rounded - full file: border - 0 file: text - sm file: font - semibold file: bg - violet - 50 file: text - violet - 700 hover: file: bg- violet - 100",
        buttonStyles: "bg-red-500 hover:bg-red-600 py-2 px-4 rounded-lg text-white font-semibold shadow-md transition duration-300 ease-in-out"
    }
    const reducer = (state, action) => {
        switch (action.type) {
            case 'SETEMAIL':
                return { ...state, email: action.payload }
            case 'SETPASSWORD':
                return { ...state, password: action.payload }
        }
    }
    const [state, dispatch] = useReducer(reducer, { email: '', password: '' })
    console.log(state.email)
    return (
        <div className='flex flex-col justify-center items-center gap-10 h-screen'>
            <h1 className='font-extrabold'>Sign Ip</h1>
            <label>Email</label>
            <input onChange={e => dispatch({ type: 'SETEMAIL', payload: e.target.value })} className={classes.inputStyles} type='email' placeholder='Enter your email...' />
            <label>Password</label>
            <input onChange={e => dispatch({ type: 'SETPASSWORD', payload: e.target.value })} className={classes.inputStyles} type='password' placeholder='Enter your passoword...' />
            <button className={classes.buttonStyles}>Sign in</button>
        </div>
    )
}

export default SignIn
