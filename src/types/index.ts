export interface Ubi {
  effects: string[];
  date: {
    endDate: string;
    startDate: string;
  };
  funding: string;
  id?: number;
  income: object;
  incomeAverage?: number | string;
  incomeType: string;
  isActive: boolean;
  label: string;
  length?: number;
  location: string;
  organization: string;
  sample: string;
  sampleAge: string;
  src: string[];
  title: string;
}
