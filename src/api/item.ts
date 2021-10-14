import request from '../lib/request';

export function getItems(id: number): Promise<any> {
  return request.get(`/todo-items?activity_group_id=${id}`);
}

export function createItem(data: {
  activity_group_id: number;
  title: string;
  priority: string;
}): Promise<any> {
  return request.post('/todo-items', {
    activity_group_id: data.activity_group_id,
    title: data.title,
    priority: data.priority
  });
}

export function getDetailItem(id: number): Promise<any> {
  return request.get(`/todo-items/${id}`);
}

export function removeItem(id: number): Promise<any> {
  return request.delete(`/todo-items/${id}`);
}

export function updateItem(data: {
  id: number;
  title: string;
  priority: string;
  is_active: number;
}): Promise<any> {
  return request.patch(`/todo-items/${data.id}`, {
    title: data.title,
    priority: data.priority,
    is_active: data.is_active
  });
}
