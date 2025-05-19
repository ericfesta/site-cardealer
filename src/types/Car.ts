export interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuelType: string;
  transmission: string;
  bodyType: string;
  color: string;
  vin: string;
  description: string;
  imageUrl: string;
  featured: boolean;
  features: {
    engine: string;
    horsepower: number;
    acceleration: string;
    comfort: string[];
    safety: string[];
    technology: string[];
  };
}
