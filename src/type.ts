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


// 객체 타입지정
// interface: 객체처럼 자료의 구조가 복잡한 경우 직접 커스터마이징된 타입을 생성
interface Student {
    name: string,
    age: number,
    isFemale: boolean,
    address?: string //해당 프로퍼티는 옵셔널하게 적용. 없어도 오류안남
}

let student1 = {
    name: 'jonghwan',
    age: 20,
    isFemale: false,
    // address: 'Seoul'
}

