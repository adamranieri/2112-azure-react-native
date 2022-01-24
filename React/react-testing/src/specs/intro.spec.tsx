
import {render,screen} from '@testing-library/react'
import Intro from '../component/intro'


test("Should have a heading with app in it", async ()=>{
    render(<Intro/>);// on a fake screen render the JSX 
    // it shows you the actual html output on the DOM
    const headingElement = screen.getByRole("heading", {level:1});
    expect(headingElement).toHaveTextContent("App")

})