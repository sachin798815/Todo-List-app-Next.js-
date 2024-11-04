import { MongoClient } from "mongodb";

async function handler(req, response) {
  if (req.method === "POST") {
    const data = req.body;
    const { } = data;
    
    try {
      const client = await MongoClient.connect(
        'mongodb+srv://test:test@cluster0.qnlqt.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0'
      );
      const db = client.db();
      const meetupsCollection = db.collection(' ');
      
      // Insert data into the collection
      const result = await meetupsCollection.insertOne(data);
      
      client.close();
      response.setHeader('Content-Type', 'application/json'); // Set response type
      response.status(201).json({ message: "" });
    } catch (error) {
      console.error("Database insertion error:", error);
      response.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    response.setHeader('Content-Type', 'application/json');
    response.status(405).json({ message: "Method Not Allowed" });
  }
}

export default handler;