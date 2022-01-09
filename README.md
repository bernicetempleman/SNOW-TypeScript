# SNOW-TypeScript

You don't need this for the current version of AngularJS for ServiceNow.
This was for Angular. Both are good to learn.

## Typescript is a typed superset of JavaScript. 
It is an open-source and object-oriented programming language that supports classes, interfaces, inheritance, modules, etc., developed by Microsoft. 
It can be used to manipulate the DOM for adding or removing elements, similar to JavaScript. 
It is portable across browsers, devices, and operating systems. 
It supports strong typing or static typing, unlike JavaScript. 
TypeScript files are saved with a .ts extension and then compiled into JavaScript using the TypeScript compiler. 
TypeScript gets compiled to JavaScript, which can run on any JavaScript runtime environment.(Eg: Node.js)

## Setting up ts
You can install Typescript using NPM (Node Package Manager) or the TypeScript Visual Studio Plugin.
After installing NPM, run the npm install -g typescript command to install TypeScript. 
To check the version, run the tsc -v command in the terminal.
To compile the TypeScript code, run the tsc command, followed by the name of the file you are compiling.
 For example, tsc hello.ts. 
After compilation, typescript compiler creates a javascript file with the same name (hello.js). 
Run the javascript file using node hello.js command in the terminal

![image](https://user-images.githubusercontent.com/12488769/148703428-2a134c31-5407-4225-96a2-c142daa849dd.png)

## Example
Open VSCode and create a file named HelloWorld.ts
![image](https://user-images.githubusercontent.com/12488769/148703445-c15b93c0-e435-426f-b2a4-1a96b7e21769.png)

Compile the code by using tsc HelloWorld.ts
Run the code by using node HelloWorld.js
![image](https://user-images.githubusercontent.com/12488769/148703457-74faf3a3-c9cc-49e1-80fb-96c97ac82ece.png)

## Variable declaration
TypeScript variables also follow JavaScript variable naming conventions. 
Similar to JavaScript, we use var, let, and const keywords to declare variables.
Since TypeScript is a strongly typed programing language, we specify the type when we declare a variable.
The Syntax for declaring a variable in TypeScript – 
let [identifier] : [type] = value; .
![image](https://user-images.githubusercontent.com/12488769/148703472-a642e9da-6a15-488a-9df0-ef7743dc21e6.png)

## Datatypes
```
### Boolean
The boolean type is to represent a true or false value.
let isEmpty: boolean = true; 
### Number
TypeScript uses the number type to store decimal, hexademial, binary and octal literals in a variable.
let a: number = 6; 
let b: number = 0xf00d; //hexadecimal 
let c: number = 0b1010; //binary 
let d: number = 0o744; //octal
```

### String
```
TypeScript uses a string type that represents text characters enclosed within double quotes (") or single quotes (').
let color: string = "yellow"; 
color = 'blue'; 
We can also use template strings, which can span multiple lines and have embedded expressions.
let fullName: string = 'Bob Bobbington'; 
let age: number = 37; 
let sentence: string = `Hello, my name is ${ fullName }. I'm ${ age } years old.`;
````
### Undefined and Null
```
In TypeScript, both undefined and null have their own types named undefined and null respectively. 
By default, null and undefined are subtypes of all other types. 
So we can assign null and undefined to number, string, etc.
let u: undefined = undefined; 
let n: null = null; 
```
### Any
```
We may need to describe a type of a variable that we do not know when we are writing an application. 
In this case, we can label the variable with the any type.
let variable: any = 14; 
variable = "maybe a string instead"; 
variable = false; 
```

### void
```
In TypeScript, the void type is used as the return type of functions that do not return a value.
function sayHello(): void { 
console.log("Hello!!!"); 
} 
Declaring variables of type void is not useful, because we can then only assign null or undefined values to them.
```

### Arrays
```
Like in JavaScript, TypeScript allows you to work with arrays of values. 
We can use the type of the elements followed by [] or use a generic array type Array<elemType> for declaring the array type.
let list: number[] = [1, 2, 3]; 
let list: Array<number> = [1, 2, 3]; 
let list: any[] = [1, "two", 3];
![image](https://user-images.githubusercontent.com/12488769/148703581-cb18a84c-37f5-4ac3-be16-c561c61b9582.png)
```

### Tuples
```
TypeScript introduced a new type called Tuple, which is an array with a fixed number of elements whose types are known.
var employee: [number, string] = [1, "John"];
 //Accessing Tuple 
employee[0]; // returns 1 
employee[1]; // returns "John" 
var person: [number, string, boolean] = [1, "Steve", true]; 
// tuple array 
var employee: [number, string][]; 
employee = [[1, "John"], [2, "Adam"], [3, "Jeff"]];
![image](https://user-images.githubusercontent.com/12488769/148703590-a57da6da-bbe5-4163-9f79-b502b4e17878.png)
```

### Enum
```
TypeScript supports the enum type that allows us to declare a set of named constants. 
It is a collection of related values that can be numeric or string values.
enum Color {Red, Green, Blue} 
let c: Color = Color.Green; 
enum Color {Red = 1, Green, Blue} 
let colorName: string = Color[2]; 
console.log(colorName); // Displays 'Green' as its value is 2 above
![image](https://user-images.githubusercontent.com/12488769/148703601-d573c0de-f374-4dfa-9cca-1e7047a99fe9.png)
```

### Never
```
The never type represents a type of values that never occur. 
For instance, never is the return type for a function that always throws an exception or one that never returns.
// Function returning never must have unreachable end point 
function error(message: string): never { 
throw new Error(message); 
}
![image](https://user-images.githubusercontent.com/12488769/148703608-cbcc6fa9-8930-4a22-8e20-e9a2eb892f79.png)

```

## Classes in Typescript
- We know that TypeScript is an object-oriented programming language. 
- The class keyword is used to declare a class in TypeScript.
- An instance of the class can be created using the new keyword.
![image](https://user-images.githubusercontent.com/12488769/148703691-84c39d93-6b53-4b92-99c7-e7724ce1f96f.png)

## Inheritance
= In TypeScript, we can implement an inheritance hierarchy using the extends keyword, similar to other object-oriented programming languages.
![image](https://user-images.githubusercontent.com/12488769/148703716-c3fd7ca2-4ddd-486a-a6f7-588b45ab2d19.png)

## Access Modifiers
- public - In TypeScript, each member is public by default. We can still mark a member public explicitly. 
- private - We can mark a member as private that cannot be visible outside of the class. 
- protected - If a member marked as protected, then the member can be accessed only by its containing class and deriving classes.

## Readonly modifier
- We can make properties accessible but immutable by using the readonly keyword. 
- Readonly properties must be initialized at their declaration or in the constructor.
![image](https://user-images.githubusercontent.com/12488769/148703821-6aafc184-a632-44b2-9fe4-5b429950cf26.png)


## Modules
- In TypeScript, the code we write is globally scoped by default. 
- TypeScript provides modules and namespaces to restrict scopes and also to organize and maintain a large codebase. 
- All variables, classes, and functions declared in a module are not accessible outside the module. 

## A module is created using the export keyword and used in another module using the import keyword![image]
- To export a class, function or variable, add the export keyword at the beginning.
 ![image](https://user-images.githubusercontent.com/12488769/148703854-e640518b-f513-43bf-a652-2ec68432ea71.png)

## The syntax for importing a module: 
import { export name } from "file path without extension";. 
- For example , import { Employee } from "./module";
![image](https://user-images.githubusercontent.com/12488769/148703869-7c10450a-a29c-43ff-bf81-32e5ddc7cd7e.png)

## Accessors and mutators
- TypeScript supports getter and setter methods to access and set class members. 
- The getter and setter methods are created using the get and set keywords
![image](https://user-images.githubusercontent.com/12488769/148703893-d93d6d31-eb42-461b-b053-c956415a275d.png)

## Decorators
 - A Decorator is a special kind of declaration attached to a class declaration, method, accessor, property, or parameter. 
- Decorators are defined in the @expression format, where expression evaluates a function that called at runtime.
- For the decorator @frozen, we write the frozen function as follows:
- A Decorator is a special kind of declaration attached to a class declaration, method, accessor, property, or parameter. 
- Decorators are defined in the @expression format, where expression evaluates a function that called at runtime.
- For the decorator @frozen, we write the frozen function as follows:
![image](https://user-images.githubusercontent.com/12488769/148703918-0dfdfea5-97d2-4533-a8d8-854f7d47bc09.png)

- In TypeScript, we need to enable experimental support for decorators. 
- In the tsconfig.json file, we set the experimentalDecorators compiler option property to true, in order to use decorators in our code.


![image](https://user-images.githubusercontent.com/12488769/148703933-08dbf3d9-0a8f-47cf-8529-7e691f6864f9.png)


Note: By running tsc --init command, the Typescript compiler automatically 


## 4 types of decorators
There are 4 different types of decorators:
- Class decorators
- Method decorators
- Property decorators
 - Parameter decorators

## Class decorators
- A Class Decorator is declared before a class declaration that applied to the constructor of the class and is used to observe, modify, or replace a class definition.
- We can define the @frozen decorator using the following function declaration:
![image](https://user-images.githubusercontent.com/12488769/148703984-b30e3df3-d43f-417d-b8a8-7460a19d92b3.png)

![image](https://user-images.githubusercontent.com/12488769/148703987-f30145f2-7313-4c3c-bf8b-d0d4a75c296b.png)

## Method decorators
- A Method Decorator is declared before a method declaration, and is applied to the Property Descriptor for the method. 
- They are used to observe, modify, or replace a method definition.

![image](https://user-images.githubusercontent.com/12488769/148704003-1af55995-57b3-40ce-a0af-5a4889b92168.png)

![image](https://user-images.githubusercontent.com/12488769/148704007-dc939f2a-20a1-448a-8ae3-dbc591f5c0ba.png)

## Property decorator
- Property decorators are used to listen to state changes on a class.
![image](https://user-images.githubusercontent.com/12488769/148704030-9c752e7e-0d1c-48c1-989c-9e90f97a9715.png)

## Parameter decorator
- A Parameter Decorator is declared before a parameter declaration and is applied to the function for a class constructor or method declaration.
![image](https://user-images.githubusercontent.com/12488769/148704047-3d582e66-1c7a-4250-b26f-fb5aa8c5d6e3.png)

## Accessor decorator
- An Accessor Decorator is applied to the property descriptor for the accessor.

![image](https://user-images.githubusercontent.com/12488769/148704060-339274e6-08b4-4937-8f6b-432f3199706e.png)

## Interfaces
- Interfaces allow us to create contracts that other classes/ objects can implement. 
- Interfaces are defined using the interface keyword that includes properties and methods. 
- We can have optional properties, marked with a "?" that do not have to be implemented.
- The TypeScript compiler does not convert the interface to JavaScript. 
 - Instead they are only used for type checking.

![image](https://user-images.githubusercontent.com/12488769/148704077-85db16be-b63b-468b-829f-aba36031b306.png)





