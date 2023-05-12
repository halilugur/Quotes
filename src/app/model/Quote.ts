export class Quote {
  _id: string;
  author: string;
  authorSlug: string;
  content: string;
  dateAdded: Date;
  dateModified: Date;
  length: number;
  tags: string[];

  constructor(
    _id: string,
    author: string,
    authorSlug: string,
    content: string,
    dateAdded: Date,
    dateModified: Date,
    length: number,
    tags: string[]
  ) {
    this._id = _id;
    (this.author = author),
      (this.authorSlug = authorSlug),
      (this.content = content),
      (this.dateAdded = dateAdded),
      (this.dateModified = dateModified),
      (this.length = length),
      (this.tags = tags);
  }
}
