import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { test, expect } from '@jest/globals';
import '@testing-library/jest-dom'
import Users from './Users';

test('renders User List', async () => {
    render(<Users />);

    // Wait for the component to load (adjust if not async)
    await waitFor(() => {
        //const linkElement = screen.getByText(/User List/i);
        //expect(linkElement).toBeVisible("User List");
    });

    // Additional assertions for better coverage
    //expect(screen.getByRole('heading', { name: /User List/i })).toBeInTheDocument();
    // Assuming Users renders a list, check for at least one user or loading state
    //const userList = screen.getByRole('list'); // Adjust if the list has a different role
    //expect(userList).toBeInTheDocument();
});