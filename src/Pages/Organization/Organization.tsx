import Input from '../../Components/InputFields/InputField'
import Button from '../../Components/Buttons/Button'
import { useState } from 'react';
export default function Organization() {
    const [userName, setUserName] = useState<string>(''); // Add the correct type for seriesPlayInput

    const onSubmit=()=>{

    }
  return (
    <div className='grid justify-center mt-[10rem]'>
             <Input
            type="text"
            style={{ marginBottom: '2rem' }}
            name="user"
            //  defaultValue="1"
            title='Add User' 
            handleChange={(e:any) => setUserName(e.target.value)}
         />
          <Button
      type="submit"
      text="Add User"
      style={{ marginBottom: '1.5rem' }} 
      
      onClick={onSubmit}
                              
     /> 
    </div>
  )
}
