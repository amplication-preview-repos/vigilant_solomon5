import { SortOrder } from "../../util/SortOrder";

export type CommentAnalysisOrderByInput = {
  analysisResult?: SortOrder;
  commentId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
