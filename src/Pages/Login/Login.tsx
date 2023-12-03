import { useState } from 'react'
import Input from '../../Components/InputFields/InputField'
import Button from '../../Components/Buttons/Button'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios'; // Import axios

type Inputs = {
  email: string
  password: string
}

export default function Login() {
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors }
  } = useForm<Inputs>()

  const mockUser={
    "accessToken": {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYW1tYXIiLCJlbWFpbCI6ImFtaWx6YWs0MkBnbWFpbC5jb21hcyIsInV1aWQiOiI3ODY2YmJhMC02YTcyLTQwZDQtOWQ5MS00MDYxNzRiMTQ2MWIiLCJ1c2VyIjp7ImlkIjoxLCJuYW1lIjoiYW1tYXIiLCJlbWFpbCI6ImFtaWx6YWs0MkBnbWFpbC5jb21hcyIsInV1aWQiOiI3ODY2YmJhMC02YTcyLTQwZDQtOWQ5MS00MDYxNzRiMTQ2MWIifSwiaWF0IjoxNzAxNjI1MTUwLCJleHAiOjE3MDQ2MjUxNTB9.ImK_un0tlJKtXcqR9-8WFBnNon5ZXcDPF6YNvWxf5b8",
      "user": {
          "id": 1,
          "name": "ammar",
          "email": "amilzak42@gmail.comas",
          "uuid": "7866bba0-6a72-40d4-9d91-406174b1461b",
          "credits": 2,
          "role":"organization"
      }
  }
  }
    const navigate = useNavigate();

    const [, setShowPassword] = useState(false)
    const [loading] = useState(false)
    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState)
      }
      const handleClick=()=>{
        navigate('/user-dashboard');
      }
      const onSubmit = async (data: Inputs) => {
        // formData contains the form values
    console.log("--------- data ------- ", mockUser);
    localStorage.setItem('user', JSON.stringify(mockUser));
    let token: any =localStorage.getItem('user')
    token=JSON.parse(token).accessToken.token
    if(token){
      navigate("/dashboard")
    }
        // Your API endpoint
        const apiUrl = `http://localhost:3000/api/v1/auth/login-user`;
     
        try {
          // setLoading(true);
    
          // Use axios for the API call
          const response = await axios.post(apiUrl, data, { withCredentials: true });
          console.log("=== respose", response);
    
          if (response.status === 200) {
            // Handle successful registration, e.g., redirect to login page
            console.log('User registered successfully');
            reset();
          } else {
            // Handle registration error
            console.error('Registration failed');
          }
        } catch (error) {
          console.error('Error during registration:', error);
        } finally {
          // setLoading(false);
        }
      };
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
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit)}>
                  <div>
                    <Input 
                     type="email"
                     label="Username or email"
                     title="Email"
                     style={{ marginBottom: '1rem' }}
                     name="email"
                     validationRules={{ required: 'Email is required' }}
                     register={register}
                     />
                  </div>
                  <div>
                  <Input
                     type="password"
                     label="Password"
                     showPassword={togglePasswordVisibility}
                     title="Password"
                     style={{ marginBottom: '0.25rem' }}
                     name="password"
                     validationRules={{ required: 'Password is required' }}
                     register={register}
            />
                  </div>
                  <Button
              type="submit"
              text="Sign In"
              style={{ marginBottom: '1.5rem' }}
              disabled={loading}
              // onClick={handleClick}
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
