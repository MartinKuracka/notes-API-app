import React from 'react';
import AddNote from './addnote';
import { render, fireEvent } from '@testing-library/react';

// check element renders
it('check input field render', () => {
    const { queryByTitle } = render(<AddNote />);
    const input = queryByTitle('modalInput');
    expect(input).toBeTruthy();
});

it('check submit button render', () => {
    const { queryByTitle } = render(<AddNote />);
    const btn = queryByTitle('submitBtn');
    expect(btn).toBeTruthy();
});

// check input 
describe('change input value', () => {
    it('onChange', () => {
        const { queryByTitle } = render(<AddNote />);
        const input = queryByTitle('modalInput');
        fireEvent.change(input, {target: {value: 'testValue'}});
        expect(input.value).toBe('testValue')
    });
});

// describe(, () => {
//     it('checks input value', () => {
//         const { queryByTitle } = render(<AddNote />);
//         const modal = queryByTitle('modal');
//         fireEvent.submit(modal);
//         expect(modal.target.value === '').toBe;
//     });
// });



