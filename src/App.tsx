import './App.css';
import data from './data/data.json';
import Listing from './components/Listing/Listing';

export interface IListingItem {
  state: string,
  listing_id: number,
  url?: string,
  MainImage?: {url_570xN: string},
  title?: string,
  currency_code?: string, 
  price?: string, 
  quantity?: number 
}

function App() {
  const listing = data;

  return (
    <Listing items={listing} />
  );
}

export default App;
