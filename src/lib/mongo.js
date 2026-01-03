import { MongoClient, ServerApiVersion } from "mongodb";

if (!process.env.URI_MONGO) {
    throw new Error('Invalid/Missing env variable: "URI_MONGO"');
}

const uri = process.env.URI_MONGO;

const options = {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
};

let clientPromise;


if (process.env.NODE_ENV === "development") {
    const globalWithMongo = global;

    if (!globalWithMongo._mongoClientPromise) {
        const client = new MongoClient(uri, options);
        globalWithMongo._mongoClientPromise = client.connect();
    }

    clientPromise = globalWithMongo._mongoClientPromise;
} else {
    
    const client = new MongoClient(uri, options);
    clientPromise = client.connect();
}

export default clientPromise;