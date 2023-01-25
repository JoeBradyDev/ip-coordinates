import * as Yup from "yup";
export const hello = "";

export const Schema = () =>
  Yup.object().shape({
    ipAddress: Yup.string()
      .matches(
        /(\b25[0-5]|\b2[0-4][0-9]|\b[01]?[0-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}/,
        "IP address is not in correct format."
      )
      .required("IP address is required."),
  });
