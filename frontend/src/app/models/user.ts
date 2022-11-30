import { Todo } from "./todo";

export class User {
  id!: number;
  name!: string;
  todos?: Todo[];
}