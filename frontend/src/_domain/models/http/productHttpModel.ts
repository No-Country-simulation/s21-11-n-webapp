export interface AllProductResponse {
  content:       Product[];
  page:          number;
  size:          number;
  totalElements: number;
  totalPages:    number;
  last:          boolean;
}

export interface Product {
  id:                      string;
  name:                    string;
  coverPicture:            string;
  description:             string;
  price:                   number;
  currentStock:            number;
  totalRating:             number;
  totalFavorites:          number;
  inOffer:                 boolean;
  offerPercentageDiscount: number;
  categories:              Category[];
  createdAt:               Date;
}

export interface Category {
  id:          string;
  name:        string;
  description: string;
  thumbnail:   string;
}
