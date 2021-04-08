import { render, fireEvent } from '@testing-library/react';
import Navbar from '../navbar/navbar';
import i18n from '../../i18n';

it('check navbar logo render', () => {
    const { queryByTitle } = render(<Navbar />);
    const Img = queryByTitle('logoImg');
    expect(Img).toBeTruthy();
});

it('check cz flag logo render', () => {
    const { queryByTitle } = render(<Navbar />);
    const Img = queryByTitle('flagCZ');
    expect(Img).toBeTruthy();
});

it('check en flag logo render', () => {
    const { queryByTitle } = render(<Navbar />);
    const Img = queryByTitle('flagEN');
    expect(Img).toBeTruthy();
});

it('check lang info text render', () => {
    const { queryByTitle } = render(<Navbar />);
    const Img = queryByTitle('langInfo');
    expect(Img).toBeTruthy();
});

describe('click on CZ language icon', () => {
    it('onClick', () => {
        const { queryByTitle } = render(<Navbar />);
        const Img = queryByTitle('flagCZ');
        fireEvent.click(Img);
        expect(i18n.language).toBe('cz')
    })
})

describe('click on EN language icon', () => {
    it('onClick', () => {
        const { queryByTitle } = render(<Navbar />);
        const Img = queryByTitle('flagEN');
        fireEvent.click(Img);
        expect(i18n.language).toBe('en')
    })
})