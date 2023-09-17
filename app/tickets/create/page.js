import CreateForm from "@/app/components/create-ticket/Create-ticket"

export default async function CreateTicket() {
    return (
        <main>
            <h2 className="text-center">Open a New Ticket</h2>
            <CreateForm />
        </main>
    )
}