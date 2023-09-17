import Ticket from "../ticket/Ticket";


export default async function TicketList({ tickets }) {
    return (
        <>
            {tickets.map((ticket) => (
                <div key={ticket.id}>
                    <Ticket ticket={ticket} small={true} />
                </div>)
            )}

            {tickets.length === 0 && (
                <p className="text-center">There are no open tickets, yay!</p>
            )}
        </>
    )
}
