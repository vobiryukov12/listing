import ListingItem from "../ListingItem/ListingItem";
import { IListingItem } from "../../App";

export interface IListing {
  items: IListingItem[] 
}

export default function Listing({ items }: IListing) {
  console.log(items)
  return (
    <div className="item-list">
      {
        items.map((item) => <ListingItem key={item.listing_id} item={item}/>)
      }
    </div>
  );
}
