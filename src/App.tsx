import './App.css';
import {useForm} from 'react-hook-form';

function App(){
  const {register, handleSubmit} = useForm();

  const onSubmit = (data: any) => console.log(data);

  const {name, ref, onChange, onBlur} = register('email');

  return (
    <div className='App'>
      <h1>ログイン</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email">Email</label>
          <input 
            id='email'
            // {...register('email')}
            name={name}
            onChange={onChange}
            onBlur={onBlur}
            ref={ref}
          />
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