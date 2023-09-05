import './App.css';
import {useForm} from 'react-hook-form';

function App(){
  const {register, handleSubmit, formState: { errors }} = useForm();

  const onSubmit = (data: any) => console.log(data);


  return (
    <div className='App'>
      <h1>ログイン</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email">Email</label>
          <input 
            id='email'
            {...register('email',{required: true})}
          />
          {errors.email && <div>入力が必須の項目です。</div>}
        </div>
        <div>
          <label htmlFor="password">パスワード</label>
          <input 
            id='password'
            {...register('password')}
            type='password'
          />
        </div>
        <div>
          <button type='submit'>ログイン</button>
        </div>
      </form>
    </div>
  )
 }

 export default App;