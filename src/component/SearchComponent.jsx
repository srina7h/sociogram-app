import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React from 'react'
 
 const SearchComponent = () => {
   return (
     <div><Form className="d-flex">
     <Form.Control
       type="search"
       placeholder="Search a User"
       className="me-2"
       aria-label="Search"
     />
   </Form>
   <Button variant="outline-success">Search</Button></div>
   )
 }
 
 export default SearchComponent