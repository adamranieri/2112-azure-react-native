import React from 'react';
import ReactDOM from 'react-dom';
import ContactForm from './components/contact-us-form';
import Counter from './components/counter';
import CurriculaList from './components/curricula-list';
import EmployeeDetails from './components/employee-details';
import Greeter from './components/greeter';
import Intro from './components/intro';
import LocationInfo from './components/location-info';
import OfficeHoursList from './components/office-hours-list';
import SignupList from './components/signup-list';

ReactDOM.render(
  <React.StrictMode>
    {/* <Intro/>
    <OfficeHoursList/> */}
    {/* <EmployeeDetails fname="Sierra" lname="Nicols" title="Senior Trainer" batches={9}/> */}
    {/* <ContactForm/> */}
    <CurriculaList/>
    <Counter/>
    <Greeter/>
    <SignupList/>



  </React.StrictMode>,
  document.getElementById('root')
);
