type Props = {
    contact: TContact
}

export default function Contact(props: Props) {
    const { contact } = props
    return <article>{contact.name}</article>
}
