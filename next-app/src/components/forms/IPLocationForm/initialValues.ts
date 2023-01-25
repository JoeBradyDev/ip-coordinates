import { IIPLocationFormData } from "./models";

// This is a simple example, but for a more complex form,
// it's helpful to process the initial field values here.
export const initialValues = (data?: IIPLocationFormData) => ({
  ipAddress: data?.ipAddress ?? "",
});
