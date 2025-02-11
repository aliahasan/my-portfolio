import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
interface IMessage {
  _id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const AllMessages = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/messages/all-messages`,
    {
      cache: "no-store",
    }
  );

  const data = await res.json();
  const messages = data?.data || [];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Inbox</h1>

      {messages.length > 0 ? (
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Message</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {messages.map((message: IMessage) => (
                <TableRow key={message._id}>
                  <TableCell className="font-medium">{message.name}</TableCell>
                  <TableCell>{message.email}</TableCell>
                  <TableCell>{message.message}</TableCell>
                  <TableCell>
                    {new Date(message.createdAt).toLocaleDateString()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : (
        <p className="text-gray-500">No messages found</p>
      )}
    </div>
  );
};

export default AllMessages;
