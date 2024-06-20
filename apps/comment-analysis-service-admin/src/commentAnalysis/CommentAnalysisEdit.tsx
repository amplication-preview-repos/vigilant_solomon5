import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const CommentAnalysisEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <TextInput label="commentId" source="commentId" />
      </SimpleForm>
    </Edit>
  );
};
