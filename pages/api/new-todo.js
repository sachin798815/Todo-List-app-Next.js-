import { MongoClient } from "mongodb";

async function handler(req, response) {
  if (req.method === "POST") {
    const data = req.body;
    const {title,description,date,status} = data;
    
    try {
      const client = await MongoClient.connect(
        'mongodb+srv://test:test@cluster0.qnlqt.mongodb.net/TodoDB?retryWrites=true&w=majority&appName=Cluster0'
      );
      const db = client.db();
      const meetupsCollection = db.collection('TodoDBList');
      
      const result = await meetupsCollection.insertOne(data);
      
      client.close();
      response.setHeader('Content-Type', 'application/json');
      response.status(201).json({ message: "Todo added to DB" });
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