export type DonationCondition = 'novo' | 'seminovo' | 'usado';

export type DonationStatus =
  | 'disponivel'
  | 'reservado'
  | 'doado'
  | 'inativo';

export interface DonationItem {
  id?: string; 

  title: string;
  description?: string;
  category?: string;

  condition: DonationCondition;
  status: DonationStatus;

  quantity?: number;

  images?: string[];  

  ownerId: string; 
  nickName?: string;  

  createdAt?: any; 
  updatedAt?: any;  
}
