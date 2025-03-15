export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  fromAge: number;
  toAge: number;
  weight: number;
  isFavorite: boolean;
  images: Image[];
  categoryIds: number[];
  quantityOfProductInStock: number;
  quantityUnit: string;
  priceUnit: string;
  outOfStock: boolean;
}

export interface Image {
  id: number;
  url: string;
}
