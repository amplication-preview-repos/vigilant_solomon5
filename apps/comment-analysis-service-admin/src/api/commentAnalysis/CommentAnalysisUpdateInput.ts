import { InputJsonValue } from "../../types";

export type CommentAnalysisUpdateInput = {
  analysisResult?: InputJsonValue;
  commentId?: string | null;
};
