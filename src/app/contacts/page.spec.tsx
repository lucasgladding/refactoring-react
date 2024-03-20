import { afterEach, describe, expect, it } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react';
import Contacts from '@/app/contacts/page';

afterEach(() => {
    cleanup()
})

describe('contacts', () => {
    it('renders the page', () => {
        render(<Contacts />)
        expect(screen.getByText('Contacts')).toBeDefined()
    })

    it('renders some contacts', () => {
        render(<Contacts />)
        expect(screen.getByText('John Smith')).toBeDefined()
        expect(screen.getByText('Jane Smith')).toBeDefined()
    })
})
