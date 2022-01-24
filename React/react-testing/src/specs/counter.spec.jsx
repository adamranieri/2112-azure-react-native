
import {render, screen} from '@testing-library/react'
import Counter from '../component/counter'

test("Adding works", ()=>{
    render(<Counter/>);
    const addButton = screen.getByRole("button", {name:"Add"});
    addButton.click();
    addButton.click();
    addButton.click();
    const numHeading = screen.getByRole("heading", {level:4});
    expect(numHeading).toHaveTextContent("3");
});