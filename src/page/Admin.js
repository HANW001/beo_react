import { render } from '@testing-library/react';
import React from 'react';
import Customer from '../components/Customer';
import CustomerAdd from '../components/CustomerAdd';


import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import Paper from '@material-ui/core/Paper'
import {withStyles} from '@material-ui/core/styles'

const customers = [{
    'id':1,
    'image': 'https://placeimg.com/64/64/1',
    'name':'홍길동',
    'birthday': '931216',
},
{
    'id':2,
    'image': 'https://placeimg.com/64/64/2',
    'name':'김한울',
    'birthday': '678765',
},
{
    'id':3,
    'image': 'https://placeimg.com/64/64/3',
    'name':'이순신',
    'birthday': '456245',
},
]


const styles = theme=>({
    root:{
        width: '100%',
        marginTop: theme.spacing.unit*3,
        overflowX:'auto'
    },
    table:{
        minWidth:1080
    }
})


class Admin extends React.Component{
    componentDidMount(){
        this.callApi()
        .then(res=>this.setState({prices:res}))
        
    }

    callApi = async()=>{
        const response = await fetch('/gift/test')
        const body = await response.json();
        return body;
    }

    state ={
        prices:""
    }


    render(){
        const {classes}=this.props;
        return (
            <div>
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableCell>PriceRange</TableCell>
                        <TableCell>ToPrice</TableCell>
                        <TableCell>FromPrice</TableCell>
                      

                    </TableHead>
                    <TableBody>
                    {
                   this.state.prices?  this.state.prices.map(c =>{
                         return (
                             <Customer
                             key={c.PriceRange}
                             id = {c.PriceRange}
                            
                             PriceRange={c.PriceRange}
                             ToPrice={c.ToPrice}
                             FromPrice={c.FromPrice}/>
                         )
                     }):""
                 }
                    </TableBody>
              
                </Table>
            
            </Paper>
            <CustomerAdd />
            </div>
        );
    }
}


    


export default withStyles(styles) (Admin);