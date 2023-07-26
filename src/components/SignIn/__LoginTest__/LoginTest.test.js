import { render, screen } from '@testing-library/react'
import SignIn from '../SignIn'
 describe("testing Login Components" ,()=>{
    test("test redering of Login Form correctly", ()=>{
         render(<SignIn />)
        const emailField = screen.getByText(/Email :/)
        expect(emailField);
    }),
    test("test redering of Login Form correctly", ()=>{
         render(<SignIn />)
        const passwordFieled = screen.getByText(/Password :/)
        expect(passwordFieled);
    }),
    test("test redering of Email id is correctly", ()=>{
       const SignupPage = render(<SignIn />)
      const buttons  =  SignupPage.findAllByRole("button")
      expect(buttons)
   }),
test("valiadate email id should be correctly",()=>{
    render(<SignIn />)
    const validEmailInput = "Madhu@gmail.com";
    except(validateEmail(validEmailInput)).toBe(false)
}),
test("Email id should run correctly", ()=>{
render(<SignIn />)
const msg = screen.getByRole(/Don't have an account? Sign Up/);
// userEvent.type(email, "madhu@gmail.com")
except(msg)
})

})