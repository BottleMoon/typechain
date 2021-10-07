class Human {
  public name: string;
  public age: number;
  public gender: string;
  constructor(name: string, age: number, gender?: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}
const gwon = new Human("gwon", 26, "male");
const sayHi = (person: Human): string => {
  //변수 뒤에 : 를 붙이고 타입을 적으면 타입체크를 함. 인터페이스 또는 클래스를 만들어서 타입으로 설정할 수 있음 ex) Human
  //param 뒤에 ? 붙이면 선택사항
  //함수 () 뒤에  :를 붙이고 타입을 적으면 반환타입 정함
  return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
};

console.log(sayHi(gwon));

export {}; //이 파일이 모듈이 된다고 알려줌
