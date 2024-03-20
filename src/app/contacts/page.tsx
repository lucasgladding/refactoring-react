import Contact from '@/components/contact';
import useContacts from '@/hooks/useContacts';

export default function Contacts() {
    const { contacts } = useContacts()
    return (
        <>
            <header>Contacts</header>
            <main>
                {contacts.map((contact, i) => (
                    <Contact key={i} contact={contact} />
                ))}
            </main>
        </>
    )
}
