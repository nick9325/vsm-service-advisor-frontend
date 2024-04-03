'use client'

import React from 'react';
import { Container} from 'react-bootstrap';
import { PageHeading } from 'widgets'
import VehicleCard from '../../../components/VehicleCard'

const Vehicles = () => {
  
  return (
    <Container fluid className="p-5">

      <PageHeading heading="Vehicles for Servicing"/>

      <div className="py-2  mx-10 d-flex gap-7 flex-wrap">
     
     <VehicleCard serviceStatus={'pending'} />
     <VehicleCard serviceStatus={'completed'} />
     <VehicleCard serviceStatus={'inProgress'} />
       
      </div>

    </Container>
  )
}

export default Vehicles;