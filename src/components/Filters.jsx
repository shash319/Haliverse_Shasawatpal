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
            <label style={{backgroundColor: 'orange', padding:'4px', borderRadius: '4px', textAlign: 'center'}}>Domain: </label> 
            <td><input type="text" placeholder="e.g. UI Designing" name='Gender'/></td>
        </tr>
        <tr>
        <label style={{backgroundColor: 'orange', padding:'4px', borderRadius: '4px', textAlign: 'center'}}>Gender: </label> 
            <td ><input type="checkbox" placeholder="Gender" />Male</td>
            <td style={{margin: '0px'}}><input type="checkbox" placeholder="Gender" />Female</td>
        </tr>  
        <tr>
        <label style={{backgroundColor: 'orange', padding:'5px', borderRadius: '4px', textAlign: 'center'}}>Availability: </label> 
            <td><input type="checkbox" placeholder="Availability" /> True </td>
            <td><input type="checkbox" placeholder="Gender" name='Gender' /> False </td>
        </tr>  
      </table>   
     </form>
  </div>  
     
    );
}

export default Filters;