// lib/locations.ts
import provinces from './mongolian-location.json'

export const getProvinces = () => provinces.provinces

export const getDistricts = (provinceCode) => {
  const province = provinces.provinces.find(p => p.code === provinceCode)
  return province?.districts || []
}