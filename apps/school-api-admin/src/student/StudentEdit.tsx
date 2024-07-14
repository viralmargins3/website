import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const StudentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Department" source="department" />
        <TextInput label="Name" source="name" />
        <TextInput label="Email" source="email" type="email" />
      </SimpleForm>
    </Edit>
  );
};
