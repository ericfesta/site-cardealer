import { Car } from '../types/Car';

export const allCars: Car[] = [
  {
    id: '1',
    make: 'BMW',
    model: '5 Series',
    year: 2023,
    price: 62500,
    mileage: 1250,
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    bodyType: 'Sedan',
    color: 'Alpine White',
    vin: 'WBA5A7C55JG123456',
    description: 'This BMW 5 Series combines luxury, performance, and cutting-edge technology. With its powerful engine, refined interior, and advanced driver assistance systems, it offers an exceptional driving experience. The vehicle is in pristine condition with very low mileage.',
    imageUrl: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    featured: true,
    features: {
      engine: '3.0L Turbocharged Inline-6',
      horsepower: 335,
      acceleration: '4.9 seconds',
      comfort: [
        'Heated and ventilated leather seats',
        'Panoramic sunroof',
        'Four-zone climate control',
        'Ambient interior lighting'
      ],
      safety: [
        'Adaptive cruise control',
        'Lane keeping assist',
        'Blind spot monitoring',
        'Automatic emergency braking'
      ],
      technology: [
        '12.3-inch digital instrument cluster',
        '10.25-inch touchscreen infotainment system',
        'Wireless Apple CarPlay and Android Auto',
        'Harman Kardon surround sound system'
      ]
    }
  },
  {
    id: '2',
    make: 'Mercedes',
    model: 'E-Class',
    year: 2022,
    price: 58900,
    mileage: 8750,
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    bodyType: 'Sedan',
    color: 'Obsidian Black',
    vin: 'WDDZF4JB5KA123456',
    description: 'This Mercedes E-Class exemplifies German engineering at its finest. With its elegant design, luxurious interior, and smooth ride, it delivers comfort and sophistication in equal measure. The vehicle has been meticulously maintained and comes with a comprehensive service history.',
    imageUrl: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    featured: true,
    features: {
      engine: '2.0L Turbocharged Inline-4',
      horsepower: 255,
      acceleration: '6.1 seconds',
      comfort: [
        'Nappa leather upholstery',
        'Heated and massaging front seats',
        'Dual-zone automatic climate control',
        'Power rear sunshade'
      ],
      safety: [
        'PRE-SAFE® system',
        'Active brake assist',
        'Attention assist',
        '360-degree camera system'
      ],
      technology: [
        'MBUX infotainment system',
        '12.3-inch digital instrument cluster',
        'Burmester® surround sound system',
        'Wireless smartphone integration'
      ]
    }
  },
  {
    id: '3',
    make: 'Audi',
    model: 'Q7',
    year: 2023,
    price: 72400,
    mileage: 3200,
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    bodyType: 'SUV',
    color: 'Glacier White',
    vin: 'WA1VAAF77JD123456',
    description: 'This Audi Q7 combines spaciousness, luxury, and performance in a versatile SUV package. With its powerful engine, quattro all-wheel drive, and advanced technology features, it excels in both comfort and capability. The vehicle is in excellent condition and comes with the remaining factory warranty.',
    imageUrl: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    featured: true,
    features: {
      engine: '3.0L Turbocharged V6',
      horsepower: 335,
      acceleration: '5.7 seconds',
      comfort: [
        'Valcona leather seats',
        'Three-zone climate control',
        'Panoramic sunroof',
        'Power-adjustable steering column'
      ],
      safety: [
        'Audi pre sense® front',
        'Traffic jam assist',
        'Adaptive cruise control',
        'Top view camera system'
      ],
      technology: [
        'MMI® Navigation plus',
        'Audi virtual cockpit',
        'Bang & Olufsen® 3D Premium Sound System',
        'Head-up display'
      ]
    }
  },
  {
    id: '4',
    make: 'Tesla',
    model: 'Model 3',
    year: 2023,
    price: 49900,
    mileage: 1800,
    fuelType: 'Electric',
    transmission: 'Automatic',
    bodyType: 'Sedan',
    color: 'Pearl White',
    vin: '5YJ3E1EA1JF123456',
    description: 'This Tesla Model 3 represents the future of automotive technology. With its all-electric powertrain, impressive range, and cutting-edge features, it delivers a driving experience unlike any other. The vehicle is in like-new condition and includes the Full Self-Driving capability package.',
    imageUrl: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    featured: false,
    features: {
      engine: 'Dual Motor All-Wheel Drive',
      horsepower: 346,
      acceleration: '4.2 seconds',
      comfort: [
        'Vegan leather seats',
        'Glass roof',
        'Heated front and rear seats',
        'Power-adjustable front seats'
      ],
      safety: [
        'Autopilot',
        'Automatic emergency braking',
        'Lane departure avoidance',
        'Sentry mode'
      ],
      technology: [
        '15-inch touchscreen display',
        'Over-the-air software updates',
        'Premium audio system',
        'Tesla mobile app integration'
      ]
    }
  },
  {
    id: '5',
    make: 'Lexus',
    model: 'RX 350',
    year: 2022,
    price: 54700,
    mileage: 9500,
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    bodyType: 'SUV',
    color: 'Nebula Gray Pearl',
    vin: '2T2BZMCA5LC123456',
    description: 'This Lexus RX 350 combines luxury, reliability, and versatility in a refined SUV package. With its smooth ride, premium interior, and comprehensive safety features, it offers an exceptional ownership experience. The vehicle has been well-maintained and comes with a clean history report.',
    imageUrl: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    featured: false,
    features: {
      engine: '3.5L V6',
      horsepower: 295,
      acceleration: '7.7 seconds',
      comfort: [
        'Semi-aniline leather seats',
        'Heated and ventilated front seats',
        'Dual-zone climate control',
        'Power moonroof'
      ],
      safety: [
        'Lexus Safety System+ 2.0',
        'Blind spot monitor',
        'Parking support brake',
        'Panoramic view monitor'
      ],
      technology: [
        '12.3-inch touchscreen display',
        'Lexus Enform infotainment',
        'Mark Levinson® Premium Audio',
        'Head-up display'
      ]
    }
  },
  {
    id: '6',
    make: 'Porsche',
    model: '911 Carrera',
    year: 2022,
    price: 115000,
    mileage: 5200,
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    bodyType: 'Coupe',
    color: 'GT Silver Metallic',
    vin: 'WP0AB2A92JS123456',
    description: 'This Porsche 911 Carrera represents the pinnacle of sports car engineering. With its iconic design, exhilarating performance, and precise handling, it delivers an unmatched driving experience. The vehicle has been carefully driven and maintained by its enthusiast owner.',
    imageUrl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    featured: false,
    features: {
      engine: '3.0L Twin-Turbocharged Flat-6',
      horsepower: 379,
      acceleration: '4.0 seconds',
      comfort: [
        'Leather interior',
        'Heated and ventilated sport seats',
        'Dual-zone automatic climate control',
        'Bose® surround sound system'
      ],
      safety: [
        'Lane keep assist',
        'Adaptive cruise control',
        'Night vision assist',
        'Porsche Active Safe'
      ],
      technology: [
        'Porsche Communication Management',
        '10.9-inch touchscreen display',
        'Navigation system',
        'Apple CarPlay integration'
      ]
    }
  }
];

export const featuredCars = allCars.filter(car => car.featured);
