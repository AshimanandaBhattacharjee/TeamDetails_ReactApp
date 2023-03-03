import React, { useState, useEffect } from 'react';
import BasicTable from '../table/BasicTable';

const EmployeeForm = () => {

    const [formValues, setFormValues] = useState([{}]);
    const[update, setUpdate] = useState("")

    // const form = document.getElementById('contact-form');

    // form.addEventListener('submit', callbackFunction);

    // function callbackFunction(event) {
    //     event.preventDefault();
    //     const myFormData = new FormData(event.target);
    //     console.log(myFormData);
    // }

    const handleChange = (e) => {
        // console.log(formValues);
        setFormValues({ ...formValues, [e.target.id]: e.target.value })
    }

//const employeeData = [];

    const handleSubmit = (event) => {
        event.preventDefault();
        //console.log(formValues);
        //employeeData.concat(formValues);
        //setFormValues(formValues => formValues.concat(update))
        //setFormValues(formValues => [...formValues, update])
        console.log(formValues);
        return (<BasicTable />)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='form-control'>
                <label>
                    Employee Name:
                    <input type="text" id="empName" name="employeeName" value={formValues.empName || ''} onChange={handleChange} />
                </label>
            </div>
            <div className='form-control'>
                <label>
                    Employee Title:
                    <input type="text" id="empTitle" name="employeeTitle" value={formValues.empTitle || ''} onChange={handleChange} />
                </label>
            </div>
            <div className='form-control'>
                <label>
                    Employee Pic:
                    <input type="file" id="empPic" name="employeePic" />
                </label>
            </div>
            <div className='form-control'>
                <label>
                    Employee Hobbies:
                    <input type="text" id="empHobbies" name="employeeHobbies" value={formValues.empHobbies || ''} onChange={handleChange} />
                </label>
            </div>
            <button type="submit" value="Submit" />
        </form>
    );
};



export default EmployeeForm;