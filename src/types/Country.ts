export interface Country {
  name: { common: string; official: string };
  cca2: string;        // 2-letter country code
  cca3: string;        // 3-letter country code
  capital?: string[];
  region: string;
  subregion?: string;
  population: number;
  flags: { png: string; svg: string };
}