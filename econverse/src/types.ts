export interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

export interface ProductsData {
  success: boolean;
  products: Product[];
}
