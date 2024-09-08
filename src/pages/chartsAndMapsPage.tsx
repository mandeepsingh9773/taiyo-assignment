import React from "react";
import LineGraph from "../components/lineGraph";
import WorldMap from "../components/worldMap";
import {
  useWorldwideData,
  useCountryData,
  useHistoricalData,
} from "../hooks/useCovidData";

interface HistoricalData {
  cases: { [date: string]: number };
  deaths: { [date: string]: number };
  recovered: { [date: string]: number };
}

interface CountryData {
  country: string;
  countryInfo: { lat: number; long: number };
  active: number;
  recovered: number;
  deaths: number;
}

const ChartsAndMapsPage: React.FC = () => {
  const { data: worldwideData, isLoading: isLoadingWorldwide } =
    useWorldwideData();
  const { data: countryData, isLoading: isLoadingCountry } =
    useCountryData<CountryData[]>();
  const { data: historicalData, isLoading: isLoadingHistorical } =
    useHistoricalData<HistoricalData>();

  if (isLoadingWorldwide || isLoadingCountry || isLoadingHistorical) {
    return <div>Loading...</div>;
  }

  const formatHistoricalData = (data: HistoricalData | undefined) => {
    if (!data || !data.cases) return [];
    return Object.entries(data.cases).map(([date, cases]) => ({
      date,
      cases,
    }));
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">COVID-19 Dashboard</h1>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">
          Worldwide Cases Over Time
        </h2>
        {historicalData && (
          <LineGraph data={formatHistoricalData(historicalData)} />
        )}
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-4">Cases by Country</h2>
        {countryData && <WorldMap countries={countryData} />}
      </div>
    </div>
  );
};

export default ChartsAndMapsPage;
