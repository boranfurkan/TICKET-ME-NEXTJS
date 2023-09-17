import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../../public/ticket-me-logo.png'

export default function Navbar() {
    return (
        <nav>
            <Image
                src={Logo}
                alt='Ticket Me Logo'
                width={130}
                height={40}
                placeholder='blur'
                quality={100}
            />
            <Link href="/"><h1>Ticket Me Helpdesk</h1></Link>
            <Link href="/">Dashboard</Link>
            <Link href="/tickets">Tickets</Link>
        </nav>
    )
}