import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;

// export default function Table({theadData, tbodyData}){
//   return(
//       <table>
//           <thead>
              
//               <tr>
//                   {theadData.map(heading => {
//                       return <th key={heading}>{heading}</th>
//                   })}
//               </tr>
//           </thead>
//           <tbody>
//               {tbodyData.map((row,index) => {
//                   return <tr key={index}>
//                       {theadData.map((key,index) => {
//                           return <td key={row[key]}>{row[key]}</td>
//                       })}
//                   </tr>
//               })} 
//           </tbody>
//       </table>
//   )
// }