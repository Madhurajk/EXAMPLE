import { render, screen } from '@testing-library/react'
import SignIn from '../SignIn'

describe("testing Login Components" ,()=>{
    test("test redering of Login Form correctly", ()=>{

        // const SignInComponent =
         render(<SignIn />)
        const emailField = screen.getByText(/Email :/)
        const passwordFieled = screen.getByText(/Password :/)
        expect(emailField);
    })
})