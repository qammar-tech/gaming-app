import { useState } from 'react';
import Input from '../../Components/InputFields/InputField';
import Button from '../../Components/Buttons/Button';
import { Link } from 'react-router-dom';
import Select from '../../Components/Select/Select';
import axios from 'axios'; // Import axios

import { useForm } from 'react-hook-form';

type Inputs = {
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
};

export default function SignUp() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const [, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedType, setSelectedType] = useState('individual');

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const onSubmit = async (data: Inputs) => {
    // formData contains the form values
    const payload = {
      ...data,
      role: selectedType,
    };
    
    console.log("--------- data ------- ", payload);

    // Your API endpoint
    const apiUrl = `http://localhost:3000/api/v1/users`;
 
    try {
      // setLoading(true);

      // Use axios for the API call
      const response = await axios.post(apiUrl, payload, { withCredentials: true });
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
      <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 text-white dark:text-white mt-5">
          <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"/>
          Welcome to crazy world of Gaming    
      </a>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white flex justify-center">
                  Sign up to your account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div>
                    <Input  
                    type="text"
                    label="Enter you full name"
                    title="Name"
                    style={{ marginBottom: '0.25rem' }}
                    name="name"
                    validationRules={{ required: 'Name is required' }}
                    register={register}
                    />
                  </div>
                  <div>
                    <Input  
                    type="email"
                    label="Username or email"
                    title="Email"
                    style={{ marginBottom: '0.25rem' }}
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
                  <div>
                  <Input
                  type="password"
                  label="Confirm Password"
                  showPassword={togglePasswordVisibility}
                  title="Confirm Password"
                  style={{ marginBottom: '0.25rem' }}
                  name="repeatPassword"
                  validationRules={{ required: 'Confirm Password is required' }}
                  register={register}
            />
                  </div>
                <Select label="Role" setSelectedValueProp={setSelectedType}/>
                  <Button
                    type="submit"
                    text="Sign Up"
                    style={{ marginBottom: '0.25rem' }}
                    // disabled={loading}
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
