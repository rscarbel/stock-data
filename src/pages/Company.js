import { useParams } from 'react-router-dom';
import dummyData from '../StockData';

const Company = (props) => {
  const index = useParams().companyIndex
  let companyKeys = Object.keys(dummyData[index])
  return <>
    <h1>Company</h1>
    <table>
      <tbody>
      {companyKeys.map(function (key) {
        return (
        <tr>
          <td>{key}</td>
          <td>{dummyData[index][key]}</td>
        </tr>)
      })}
      </tbody>
    </table>
  </>
}

export default Company