import { notFound } from "next/navigation"

async function getTickets() {
    const res = await fetch('http://localhost:4000/tickets', {
        next: {
            revalidate: 0 // use 0 to opt out of using cache
        }
    })
    return res.json()
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

export { getTickets, getTicket }