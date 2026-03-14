//import React from 'react';
import { render, screen } from '@testing-library/react';
import { test, expect } from '@jest/globals';
import Users from './currencyConverter';

test('renders User List', () => {
    render(<Users />);
    //const linkElement = screen.getByText(/User List/i);
    //expect(linkElement).toBeInTheDocument();
});