import { useState } from 'react'
import Input from '../../Components/InputFields/InputField'
import Button from '../../Components/Buttons/Button'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();

    const [, setShowPassword] = useState(false)
    const [loading] = useState(false)
    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState)
      }
      const handleClick=()=>{
        navigate('/user-dashboard');
      }
  return (
<section className="bg-primeColor dark:bg-gray-900 opacity-90">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 text-white dark:text-white">
          <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"/>
          Gaming Arena    
      </a>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white flex justify-center">
                  Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                    <Input  type="email"
                            label="Username or email"
                            title="Email"
                            style={{ marginBottom: '1rem' }}
                            name="email"/>
                  </div>
                  <div>
                  <Input
              type="password"
              label="Password"
              showPassword={togglePasswordVisibility}
              title="Password"
              style={{ marginBottom: '1.5rem' }}
              name="password"
            />
                  </div>
                  <Button
              type="submit"
              text="Sign In"
              style={{ marginBottom: '1.5rem' }}
              disabled={loading}
              onClick={handleClick}
            />       
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Don’t have an account yet?{' '}
            <Link to="/sign-up" className="text-primeColor font-bold">
                Sign up
            </Link>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>  )
}
