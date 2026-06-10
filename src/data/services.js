import {
  Droplets,
  Leaf,
  Scissors,
  Atom,
  Wind,
  Crown,
  User,
  Sparkles,
  Layers,
  Zap,
  Target,
  Heart,
  Smile,
  Eraser,
  TestTube2,
  Waves,
} from "lucide-react";

// Hair treatment images
import GlutathioneImg from "../assets/treatments/glutalite-iv-drip.jpg";
import GcellImg from "../assets/treatments/gcell.jpg";
import HybridImg from "../assets/treatments/hybrid-hair-transplant.jpg";
import RegenPro9Img from "../assets/treatments/regen-pro9-new.png";
import GelPrpImg from "../assets/treatments/gel-prp.jpg";
import OltImg from "../assets/treatments/olt-new.png";
import CosmeticHairImg from "../assets/treatments/cosmetic-hair-system.png";
import PrpStemx27Img from "../assets/treatments/prp-stemx27.png";
import BeardImg from "../assets/treatments/beard-transplant-new.png";

// Skin treatment images
import GlutaliteImg from "../assets/treatments/glutalite-iv-drip.jpg";
import ChemicalPeelImg from "../assets/treatments/chemical-peel.jpg";
import PhotoCarbonImg from "../assets/treatments/photo-carbon.png";
import LaserHairImg from "../assets/treatments/laser-hair-reduction.jpg";
import HydraLiftImg from "../assets/treatments/hydra-lift.jpg";
import LipImg from "../assets/treatments/lip-micropigmentation-new.png";
import BotoxFillersImg from "../assets/treatments/botox-fillers.jpg";
import MnrfImg from "../assets/treatments/mnrf.jpg";
import TattooRemovalImg from "../assets/treatments/tattoo-removal.jpg";

export const hairTreatments = [
  {
    slug: "glutathione-iv-drip",
    title: "Glutathione IV Drip Therapy",
    icon: TestTube2,
    image: GlutathioneImg,
    category: "hair",
    summary:
      "Advanced wellness IV treatment delivering the body's Master Antioxidant directly into the bloodstream — supports detoxification, improves skin radiance, combats oxidative stress, and enhances overall wellness.",
  },
  {
    slug: "g-cell-therapy",
    title: "G Cell Therapy",
    icon: Leaf,
    image: GcellImg,
    category: "hair",
    summary:
      "Growth-factor-rich cellular technology that stimulates dormant hair follicles, reduces hair fall, improves scalp health, and promotes natural hair regrowth — non-surgical and long-lasting.",
  },
  {
    slug: "hybrid-hair-transplant",
    title: "Hybrid Hair Transplant",
    icon: Scissors,
    image: HybridImg,
    category: "hair",
    summary:
      "Modern FUE combined with enhanced graft implantation for superior hair density, natural hairline design, and permanent results — ideal for thinning hair, receding hairlines, or bald patches.",
  },
  {
    slug: "regen-pro-9",
    title: "Regen Pro 9 GFC",
    icon: Atom,
    image: RegenPro9Img,
    category: "hair",
    summary:
      "Highly concentrated growth factors derived from your own blood to stimulate dormant follicles, promote healthier hair growth, and improve scalp health — safe, minimally invasive, and non-surgical.",
  },
  {
    slug: "gel-prp",
    title: "Advanced Gel PRP",
    icon: Droplets,
    image: GelPrpImg,
    category: "hair",
    summary:
      "PRP therapy with a specialized gel matrix for prolonged growth factor release — stimulates hair regrowth, improves scalp health, and reduces hair fall effectively and naturally.",
  },
  {
    slug: "oxygen-laser-therapy",
    title: "Oxygen Laser Therapy",
    icon: Wind,
    image: OltImg,
    category: "hair",
    summary:
      "Non-invasive oxygen-powered laser technology that stimulates scalp circulation, controls dandruff, reduces hair fall, and promotes natural hair growth — no downtime required.",
  },
  {
    slug: "cosmetic-hair-system",
    title: "Cosmetic Hair System",
    icon: Crown,
    image: CosmeticHairImg,
    category: "hair",
    summary:
      "Non-surgical solution for hair thinning or baldness, customized to match your hair color, texture, and style — delivers immediate, natural-looking results safely and painlessly.",
  },
  {
    slug: "prp-pro-stemx27",
    title: "PRP Pro+ StemX27",
    icon: Sparkles,
    image: PrpStemx27Img,
    category: "hair",
    summary:
      "Platelet-rich plasma enhanced with StemX27 growth factor technology to stimulate dormant follicles, strengthen roots, and promote natural hair regrowth — safe, non-surgical, and highly effective.",
  },
  {
    slug: "beard-transplant",
    title: "Beard Transplant",
    icon: User,
    image: BeardImg,
    category: "hair",
    summary:
      "Permanent facial hair enhancement using your own follicles — fills patchy areas, defines beard shape, and creates a full, natural-looking beard with lasting results and customized design.",
  },
];

