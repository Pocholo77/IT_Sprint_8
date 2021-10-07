import React from "react";
import {screen , render } from '@testing-library/react'
import SingleSpaceship from "./SingleSpaceship";
import '@testing-library/jest-dom'

test('test1Proba', ()=>{
    render(<SingleSpaceship />);
    const yep = screen.getByText(/model/i)
    expect(yep).toBeInTheDocument();
})