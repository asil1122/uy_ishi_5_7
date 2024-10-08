import React from 'react'
import { Input } from './components/ui/input'
import { Button } from './components/ui/button/button'
import { useForm } from 'react-hook-form'

function App() {
  const { handleSubmit, reset, register, formState: { errors } } = useForm()

  const submit = (data) => {
    console.log(data);

  }

  return (
    <div className='input_section'>
      <div className='container'>
        <div className='block'>
          <div className='content'>
            <h2 className='title'>Learn to code by watching others</h2>
            <p className='text'>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable. </p>
          </div>
          <div className='form_block'>
            <Button variant={'secondry'} size={'small'} type={'button'}>Try it free 7 days then $20/mo. thereafter</Button>
            <form className='form' onSubmit={handleSubmit(submit)}>
              <div className='inputs'>
                <Input register={register} variant={"primary"} plac={'First Name'} type={'text'} size={'small'} name={'first_name'} error={errors} />
                {errors.first_name && (
                  <p className='error'>First Name kirit biratishka!</p>
                )}
              </div>
              <div className='inputs'>
                <Input register={register} variant={"primary"} plac={'Last Name'} type={'text'} size={'small'} name={'Last_name'} error={errors} />
                {errors.Last_name && (
                  <p className='error'>Last Name kirit biratishka!</p>
                )}
              </div>
              <div className='inputs'>
                <Input register={register} variant={"primary"} plac={'Email Address'} type={'text'} size={'small'} name={'email_address'} error={errors} />
                {errors.email_address && (
                  <p className='error'>Email kirit biratishka!</p>
                )}
              </div>
              <div className='inputs'>
                <Input register={register} variant={"primary"} plac={'Password'} type={'password'} size={'small'} name={'password'} error={errors} />
                {errors.password && (
                  <p className='error'>Password kirit biratishka!</p>
                )}
              </div>
              <Button variant={'primary'} size={'large'} type={'submit'}>CLAIM YOUR FREE TRIAL</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
