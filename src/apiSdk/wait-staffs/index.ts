import axios from 'axios';
import queryString from 'query-string';
import { WaitStaffInterface, WaitStaffGetQueryInterface } from 'interfaces/wait-staff';
import { GetQueryInterface } from '../../interfaces';

export const getWaitStaffs = async (query?: WaitStaffGetQueryInterface) => {
  const response = await axios.get(`/api/wait-staffs${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createWaitStaff = async (waitStaff: WaitStaffInterface) => {
  const response = await axios.post('/api/wait-staffs', waitStaff);
  return response.data;
};

export const updateWaitStaffById = async (id: string, waitStaff: WaitStaffInterface) => {
  const response = await axios.put(`/api/wait-staffs/${id}`, waitStaff);
  return response.data;
};

export const getWaitStaffById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/wait-staffs/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteWaitStaffById = async (id: string) => {
  const response = await axios.delete(`/api/wait-staffs/${id}`);
  return response.data;
};
