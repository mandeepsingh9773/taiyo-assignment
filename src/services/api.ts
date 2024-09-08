import axios from 'axios';

const api = axios.create({
  baseURL: 'https://disease.sh/v3',
});

export const fetchWorldwideData = () => api.get('/covid-19/all').then((res) => res.data);
export const fetchCountryData = () => api.get('/covid-19/countries').then((res) => res.data);
export const fetchHistoricalData = () => api.get('/covid-19/historical/all?lastdays=all').then((res) => res.data);

