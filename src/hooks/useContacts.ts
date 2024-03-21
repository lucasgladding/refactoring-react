import TContact from '@/types/contact'

export default function useContacts() {
    const contacts: TContact[] = [
        { name: 'John Smith' },
        { name: 'Jane Smith' },
    ]
    return { contacts }
}
