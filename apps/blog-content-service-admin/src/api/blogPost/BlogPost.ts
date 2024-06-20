export type BlogPost = {
  content: string | null;
  createdAt: Date;
  id: string;
  publishedAt: Date | null;
  status?: "Option1" | null;
  title: string | null;
  updatedAt: Date;
};
