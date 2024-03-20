import TContact from '@/types/contact'
import Contact from '@/components/contact'
import { useContacts } from '@/hooks/useContacts'

export default function Contacts() {
    const { contacts } = useContacts()
    return (
        <>
            <header>Contacts</header>
            <main>
                <section>
                    {contacts.map((contact) => (
                        <Contact contact={contact} />
                    ))}
                </section>
            </main>
        </>
    )
}
