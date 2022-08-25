/* eslint-disable @typescript-eslint/naming-convention */
export interface Food {
  id: number;
  title: string;
  price: number;
  image?: string;
  description?: string;
}

export interface Types{
  id: number;
  libelle: string;
  is_active: boolean;
}


export interface TailleBoisson{
  id: number;
  variety: Variety;
  stock: number;
  qty: number;
}

export interface Variety{
  id: number;
  libelle: string;
  image: Blob;
  is_active: boolean;
}




export interface Products {
  id: number;
  libelle: string;
  prix: number;
  image: Blob;
  gestionnaire: number;
  type: Types;
  is_active: boolean;
  qty: number;
  composant: TailleBoisson[];
  menus: [
    {
      quantity: number;
      product: Products;
    }

  ];

}
