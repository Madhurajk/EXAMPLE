import { render, screen } from '@testing-library/react'
import AddUserForms from '../AddUserForms'

describe("testing add user form components" ,()=>{

    test("test redering of user form correctly", ()=>{
        render(<AddUserForms />)
       const name = screen.getByText(/Name/)
       expect(name);
   }),
   test("test redering of user form correctly", ()=>{
    render(<AddUserForms />)
   const email = screen.getByText(/Email/)
   expect(email);
})


})
