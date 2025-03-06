interface Site {
  id: number;
  url: string;
  title?: string;
  description?: string;
  tags: string[];
  cover?: string;
  label?: string;
  createdAt: Date;
}
