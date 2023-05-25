const ele = document.querySelector('.hoho')

console.log(ele)


const clickEvt = () => {
    ele?.classList.add('zzzz')
}

window.addEventListener('click', clickEvt)



const title = document.querySelector('#title')

// narrowing 방법1 
if(title !== null) {
    title.innerHTML = '방가방가'
}


// narrowing 방법2 (많이씀)
if(title instanceof Element) {
    title.innerHTML = '방가방가'
}



// narrowing 방법3 (자주쓰지말기) 
const title1 = document.querySelector('#title') as Element;
title1.innerHTML = '방가방가'



// narrowing 방법4
if(title?.innerHTML !== undefined) {
    title.innerHTML = '방가방가'
}





// 링크는 정확하게 타입체크 
const link = document.querySelector('.link')
if(link instanceof HTMLAnchorElement) {
    link.href = 'kakao.com'
}



// 이벤트 네로잉
// const clickEvt = () => {
//     ele?.classList.add('zzzz')
// }




// ##################################################    코딩앙마

function add(n1: number, n2: number) {
    console.log(n1 + n2)
}

// add()
// add(1)
add(1, 2)
// add(1, 2, 3)
// add('a', 'b')

function arrf(arr: number[]) {
    arr.forEach((item) => {
        console.log(item)
    })
}


arrf([1,2,3])
// arrf(123)



// ##################################################
// ################################################## 기본타입
// ################################################## 

let car:string = 'benz'
// let car = 'benz' //타입추론
// car = 3 //error

let age:number = 30;
let isAdult:boolean = true;
let a:number[] = [1,2,3]
let a2:Array<number> = [1,2,3]

let week1:string[] = ['mon', 'tue', 'wed']
let week2:Array<string> = ['mon', 'tue', 'wed']



// ################################################## 튜플
let b:[string, number]

b = ['1' ,2]
// b = [1, '2'] //error

b[0].toLowerCase()
// b[1].toLowerCase() //number라 안됨 
b[1].toLocaleString() //number메서드만 가능



// ################################################## void, never
function sayHello():void {
    // 보이드는 아무것도 반환하지않을때
    console.log('hello')
}


// 네버는 에러나 무한루프함수
function showError():never {
    throw new Error();
}

function infLoop():never {
    while(true) {
        //do something...
    }
}



// ################################################## enum 
// 같은거끼리 묶는..숫자는 양방향 맵핑, 문자는 단방향 맵핑
enum Os {
    Window, //0
    Ios, //1
    Android //2
}

enum Os2 {
    Window = 10, //10
    Ios, //11
    Android //12
}

console.log(Os[10]) //Window
console.log(Os['Window']) //10

enum Os3 {
    Window = 'win',
    Ios = 'ios',
    Android = 'and'
}


// 이렇게 하면 myOs에는 Os만 입력가능
let myOs: Os;
myOs = Os.Window



//################################################## null, undefined
let aa:null = null
let bb:undefined = undefined














// ################################################## 
// ################################################## interface
// ################################################## 

// 에러코드.
// let user:object;
// user = {
//     name: 'xx',
//     age: 30,
// }
// console.log(user.name)


// 객체 사용할때 
type Score = 'A' | 'B' | 'C' | 'D';

interface User {
    name: string;
    age: number;
    gender?: string; // 있어도 되고 없어도 되는
    readonly birthYear: number; // 읽기 전용 속성
    // [key: number]: string //넘버를 키로하고 값을 string으로 하는걸 여러개 받을 수 있음
    [key: number]: Score // type 주고 정의된 값만 사용할수도 있음
}

let user: User = {
    name: 'xx',
    age: 30,
    birthYear: 2000,
    1: 'A',
    2: 'B',
}


user.age = 10 //문제x
// user.gender = 'male' // 선언 안하면 error
user.gender = 'male' 
// user.birthYear = 1990; // readonly라 값을 더하면 에러남

console.log(user.age)



// ################## interFace function 
interface Add {
    (num1: number, num2: number): number;
}

const add2: Add = function(x, y) {
    return x + y;
}
add2(10, 20)


// ex2)
interface IsAdult {
    (age:number): boolean;
}

const aaa:IsAdult = age => {
    return age > 10;
}

aaa(33)




// ################## implements
interface Car {
    color: string;
    wheels: number;
    start(): void;
}


class Bmw implements Car {
    wheels = 4;
    color;
    constructor(c: string) {
        this.color = c;
    }

    start() {
        console.log('go...!')
    }
}

