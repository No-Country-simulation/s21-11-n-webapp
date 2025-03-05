
export interface SuccessResponse {
  token: string;
  refreshToken: string;
  user: {};
}

export interface ErrorResponse {
  message: string;
  statusCode: number;
  details: string;
  errors: Error[];
}

export interface Error {
  field: string;
  message: string;
  rejectedValue: string;
}