import { Icon } from '@iconify/react/dist/iconify.js';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Panel } from 'primereact/panel';
import { Password, PasswordProps } from 'primereact/password';
import { useState } from 'react';
import './signup-styles.css';

const passwordLabelTranslation: PasswordProps = {
  promptLabel: 'Elige una contraseña',
  weakLabel: 'Contraseña muy débil',
  mediumLabel: 'Contraseña medianamente segura',
  strongLabel: 'Contraseña fuerte',
}
const inputStyle: PasswordProps  = {
  inputStyle: {
    width: '100%',
  }
}
const iconDivClasses = 'w-8 h-8 flex justify-center items-center rounded-full shadow-lg';

export const SignUp = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [pass2, setPass2] = useState('');


  return (
    <Panel className='w-full m-auto my-15 signupPanel'>
      <div className='text-2xl font-bold text-center py-5 '>
        Registrarse
      </div>
      <div className='flex justify-center gap-5 py-5'>
        <div className={iconDivClasses}>
          <Icon icon="line-md:facebook" />
        </div>
        <div className={iconDivClasses}>
          <Icon icon="gg:google" />
        </div>
        <div className={iconDivClasses}>
          <Icon icon="ci:linkedin" />
        </div>
      </div>
      {/* INPUTS */}
      <div className='mx-5 flex flex-col gap-3'>
        <div className='w-full'>
          <InputText
            placeholder='Email'
            className='w-full'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='w-full'>
          <Password
            placeholder='Contraseña'
            className='w-full'
            {...inputStyle}
            {...passwordLabelTranslation}
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
        </div>
        <div className='w-full'>
          <Password
            placeholder='Re-confimación de contraseña'
            className='w-full'
            {...inputStyle}
            {...passwordLabelTranslation}
            value={pass2}
            onChange={(e) => setPass2(e.target.value)}
          />
        </div>
      </div>
      <div className='flex justify-center py-7'>
        <Button label='Registrarme' />
      </div>
    </Panel>
  )
}
