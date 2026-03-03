import { Client, Storage, Functions } from 'appwrite';

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your Appwrite Endpoint
    .setProject('67bc876e0037a505bdeb'); // Replace with your Project ID

const storage = new Storage(client);
const functions = new Functions(client);

// Note: Ensure you set up the correct Bucket ID and Project ID.
const APPWRITE_CONFIG = {
    projectId: '67bc876e0037a505bdeb', // Set your project ID here
    bucketId: '67c570b5003c4078174f' // Set your bucket ID for payment proofs here
};

export { client, storage, functions, APPWRITE_CONFIG };
