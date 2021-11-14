import { render } from '@testing-library/react';
import React from 'react';
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'




class Customer extends React.Component{
    render(){
        return (
          <TableRow>
              <TableCell>{this.props.PriceRange}</TableCell>
              <TableCell>{this.props.ToPrice}</TableCell>
              <TableCell>{this.props.FromPrice}</TableCell>
              
          </TableRow>
        );
    }
}


// class Customer extends React.Component{
//     render(){
//         return (
//             <div>
//                 <CustomerProfile id={this.props.id} image={this.props.image} name={this.props.name} />
//                 <CustomerInfo birthday={this.props.birthday} />
//             </div>
//         );
//     }
// }

class CustomerProfile extends React.Component{
    render(){
        return (
            <div>
                <img src={this.props.image} alt="profile" />
                <h2>{this.props.name}</h2>
            </div>
        )
    }
}

class CustomerInfo extends React.Component{
    render(){
        return (
            <div>
                <p>{this.props.birthday}</p>
            </div>
        )
    }
}
    


export default Customer;