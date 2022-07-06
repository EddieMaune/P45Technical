import './App.css';
import avatar from './assets/face.svg';
import React, { useEffect, useState } from 'react';
import Input from './components/Input';
import Date from './components/Date';
import Radio from './components/Radio';
import Space from './components/Space';
import Submit from './components/Submit';

function App() {

  const [sliderClass, setsliderClass] = useState('');
  const [arrowClass, setArrowClass] = useState(window.innerWidth <= 840 ? 'arrow-down': '');
  const [isVisible, setIsVisible] = useState(false);
  const [nameInputText, setNameInputText] = useState('');
  const [emailTInputext, setemailInputText] = useState('');
  const [mobileInputText, setMobileInputText] = useState('');
  const [customerIdInputText, setCustomerIdInputText] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const [selectedMembership, setSelectedMembership] = useState('');
  const [dateInputStamp, setDateInputStamp] = useState('');
  const [toggleHideForm, setToggleHideForm] = useState('');
  const [toggledMobile, setToggledMobile] = useState(false);
  const [toggledDesktop, setToggledDesktop] = useState(false)

  const genderRadios = [{
    label: 'Male',
    check: 'mars-dark',
    noCheck: 'mars-light'

  }, {
    label: 'Female',
    check: 'venus-dark',
    noCheck: 'venus-light'
  }];

  const memberShipRadios = [{
    label:'Classic',
    check: 'card-dark',
    noCheck: 'card-light'
  },
  {
    label: 'Silver',
    check: 'card-dark',
    noCheck: 'card-light'
  },
  {
    label: 'Gold',
    check: 'card-dark',
    noCheck: 'card-light'
  }
]

  const onArrowClick = () => {
    if (!isVisible) {
      setIsVisible(true);
      setsliderClass('slider-extend');
      
      if (window.innerWidth > 840) {
        setArrowClass('arrow-rotatation-toggle');
      } else {
        setArrowClass('arrow-up');
        setToggleHideForm('hide-form');
      }
      
    } else {
      setIsVisible(false);
      setsliderClass('slider-retract');

      if (window.innerWidth > 840) {
        setArrowClass('`')
      } else {
        setArrowClass('arrow-down');
        setToggleHideForm('');
      }
    }
  }

  const onInputChange = (text, setState) => {
    // Validation of text would go here.
    setState(text);
    console.log(text);
  }

  const onDateChange = (date) => {
    setDateInputStamp(date);
  }

  const onGenderSelect = (gender) => {
    setSelectedGender(gender);
  }

  const onMembershipSelect = (membership) => {
    setSelectedMembership(membership);
  }

  const clearForm = () => {
    setNameInputText('');
    setemailInputText('');
    setMobileInputText('');
    setSelectedGender('');
    setSelectedMembership('');
    setCustomerIdInputText('');
    setDateInputStamp('');
  }

  const echoForm = () => {
    console.log(JSON.stringify({
      name: nameInputText,
      birthdate: dateInputStamp,
      email: emailTInputext,
      mobile: mobileInputText,
      gender: selectedGender,
      customerId: customerIdInputText,
      membership: selectedMembership
    }));
  }

  useEffect(() => {

    setInterval(() => {
      if (window.innerWidth <= 840 && !toggledDesktop) {
        setArrowClass('arrow-down');
        setToggledDesktop(true);
        setToggledMobile(false);
      }

      if (window.innerWidth > 840 && !toggledMobile) {
        setArrowClass('');
        setToggledMobile(false);
        setToggledDesktop(true);
      } 
    }, 500);
  }, [toggledDesktop, toggledMobile]);


  return (
    <div className="App">
      <div className='app-container'>
        <div className='sidepanel'>
          <img src={avatar} alt="oops" className='avatar'/>
          <div className="sidepanel-title-text">
            Front-end challenge!
          </div>
          <dir className='panel-text'>
            This is a design that you will need to code up and impress us.
          </dir>
          <div className={`arrow-container ${arrowClass}`} onClick={onArrowClick}>
            <div className='arrow'/>
          </div>
        </div>
        <div className={`slider ${sliderClass}`}>
          <div className='slider-title-text'>
            My world today
          </div>
          <div className='slider-body-text'>
            <span>
              Pelientesque habitant morbi triisque senectus et netus malesuada 
              fames ac turpis egestas. Vestibulum tortor quam, faugiat vitae, ultricies 
              eget, tempor sit amet, ante.
            </span>
            <button className='slider-link'> 
              View all days
            </button>
            <span>
              eu libero sit amet quam 
              egestas semper. Aenean uitricies mi vitae est. Mauris placerat eleifend
              leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum 
              erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. 
              Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum 
              orci, saggitis tempus lacus enim ac dui. Donac non enim in turpis
              pulvinar facilisis. Ut felis. Present dapibus, neque id cursus faucibus,
              tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam
              erat
            </span>
          </div>
        </div>
        <div className={`input-form ${toggleHideForm}`}>
          
          <Input label='Name' value={nameInputText} placeholder='Jane Doe' onChange={onInputChange} stateCallBack={setNameInputText}/>
          
          <Space height='3vh'/>
          
          <Radio  label='Gender' radios={genderRadios} onSelect={onGenderSelect} checkedradio={selectedGender}/>
          
          <Space height='3vh'/>
          
          <Date  label='Date of Birth' value={dateInputStamp} updateDate={onDateChange}/>
          
          <Space height='3vh'/>
          
          <Input  label='Email' value={emailTInputext} placeholder='johndoe@mail.com' onChange={onInputChange}  stateCallBack={setemailInputText}/>
          
          <Space height='3vh'/>
          
          <Input  label='Mobile' value={mobileInputText} placeholder='+91 98765 43210' onChange={onInputChange}  stateCallBack={setMobileInputText}/>
          
          <Space height='3vh'/>
          
          <Input  label='Customer ID' value={customerIdInputText} placeholder='5768002-ERD0348 45' onChange={onInputChange} stateCallBack={setCustomerIdInputText}/>
          
          <Space height='5vh'/>
          
          <Radio  label='Membership' radios={memberShipRadios} onSelect={onMembershipSelect} checkedradio={selectedMembership}/>
          
          <Space height='3vh'/>
          
          <Submit clearForm={clearForm} echoForm={echoForm}/>       
        </div>
      </div>
    </div>
  );
}

export default App;
