import './Addpage.css';
import Input from '../components/input/Input';
import Title from '../components/title/Title';
//import Button from '../components/button/Button';
import BasicTable from '../components/table/BasicTable';
import Button from '@mui/material/Button';
import { useState } from 'react'
import HtmlTable from '../components/htmlTable/HtmlTable';
import ClickCount from '../components/clickCount/ClickCount';


export default function Addpage() {
    const [showTable, setShowTable] = useState('')

    //const dataLength = 1;

    const handleOnChange = (e) => {
        setShowTable(e.target.value)
        console.log(e.target.value)
    }

    const handleShowTable = (e) => {
        // setShowTable(!showTable);
        // e.preventDefault()
        // console.log(showTable)
        console.log("Employee Name: ",document.getElementById("Employee Name").value,", ")
        console.log("Employee Title: ",document.getElementById("Employee Title").value,", ")
        console.log("Employee Hobbies: ",document.getElementById("Employee Hobbies").value,)

        // const inputFields = document.querySelectorAll(".fill")
        // // Create empty inputValues array
        // const inputValues = [] 
        // const fields = []
        // // Loop through input fields
        // for (let i = 0; i < inputFields.length; i++) {
        //     // Push values of each input field into an array
        //     inputValues.push(inputFields[i].value)
        //     fields.push(inputFields[i].field)
        // }
        
        // // Log array in the console
        // // console.log(inputValues)

        // for (let i = 0; i < inputFields.length; i++) {
        //     // Push values of each input field into an array
        //     console.log(fields[i],": ",inputValues[i],", ")
        // }
    }
    return (
        <div className='Addpage'>
            <Title heading="Team Details" />
            <Input id="Employee Name" type="text" field="Employee Name: " class="fill" />
            <Input id="Employee Title" type="text" field="Employee Title: " class="fill" />
            <Input type="file" field="Employee Pic: " class="fill1" />
            <Input id="Employee Hobbies" type="text" field="Employee Hobbies: " class="fill" />
            {/* <Button type="button" class="btn" value="Add"/> */}
            <Button
                variant="contained"
                color="secondary"
                size="small"
                onClick={handleShowTable}
            >
                Add
            </Button>
            <BasicTable/>
            {/* {show && <HtmlTable/>} */}

            {/* {showTable && <BasicTable />} */}
            {/* {show && <BasicTable/>} */}

            {/* <HtmlTable/> */}
            {/* {showTable && <HtmlTable/>} */}
            <ClickCount />
        </div>
    );
}

//export default Addpage;