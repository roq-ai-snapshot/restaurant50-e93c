import { UserInterface } from 'interfaces/user';
import { MenuInterface } from 'interfaces/menu';
import { GetQueryInterface } from 'interfaces';

export interface OrderInterface {
  id?: string;
  customer_id: string;
  menu_id: string;
  status: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  menu?: MenuInterface;
  _count?: {};
}

export interface OrderGetQueryInterface extends GetQueryInterface {
  id?: string;
  customer_id?: string;
  menu_id?: string;
  status?: string;
}
