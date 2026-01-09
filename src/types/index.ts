export interface Prestation {
  reference: string;
  title: string;
  price: number;
  duration: number;
}

export interface Category {
  reference: string;
  title: string;
  prestations: Prestation[];
}

export type UniverseResponse = {
  categories: Category[];
};
export type CreateBookingPayload = {
  prestations: string[];
  appointment: string;
  address: string;
};
