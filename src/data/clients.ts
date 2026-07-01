import brakesIndia from "@/assets/client-brakes-india.png.asset.json";
import turboEnergy from "@/assets/client-turbo-energy.jpg.asset.json";
import abiShowatech from "@/assets/client-abi-showatech.png.asset.json";
import wheelsIndia from "@/assets/client-wheels-india.jpg.asset.json";
import sundramFasteners from "@/assets/client-tvs.jpg.asset.json";
import axlesIndia from "@/assets/client-axles-india.jpg.asset.json";
import rte from "@/assets/client-rte.webp.asset.json";
import sundaramClayton from "@/assets/client-sundaram-clayton.webp.asset.json";
import hyundaiWia from "@/assets/client-hyundai-wia.png.asset.json";
import somicZf from "@/assets/client-somic-zf.png.asset.json";

export type Client = { name: string; logo: string };

export const clients: Client[] = [
  { name: "Brakes India", logo: brakesIndia.url },
  { name: "Turbo Energy", logo: turboEnergy.url },
  { name: "ABI-Showatech", logo: abiShowatech.url },
  { name: "Wheels India Limited", logo: wheelsIndia.url },
  { name: "Sundram Fasteners Limited", logo: sundramFasteners.url },
  { name: "Axles India Limited", logo: axlesIndia.url },
  { name: "Real Talent Engineering", logo: rte.url },
  { name: "Sundaram-Clayton Limited", logo: sundaramClayton.url },
  { name: "Hyundai WIA", logo: hyundaiWia.url },
  { name: "SOMIC ZF Components", logo: somicZf.url },
];
