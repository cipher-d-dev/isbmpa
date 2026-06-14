const { Client, Storage, Query } = require('node-appwrite');

const endpoint = "https://nyc.cloud.appwrite.io/v1";
const projectId = "6a2d78b100393249f926";
const bucketId = "6a2d79e20029b2d599e9";
const apiKey = "standard_d4edafc80273281702cee29b4c30ce8f17b367dd27f25fafef82b5532666c9229c798b4bf6c0f5b3d444efc610b0aad4adf3d10d92c0cd4f85479a12c034ee879043f3bd584fc87ca8fef225f066d818410451fd9eb8c821b856a01eabc45c5c913c59d95e11f4836facb2743e6bc95324807fd8bfcd7c8b0962c3f1ab1a12c6";

const client = new Client()
  .setEndpoint(endpoint)
  .setProject(projectId)
  .setKey(apiKey);

const storage = new Storage(client);

const runSDKTest = async () => {
  try {
    console.log("Fetching files using SDK with Query.limit(5)...");
    const response = await storage.listFiles(
      bucketId,
      [
        Query.limit(5),
        Query.offset(0)
      ]
    );
    console.log("[PASS] SDK Fetch Succeeded!");
    console.log("Total:", response.total);
    console.log("Files count:", response.files.length);
  } catch (err) {
    console.error("[FAIL] SDK Fetch Failed:", err);
  }
};

runSDKTest();
