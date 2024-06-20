import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CommentAnalysisWhereInput = {
  analysisResult?: JsonFilter;
  commentId?: StringNullableFilter;
  id?: StringFilter;
};
