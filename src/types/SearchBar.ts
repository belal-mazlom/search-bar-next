export type Product = {
  id: string;
  title: string;
  price: number;
  thumbnail: string;
};

export type Suggestions = {
  items: Product[];
};
