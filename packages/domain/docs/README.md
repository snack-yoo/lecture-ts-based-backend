<h1> Domain </h1>   

## type alias vs interface    

> https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces   

두 문법은 일부 차이를 제외하고 거의 비슷하다.    
따라서 개인의 취향이나 팀의 컨벤션에 따라 선택해도 무방하다.   
typescript 공식 문서에서는 ```interface```를 휴리스틱으로 추천하고 있다.    
> [For the most part, you can choose based on personal preference, and TypeScript will tell you if it needs something to be the other kind of declaration. If you would like a heuristic, use interface until you need to use features from type.](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces:~:text=For%20the%20most%20part%2C%20you%20can%20choose%20based%20on%20personal%20preference%2C%20and%20TypeScript%20will%20tell%20you%20if%20it%20needs%20something%20to%20be%20the%20other%20kind%20of%20declaration.%20If%20you%20would%20like%20a%20heuristic%2C%20use%20interface%20until%20you%20need%20to%20use%20features%20from%20type.)

#### re-open 가능 여부 (declaration merging)  

- Type Aliases : re-open 불가         
```typescript
type Foo = {
    name: string;
}

type Foo = {
    age: number;
}

// Error : Duplicate identifier 'Foo'.
```

- Interface : re-open 가능
```typescript
interface Foo {
    name: string;
}

interface Foo {
    age: number;
}

const foo: Foo = {
    name: 'Steve',
    age: 30
}
```

#### 확장 방식
- Type Aliases : intersection     
```typescript
type Foo = {
    name: string;
}

type Bar = Foo & {
    age: number;
}
```


- Interface : extends
```typescript
interface Foo {
    name: string;
}

interface Bar extends Foo {
    age: number;
}
```

#### primitive 타입 재정의       
- Type Aliases : 가능       
```typescript
type MyNumber = number;
```

- Interface : 불가능     
```typescript
interface MyNumber extends number {}
// Error : An interface cannot extend a primitive type like 'number'; an interface can only extend named types and classes
```


## Configuration   

#### noEmitOnError    

tsc에 의한 컴파일 시 오류가 발생하면 js 파일을 생성(업데이트)하지 않는다.    
js를 ts로 마이그레이션 하는 상황이라면 tsc 에러가 발생하더라도, js 파일을 이미 동작하고 있으므로 error 가 발생하더라도 무방하다.    
하지만 좀더 방어적인 구현을 원한다면 위의 옵션을 주는 것을 통해 강력하게 타입을 제어할 수 있다.    


#### target    

tsc에 의해 컴파일 시 생성할 js의 버전을 의미한다.     
기본은 ES3 이지만, 대부분의 주요 브라우저는 ES6를 지원하므로, ES6로 잡아도 무방하다.     
핵심은 js가 실행될 환경을 고려하면 된다는 것이다.    
> 예시 : `(backtick)을 활용한 template literal (es6부터 지원하는 문법)     

#### noImplicitAny ```Strictness```    

암시적으로 ```any```로 추론되는 코드가 있는 경우 error를 발생시킨다.     
strict한 코드를 위해서는 설정해주는 것이 좋다.     

#### strictNullChecks ```Strictness```     

```null``` 또는 ```undefined``` 에 대한 체크를 강제한다.    
strict한 코드를 위해서는 설정해주는 것이 좋다.       


