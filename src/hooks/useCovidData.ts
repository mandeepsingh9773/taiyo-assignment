import { useQuery } from "@tanstack/react-query";
import {
  fetchWorldwideData,
  fetchCountryData,
  fetchHistoricalData,
} from "../services/api";

export const useWorldwideData = () =>
  useQuery({ queryKey: ["worldwide"], queryFn: fetchWorldwideData });

export const useCountryData = <T>() =>
  useQuery<T>({ queryKey: ["countries"], queryFn: fetchCountryData });

export const useHistoricalData = <T>() =>
  useQuery<T>({ queryKey: ["historical"], queryFn: fetchHistoricalData });
