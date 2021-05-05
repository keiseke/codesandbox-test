// // const,let等の変数宣言
// var val1 = "var変数";
// console.log(val1);

// //var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// //letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// let val2 = "letを再宣言";

// const val3 = "constで宣言";
// console.log(val3);

// val3 = "const変数を上書き";
// const val3 = "再宣言不可";

// const val4 = {
//   name: "鈴木",
//   age: 41
// };
// console.log(val4);

// val4.name = "宮崎";
// console.log(val4);

// val4.address = "東京";

// const val5 = ['dog', 'cat'];
// val5[0]='bird'
// val5.push('monkey');
// console.log(val5);

// // テンプレート文字列
// const name="みやざき";
// const age = 28;
// //私の名前は宮崎です。年齢は28歳です。」

// // テンプレート文字列を用いた方法
// const message1=`私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message1);

/* 
アロー関数
 */
// //従来の関数
// function fnc1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// //アロー関数
// const func2 = (str) => console.log(str);

// func2("func2です");

// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(4, 6));

/* 
分割代入
 */
// const myProfile = {
//   name: "宮崎",
//   age: 28
// };
// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// const myProfile = ["宮崎", 28];
// const message3 = `名前は${myProfile[0]}です、年齢は${myProfile[1]}歳です`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);

/* 
デフォルト値、引数など
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん!`);
// sayHello();

/* 
スプレッド構文
 */
//配列の展開
// const ary1 = [1, 2];
// console.log(ary1);
// console.log(...ary1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(ary1[0], ary1[1]);
// sumFunc(...ary1);

/* 
まとめる
 */
// const ary2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...ary3] = ary2;
// console.log(num1);
// console.log(num2);
// console.log(...ary3);

// 配列のコピー、結合
// const ary4 = [10, 20];
// const ary5 = [30, 40];

// const ary6 = [...ary4];
// ary6[0]=100;
// console.log(ary6);
// console.log(ary4);

// const ary7 = [...ary4, ...ary5];
// console.log(ary7);

// const ary8 = ary4;
// console.log(ary8);
// ary8[0] = 100;
// console.log(ary4);

/* 
mapやfilterを使った配列の処理
 */
// const nameAry = ["田中", "山田", "坂本"];
// for (let i = 0; i < nameAry.length; i++) {
//   console.log(`${i+1}番目は${nameAry[i]}です`);
// }

// const nameAry2 = nameAry.map((name)=>{
//   return name;
// });
// console.log(nameAry2);

// nameAry.map((name, index)=> console.log(`${index+1}番目は${name}です`));

// const numAry = [1,2,3,4,5];
// const newNumAry = numAry.filter((num)=>{
//   return num%2===1;
// });
// console.log(newNumAry);

// const newNameAry = nameAry.map((name) => {
//   if (name === "坂本") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(...newNameAry);

/* 
三項演算子
 */
//ある条件？　条件がtrueの時：条件がfalseの時
// const val1 = 1 < 9 ? "trueです" : "falseです";
// // console.log(val1);

// const num = 1300;
// // console.log(num.toLocaleString());

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください';
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています" : "許容範囲内です";
// };
// console.log(checkSum(50, 40));

/* 
論理演算子の本当の意味を知ろう
 */
// const flg1 = true;
// const flg2 = true;

// if (flg1 || flg2) {
//   console.log("1か2はtrueになります");
// }
// if (flg1 && flg2) {
//   console.log("1も2もtrueになります");
// }

// ||は左側がfalseなら右側を返す
// const num = 100;
// const fee = num || "金額未設定です";
// console.log(fee);

// &&は左側がtrueなら右側を返す
const num2 = null;
const fee2 = num2 && "何か設定されました";
console.log(fee2);
