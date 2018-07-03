import request from '../utils/request';
import { PAGE_SIZE } from '../constants';

export function fetch() {
  return request(`/api/sections`);
}

export function remove(id) {
  return request(`/api/section`, {
    method: 'DELETE',
    body: JSON.stringify(id)
  });
}
export function removeItem(index, id) {
  return request(`/api/section_value`, {
    method: 'DELETE',
    body: JSON.stringify(index, id)
  });
}

export function patch(values) {
  return request(`/api/section`, {
    method: 'PATCH',
    body: JSON.stringify(values),
  });
}

export function create(values) {
  return request('/api/sections', {
    method: 'POST',
    body: JSON.stringify(values)
  });
}
