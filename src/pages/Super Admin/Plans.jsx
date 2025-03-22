import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from 'react-router-dom';

// Demo packages array
const plans = [
  {
    planName: 'Free Plan',
    price: '$0',
    trialDays: 0,
    features: [
      'John',
      '3 Month',
      '1 Establishment',
      '14 trial ',
      '1 establishment',
      '49$ Price',
    ],
    badgeColor: 'success',
  },
  {
    planName: 'Platinum',
    price: '$500',
    trialDays: 5,
    features: [
      'John',
      '3 Month',
      '1 Establishment',
      '14 trial ',
      '1 establishment',
      '49$ Price',
    ],
    badgeColor: 'primary',
  },
  {
    planName: 'Gold',
    price: '$400',
    trialDays: 7,
    features: [
      'John',
      '3 Month',
      '1 Establishment',
      '14 trial ',
      '1 establishment',
      '49$ Price',
     
    ],
    badgeColor: 'warning',
  },
];


function Plans() {
  return (
    <Container className="" style={{ marginTop: '60px' }}>
    <Link to='#' >
    <button className='btn btn-warning mb-2' >Add Plan</button></Link>
    <Row className="card-grid">
      {plans.map((plan, index) => (
        <Col key={index} md={4}>
          <Card className={`plan-card ${plan.badgeColor}`}>
            <Card.Body>
              <div className="badge">{plan.planName}</div>
              <h2>{plan.price} <span>/Per Year</span></h2>
              <p>Free Trial Days: {plan.trialDays}</p>
              <ul>
                {plan.features.map((feature, idx) => (
                  <li key={idx}>✅ {feature}</li>
                ))}
              </ul>
                    <div className=' d-flex justify-content-end gap-2'>     
               <Button variant="primary" className="">
              <FaEdit />
              </Button>
             
                <Button variant="danger" className="">
                 <MdDeleteOutline />
                </Button>
            
             </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
  );
}

export default Plans;
