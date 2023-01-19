import * as Yup from "yup";

// Creating schema
export const Schema = Yup.object().shape({
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format")
    .oneOf(
      ["test_user@meistery.net", "test_user2@meistery.net", null],
      "Incorrect Email."
    ),

  password: Yup.string()
    .required("Password is a required field")
    .oneOf(["trial_application", null], "Incorrect Password."),
});
