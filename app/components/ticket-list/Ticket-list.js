import Ticket from "../ticket/Ticket";
import { getTickets } from "@/app/lib/helper";


export default async function TicketList() {
    const tickets = await getTickets();
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