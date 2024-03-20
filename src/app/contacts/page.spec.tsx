import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react';
import Contacts from './page';

describe('contacts', () => {
    it('renders the page', () => {
        render(<Contacts />)
        expect(screen.getByText('Contacts')).toBeDefined()
    })
})
