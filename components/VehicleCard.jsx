'use client'

import React from 'react';
import { Card, ListGroup, ListGroupItem, Badge } from 'react-bootstrap';
import { FaCar, FaUser, FaMapMarkerAlt } from 'react-icons/fa';

const VehicleCard = (props) => {

    const getStatusColor = () => {
        switch (props.serviceStatus) {
            case 'pending':
                return 'danger';
            case 'inProgress':
                return 'warning';
            case 'completed':
                return 'success';
            default:
                return 'secondary';
        }
    };

  const Vehicle_Number= "MH 12 XY 1234";
  const Owner_Name= "John Doe";
  const Address= "Pune";
 
  return (

      <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title className="text-gray mb-4 d-flex align-items-center justify-content-between border-bottom pb-3">
                    <div className='d-flex align-items-center gap-2'>
                        <FaCar size={24} />
                        <span className="fs-5">Vehicle Details</span>
                    </div>

                    <Badge bg={getStatusColor()}>{props.serviceStatus}</Badge>
                </Card.Title>
            <Card.Text><strong>Vehicle Number:</strong> {Vehicle_Number}</Card.Text>
            <Card.Text><strong>Model Number:</strong> ABC123</Card.Text>
            <br/>
            <Card.Text>
                <strong>Description: </strong>Change oil as well as Fuel filter. Make proper Wheel alignment of all Vehicles. 
            </Card.Text>
            <br/>
            <Card.Text><strong>Due Date:</strong> 05-03-2024</Card.Text>
        </Card.Body>

        <ListGroup className="list-group-flush">
            <ListGroupItem><FaUser /> John Doe</ListGroupItem>
            <ListGroupItem><FaMapMarkerAlt /> Pune,Maharashtra</ListGroupItem>
        </ListGroup>
        <Card.Body>
            <Card.Link href="/servicing-items">Start Scheduling</Card.Link>
        </Card.Body>
    </Card>
  
  )
}

export default VehicleCard;