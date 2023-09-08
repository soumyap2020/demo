import Validations from "./Validations";
export default class SignupValidations {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  checkValidations() {
    let errors = [];

    if (!Validations.checkEmail(this.email)) {
      errors["email"] = "Please enter a valid Email ID";
    }

    else if (!Validations.minLength(this.email, 10)) {
      errors["email"] = "Email length should be greater then 10 characters";
    }
    if (!Validations.passwordMinLength(this.password, 10)) {
      errors["password"] = "Password length should be greater then 10 characters";
    }
    return errors;
  }
}
