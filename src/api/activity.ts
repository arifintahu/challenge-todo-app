import request from '../lib/request';

export function getActivities(): Promise<any> {
  return request.get('/activity-groups');
}

export function createActivity(data: { title: string }): Promise<any> {
  return request.post('/activity-groups', {
    title: data.title
  });
}

export function getDetailActivity(id: number): Promise<any> {
  return request.get(`/activity-groups/${id}`);
}

export function removeActivity(id: number): Promise<any> {
  return request.delete(`/activity-groups/${id}`);
}

export function updateActivity(data: { id: number; title: string }): Promise<any> {
  return request.patch(`/activity-groups/${data.id}`, {
    title: data.title
  });
}
