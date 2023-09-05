import { Stack, TextField, Button } from '@mui/material'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'

// 1. 入力値の定義を作成します。
 type Inputs = {
  name: string
 }

function App() {
  // 2. useFormで必要な関数を取得し、デフォルト値を指定します。
  const {
    control,
    handleSubmit,
  } = useForm<Inputs>({
    defaultValues: { name: '初期値です' }
  })

  // 3. 検証ルールを指定します。
  const validationRules = {
    name: {
      required: '名前を入力してください。',
      minLength: { value: 4, message: '4文字以上で入力してください。' }
    }
  }
  
  // 4. サブミット時の処理を作成します。
  // 検証が成功すると呼び出され、引数で入力値が渡ってきます。
  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
    console.log(`submit: ${data.name}`)
  }

  return (
  // {/* 5. form要素のonSubmitに1.で取得しているhandleSubmitを指定します */}
    <Stack component="form" noValidate 
    onSubmit={handleSubmit(onSubmit)} 
    spacing={2} sx={{ m: 2, width: '25ch' }}>

       {/* 6.Controllerコンポーネントで TextFieldをReactHookFormと紐づけます。 */}
      <Controller
        // registerと同様の意味（<input {  ...register("email")} />  と書いていた  )
        name="name"

        //useFormで取得したcontrolを渡す。決まりごととして覚えておく
        control={control}

        //バリデーションプロパティが入ったオブジェクトを渡す。
        rules={validationRules.name}

        //renderには関数を指定する。
        //引数のfieldにはcontrolで指定したpropsの値が入っている
        //引数の

        render={({ field, fieldState }) => (
          <TextField
            {...field}
            type="text"
            label="名前"
            error={fieldState.invalid}
            helperText={fieldState.error?.message}
          />
        )}
      />
      <Button variant="contained" type="submit" >
        送信する
      </Button>
    </Stack>
  )
}

export default App;