export const skinTreatments = [
  {
    slug: "glutalite-iv-drip",
    title: "Glutalite IV Drip",
    icon: Droplets,
    image: GlutaliteImg,
    category: "skin",
    summary:
      "Nutrient-rich IV infusion with Glutathione, Vitamin C, and essential nutrients — brightens skin, reduces hyperpigmentation, combats oxidative stress, and supports whole-body detoxification.",
  },
  {
    slug: "chemical-peel",
    title: "Chemical Peel",
    icon: Layers,
    image: ChemicalPeelImg,
    category: "skin",
    summary:
      "Medical-grade peels that resurface, brighten, and refine the skin — reduces pigmentation, minimizes acne scars, and reveals smoother, healthier-looking skin with visible lasting results.",
  },
  {
    slug: "photo-carbon-skin-polish",
    title: "Photo Carbon Skin Polish",
    icon: Zap,
    image: PhotoCarbonImg,
    category: "skin",
    summary:
      "Activated carbon combined with laser energy to deeply cleanse, reduce pigmentation, minimize pores, and restore a radiant, rejuvenated complexion — comfortable and non-invasive.",
  },
  {
    slug: "laser-hair-reduction",
    title: "Laser Hair Reduction",
    icon: Target,
    image: LaserHairImg,
    category: "skin",
    summary:
      "Advanced laser technology that safely targets hair follicles for long-term reduction on the face and body — smooth, confident skin with minimal maintenance.",
  },
  {
    slug: "hydra-lift-skin-booster",
    title: "Hydra Lift Skin Booster",
    icon: Waves,
    image: HydraLiftImg,
    category: "skin",
    summary:
      "Powerful skin-enhancing nutrients delivered deep into skin layers to hydrate, boost collagen, improve elasticity, and restore a youthful, radiant glow — suitable for all skin types.",
  },
  {
    slug: "lip-micropigmentation",
    title: "Lip Micropigmentation",
    icon: Heart,
    image: LipImg,
    category: "skin",
    summary:
      "Semi-permanent cosmetic procedure that enhances lip shape, color, and symmetry — creates naturally fuller, beautifully defined, and youthful-looking lips that last.",
  },
  {
    slug: "botox-fillers",
    title: "Botox & Fillers",
    icon: Smile,
    image: BotoxFillersImg,
    category: "skin",
    summary:
      "Botox and dermal fillers that reduce wrinkles, restore facial volume, and enhance contours for a refreshed, naturally youthful appearance — minimally invasive with little downtime.",
  },
  {
    slug: "mnrf",
    title: "MNRF Treatment",
    icon: Layers,
    image: MnrfImg,
    category: "skin",
    summary:
      "Microneedling Radiofrequency combining precise microchannels with RF energy — stimulates collagen, tightens skin, reduces acne scars, and minimizes enlarged pores effectively.",
  },
  {
    slug: "tattoo-removal",
    title: "Tattoo Removal",
    icon: Eraser,
    image: TattooRemovalImg,
    category: "skin",
    summary:
      "Advanced laser technology that targets tattoo pigments beneath the skin without harming surrounding tissue — safe, gradual, and effective removal for all colors and sizes.",
  },
];

export const services = [...hairTreatments, ...skinTreatments];

export const serviceCategories = [
  {
    slug: "hair",
    title: "Hair Treatments",
    icon: Scissors,
    summary: "Targeted therapies for hair fall, thinning, transplants, and scalp health.",
    points: ["Hair restoration", "Scalp therapy", "Non-surgical options"],
  },
  {
    slug: "skin",
    title: "Skin Treatments",
    icon: Sparkles,
    summary: "Specialist-led skincare for clarity, hydration, tone, and rejuvenation.",
    points: ["IV drips", "Laser therapies", "Cosmetic enhancements"],
  },
];

export const departments = ["Hair Treatments", "Skin Treatments"];
