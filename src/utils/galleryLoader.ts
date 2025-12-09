// src/utils/galleryLoader.ts

export interface ImageItem {
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
  // potential awardee
};

// Auto-import both .jpg and .jpeg
const imageModules = import.meta.glob(
  "/src/assets/gallery/pic (*).{jpg,jpeg}",
  {
    eager: true,
    import: "default",
  }
);

export const loadGalleryImages = (): ImageItem[] => {
  const images: ImageItem[] = [];

  Object.entries(imageModules).forEach(([path, src]) => {
    // Match both: pic (12).jpeg OR pic (12).jpg
    const match = path.match(/pic\s*\((\d+)\)\.(jpg|jpeg)$/i);
    if (!match) return;

    const num = parseInt(match[1]);

    images.push({
      type: "image",
      number: num,
      src: src as string,
      caption: captions[num],
    });
  });

  return images.sort((a, b) => a.number - b.number);
};
