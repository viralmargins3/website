import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const StudentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Department" source="department" />
        <TextInput label="Name" source="name" />
        <TextInput label="Email" source="email" type="email" />
      </SimpleForm>
    </Create>
  );
};
