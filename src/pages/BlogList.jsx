import React from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import SingleCardredux from '../components/SingleCardredux'

const BlogList = props => {
  return (
//  <> 
    <Container className='my-2'>

    <h1 className='text-center my-3'>Blogs </h1>
<Link to="/dashboard" ><Button className='my-5 text-center bg-color '>Dashboard</Button></Link>
  
 
       <Row>
       {props.pvalue.map((item,i)=>{
            return <SingleCardredux id={item.id} key={i} photo={item.img} title={item.title} desc={item.desc}/>
        })}
       </Row>
        
    </Container>



// </>
  )
}

const mapStateToProps =(state)=>{
    return{
        pvalue:state
    }
}

export default connect(mapStateToProps)(BlogList)