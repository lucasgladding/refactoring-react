import TContact from '@/types/contact'
import { useState } from 'react'

export function useContacts() {
    const initialContacts: TContact[] = [
        { name: 'John Smith' },
        { name: 'Jane Smith' },
    ]
    const [contacts] = useState(initialContacts)
    return { contacts }
}
