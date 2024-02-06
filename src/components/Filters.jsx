import './Components.css';
import { FiFilter } from "react-icons/fi";
function Filters() {

    return (
 <div className="filtr">  
    <FiFilter />
    <h2 style={{marginRight: '10px'}}>Filter</h2>
    <form action="">
    <table>
        <tr>
            <label style={{backgroundColor: 'orange', padding:'4px', borderRadius: '4px', textAlign: 'center' }}>Domain: </label> 
            <td ><input style={{height: '3vh', width: '150%', padding: '10px', fontSize: '15px' }} type="text" placeholder="e.g. UI Designing" name='Gender'/></td>
        </tr>
        <tr>
        <label style={{backgroundColor: 'orange', padding:'6px',borderRadius: '4px', textAlign: 'center'}}>Gender: </label> 
            <td style={{paddingLeft: '120px', paddingBottom:'10px'}} ><input type="checkbox" placeholder="Gender" />Male</td>
            <td style={{paddingRight: '15px',paddingBottom:'12px'}}><input type="checkbox" placeholder="Gender" />Female</td>
            <td style={{paddingRight: '15px', paddingBottom:'12px'}}><input type="checkbox" placeholder="Gender" />Agender</td>
            <td style={{paddingRight: '15px', paddingBottom:'12px'}}><input type="checkbox" placeholder="Gender" />Bigender</td>
            <td style={{paddingRight: '15px', paddingBottom:'12px'}}><input type="checkbox" placeholder="Gender" />Polygender</td>
            <td style={{paddingRight: '15px', paddingBottom:'12px'}}><input type="checkbox" placeholder="Gender" />Non-binary</td>
            <td style={{paddingRight: '15px', paddingBottom:'12px'}}><input type="checkbox" placeholder="Gender" />Genderfluid</td>
            <td style={{paddingRight: '15px', paddingBottom: '12px'}}><input type="checkbox" placeholder="Gender" />Genderqueer</td>
        </tr>  
        <tr>
        <label style={{backgroundColor: 'orange', padding:'5px', borderRadius: '4px', textAlign: 'center'}}>Availability: </label> 
            <td style={{paddingLeft: '120px'}}><input type="checkbox" placeholder="Availability" /> True </td>
            <td><input type="checkbox" placeholder="Gender" name='Gender' /> False </td>
        </tr>  
      </table>   
     </form>
  </div>  
     
    );
}

export default Filters;