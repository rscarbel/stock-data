import { useCallback, useState, useEffect } from 'react'

const FortniteStore = () => {
  const [ stock, setStock ] = useState(null);

  const getStock = useCallback(async () => {
    const response = await fetch('https://fortnite-api.com/v2/shop/br');
    setStock (await response.json());
  }, []);

  useEffect(() => {
      getStock()
  }, [getStock]);

  const loading = () => {
    return <h1>Loading...</h1>
  }

  const loaded = () => {
    return (
      <div>
        <h3>Item Name:</h3>
        <h1>{stock.data.daily.entries[0].items[0].name}</h1>
        <h3>Item Price:</h3>
        <h1>{stock.data.daily.entries[0].regularPrice}</h1>
      </div>
    )
  }

  return stock ? loaded() : loading()
}

export default FortniteStore;