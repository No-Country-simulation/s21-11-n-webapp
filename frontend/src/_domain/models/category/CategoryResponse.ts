export interface CategoryResponse {
  content:       CategoryContent[];
  page:          number;
  size:          number;
  totalElements: number;
  totalPages:    number;
  last:          boolean;
}

export interface CategoryContent {
  id:          string;
  name:        string;
  description: string;
  thumbnail:   string;
  isActive:    boolean;
}
