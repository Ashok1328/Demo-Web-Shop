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

export class ProductTestData {
  electronics: {
    subCategory: string;
    cellPhones: string[];
    single: string;
    multiple: string[];
  };
  books: string;
  computers: {
    subCategory: string;
    desktops: string[];
    single: string;
    multiple: string[];
  };
  jewelry: string;

  constructor() {
    this.electronics = {
      subCategory: "Cell Phones",
      cellPhones: ["Smartphone", "Phone Cover"],
      single: "Smartphone",
      multiple: ["Smartphone", "Phone Cover"],
    };
    this.computers = {
      subCategory: "Desktops",
      desktops: [
        "Build your own cheap computer",
        "Build your own expensive computer",
      ],
      single: "Build your own cheap computer",
      multiple: [
        "Build your own cheap computer",
        "Build your own expensive computer",
      ],
    };
    this.jewelry = "Black & White Diamond Heart";
    this.books = "Computing and Internet";
  }

  getProducts(
    category: "electronics" | "computers",
    mode: "single" | "multiple",
  ) {
    if (category === "electronics") {
      return mode === "single"
        ? this.electronics.single
        : this.electronics.multiple;
    }
    return mode === "single" ? this.computers.single : this.computers.multiple;
  }
}

export class CheckoutTestData {
  billingAddress: {
    firstName: string;
    lastName: string;
    email: string;
    country: string;
    stateProvince: string;
    city: string;
    address1: string;
    zipPostalCode: string;
    phoneNumber: string;
  };
  shippingAddress: {
    firstName: string;
    lastName: string;
    email: string;
    country: string;
    stateProvince: string;
    city: string;
    address1: string;
    zipPostalCode: string;
    phoneNumber: string;
  };
  shippingMethod: string;
  paymentMethod: string;

  constructor() {
    this.billingAddress = {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      country: "United States",
      stateProvince: "California",
      city: "Los Angeles",
      address1: faker.location.streetAddress(),
      zipPostalCode: "90210",
      phoneNumber: faker.phone.number(),
    };
    this.shippingAddress = {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      country: "United States",
      stateProvince: "California",
      city: "Los Angeles",
      address1: faker.location.streetAddress(),
      zipPostalCode: "90210",
      phoneNumber: faker.phone.number(),
    };
    this.shippingMethod = "Next Day Air";
    this.paymentMethod = "Credit Card";
  }
} 