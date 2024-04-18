import { Request } from "express";
export interface UserData {
  username: string;
  email: string;
  password: string;
}

export interface categoryData {
  name: string;
}

export interface productData {
  title: string;
  description: string;
  price: number;
  stock: number;
  brand: string;
  discountPrice: number;
}

export interface RegisterUserRequest extends Request {
  body: UserData;
}

export interface categoryRequest extends Request {
  body: categoryData;
}

export interface productRequest extends Request {
  body: productData;
}
