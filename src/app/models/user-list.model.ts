/* tslint:disable:variable-name */
import { User } from './user.model';

export class UserList {
  total_count: number;
  incomplete_results: boolean;
  items: User[];
}
