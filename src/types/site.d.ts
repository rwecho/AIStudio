interface Site {
  id: string;
  url: string;
  title: string;
  description: string;
  tags: string[];
  cover: string;
  label?: string;
  createdAt: Date;
}
