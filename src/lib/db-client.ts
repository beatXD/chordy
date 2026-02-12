import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

const globalWithMongo = global as typeof globalThis & {
  _mongoClientPromise?: Promise<MongoClient>;
};

let clientPromise: Promise<MongoClient>;

if (!uri) {
  // Build time: provide a pending promise (never resolves, but won't throw)
  clientPromise = new Promise(() => {});
} else if (process.env.NODE_ENV === "development") {
  if (!globalWithMongo._mongoClientPromise) {
    const client = new MongoClient(uri);
    globalWithMongo._mongoClientPromise = client.connect();
  }
  clientPromise = globalWithMongo._mongoClientPromise;
} else {
  const client = new MongoClient(uri);
  clientPromise = client.connect();
}

export default clientPromise;
