import React from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { login } from '../../store/actions/auth-action';

function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  
  const handelFormSubmit = (e) => {
    e.preventDefault();

    let username = e.target.elements.username?.value;
    let password = e.target.elements.password?.value;

    console.log(username, password);
    dispatch(login({
      username,
      password,
    }))
    history.push('/home')
  }
  return (
    <div className="h-screen flex bg-gray-bg1">
      <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
        <h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">
          Login to your account
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

          <div className="flex justify-center items-center mt-3">
            <button className={`bg-blue-500 py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark hover:bg-blue-700 transition-all duration-200 ease-in-out`}>
              Login
            </button>
          </div>

          <div class="mt-6 text-grey-dark">
                    Don't have an account?
                    <a class="text-blue-600 hover:underline" href="#" onClick={() => history.push('/register')}>
                        Register
                    </a>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Login;