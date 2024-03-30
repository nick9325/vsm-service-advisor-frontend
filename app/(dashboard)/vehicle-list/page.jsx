'use client'

import React from 'react';
import { Card, Container, ListGroup, ListGroupItem } from 'react-bootstrap';
import { PageHeading } from 'widgets'
import { FaCar, FaUser, FaMapMarkerAlt } from 'react-icons/fa';


const Vehicles = () => {
  const Vehicle_Number= "MH 12 XY 1234";
  const Owner_Name= "John Doe";
  const Address= "Pune";
 
  return (
    <Container fluid className="p-6">

      <PageHeading heading="Vehicles for Servicing"/>

      <div className="py-6">
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <center>
          <FaCar size={30} color="gray"/>
          </center><br/>
            <Card.Title>Vehicle Number: {Vehicle_Number}</Card.Title>
            <Card.Text>Model Number: </Card.Text>
            <br/>
            <Card.Text>
                Description regarding Servicing.Change oil as well as Fuel filter. Make proper Wheel alignment of all Vehicles. 
            </Card.Text>
            <br/>
            <Card.Text>Service Status: DUE</Card.Text>
            <Card.Text>Due Date: 05-03-2024</Card.Text>
          <Card.Text>  </Card.Text>
        </Card.Body>

        <ListGroup className="list-group-flush">
            <ListGroupItem><FaUser /> John Doe</ListGroupItem>
            <ListGroupItem><FaMapMarkerAlt /> Pune,Maharashtra</ListGroupItem>
        </ListGroup>
        <Card.Body>
            <Card.Link href="/servicing-items">Start Scheduling</Card.Link>
        </Card.Body>
    </Card>
       
      </div>

    </Container>
  )
}

export default Vehicles;