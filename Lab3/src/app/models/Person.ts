export class Person {
  firstName: string;
  lastName: string;
  favoriteCheeses: string[];

  constructor(firstName: string, lastName: string, favoriteCheeses?: string[]) {
    this.firstName = firstName;
    this.lastName = lastName;
    if (favoriteCheeses) this.favoriteCheeses = favoriteCheeses;
  }
}