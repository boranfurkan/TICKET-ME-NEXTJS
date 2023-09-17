import { notFound } from "next/navigation"
import Ticket from "@/app/components/ticket/Ticket"

export const dynamicParams = true // default val = true

export async function generateStaticParams() {
    const res = await fetch('http://localhost:4000/tickets')

    const tickets = await res.json()

    return tickets.map((ticket) => ({
        id: ticket.id
    }))
}

async function getTicket(id) {
    const res = await fetch(`http://localhost:4000/tickets/${id}`, {
        next: {
            revalidate: 60
        }
    })

    if (!res.ok) {
        notFound()
    }

    return res.json()
}


export default async function TicketDetails({ params }) {
    // const id = params.id
    const ticket = await getTicket(params.id)

    return (
        <main>
            <nav>
                <h2>Ticket Details</h2>
            </nav>
            <Ticket ticket={ticket} />
        </main>
    )
}