"use strict";
const ele = document.querySelector('.hoho');
console.log(ele);
const clickEvt = () => {
    ele === null || ele === void 0 ? void 0 : ele.classList.add('zzzz');
};
window.addEventListener('click', clickEvt);
const title = document.querySelector('#title');
// narrowing 방법1 
if (title !== null) {
    title.innerHTML = '방가방가';
}
// narrowing 방법2 (많이씀)
if (title instanceof Element) {
    title.innerHTML = '방가방가';
}
// narrowing 방법3 (자주쓰지말기) 
const title1 = document.querySelector('#title');
title1.innerHTML = '방가방가';
// narrowing 방법4
if ((title === null || title === void 0 ? void 0 : title.innerHTML) !== undefined) {
    title.innerHTML = '방가방가';
}
// 링크는 정확하게 타입체크 
const link = document.querySelector('.link');
if (link instanceof HTMLAnchorElement) {
    link.href = 'kakao.com';
}
// 이벤트 네로잉
// const clickEvt = () => {
//     ele?.classList.add('zzzz')
// }
// ##################################################    코딩앙마
function add(n1, n2) {
    console.log(n1 + n2);
}
// add()
// add(1)
add(1, 2);
// add(1, 2, 3)
// add('a', 'b')
function arrf(arr) {
    arr.forEach((item) => {
        console.log(item);
    });
}
arrf([1, 2, 3]);
// arrf(123)
// ##################################################
// ################################################## 기본타입
// ################################################## 
let car = 'benz';
// let car = 'benz' //타입추론
// car = 3 //error
let age = 30;
let isAdult = true;
let a = [1, 2, 3];
let a2 = [1, 2, 3];
let week1 = ['mon', 'tue', 'wed'];
let week2 = ['mon', 'tue', 'wed'];
// ################################################## 튜플
let b;
b = ['1', 2];
// b = [1, '2'] //error
b[0].toLowerCase();
// b[1].toLowerCase() //number라 안됨 
b[1].toLocaleString(); //number메서드만 가능
// ################################################## void, never
function sayHello() {
    // 보이드는 아무것도 반환하지않을때
    console.log('hello');
}
// 네버는 에러나 무한루프함수
function showError() {
    throw new Error();
}
function infLoop() {
    while (true) {
        //do something...
    }
}
// ################################################## enum 
// 같은거끼리 묶는..숫자는 양방향 맵핑, 문자는 단방향 맵핑
var Os;
(function (Os) {
    Os[Os["Window"] = 0] = "Window";
    Os[Os["Ios"] = 1] = "Ios";
    Os[Os["Android"] = 2] = "Android"; //2
})(Os || (Os = {}));
var Os2;
(function (Os2) {
    Os2[Os2["Window"] = 10] = "Window";
    Os2[Os2["Ios"] = 11] = "Ios";
    Os2[Os2["Android"] = 12] = "Android"; //12
})(Os2 || (Os2 = {}));
console.log(Os[10]); //Window
console.log(Os['Window']); //10
var Os3;
(function (Os3) {
    Os3["Window"] = "win";
    Os3["Ios"] = "ios";
    Os3["Android"] = "and";
})(Os3 || (Os3 = {}));
// 이렇게 하면 myOs에는 Os만 입력가능
let myOs;
myOs = Os.Window;
//################################################## null, undefined
let aa = null;
let bb = undefined;
let user = {
    name: 'xx',
    age: 30,
    birthYear: 2000,
    1: 'A',
    2: 'B',
};
user.age = 10; //문제x
// user.gender = 'male' // 선언 안하면 error
user.gender = 'male';
// user.birthYear = 1990; // readonly라 값을 더하면 에러남
console.log(user.age);
const add2 = function (x, y) {
    return x + y;
};
add2(10, 20);
const aaa = age => {
    return age > 10;
};
aaa(33);
class Bmw {
    constructor(c) {
        this.wheels = 4;
        this.color = c;
    }
    start() {
        console.log('go...!');
    }
}
const bbb = new Bmw('green');
console.log(bbb);
bbb.start();
const benz = {
    dor: 5,
    stop() {
        console.log('stop');
    },
    // 확장된 인터페이스도 모두 입력해줘야 오류안남.
    color: 'block',
    wheels: 4,
    start() { }
};
// ####################################################  
// #################################################### 함수 
// ####################################################  
// 함수의 리턴값의 타입지정
function add3(n1, n2) {
    console.log(n1 + n2);
}
function isAdult22(age) {
    return age > 19;
}
function hello(name) {
    return `hellow, ${name || "world"}`;
}
function hello2(name = 'world') {
    return `hellow, ${name}`;
}
// hello() //매개변수가 없으면 typescript는 에러
// 하지만 옵셔널 매개변수는 없어도 가능
// * 옵셔널 매개변수는 무조건 뒤에있어야함 (name: string, age?: number )
hello();
function add44(...nums) {
    return nums.reduce((result, num) => result + num, 0);
}
add44(1, 2, 3);
add44(4, 5, 6);
const Sam = { name: 'Sam' };
function showName(age, gender) {
    console.log(this.name, age, gender);
}
const ho = showName.bind(Sam);
ho(13, 'm');
function join(name, age) {
    if (typeof age === "number") {
        return { name, age };
    }
    else {
        return "나이는 숫자로 입력해주세요.";
    }
}
// const sam: User2 = join("Sam", 30); 
//error sam이 유저객체를 반환하는데 확신이 없다. string을 반환할수도 있다고 판단
// const jane: string = join("Jane", 30); //error
// 오버로드 사용 시 에러 안남
const sam = join("Sam", 30);
const jane = join("Jane", "30");
// #################################################### 
// #################################################### Literal Types
// #################################################### 
const userName1 = "Bob"; //type: "Bob"  얘는 변화할 수 없으니 그냥 값자체. "문자열 리터럴 타입" 
let userName2 = "Tom"; //type: string  얘는 변화할 수 있으니 string 
let userName3 = "Tom"; //2개 쓸땐 이렇게  
const user44 = {
    name: "Bob",
    // job: "student", //학생은 Job에 없어서 에러.
    job: "developer"
};
// 동일한 이름의 속성을 정의하고, type을 다르게 줌으로써 name: "car" name: "mobile" 2개의 인터페이스를 구분
// 이런것을 식별가능한 유니온 타입이라고함
function getGift(gift) {
    console.log(gift.color); //color 는 둘다 가지고 있어서 에러안남
    // gift.start(); //start()는 한개만 가지고 있어서 에러남
    if (gift.name === "car") {
        gift.start();
    }
    else {
        gift.call();
    }
}
const ccc = {
    name: "car",
    color: "red",
    start: function () { }
};
getGift(ccc);
const toyCar11 = {
    name: "타요",
    color: "red",
    price: 100,
    start() { },
};
