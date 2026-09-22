export type CategoryId = 'all' | 'burgers' | 'fries' | 'pizzas' | 'drinks' | 'chicken' | 'desserts';

export interface MenuItem {
  id: string;
  name: string;
  category: CategoryId;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: string;
  spicyLevel?: number; // 0-3
  calories?: number;
  isPopular?: boolean;
  tags?: string[];
  options?: {
    pattyTemp?: string[];
    bunType?: string[];
    addCheese?: boolean;
    extraBacon?: boolean;
  };
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
  selectedOptions?: {
    specialInstructions?: string;
    temperature?: string;
  };
}

export interface CategoryItem {
  id: CategoryId;
  title: string;
  tagline: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location: string;
  rating: number;
  favoriteItem: string;
}
