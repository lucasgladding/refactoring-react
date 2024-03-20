import Contact from '@/components/contact';
import TContact from '@/types/contact'

export default function Contacts() {
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

    return (
        <>
            <header>Contacts</header>
            <main>
                {contacts.map(contact => (
                    <Contact key={contact.name} contact={contact} />
                ))}
            </main>
        </>
    )
}
