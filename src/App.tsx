import './App.css';
import {useForm} from 'react-hook-form';

function App(){
  type FormInputs = {
    email:string,
    password:string
  }

  const {register, handleSubmit, formState: { errors }} = useForm<FormInputs>();

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
              minLength: {
                value: 8,
                message: '8文字以上入力してください。',
              },
            })}
            type='password'
          />
          {errors.password?.type === 'required' && <div>{errors.password.message}</div>}
          {errors.password?.type === 'minLength' && <div>{errors.password.message}</div>}
        </div>
        <div>
          <button type='submit'>ログイン</button>
        </div>
      </form>
    </div>
  )
 }

 export default App;