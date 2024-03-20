import { afterEach, describe, expect, it } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import Contacts from '@/app/contacts/page'

describe('contacts', () => {
    afterEach(() => {
        cleanup()
    })

    it('renders the header', () => {
        render(<Contacts />)
        expect(screen.getByText('Contacts')).toBeDefined()
    })

    it('renders the contacts', () => {
        render(<Contacts />)
        expect(screen.getByText('John Smith')).toBeDefined()
        expect(screen.getByText('Jane Smith')).toBeDefined()
    })
})
