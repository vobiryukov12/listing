import { IListingItem } from "../../App";

export interface IItem {
  item: IListingItem
}

export default function ListingItem({ item }: IItem) {
  if (item.state === 'active') {
    return (
      <div className="item">
        <div className="item-image">
          <a href={item.url}>
            <img src={item.MainImage!.url_570xN} />
          </a>
        </div>
        <div className="item-details">
          <p className="item-title">{item.title!.length > 50 ? `${item.title!.slice(0,50)}...` : item.title}</p>
          <p className="item-price">{item.currency_code === 'USD' ? `$${item.price}` : item.currency_code === 'EUR' ? `€${item.price}` : `${item.price} ${item.currency_code}`}</p>
          <p className={`item-quantity level-${item.quantity! > 20 ? 'high ' : item.quantity! >= 10 ? 'medium' : 'low'}`}>{item.quantity} left</p>
        </div>
      </div>
    );
  }
}
