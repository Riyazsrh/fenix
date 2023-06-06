import React from 'react'
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import './Cards.css'
import Button from '../../CommonComponents/Button';
import CheckIcon from '@mui/icons-material/Check';
import { cardTextData1, cardTextData3 } from '../../Constant/Constant';
import AddIcon from '@mui/icons-material/Add';

const Cards = () => {
  const [currency, setCurrency] = useState('pounds');
  const [value, setValue] = useState('£24.99');
  const [multiplier, setMultiplier] = useState(1);
  const [paymentOption, setPaymentOption] = useState('monthly');

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
    // Update the value based on the selected currency
    switch (event.target.value) {
      case 'pounds':
        setValue('£24.99');
        break;
      case 'euros':
        setValue('€28.37');
        break;
      case 'usd':
        setValue('$30.45');
        break;
      default:
        setValue('');
        break;
    }
  };

  const handleMultiplierChange = (event) => {
    setMultiplier(parseInt(event.target.value));
  };

  const handlePaymentOptionChange = (event) => {
    setPaymentOption(event.target.value);
  };

  const monthlyValue = (parseFloat(value.slice(1)) * multiplier).toFixed(2);
  const annuallyValue = (monthlyValue * 12).toFixed(2);
  const renderPaymentOptionText = () => {
    if (paymentOption === 'monthly') {
      return 'month';
    } else if (paymentOption === 'yearly') {
      return 'year';
    } else {
      return '';
    }
  };
  const renderValue = () => {
    if (paymentOption === 'monthly') {
      return `${currency === 'euros' ? '€' : currency === 'usd' ? '$' : '£'}${monthlyValue}`;
    } else if (paymentOption === 'yearly') {
      return `${currency === 'euros' ? '€' : currency === 'usd' ? '$' : '£'}${annuallyValue}`;
    } else {
      return '';
    }
  };

  return (
    <div className='container py-5'>
      <div className='row'>
        <div>
          <div className="containers container">
            <div >
              <form className='d-flex flex-row py-3 '>
                <label>
                  <input type="radio"
                    name="currency"
                    value="pounds"
                    checked={currency === 'pounds'}
                    onChange={handleCurrencyChange} />
                  <span className='text-light'>Pounds</span>
                </label>
                <label>
                  <input type="radio"
                    name="currency"
                    value="euros"
                    checked={currency === 'euros'}
                    onChange={handleCurrencyChange} />
                  <span className='text-light'>Euros</span>
                </label>
                <label>
                  <input type="radio"
                    name="currency"
                    value="usd"
                    checked={currency === 'usd'}
                    onChange={handleCurrencyChange} />
                  <span className='text-light'>US Dollars</span>
                </label>
              </form>
            </div>
          </div>
        </div>
        <div className='col-md-4'>
          <Card>
            <Card.Body className='text-center'>
              <Card.Title>Pro Free Trial</Card.Title>
              <Card.Text className='text-decoration-line-through fw-bold py-3'>Value: {value}</Card.Text>
              <div className="containers2 d-flex flex-row justify-content-center">
                <div className="tabs ">
                  <input type="radio"
                    id="radio-1"
                    name="paymentOption"
                    value="monthly"
                    checked={paymentOption === 'monthly'}
                    onChange={handlePaymentOptionChange} />
                  <label className="tab" for="radio-1">Monthly</label>
                  <span className="glider"></span>
                </div>
              </div>
              <p className='pb-2'>/user/month</p>
              <Button >Start-7 Days Free Trail</Button>
              <hr />
              <div className='text-start pt-2 pb-4 heightM'>
                {cardTextData1.map((item, index) => (
                  <Card.Text key={index}><item.icons className='iconColor' /> {item.tabLabel}</Card.Text>
                ))}
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className='col-md-4'>
          <Card>
            <Card.Body className='text-center'>
              <Card.Title>Pro</Card.Title>
              <Card.Text className='fw-bold pt-1'>
                <div className=' d-flex flex-row '>
                  Value: {renderValue()}
                  <select className="form-select mt-3 " value={multiplier} onChange={handleMultiplierChange}>
                    <option value="1">1 user</option>
                    <option value="2">2 user</option>
                    <option value="3">3 user</option>
                  </select>
                </div>
              </Card.Text>
              <div className="containers2 d-flex flex-row justify-content-center">
                <div className="tabs ">
                  <input type="radio"
                    id="radio-1"
                    name="paymentOption"
                    value="monthly"
                    checked={paymentOption === 'monthly'}
                    onChange={handlePaymentOptionChange} />
                  <label className="tab pe-1" for="radio-1">Monthly</label>
                  <input
                    id="radio-2"
                    type="radio"
                    name="paymentOption"
                    value="yearly"
                    checked={paymentOption === 'yearly'}
                    onChange={handlePaymentOptionChange}
                  />
                  <label className="tab" for="radio-2">Annully</label>
                  <span className="glider"></span>
                </div>
              </div>
              <p className='pb-1'>/user/{renderPaymentOptionText()}</p>
              <Button>Get Started Now</Button>
              <hr />
              <div className='text-start pt-2 pb-4 heightM'>
                <Card.Text ><CheckIcon className='iconColor' />
                  All Benefits of Free Trial Access</Card.Text>
                <Card.Text ><AddIcon className='iconColor' />
                  Team Management</Card.Text>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className='col-md-4'>
          <Card>
            <Card.Body className='text-center'>
              <Card.Title >Enterprise</Card.Title>
              <Card.Text className='fw-bold py-4'>For Larger Organisations </Card.Text>
              <div className='getInTouch'>
                <Button>Get In Touch Now</Button>
              </div>
              <hr />
              <div className='text-start pt-2 pb-4 heightM'>
                {cardTextData3.map((item, index) => (
                  <Card.Text key={index}><item.icons className='iconColor' /> {item.tabLabel}</Card.Text>
                ))}
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Cards