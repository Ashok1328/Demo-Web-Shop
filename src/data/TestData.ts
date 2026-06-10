import { faker } from "@faker-js/faker";

export class RegisterTestData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;

  constructor() {
    this.firstName = faker.person.firstName();
    this.lastName = faker.person.lastName();
    this.email = faker.internet.email();
    this.password = "Password123!";
    this.confirmPassword = "Password123!";
  }
}
