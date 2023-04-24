import React from 'react'
import { Button, Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
const Dashboard = props => {
  return (
  <>
  <Container>
  <h1 className='text-center my-5'>Admin Dashboard</h1>
  <Link to='/add'><Button  className="mb-5 bg-color" >Add</Button></Link>
  {/* <Link to='/loginn'><Button  className="mb-5" variant='primary'>Login</Button></Link> */}

  <Table striped bordered hover>
    <thead>
      <tr >
        <th>#</th>
        <th>Blog photo</th>
        <th>Blog title</th>
        <th>Blog description</th>
        <th>Edit</th>
      </tr>
    </thead>
    <tbody>
        {props.pvalue.map((item,i)=>(
    <tr key={i}>
        <td>{i+1}</td>
        <td><img width={50} src={item.img} alt="" /></td>
        <td>{item.title}</td>
        <td>{item.desc.substring(0,30)}</td>
        <td><Link to={`/edit/${item.id}`}><Button className='bg-color'>Edit</Button></Link></td>
      </tr>
        ))}
    
      
    </tbody>
  </Table>
  </Container>
  </>

  )
}

const mapStateToProps =(state)=>{
    return{
        pvalue:state
    }
}

export default connect(mapStateToProps)(Dashboard)