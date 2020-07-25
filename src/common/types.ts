interface Name {
  first: string;
  last: string;
}

interface User {
  _id: string;
  name: Name;
}

export interface CatFact {
  _id: string;
  type: string;
  text: string;
  user: User;
  upvotes: number;
}
