import dummyData from "../StockData";
import '../App.css';
import { Link } from 'react-router-dom';

const Stocks = () => {
  return <> <h1>Stocks</h1>
  <table>
    <tbody>
    <tr>
      <th>Company</th>
      <th>Symbol</th>
      <th>Company</th>
    </tr>
    <br />
      {dummyData.map(function(item,index){
        return <Link to={`/company/${index}`} key={index}><tr>
          <th>{item.name}</th>
          <th>{item.symbol}</th>
          <th>{item.lastPrice}</th>
        </tr><br /></Link>
      })}
      </tbody>
  </table></>
}

export default Stocks