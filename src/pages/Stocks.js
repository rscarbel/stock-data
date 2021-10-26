import dummyData from "../StockData";
import '../App.css';

const Stocks = () => {
  return <> <h1>Stocks</h1>
  <table>
    <tr>
      <th>Company</th>
      <th>Symbol</th>
      <th>Company</th>
    </tr>
      {dummyData.map(function(item){
        return <tr>
          <th>{item.name}</th>
          <th>{item.symbol}</th>
          <th>{item.lastPrice}</th>
        </tr>
      })}
  </table></>
}

export default Stocks