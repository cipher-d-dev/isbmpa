// src/utils/galleryLoader.ts
import { Client, Storage, Query } from "appwrite";

export interface ImageItem {
  id: string;
  name: string;
  url: string;
  type: "image";
  number: number;
  src: string;
  caption?: string;
}

// captions mapped by number
const captions: Record<number, string> = {
  17: "COUNTRY DIRECTOR DR. ANI FREEMAN flanked by DR. (MRS) JOSEPHINE EGBUTA, BARR. (DR.) OPEYEMI ALADETOLA, AND OTHERS",
  44: "VICE ADMIRAL DELE JOSEPH EZEOBA, RTD (Former Chief of Naval Staff)",
  45: "HIGH CHIEF EMMANUEL ODE OCHI, Chairman Middle Belt Traditional Council",
  89: "DR. IGHORODE OGHENERUKEVWE FRANK, FOUNDER RUKKY MULTINATIONAL ENT. ACCRA GHANA (PATRON)",
  90: "DR. EMMANUEL OJIBO, MD/CEO ACHIEVING GREATNESS LTD, LAGOS (PATRON)",
  91: "COMRADE (DR) BOBBOI BALA KAIGAMA, ICON OF LABOUR MOVEMENT IN NIGERIA (PATRON)",
  92: "GENERAL CHRISTOPHER GWABIN MUSA, CHIEF OF DEFENCE STAFF (PATRON)",
  93: "AMB.(DR) ADEBOYE OLUWASEUN AMOS, MD/CEO LINCOLN CITY PROPERTY (PATRON)",
  94: "DR. GBADEWOLE AMOS KAYODE, VP REDAN Abuja FCT — PATRON",
  95: "ALHAJI (DR) HUSSAINI ADAMU DIKKO, Chairman Board of Directors of Providus Bank Plc - PATRON",
  96: "DR. GBADEWOLE AMOS KAYODE, VP REDAN Abuja FCT — PATRON",
  97: "DR. DANIEL HASSAN BWALA, SPECIAL ADVISER TO PRESIDENT TINUBU ON MEDIA AND PUBLIC COMMUNICATIONS  - PATRON",
  101: "This is the MD/CEO of Rivers State Microfinance Agency (RIMA), Dr. Jonathan Tobin, we honoured him on Thursday 30th October there in Port Harcourt",
  142: "DR. (MRS) MODUPE OYEKUNLE, FOUNDER/CRO MASTERPIECE RESOURCES DEVELOPMENT CENTRE (MRDC) LAGOS BEEN DECORATED AS PATRON",
  143: "DR. (MRS) MODUPE OYEKUNLE, FOUNDER/CRO MASTERPIECE RESOURCES DEVELOPMENT CENTRE (MRDC) LAGOS BEEN DECORATED AS PATRON",
  144: "DR. (MRS) MODUPE OYEKUNLE, FOUNDER/CRO MASTERPIECE RESOURCES DEVELOPMENT CENTRE (MRDC) LAGOS BEEN DECORATED AS PATRON",
  145: "DR. (MRS) MODUPE OYEKUNLE, FOUNDER/CRO MASTERPIECE RESOURCES DEVELOPMENT CENTRE (MRDC) LAGOS BEEN DECORATED AS PATRON",
  146: "DR. (MRS) MODUPE OYEKUNLE, FOUNDER/CRO MASTERPIECE RESOURCES DEVELOPMENT CENTRE (MRDC) LAGOS BEEN DECORATED AS PATRON",
  147: "DR. (MRS) MODUPE OYEKUNLE, FOUNDER/CRO MASTERPIECE RESOURCES DEVELOPMENT CENTRE (MRDC) LAGOS BEEN DECORATED AS PATRON",
  148: "THE COMMANDANT NATIONAL INSTITUTE FOR SECURITY STUDIES MR. JOSEPH ODAMA, INDUCTED INTO THE 2026 HALL OF FAME AS A DISTINGUISHED FELLOW. FLANKED BY PROF EZARAFE, COUNTRY DIRECTOR DR ANI FREEMAN AND LEGAL REP BARR JOHN ETUK",
  149: "PRINCE DR ADEDAPO OLUWASEYI ADELEGAN, CHAIRMAN CELTRON GROUP & PR AFRICA; 14TH PRESIDENT/CHAIRMAN OF COUNCIL, NIGERIA BRITISH CHAMBER OF COMMERCE, BEEN DECORATED AS PATRON AND MEMBER GOVERNING COUNCIL. FLANK BY EDs PROF EZARAFE, BARR OPEYEMI ALADETOLA AND COUNTRY DIRECTOR DR ANI FREEMAN",
};

/**
 * Fetches gallery images from the public Appwrite storage bucket,
 * parses their filenames to extract the sequential numbering, filters
 * non-matching files, and sorts them ascending.
 */
export const loadGalleryImages = async (): Promise<ImageItem[]> => {
  const endpoint = import.meta.env.VITE_APPWRITE_ENDPOINT;
  const projectId = import.meta.env.VITE_APPWRITE_PROJECT_ID;
  const bucketId = import.meta.env.VITE_APPWRITE_GALLERY_BUCKET_ID;

  if (!endpoint || !projectId || !bucketId) {
    console.error("Appwrite environment variables are missing.");
    return [];
  }

  try {
    const client = new Client().setEndpoint(endpoint).setProject(projectId);
    const storage = new Storage(client);
    const limit = 100;
    // We execute parallel fetches for the first two pages (up to 200 files)
    // to optimize response time, since we know there are 155 files.

    const [res1, res2] = await Promise.all([
      storage.listFiles(bucketId, [Query.limit(limit), Query.offset(0)]),
      storage.listFiles(bucketId, [Query.limit(limit), Query.offset(limit)]),
    ]);
    
    let files = [...res1.files, ...res2.files];

    const images: ImageItem[] = [];

    files.forEach((file: any) => {
      // 3. Process the returned files array using a robust Regular Expression to extract the exact integer inside the parentheses of the name property.
      // Matches "pic", optional whitespace, opening parenthesis, one or more digits (captured), closing parenthesis, followed by common image extensions.
      const match = file.name.match(
        /^pic\s*\((\d+)\)\.(jpg|jpeg|png|webp|gif)$/i,
      );

      // 4. Filter out any files that do not match the "pic (X)" naming convention to prevent array bugs.
      if (!match) return;

      const num = parseInt(match[1], 10);

      // 6. Transform each item into a clean object containing:
      // - id: The Appwrite file ID ($id)
      // - name: The original file name
      // - url: The direct public view asset string: https://[YOUR_ENDPOINT]/v1/storage/buckets/[BUCKET_ID]/files/[FILE_ID]/view?project=[PROJECT_ID]
      // (Note that env endpoint already includes "/v1")
      const viewUrl = `${endpoint}/storage/buckets/${bucketId}/files/${file.$id}/view?project=${projectId}`;

      images.push({
        id: file.$id,
        name: file.name,
        url: viewUrl,
        src: viewUrl, // mapped to src for MediaBlock component compatibility
        type: "image",
        number: num,
        caption: captions[num], // associate caption using the extracted sequential number
      });
    });

    // 5. Sort the final array ascending based on that extracted integer so that "pic (2)" reliably comes before "pic (10)".
    return images.sort((a, b) => a.number - b.number);
  } catch (error) {
    console.error("Error fetching gallery images from Appwrite:", error);
    return [];
  }
};
