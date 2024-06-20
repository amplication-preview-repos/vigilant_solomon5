import { CommentAnalysis as TCommentAnalysis } from "../api/commentAnalysis/CommentAnalysis";

export const COMMENTANALYSIS_TITLE_FIELD = "commentId";

export const CommentAnalysisTitle = (record: TCommentAnalysis): string => {
  return record.commentId?.toString() || String(record.id);
};
