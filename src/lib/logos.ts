export type Logo = { name: string; src: string };

// All logo assets are a uniform 215x90 (see _reference/INVENTORY.md §5).
export const LOGO_WIDTH = 215;
export const LOGO_HEIGHT = 90;

const base = "/images/wp-content/uploads";

/** Partner / OEM & carrier logos (originally on the now-defunct temporary.site host). */
export const partnerLogos: Logo[] = [
  { name: "AT&T", src: `${base}/2024/10/ATT-Logo-Final.png` },
  { name: "American Tower", src: `${base}/2024/10/American-Tower-Logo-Final.png` },
  { name: "Crown Castle", src: `${base}/2024/10/Crown-Castle-Logo-Final.png` },
  { name: "Dish", src: `${base}/2024/10/Dish-Logo-Final.png` },
  { name: "Ericsson", src: `${base}/2024/10/Ericsson-Logo-Final-2.png` },
  { name: "Fujitsu", src: `${base}/2024/10/Fujitsu-Logo-Final.png` },
  { name: "MasTec", src: `${base}/2024/10/Mastec-Logo-Final.png` },
  { name: "Nokia", src: `${base}/2024/10/Nokia-Logo-Final.png` },
];

/** Customer / co-op & fiber logos. */
export const customerLogos: Logo[] = [
  { name: "Coast Electric", src: `${base}/2025/02/Coast-Electric-Logo-Final.png` },
  { name: "Four States Fiber", src: `${base}/2025/02/Four-States-Fiber-Internet-Logo-Final.png` },
  { name: "Glades Electric Cooperative", src: `${base}/2025/02/Glades-Electric-Cooperative-Logo-Final.png` },
  { name: "Mountain View", src: `${base}/2025/02/Mountain-View-Logo-Final.png` },
  { name: "OEMC", src: `${base}/2025/02/OEMC-Logo-Final.png` },
  { name: "Osage Valley Electric Cooperative", src: `${base}/2025/02/Osage-Valley-Electric-Cooperative-Logo-Final.png` },
  { name: "Petit Jean Fiber", src: `${base}/2025/02/Petit-Jean-Fiber-Logo-Final.png` },
  { name: "Satilla", src: `${base}/2025/02/Satilla-Logo-Final.png` },
  { name: "Singing River Connect", src: `${base}/2025/02/Singing-River-Connect-Logo-Final.png` },
  { name: "Suwannee Valley", src: `${base}/2025/02/Suwannee-Valley-Logo-Final.png` },
  { name: "Farmers FRC", src: `${base}/2025/03/Farmers-FRC-Logo-Final.png` },
  { name: "Grady EMC", src: `${base}/2025/03/Grady-EMC-Logo-Final.png` },
];
