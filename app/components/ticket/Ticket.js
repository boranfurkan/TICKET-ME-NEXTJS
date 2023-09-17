import Link from 'next/link'

export default function Ticket({ ticket, small }) {
    return (
        <div key={ticket.id} className="card my-5">
            <Link href={`/tickets/${ticket.id}`}>
                <h3>{ticket.title}</h3>
                {!small && <small>Created by {ticket.user_email}</small>}
                {small ? <p>{ticket.body.slice(0, 200)}...</p> : <p>{ticket.body}</p>}
                <div className={`pill ${ticket.priority}`}>
                    {ticket.priority} priority
                </div>
            </Link>
        </div>
    )
}
