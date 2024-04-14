"use client"

import React, { useEffect, useState } from 'react';
import { Container, Table, Button, Form, Row, Col } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { PageHeading } from 'widgets';
import { GetAllItems, PostCompleteService } from '../../../constants/ServiceEndpoints'
import Spinner from 'react-bootstrap/Spinner';
import { useRouter } from 'next/navigation';

const Service = () => {
    const router = useRouter();
    const [selectedItems, setSelectedItems] = useState([]);
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [vehicleNumber, setVehicleNumber] = useState('');

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        setVehicleNumber(searchParams.get('vehicleNumber'));

    }, [router.asPath]);



    const fetchItems = async () => {

        const token = localStorage.getItem('token_sa');
        const myHeaders = new Headers();
        myHeaders.append('Authorization', `Bearer ${token}`);
        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
        };

        try {
            const response = await fetch(`${GetAllItems}`, requestOptions);
            if (response.ok) {
                const workItems = await response.json();
                setItems(workItems);
                setLoading(false);
            } else if (response.status === 401) {
                setLoading(false);
                toast.dismiss();
                toast.error('Please log in to continue');
                router.push('/authentication/sign-in');
            } else {
                setLoading(false);
                toast.dismiss();
                toast.error('Failed to fetch work items');
            }
        } catch (error) {
            setLoading(false);
            console.error('Error occurred while fetching work items:', error);
            toast.dismiss();
            toast.error('An error occurred while fetching work items');
        }
    };

    useEffect(() => {
        fetchItems();
    }, []);



    const completeService = async () => {
        toast.dismiss();
        toast.loading("Completing service..");

        const token = localStorage.getItem('token_sa');
        console.log(token)
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);

        const selectedItemIds = selectedItems.map(item => item.id);


        var raw = JSON.stringify(selectedItemIds);

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
        };

        try {
            let response = await fetch(`${PostCompleteService}${vehicleNumber}`, requestOptions);

            if (response.ok) {
                toast.dismiss();
                toast.success('Service completed successfully!');
                router.push(`/serviced`)
            } else if (response.status === 401) {
                toast.dismiss();
                toast.error('Please log in to continue');
                router.push('/authentication/sign-in');
            } else {
                toast.dismiss();
                toast.error('Failed to complte service');
            }
        } catch (error) {
            console.error('Error completing service:', error);
            toast.dismiss();
            toast.error('Failed to complete service');
        }
    }





    const handleCompleteService = (e) => {
        e.preventDefault();

        if (selectedItems.length < 1) {
            toast.error('Please select work items');
        }
        else {
            completeService()
        }

    }






    const handleAddItem = (item) => {

        const isItemAlreadySelected = selectedItems.some(selectedItem => selectedItem.id === item.id);


        if (!isItemAlreadySelected) {
            const updatedSelectedItems = [...selectedItems, item];
            setSelectedItems(updatedSelectedItems);
        }

        else {
            toast.error('Item already added')
        }
    };

    const handleDeleteItem = (itemId) => {
        const updatedSelectedItems = selectedItems.filter(item => item.id !== itemId);
        setSelectedItems(updatedSelectedItems);
    };

    const calculateTotalCost = () => {
        return selectedItems.reduce((total, item) => total + item.price, 0);
    };

    return (
        <Container fluid className="p-5">
            <div>
                <Row>
                    <Col lg={12} md={12} xs={12}>
                        <div className="border-bottom pb-4 mb-4 d-flex justify-content-between">
                            <h3 className="mb-0 fw-bold">Owners</h3>
                            <Button onClick={() => router.push('/servicing/add-item')} variant="primary" className="">
                                Add New Item
                            </Button>
                        </div>
                    </Col>
                </Row>



                {!loading ?
                    <div style={{ overflowY: 'auto' }}>

                        <Table responsive style={{ minWidth: '500px', whiteSpace: 'nowrap' }}>
                            <thead>
                                <tr>
                                    <th >#</th>
                                    <th >Name</th>
                                    <th >Cost (&#8377;)</th>
                                    <th ></th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((item, index) => (
                                    <tr key={item.id}>
                                        <td >{index + 1}</td>
                                        <td >{item.name}</td>
                                        <td >{item.price}</td>
                                        <td >
                                            <Button
                                                variant="success"
                                                size='sm'
                                                className="me-2"
                                                onClick={() => handleAddItem(item)}
                                            >
                                                Add
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table> </div> : <div className='text-center'><Spinner animation="border" /> </div>}


                <br />
                <PageHeading heading="Selected Items" />
                <div style={{ overflowY: 'auto' }}>
                    <Table responsive style={{ minWidth: '500px', whiteSpace: 'nowrap' }}>
                        <thead>
                            <tr>
                                <th ># </th>
                                <th >Name </th>
                                <th >Cost per Item (&#8377;)</th>
                                <th ></th>
                            </tr>
                        </thead>
                        <tbody>
                            {selectedItems.map((item, index) => (
                                <tr key={item.id}>
                                    <td >{index + 1}</td>
                                    <td >{item.name}</td>
                                    <td >{item.price}</td>
                                    <td >
                                        <Button
                                            variant="danger"
                                            size='sm'
                                            onClick={() => handleDeleteItem(item.id)}
                                        >
                                            Delete
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan="2">Total Cost: </td>
                                <td colSpan="2" >{calculateTotalCost()}  </td>

                            </tr>
                        </tfoot>
                    </Table>
                </div>
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <Button onClick={handleCompleteService} variant="primary">Complete Service</Button>
                </div>
            </div>
        </Container>
    );
}

export default Service;
