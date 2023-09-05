import { Stack, FormControl, InputLabel, Select, MenuItem, FormHelperText, Button } from '@mui/material'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'

// 1. 入力値の定義を作成します。
 type Inputs = {
   area: number | ''
 }

// 2. useFormで必要な関数を取得し、デフォルト値を指定します。
function App() {
   const {
    //Controllerを使うには①、useFormからcontrolを取得
     control,
     handleSubmit,
   } = useForm<Inputs>({
     defaultValues: { area: 6 }
   })

// 3. 検証ルールを指定します。
   const validationRules = {
     area: {
       validate: (value:number | '') => value !== '' || 'いずれかを選択してください。'
     }
   }

 // 4. サブミット時の処理を作成します。
   const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
     console.log(`submit: ${data.area}`)
   }

 return (
//  {/* 5. form要素のonSubmitに1.で取得しているhandleSubmitを指定します */}
   <Stack component="form" noValidate 
      onSubmit={handleSubmit(onSubmit)} 
     spacing={2} 
     sx={{ m: 2, width: '25ch' }}>

      {/* 6.Controllerコンポーネントで TextFieldをReactHookFormと紐づけます。*/}
      {/* Controllerを使うには②、ControllerコンポーネントでMUIを囲み、必要なpropsを設定する */}
      <Controller
        name="area"
        control={control}
        rules={validationRules.area}
        render={({ field, fieldState }) => (
          <FormControl fullWidth error={fieldState.invalid}>
           <InputLabel id="area-label">地域</InputLabel>
           <Select
             labelId="area-label"
             label="地域" // フォーカスを外した時のラベルの部分これを指定しないとラベルとコントロール線が被る
              {...field}
           >
             <MenuItem value='' sx={{color:'gray'}}>未選択</MenuItem>
             <MenuItem value={1}>北海道</MenuItem>
             <MenuItem value={2}>東北</MenuItem>
             <MenuItem value={3}>関東</MenuItem>
             <MenuItem value={4}>中部</MenuItem>
             <MenuItem value={5}>近畿</MenuItem>
             <MenuItem value={6}>中国</MenuItem>
             <MenuItem value={7}>四国</MenuItem>
             <MenuItem value={8}>九州沖縄</MenuItem>
           </Select>
            <FormHelperText>{fieldState.error?.message}</FormHelperText>
         </FormControl>
       )}
     />
     <Button variant="contained" type="submit" >
       送信する
     </Button>
   </Stack>
 )
}

export default App;