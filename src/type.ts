// 기본 타입
let test: string = 'hello';
let num: number = 0;
let isFemale: boolean = true;

// 참조형 타입
let like: string[] = ['game', 'music', 'movie']; //일반적인 방법
let dislike: Array<string> = ['study', 'homework', 'exercise']; //제네릭한 방식. 뭐가 들어올지 모를 때 씀
let odd: number[] = [1, 3, 5];
let even: Array<number> = [2, 4, 6];
let bool: boolean[] = [true, false, true];
let bool2: Array<boolean> = [true, false, true];
let arr1: [number, string] = [3, '3']; //배열에 타입이 섞여있을 때



type Scores = 'A' | 'B' | 'C' | 'D' | 'E' | 'F'; //정해져 있는 특정값을 그룹으로 묶어서 커스텀 타입 지정

// 객체 타입지정
// interface: 객체처럼 자료의 구조가 복잡한 경우 직접 커스터마이징된 타입을 생성
interface Student {
    name: string;
    age: number;
    isFemale: boolean;
    address?: string; //해당 프로퍼티는 옵셔널하게 적용. 없어도 오류안남
    [grade: number]: Scores; // 프로퍼티명을 정할 수 없을 때 사용
    
}

let student1 = {
    name: 'jonghwan',
    age: 20,
    isFemale: false,
    // address: 'Seoul'
    1: 'A'
}


let student2 = {
    name: 'jonghwan',
    age: 20,
    isFemale: false,
    // address: 'Seoul'
    2: 'C'
}


student2['2'] = 'A'
// student2['2'] = 'z' //오류남










// 팁1

// 함수에 타입을 지정하면 넘버를 리턴하지 않더라도 오류가 뜨지 않음.
// const plus = (n1: number, n2: number): number => {
//     console.log(n1 + n2);
// }

// const result = plus(3, 4);


// 그래서 값이 담기는 변수쪽에 선언하는게 좋음
const plus = (n1: number, n2: number) => {
    console.log(n1 + n2);
    // return n1 + n2;
}

// const result: number = plus(3, 4); //여기서 오류남





// 팁2
// 겹치는 함수 타입값 인터페이스로 해결

interface Calc {
    (n1: number, n2: number): any; // 리턴값 있을 때
    // n1: number;
    // n2: number;
}
const plus_1: Calc = (n1, n2) => {
    return n1 + n2;
}
const minus_1: Calc = (n1, n2) => {
    return n1 - n2;
}
const multiply: Calc = (n1, n2) => {
    return n1 * n2;
}
const divider: Calc = (n1, n2) => {
    return n1 / n2;
}


// 유니온 타입 or
const info = (num: number | string) => {
    console.log(`${num}번째 방문자입니다`);
}

info(3)
info('4')



const ttt = (n1: number, n2: number, n3?: number) => {
    // || 연산자는 별로 좋지않음. 잘못넣은 false가 들어와도 실행이 잘 되기 때문
    // ?? 연산자는 null undefined가 들어왔을 때만 대체값 적용
    
    // const result = n1 + n2 + (n3 || 0); // 5
    const result = n1 + n2 + (n3 ?? 5); // 10
    return result;
}

// ttt(2, 3, false) //오류




// ...
const ttt2 = (...nums: number[]) => nums.reduce((acc, cur) => acc + cur, 0);
console.log(ttt2(1,2,3))






// generic
// generic : 타입 적용을 정의할때 하는 것이 아닌 호출할 때 적용
// 그리고 들어오는 값이 다양할 때 활용
// const getLength = (arr: number[]) => {
//     return arr.length;
// }

// const arrs1 = [1,2,3,4];
// const arrs2 = ['a', 'b', 'c']; //이렇게 문자가 왔을 때 하나하나 유니온으로 지정하기 복잡하니깐 제네릭 씀

// console.log( getLength(arrs1) )
// // console.log( getLength(arrs2) ) //문자라서 에러남



const getLength = <type> (arr: type[]) => {
    return arr.length;
}

const arrs1 = [1,2,3,4];
const arrs2 = ['a', 'b', 'c']; 
const arrs3 = [1, 'b', 'c']; 

console.log( getLength<number>(arrs1) )
console.log( getLength<string>(arrs2) ) 
console.log( getLength<number | string>(arrs3) ) 






// 실제사용해보기
type Grade = 12 | 15 | 18;
type Genre = 'drama' | 'adventure' | 'remance' | 'thriller' | 'animation';
interface Movies {
    title: string;
    grade: Grade;
    genre: Genre; 
    isSubTitle: boolean;
    vid?: string;
}
const movieData: Movies[] = [
    { title: 'One piece', grade: 15, genre: 'adventure', isSubTitle: true, vid: 'url' },
    { title: 'Squeed Game', grade: 15, genre: 'thriller', isSubTitle: true },
    { title: 'Litter Mermade', grade: 15, genre: 'animation', isSubTitle: true, vid: 'url' },
]

const recipe: string[] = ['pie', 'cake', 'sandwitch'];

const createList = <type> (data: type[]) => {
    console.log(data)
    // return JSX
}

createList<Movies>(movieData)
createList<String>(recipe)


