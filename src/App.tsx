import './App.css';
import {useForm} from 'react-hook-form';

function App(){
  type FormInputs = {
    email:string,
    password:string
  }

  const {register, handleSubmit, formState: { isDirty, isValid, errors }} = useForm<FormInputs>({
    criteriaMode: 'all',
  });

  const onSubmit = (data: any) => console.log(data);


  return (
    <div className='App'>
      <h1>ログイン</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email">Email</label>
          <input 
            id='email'
            {...register('email',{required: '入力が必須の項目です。'})}
          />
          {errors.email && <div>{errors.email.message}</div>}
        </div>
        <div>
          <label htmlFor="password">パスワード</label>
          <input 
            id='password'
            {...register('password',{
              required: {
                value: true,
                message: '入力が必須の項目です。',
              },
              pattern: {
                value: /^[A-Za-z]+$/,
                message: 'アルファベットのみ入力してください',
              },
              minLength: {
                value: 8,
                message: '8文字以上入力してください。',
              },
            })}
            type='password'
          />
          {errors.password?.types?.required && <div>{errors.password.types.required}</div>}
          {errors.password?.types?.pattern && <div>{errors.password.types.pattern}</div>}
          {errors.password?.types?.minLength && <div>{errors.password.types.minLength}</div>}
        </div>
        <div>
          <button type='submit' disabled={!isDirty || !isValid}>ログイン</button>
        </div>
      </form>
    </div>
  )
 }

 export default App;