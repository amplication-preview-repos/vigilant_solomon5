import { JsonValue } from "type-fest";

export type CommentAnalysis = {
  analysisResult: JsonValue;
  commentId: string | null;
  createdAt: Date;
  id: string;
  updatedAt: Date;
};
