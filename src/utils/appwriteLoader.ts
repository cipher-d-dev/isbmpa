export const appwriteLoader = () => {
  const endpoint = import.meta.env.VITE_APPWRITE_ENDPOINT;
  const projectId = import.meta.env.VITE_APPWRITE_PROJECT_ID;
  const bucketId = import.meta.env.VITE_APPWRITE_GALLERY_BUCKET_ID;

  if (!endpoint || !projectId || !bucketId) {
    console.error("Appwrite environment variables are missing.");
    return [];
  }
};
