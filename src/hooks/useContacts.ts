import TContact from '@/types/contact';

export default function useContacts() {
    const contacts: TContact[] = [
        {
            name: 'John Smith',
            address: 'Waterloo, Ontario',
            email: 'john.smith@example.com',
            phone: '519-555-1234',
        },
        {
            name: 'Jane Smith',
            address: 'Waterloo, Ontario',
            email: 'jane.smith@example.com',
            phone: '519-555-5678',
        },
    ]

    return { contacts }
}
