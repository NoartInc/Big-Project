import React from 'react'
import {useDispatch} from 'react-redux'
import { register } from '../../store/actions/auth-action';
import {useHistory} from 'react-router-dom'

function Register() {
  const dispatch = useDispatch();
  const history =useHistory();

  const handelFormSubmit = (e) => {
    e.preventDefault();

    let username = e.target.elements.username?.value;
    let password = e.target.elements.password?.value;
    let fullname = e.target.elements.fullname?.value;
    let email = e.target.elements.email?.value;

    console.log(username, password, fullname, email);
    dispatch(register({
      username,
      password,
      fullname,
      email
    }))
    history.push('/login')
  }
  return (
    <div className="h-screen flex bg-gray-bg1">
      <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
        <h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">
          Register
        </h1>

        <form onSubmit={handelFormSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input
                type='username'
                className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                id='username'
                placeholder='Your Username'
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input 
                type='password'
                className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                id='password'
                placeholder='Your Password'
            />
          </div>
          <div>
            <label htmlFor="fullname">Fullname</label>
            <input
                type='fullname'
                className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                id='fullname'
                placeholder='Your Fullname'
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
                type='email'
                className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                id='email'
                placeholder='Your Email'
            />
          </div>

          
          <div className="flex justify-between items-center mt-3">
            <button className={`bg-green-500 py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark hover:bg-green-700 transition-all duration-200 ease-in-out`}>
              Register
            </button>
            <button className={`bg-red-500 py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark hover:bg-red-700 transition-all duration-200 ease-in-out`}>
              Cancel
            </button>
          </div>

          <div className="mt-6 text-grey-dark">
                    Already have an account?
                    <a className="text-blue-600 hover:underline" href="#" onClick={() => history.goBack('/login')}>
                        Log in
                    </a>
          </div>

          {/* <div className="flex justify-start items-center mt-6">
            
          </div> */}

        </form>
      </div>
    </div>
  )
}

export default Register;