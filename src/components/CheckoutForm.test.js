import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render (<CheckoutForm />)
    // const header = screen.getByLabelText('user-form')
    // expect(header).toBeTruthy()
});

test("form shows success message on submit with form details", () => {
render(<CheckoutForm />);

	const firstNameInput = screen.getByLabelText(/First Name/i)
	const lastNameInput = screen.getByLabelText(/Last Name/i)
	const addressInput = screen.getByLabelText(/Address/i)
	const cityInput = screen.getByLabelText(/City/i)
	const stateInput = screen.getByLabelText(/State/i)
	const zipCodeInput = screen.getByLabelText(/Zip/i)
    const button = screen.getByRole('button')
    const confirm = screen.getByTestId('success message')

    userEvent.type(firstNameInput, "Pauline")
    userEvent.type(lastNameInput, "Stokes")
    userEvent.type(addressInput, "33B Gladstone road")
    userEvent.type(cityInput, 'Whangarei')
    userEvent.type(stateInput, 'Northland')
    userEvent.type(zipCodeInput, '63368')
    userEvent.click(button)
    
    expect(confirm).toBeInTheDocument()
});
