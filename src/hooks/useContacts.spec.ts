import { afterEach, describe, expect, it } from 'vitest'
import { cleanup, renderHook, screen } from '@testing-library/react'
import Contacts from '@/app/contacts/page'
import { useContacts } from '@/hooks/useContacts'

describe('contacts', () => {
    afterEach(() => {
        cleanup()
    })

    it('returns contacts', () => {
        const { result } = renderHook(() => useContacts())
        expect(result.current.contacts).toHaveLength(2)
    })
})
