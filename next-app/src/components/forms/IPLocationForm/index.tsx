import { Formik as FormikContext, Form as FormikForm } from "formik";
import { IIPLocationFormData } from "./models";
import TextField from "@/components/inputs/TextField";
import Button from "@/components/inputs/Button";
import { initialValues } from "./initialValues";
import { Schema } from "./schema";
import styles from "./styles.module.css";

export interface IIPLocationFormProps {
  data?: IIPLocationFormData;
  onSubmit: (data: IIPLocationFormData) => void;
}

const IPLocationForm: React.FC<IIPLocationFormProps> = ({
  data,
  onSubmit: handleSubmit,
}) => {
  const resolvedInitialValues = initialValues(data);

  return (
    <>
      <FormikContext
        enableReinitialize
        initialValues={resolvedInitialValues}
        onSubmit={handleSubmit}
        validationSchema={Schema()}
      >
        {({ setFieldValue }) => (
          <FormikForm className={styles.form}>
            <TextField name="ipAddress" placeholder="Enter IP Address..." />
            <Button type="submit">Submit</Button>
          </FormikForm>
        )}
      </FormikContext>
    </>
  );
};

export default IPLocationForm;
