import styles from "./styles.module.css";

import {
  ErrorMessage as FormikErrorMessage,
  Field as FormikField,
  FieldProps as IFormikFieldProps,
} from "formik";

export interface ITextFieldProps extends Partial<IFormikFieldProps> {
  label?: React.ReactNode;
  name: string;
}

export type TTextFieldProps = ITextFieldProps & Partial<HTMLInputElement>;

const TextField: React.FC<TTextFieldProps> = ({
  field,
  label,
  name,
  ...rest
}) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name}>
        {label}
        <FormikField
          className={styles.input}
          name={name}
          {...field}
          {...rest}
        />
      </label>
      <FormikErrorMessage name={name}>
        {(errorMessage) => <div className={styles.error}>{errorMessage}</div>}
      </FormikErrorMessage>
    </div>
  );
};

export default TextField;
