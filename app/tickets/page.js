import TicketList from "../components/ticket-list/Ticket-list"
import Loading from '../loading'
import { Suspense } from "react"
import Link from "next/link"

async function getTickets() {
    const res = await fetch('http://localhost:4000/tickets', {
        next: {
            revalidate: 0 // use 0 to opt out of using cache
        }
    })
    return res.json()
}


export default async function Tickets() {
    const tickets = await getTickets()
    return (
        <main>
            <nav>
                <div>
                    <h2>Tickets</h2>
                    <p><small>Currently open tickets.</small></p>
                </div>
                <Link href="/tickets/create" className="ml-auto">
                    <button className="btn-primary">New Ticket</button>
                </Link>
            </nav>
            <Suspense fallback={<Loading />}>
                <TicketList tickets={tickets} />
            </Suspense>
        </main>
    )
}