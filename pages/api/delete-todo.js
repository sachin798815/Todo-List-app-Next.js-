import { MongoClient, ObjectId } from "mongodb";

async function handler(req, res) {
  if (req.method === "DELETE") {
    const { id } = req.body;

    try {
      const client = await MongoClient.connect(
        "mongodb+srv://test:test@cluster0.qnlqt.mongodb.net/TodoDB?retryWrites=true&w=majority&appName=Cluster0"
      );
      const db = client.db();
      const todosCollection = db.collection("TodoDBList");

      const result = await todosCollection.deleteOne({ _id: new ObjectId(id) });

      client.close();

      if (result.deletedCount === 0) {
        return res.status(404).json({ message: "Todo not found" });
      }

      res.status(200).json({ message: "Todo deleted successfully" });
    } catch (error) {
      console.error("Error deleting todo:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}

export default handler;
