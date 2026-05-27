const { MongoClient, ServerApiVersion } = require("mongodb");
const mongo_uri = process.env.MONGO_URI;
const dbName = process.env.DB_NAME;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(mongo_uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export const dbConnect = async (cname) => {
  // Ensure the client is connected to the server
  await client.connect();

  // Select your database, then select the collection
  const db = client.db(dbName);
  return db.collection(cname);
};
