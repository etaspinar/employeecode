import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";

function EmployeeAdd() {
    const {employees, setList} = useContext(AppContext);

        const [values, setValues] = useState({
            firstName:'',
            lastName: ''
        })

        const handleChange = (e) => {
            setValues({
            ...values,
            [e.target.name] : e.target.value
            })

        }

    const handleSubmit = (e) => {
        e.preventDefault();

        setList([
            ...employees,
            {
                id: employees.length+1,
                firstName: e.target.firstName.value,
                lastName: e.target.lastName.value
            },
        ]);

    };
    return (<>
        <h3 >EmployeeAdd</h3>
        <form onSubmit={handleSubmit}>
            <p>

          <input
            id="firstName" 
            name="firstName" 
            placeholder="First Name"
            type="text" 
            onChange = {handleChange}
            value= {values?.firstName} 
            />

            </p>
             

            <p>

            <input 
            id="lastName" 
            name="lastName" 
            placeholder="Last Name"
            type="text" 
            onChange = {handleChange}  
            value={values?.lastName} 
            />
            </p>

            <button type="Submit">Save</button>
        </form>
    </>
    );
}

export default EmployeeAdd;