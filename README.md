# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

##学習メモ
高階関数・・・関数を受け取る関数（引数に関数を受け取っている関数）

※例 function hello(): void{
        console.log('Hello!')
    }

    function doTwice(hello: Function): void{
        hello();
        hello();
    }

    doTwice(hello);

コールバック関数・・・高階関数に渡すための関数（上記でいうhello()の部分）

ジェネリクス・・・型も引数のように扱うもの（＜T＞）

※例 function chooseRandom＜T＞(v1: T, v2: T): T {
        return Math.random() <= 0.5 ? v1 : v2;
    }

    chooseRandom<string>("勝ち","負け");
    chooseRandom<number>(1,2);

Promise・・・非同期処理の操作が完了したときに結果を返すもの。
            Promiseはresolveとrejectの、２つの関数を引数に取る
            resolve:処理が成功した時の処理を実行する関数
            reject:処理が失敗した時の処理を実行する関数

※例　var sample = new Promise(function(resolve, reject){
    setTimeout(function() :void{
            resolve(console.log('二番目に出力'));
        }, 1000);
    });

    sample.then(function() :void{
        console.log("三番目に出力");
    });

    console.log("一番目に出力");

※結果
    先に出力
    二番目に出力
    三番目に出力

