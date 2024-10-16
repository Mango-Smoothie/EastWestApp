export interface InventoryItem {
    SKU: string;
    Item: string;
    UPC: string;
    Type: string;
    category: string;
    Description: string;
    Inventory: number;
    Qty_per_Box: number;
    Average_Cost: string;
    Average_Price: string;
    Dims: string;
    B_Dims: string;
    Length: number;
    Width: number;
    Height: number;
    Box_Dims: string;
    Box_Length: number;
    Box_Width: number;
    Box_Height: number;
    Box_Weight: number;
    Available_Date: Date;
    Shipping_Method: string;
    Pieces_Container: number;
    YTD_Inventory: number;
    Supplier: string;
    UpdateStamp: Date;
  }
  