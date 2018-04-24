export class Person {

  constructor(public id: number = 0,
              public firstName: string = '',
              public lastName: string = '',
              public email: string = '',
              public hobbies: string[] = []) {
  }
}