const bbb = new Bmw('green');
console.log(bbb)
bbb.start();

// ################## 인터페이스 확장 extend
interface Benz extends Car {
    dor: number;
    stop(): void;
}

const benz: Benz = {
    dor: 5,
    stop() {
        console.log('stop')
    }, 

    // 확장된 인터페이스도 모두 입력해줘야 오류안남.
    color: 'block',
    wheels: 4,
    start() {}
}



// ################## 인터페이스 여러개 확장 가능
interface Toy {
    name: string;
}

interface ToyCar extends Car, Toy {
    price: number;
}









// ####################################################  
// #################################################### 함수 
// ####################################################  

// 함수의 리턴값의 타입지정
function add3(n1: number, n2: number):void {
    console.log(n1 + n2);
}

function isAdult22(age: number): boolean {
    return age > 19
}

function hello(name?: string) {
    return `hellow, ${name || "world"}`;
}

function hello2(name = 'world') { //default arg여도 가능
    return `hellow, ${name}`;
}


// hello() //매개변수가 없으면 typescript는 에러
// 하지만 옵셔널 매개변수는 없어도 가능
// * 옵셔널 매개변수는 무조건 뒤에있어야함 (name: string, age?: number )
hello();



function add44(...nums: number[]) {
    return nums.reduce((result, num) => result + num, 0 )
}
add44(1, 2, 3)
add44(4, 5, 6)








// #################################################### 
// #################################################### this
// #################################################### 

// ex1)
interface User1 {
    name: string;
}

const Sam: User1 = { name: 'Sam' };

function showName(this: User1, age: number, gender: 'm' | 'f') {
    console.log(this.name, age, gender)
}

const ho = showName.bind(Sam);
ho(13, 'm');




// ex2)
interface User2 {
    name: string;
    age: number;
}


// 함수는 하나지만 매개변수에 따라 다르게 동작해야한다면 오버로드 사용
function join(name: string, age: string): string;
function join(name: string, age: number): User;
function join(name: string, age: number | string): User2 | string {
    if(typeof age === "number") {
        return { name, age }
    } else {
        return "나이는 숫자로 입력해주세요."
    }
}

// const sam: User2 = join("Sam", 30); 
//error sam이 유저객체를 반환하는데 확신이 없다. string을 반환할수도 있다고 판단
// const jane: string = join("Jane", 30); //error

// 오버로드 사용 시 에러 안남

const sam: User2 = join("Sam", 30); 
const jane: string = join("Jane", "30"); 









// #################################################### 
// #################################################### Literal Types
// #################################################### 


const userName1 = "Bob"; //type: "Bob"  얘는 변화할 수 없으니 그냥 값자체. "문자열 리터럴 타입" 
let userName2 = "Tom"; //type: string  얘는 변화할 수 있으니 string 
let userName3: string | number = "Tom"; //2개 쓸땐 이렇게  



// ## 문자형 리터럴타입
type Job = "police" | "developer" | "teacher";

interface User4 {
    name: string;
    job: Job; //여기다 타입선언
}

const user44: User4 = {
    name: "Bob", 
    // job: "student", //학생은 Job에 없어서 에러.
    job: "developer"
}



// ## 숫자형 리터럴타입
interface HighSchoolStudent {
    name: string;
    grade: 1 | 2 | 3;
}



// ## Union Types
// |  이걸 유니온 타입이라고함

interface Car1 {
    name: "car";
    color: string;
    start(): void;
}

interface Mobile {
    name: "mobile";
    color: string;
    call(): void;
}

// 동일한 이름의 속성을 정의하고, type을 다르게 줌으로써 name: "car" name: "mobile" 2개의 인터페이스를 구분
// 이런것을 식별가능한 유니온 타입이라고함

function getGift(gift: Car1 | Mobile) {
    console.log(gift.color) //color 는 둘다 가지고 있어서 에러안남
    // gift.start(); //start()는 한개만 가지고 있어서 에러남
    if(gift.name === "car") {
        gift.start()
    } else {
        gift.call()
    }
}

const ccc: Car1 = {
    name: "car",
    color: "red",
    start: function() {}
}

getGift(ccc);






// ## Intersection Types 교차타입 (&)
// 이 교체타입은 모두 다 적어줘야함

interface Car11 {
    name: string;
    start(): void;
}

interface Toy11 {
    name: string;
    color: string;
    price: number;
}


const toyCar11: Toy11 & Car11 = {
    name: "타요",
    color: "red",
    price: 100,
    start() {},
}


