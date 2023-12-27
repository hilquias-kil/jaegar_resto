export interface ProductModel {
  id: number;
  image: string;
  price: number;
  name: string;
  category:
    | "Hot Dishes"
    | "Cold Dishes"
    | "Soup"
    | "Grill"
    | "Appetizer"
    | "Dessert";
}
