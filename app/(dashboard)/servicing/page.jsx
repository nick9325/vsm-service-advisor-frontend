'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { Container, Table, Button, Form, Row, Col } from 'react-bootstrap';
import { PageHeadingWithButton } from 'widgets';
import { PageHeading } from 'widgets';

const Service = () => {
    const [selectedItems, setSelectedItems] = useState([]);
    const [items, setItems] = useState([
        { id: 1, name: 'Oil Change', cost: 200, quantity: 1 },
        { id: 2, name: 'Wheel Alignment', cost: 500, quantity: 4 },
        { id: 3, name: 'Brake Pad Replacement', cost: 450, quantity: 1 },
        { id: 4, name: 'Fuel Filter Change', cost: 500, quantity: 1 },
    ]);

    const handleQuantityChange = (itemId, value) => {
        const updatedItems = items.map(item =>
            item.id === itemId ? { ...item, quantity: parseInt(value) } : item
        );
        setItems(updatedItems);
    };

    const handleAddItem = (item) => {
        const updatedSelectedItems = [...selectedItems, item];
        setSelectedItems(updatedSelectedItems);
    };

    const handleDeleteItem = (itemId) => {
        const updatedSelectedItems = selectedItems.filter(item => item.id !== itemId);
        setSelectedItems(updatedSelectedItems);
    };

    const calculateItemCost = (item) => {
        return item.cost * item.quantity;
    };

    const calculateTotalCost = () => {
        return selectedItems.reduce((total, item) => total + item.cost * item.quantity, 0);
    };

    return (
        <Container fluid className="p-5">

            <Row>
                <Col lg={12} md={12} xs={12}>
                    <div className="border-bottom pb-4 mb-4 d-flex justify-content-between">
                        <h3 className="mb-0 fw-bold">Owners</h3>
                        <Button onClick={() => router.push('/owners/add')} variant="primary" className="">
                            Add New Item
                        </Button>
                    </div>
                </Col>
            </Row>



            <div style={{ overflowY: 'auto' }}>
                <Table responsive style={{ minWidth: '500px', whiteSpace: 'nowrap' }}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Cost (&#8377;)</th>
                            <th>Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(item => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.cost}</td>
                                <td>
                                    <Form.Control
                                        type="number"
                                        value={item.quantity}
                                        onChange={e => handleQuantityChange(item.id, e.target.value)}
                                        min={1}
                                    />
                                </td>
                                <td>
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
                </Table>
            </div>
            <br />
            <PageHeading heading="Selected Items" />
            <div style={{ overflowY: 'auto' }}>
                <Table responsive style={{ minWidth: '500px', whiteSpace: 'nowrap' }}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Cost per Item (&#8377;)</th>
                            <th>Total Cost (&#8377;)</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {selectedItems.map(item => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.quantity}</td>
                                <td>{item.cost}</td>
                                <td>{calculateItemCost(item)}</td>
                                <td>
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
                            <td colSpan="3">Total Cost:</td>
                            <td colSpan="2">{calculateTotalCost()}</td>
                        </tr>
                    </tfoot>
                </Table>
            </div>
            <div style={{ textAlign: 'center', marginTop: '20px' }}>

                <Button variant="primary">Complete Service</Button>

            </div>
        </Container>

    );
}

export default Service;