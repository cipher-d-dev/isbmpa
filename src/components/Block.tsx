import pic1 from "../assets/gallery/pic (1).jpg";
import pic2 from "../assets/gallery/pic (2).jpg";
import pic3 from "../assets/gallery/pic (3).jpg";
import pic4 from "../assets/gallery/pic (4).jpg";
import pic5 from "../assets/gallery/pic (5).jpg";
import pic6 from "../assets/gallery/pic (6).jpg";
import pic7 from "../assets/gallery/pic (7).jpg";
import pic8 from "../assets/gallery/pic (8).jpg";
import pic9 from "../assets/gallery/pic (9).jpg";
import pic10 from "../assets/gallery/pic (10).jpg";
import pic11 from "../assets/gallery/pic (11).jpg";
import pic12 from "../assets/gallery/pic (12).jpg";
import pic13 from "../assets/gallery/pic (13).jpg";
import pic14 from "../assets/gallery/pic (14).jpg";
import pic15 from "../assets/gallery/pic (15).jpg";
import pic16 from "../assets/gallery/pic (16).jpg";
import pic17 from "../assets/gallery/pic (17).jpg";
import pic18 from "../assets/gallery/pic (18).jpg";
import pic19 from "../assets/gallery/pic (19).jpg";
import pic20 from "../assets/gallery/pic (20).jpg";
import pic21 from "../assets/gallery/pic (21).jpg";
import pic22 from "../assets/gallery/pic (22).jpg";
import pic23 from "../assets/gallery/pic (23).jpg";
import pic24 from "../assets/gallery/pic (24).jpg";
import pic25 from "../assets/gallery/pic (25).jpg";
import pic26 from "../assets/gallery/pic (26).jpg";
import pic27 from "../assets/gallery/pic (27).jpg";
import pic28 from "../assets/gallery/pic (28).jpg";
import pic29 from "../assets/gallery/pic (29).jpg";
import pic30 from "../assets/gallery/pic (30).jpg";
import pic31 from "../assets/gallery/pic (31).jpg";
import pic32 from "../assets/gallery/pic (32).jpg";

// Preload all images
const imageMap: { [key: number]: string } = {
  1: pic1,
  2: pic2,
  3: pic3,
  4: pic4,
  5: pic5,
  6: pic6,
  7: pic7,
  8: pic8,
  9: pic9,
  10: pic10,
  11: pic11,
  12: pic12,
  13: pic13,
  14: pic14,
  15: pic15,
  16: pic16,
  17: pic17,
  18: pic18,
  19: pic19,
  20: pic20,
  21: pic21,
  22: pic22,
  23: pic23,
  24: pic24,
  25: pic25,
  26: pic26,
  27: pic27,
  28: pic28,
  29: pic29,
  30: pic30,
  31: pic31,
  32: pic32,
};

const generateImageBlock = (randoms: number[] = [], randomInt: number = 1) => {
  let randomNumbers = [];
  for (let i = 0; i < randomInt; i++) {
    randomNumbers.push(
      ...Array.from({ length: 4 }, () => Math.floor(Math.random() * 32) + 1)
    );
  }
  const numbersToUse = randoms.length === 0 ? randomNumbers : randoms;

  return numbersToUse.map((number, index) => {
    const image = imageMap[number];
    if (!image) {
      console.error(`Image not found for number: ${number}`);
      return null; // Handle missing images gracefully
    }
    return (
      <div className="item" key={index}>
        <div className="image">
          <img src={image} alt={`Gallery Image ${number}`} />
        </div>
      </div>
    );
  });
};

export default generateImageBlock;
