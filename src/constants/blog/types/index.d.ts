export interface Blog {
  id: number,
  title: string,
  author: string,
  content: Array<string>,
  date: string,
  images: Array<BlogImage>,
  references: Array<string>,
}

interface BlogImage {
  afterIndex: number,
  src: string,
  alt: string,
  caption?: string,
}
