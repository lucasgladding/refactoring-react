'use client'

import Contact from '@/components/contact'
import useContacts from '@/hooks/useContacts'

export default function Contacts() {
    const { contacts } = useContacts()
    return (
        <div className="p-4">
            <header className="mb-4 font-bold">Contacts</header>
            <main>
                <section>
                    {contacts.map((contact, i) => (
                        <div key={i} className="border-b py-2">
                            <Contact contact={contact} />
                        </div>
                    ))}
                </section>
            </main>
        </div>
    )
}
