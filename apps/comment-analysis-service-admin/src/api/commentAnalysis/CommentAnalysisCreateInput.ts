import { InputJsonValue } from "../../types";

export type CommentAnalysisCreateInput = {
  analysisResult?: InputJsonValue;
  commentId?: string | null;
};
