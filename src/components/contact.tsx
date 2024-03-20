import TContact from '@/types/contact'

type Props = {
    contact: TContact
}

export default function Contact(props: Props) {
    const { contact } = props
    return (
        <article>
            <div>{contact.name}</div>
            <div>{contact.address}</div>
            <div>{contact.email}</div>
            <div>{contact.phone}</div>
        </article>
    )
}
