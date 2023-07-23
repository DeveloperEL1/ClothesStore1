import React, { useReducer } from 'react'

function SignUp() {


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
            case 'SETNAME':
                return { ...state, name: action.payload }
        }
    }
    const [state, dispatch] = useReducer(reducer, { name: '', email: '', password: '' })
    return (

        <div className='flex flex-col justify-center items-center gap-10 h-screen'>
            <h1 className='font-extrabold'>Sign Up</h1>
            <label>Username</label>
            <input className={classes.inputStyles} onChange={e => dispatch({ type: 'SETNAME', payload: e.target.value })} type='text' placeholder='Enter your username...' />
            <label>Email</label>
            <input className={classes.inputStyles} onChange={e => dispatch({ type: 'SETEMAIL', payload: e.target.value })} type='email' placeholder='Enter your email...' />
            <label>Password</label>
            <input className={classes.inputStyles} onChange={e => dispatch({ type: 'SETPASSWORD', payload: e.target.value })} type='password' placeholder='Enter your passoword...' />
            <button className={classes.buttonStyles}>Sign up</button>
        </div>
    )
}

export default SignUp
