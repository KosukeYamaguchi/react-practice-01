import {
  Stack,
  RadioGroup,
  FormLabel,
  FormControlLabel,
  Radio,
  FormControl,
  Button,
  FormHelperText
 } from '@mui/material'
 import { useForm, SubmitHandler, Controller } from 'react-hook-form'
 
 // 1. 入力値の定義を作成します。
  type Inputs = {
    gender: number
  }
 
function App() {
  
  // 2. useFormで必要な関数を取得し、デフォルト値を指定します。
   const {
     control,
     handleSubmit
   } = useForm<Inputs>({
     defaultValues: { gender: -1 }
   })
 
  // 3. 検証ルールを指定します。
   const validationRules = {
     gender: {
       validate: (value: number) => value !== -1 || 'いずれかを選択してください。'
     }
   }
 
  // 4. サブミット時の処理を作成します。
   const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
     console.log(`submit: ${data.gender}`)
   }
 
  return (
    <Stack component="form" noValidate onSubmit={handleSubmit(onSubmit)} spacing={2} sx={{ m: 2, width: '25ch' }}>
      {/* 6.Controllerコンポーネントで TextFieldをReactHookFormと紐づけます。 */}
       <Controller
         name="gender"
         control={control}
         rules={validationRules.gender}
         render={({ field, fieldState }) => (
           <FormControl error={fieldState.invalid}>
            <FormLabel id="radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup 
              aria-labelledby="radio-buttons-group-label" 
               value={field.value} name="gender">
               <FormControlLabel {...field} value={1} control={<Radio />} label="男性" />
               <FormControlLabel {...field} value={2} control={<Radio />} label="女性" />
               <FormControlLabel {...field} value={0} control={<Radio />} label="未回答" />
            </RadioGroup>
             <FormHelperText>{fieldState.error?.message}</FormHelperText>
          </FormControl>
        )}
      />
 
      <Button variant="contained" type="submit">
        送信する
      </Button>
    </Stack>
  )
 }

export default App;