import { useState } from 'react'
import Input from '../../Components/InputFields/InputField'
import Button from '../../Components/Buttons/Button'
import { Link } from 'react-router-dom'
import Select from '../../Components/Select/Select'
export default function SignUp() {
    
    const [, setShowPassword] = useState(false)
    const [loading] = useState(false)
    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState)
      }
  return (
<section className="bg-primeColor dark:bg-gray-900 opacity-90">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 text-white dark:text-white mt-5">
          <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"/>
          Welcome to crazy world of Gaming    
      </a>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white flex justify-center">
                  Sign up to your account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
              <div>
                    <Input  
                    type="text"
                    label="Enter you full name"
                    title="Name"
                    style={{ marginBottom: '0.25rem' }}
                    name="email"/>
                  </div>
                  <div>
                    <Input  
                    type="email"
                    label="Username or email"
                    title="Email"
                    style={{ marginBottom: '0.25rem' }}
                    name="email"/>
                  </div>
                  <div>
                  <Input
                    type="password"
                    label="Password"
                    showPassword={togglePasswordVisibility}
                    title="Password"
                    style={{ marginBottom: '0.25rem' }}
                    name="password"
            />
                  </div>
                  <div>
                  <Input
              type="password"
              label="Confirm Password"
              showPassword={togglePasswordVisibility}
              title="Confirm Password"
              style={{ marginBottom: '0.25rem' }}
              name="confirm-password"
            />
                  </div>
                <Select label="Type"/>
                  <Button
                    type="submit"
                    text="Sign Up"
                    style={{ marginBottom: '0.25rem' }}
                    disabled={loading}
                    />          
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account?  <Link to="/login" className="text-primeColor font-bold">
                        Sign in
                    </Link>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>  )
}
