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

export class LoginTestData {
  valid: { email: string; password: string };
  invalidEmail: { email: string; password: string };
  invalidPassword: { email: string; password: string };
  invalidEmailAndPassword: { email: string; password: string };
  emptyFields: { email: string; password: string };

  constructor() {
    this.valid = {
      email: "Batasey22@gmail.com",
      password: "Beast22@#",
    };

    this.invalidEmail = {
      email: faker.internet.email(),
      password: faker.internet.password(),
    };

    this.invalidPassword = {
      email: faker.internet.email(),
      password: faker.internet.password(),
    };

    this.invalidEmailAndPassword = {
      email: faker.internet.email(),
      password: faker.internet.password(),
    };

    this.emptyFields = {
      email: "",
      password: "",
    };
  }
}
