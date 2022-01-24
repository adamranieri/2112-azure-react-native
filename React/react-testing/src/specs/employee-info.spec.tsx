
import {render,screen} from '@testing-library/react'
import EmployeeInfo from '../component/employee-info'


test("Should display name and department", ()=>{
    render(<EmployeeInfo fname='Shelby' department='Associate Mentor'/>)
    const nameHeading = screen.getByRole("heading", {level:3});
    const departmentHeading = screen.getByRole("heading", {level:6});
    expect(nameHeading).toHaveTextContent("Shelby")
    expect(departmentHeading).toHaveTextContent("Associate Mentor")
})

// tests ideally should be as atomic as possible
test("Should display name", ()=>{
    render(<EmployeeInfo fname='Shelby' department='Associate Mentor'/>)
    const nameHeading = screen.getByRole("heading", {level:3});
    expect(nameHeading).toHaveTextContent("Shelby")
})

test("Should display department", ()=>{
    render(<EmployeeInfo fname='Shelby' department='Associate Mentor'/>)
    const departmentHeading = screen.getByRole("heading", {level:6});
    expect(departmentHeading).toHaveTextContent("Associate Mentor")
})