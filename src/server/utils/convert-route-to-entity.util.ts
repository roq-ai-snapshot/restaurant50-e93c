const mapping: Record<string, string> = {
  menus: 'menu',
  orders: 'order',
  restaurants: 'restaurant',
  tables: 'table',
  users: 'user',
  'wait-staffs': 'wait_staff',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
