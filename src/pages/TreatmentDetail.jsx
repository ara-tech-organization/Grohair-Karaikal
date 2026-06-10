import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ArrowRight,
  Clock,
  Shield,
  Check,
  Zap,
  Leaf,
} from "lucide-react";
import Button from "../components/Button";
import { clinic } from "../data/site";

// ---------- Images ----------
import GlutathioneImg from "../assets/treatments/glutalite-iv-drip.jpg";
import GcellImg from "../assets/treatments/gcell.jpg";
import HybridImg from "../assets/treatments/hybrid-hair-transplant.jpg";
import RegenPro9Img from "../assets/treatments/regen-pro9-new.png";
import GelPrpImg from "../assets/treatments/gel-prp.jpg";
import OltImg from "../assets/treatments/olt-new.png";
import CosmeticHairImg from "../assets/treatments/cosmetic-hair-system.png";
import PrpStemx27Img from "../assets/treatments/prp-stemx27.png";
import BeardImg from "../assets/treatments/beard-transplant-new.png";
import GlutaliteImg from "../assets/treatments/glutalite-iv-drip.jpg";
import ChemicalPeelImg from "../assets/treatments/chemical-peel.jpg";
import PhotoCarbonImg from "../assets/treatments/photo-carbon.png";
import LaserHairImg from "../assets/treatments/laser-hair-reduction.jpg";
import HydraLiftImg from "../assets/treatments/hydra-lift.jpg";
import LipImg from "../assets/treatments/lip-micropigmentation-new.png";
import BotoxFillersImg from "../assets/treatments/botox-fillers.jpg";
import MnrfImg from "../assets/treatments/mnrf.jpg";
import TattooRemovalImg from "../assets/treatments/tattoo-removal.jpg";

// ---------- All treatment data ----------
const TREATMENTS = {
  // ── HAIR ──────────────────────────────────────────────────────────────────
  "glutathione-iv-drip": {
    img: GlutathioneImg,
    eyebrow: "Advanced Wellness Treatment",
    title: "Glutathione IV Drip Therapy",
    tagline: "Revitalize Your Body, Enhance Your Glow",
    intro:
      'Glutathione IV Drips are advanced wellness and skin rejuvenation treatments designed to deliver powerful antioxidants directly into the bloodstream for maximum absorption and effectiveness.',
    introDetail:
      'Known as the body\'s "Master Antioxidant," Glutathione helps support detoxification, improve skin radiance, combat oxidative stress, and promote overall wellness. This treatment offers a safe and efficient way to refresh your body from within while enhancing your natural glow.',
    processTitle: "Glutathione IV Drip Process",
    processDesc:
      "Every session begins with a detailed consultation to understand your health goals, skin concerns, and wellness requirements. A carefully formulated Glutathione solution is administered intravenously under professional supervision. Nutrients are delivered directly into the bloodstream for optimal absorption and faster results compared to oral supplements. The treatment is comfortable, relaxing, and typically completed within 30 to 60 minutes with no downtime required.",
    processSteps: [
      { title: "Consultation", desc: "Detailed health assessment to understand your skin concerns, wellness goals, and medical history." },
      { title: "Formulation", desc: "A personalized Glutathione solution is prepared based on your specific health and aesthetic needs." },
      { title: "IV Administration", desc: "Solution administered intravenously under professional supervision for maximum absorption." },
      { title: "Relaxation", desc: "Comfortable 30–60 minute session with no pain — just a gentle, restorative drip." },
      { title: "No Downtime", desc: "Walk out refreshed. No recovery period — return to daily activities immediately." },
    ],
    benefitsIntro:
      "Glutathione plays a vital role in protecting the body against free radicals, supporting detoxification, and promoting healthy skin. IV therapy ensures efficient delivery for both wellness and aesthetic benefits.",
    benefits: [
      "Promotes brighter and healthier-looking skin",
      "Supports natural detoxification processes",
      "Provides powerful antioxidant protection",
      "Helps reduce the effects of oxidative stress",
      "Improves overall skin radiance and glow",
      "Supports healthy aging and wellness",
      "Enhances energy and vitality",
      "Safe, comfortable, and non-surgical treatment",
    ],
    whyUsTitle: "Why Choose Advanced GroHair & GloSkin Clinic?",
    whyUsDesc:
      "We provide premium IV wellness therapies administered by experienced professionals in a safe and comfortable clinical environment. Our personalized approach ensures every treatment is tailored to your individual health and aesthetic goals.",
    whyUs: [
      "Experienced Wellness & Aesthetic Specialists",
      "Premium Quality IV Formulations",
      "Personalized Wellness Programs",
      "Safe & Hygienic Clinical Environment",
      "Comfortable & Relaxing Treatment Experience",
      "Focus on Skin Health and Overall Well-Being",
    ],
    ctaTitle: "Book Your Glutathione IV Drip Session Today",
    ctaDesc:
      "Refresh your body, enhance your skin's natural radiance, and support your overall wellness with Glutathione IV Drip Therapy at Advanced GroHair & GloSkin Karaikal.",
    sessionDuration: "30 – 60 minutes",
    treatmentType: "Wellness & Aesthetic",
  },

  "g-cell-therapy": {
    img: GcellImg,
    eyebrow: "Advanced Hair Rejuvenation",
    title: "G Cell Therapy",
    tagline: "Rediscover Stronger, Thicker, and Healthier Hair",
    intro:
      "G Cell Therapy uses growth-factor-rich cellular technology to stimulate dormant hair follicles, reduce hair fall, improve scalp health, and promote natural hair regrowth.",
    introDetail:
      "Ideal for individuals experiencing hair thinning, early hair loss, or weakened hair density, this non-surgical treatment provides long-lasting hair rejuvenation and renewed confidence.",
    processTitle: "How G Cell Therapy Works",
    processDesc:
      "Every session begins with a detailed scalp analysis and consultation. Our specialists evaluate your hair loss pattern, follicle health, and underlying causes to create a customized treatment plan. Regenerative cellular components are administered directly into targeted scalp areas. The minimally invasive procedure is comfortable and usually completed within 45 to 60 minutes.",
    processSteps: [
      { title: "Scalp Analysis", desc: "Detailed scalp and follicle assessment to map hair loss patterns and evaluate scalp health." },
      { title: "Custom Plan", desc: "Specialists design a personalized treatment plan based on your unique hair loss profile." },
      { title: "Cell Preparation", desc: "Growth-factor-rich cellular components are prepared using advanced regenerative technology." },
      { title: "Administration", desc: "Cellular components are administered directly into targeted scalp areas with precision." },
      { title: "Results", desc: "Minimally invasive procedure completed in 45–60 minutes with no significant downtime." },
    ],
    benefitsIntro:
      "G Cell Therapy harnesses advanced regenerative technology to address hair loss at its root, delivering visible and lasting improvement in hair density and scalp health.",
    benefits: [
      "Reduces hair fall",
      "Strengthens hair follicles",
      "Improves hair density and thickness",
      "Activates dormant follicles",
      "Enhances scalp health",
      "Supports a healthy hair growth cycle",
      "Delivers long-lasting, natural results",
    ],
    whyUsTitle: "Why Choose Advanced GroHair & GloSkin Clinic?",
    whyUsDesc:
      "Our team of experienced hair specialists combines advanced regenerative technology with personalized treatment plans to deliver visible, natural, and lasting results in a safe clinical environment.",
    whyUs: [
      "Experienced Hair Specialists",
      "Advanced Regenerative Technology",
      "Customized Treatment Plans",
      "Safe & Minimally Invasive",
      "Visible Improvement in Hair Density",
      "Modern Clinical Environment",
    ],
    ctaTitle: "Book Your G Cell Therapy Consultation Today",
    ctaDesc:
      "Take the first step toward stronger, healthier hair with G Cell Therapy at Advanced GroHair & GloSkin Karaikal. Our specialists will evaluate your hair health and design a personalized plan for lasting rejuvenation.",
    sessionDuration: "45 – 60 minutes",
    treatmentType: "Non-Surgical Hair Restoration",
  },

  "hybrid-hair-transplant": {
    img: HybridImg,
    eyebrow: "Advanced Hair Transplant",
    title: "Hybrid Hair Transplant",
    tagline: "Achieve Fuller, Natural-Looking Hair",
    intro:
      "Advanced Hybrid Hair Transplant combines modern FUE technology with enhanced graft implantation techniques to deliver superior hair density, natural hairline design, and long-lasting results.",
    introDetail:
      "Perfect for thinning hair, receding hairlines, or bald patches, our personalized approach restores your hair and confidence with precision and care.",
    processTitle: "The Hybrid Hair Transplant Process",
    processDesc:
      "The journey begins with a comprehensive scalp analysis and consultation. Specialists assess your hair loss pattern, donor area quality, and aesthetic goals to develop a customized plan. Healthy hair follicles are extracted from the donor area and strategically implanted into thinning regions, ensuring natural growth direction, improved density, and high graft survival. The procedure is minimally invasive, performed under local anesthesia.",
    processSteps: [
      { title: "Consultation", desc: "Comprehensive scalp analysis — hair loss pattern, donor area quality, and aesthetic goals assessed." },
      { title: "Custom Plan", desc: "A personalized hairline design and graft plan is developed for your facial structure." },
      { title: "Extraction", desc: "Healthy follicles are carefully extracted from the donor area using advanced FUE technique." },
      { title: "Implantation", desc: "Follicles are strategically implanted at natural growth angles for maximum density." },
      { title: "Recovery", desc: "Minimally invasive procedure under local anesthesia with fast recovery and lasting results." },
    ],
    benefitsIntro:
      "The Hybrid Hair Transplant offers precise FUE extraction combined with advanced implantation for results that are natural, dense, and permanent.",
    benefits: [
      "Natural-looking hairline design",
      "Increased graft survival",
      "Enhanced hair density and coverage",
      "Minimal scarring and downtime",
      "Permanent, long-lasting results",
      "Faster recovery",
      "Improved overall appearance and confidence",
    ],
    whyUsTitle: "Why Choose Advanced GroHair & GloSkin Clinic?",
    whyUsDesc:
      "Our expert hair transplant surgeons combine advanced hybrid technology with individualized hairline design to deliver dense, natural, and permanent results in a safe and hygienic environment.",
    whyUs: [
      "Expert Hair Transplant Surgeons",
      "Advanced Hybrid Technology",
      "Customized Hairline Design",
      "Safe & Hygienic Clinical Environment",
      "Dense, Natural, and Long-Lasting Results",
    ],
    ctaTitle: "Book Your Hybrid Hair Transplant Consultation Today",
    ctaDesc:
      "Restore your hair and confidence with the Hybrid Hair Transplant at Advanced GroHair & GloSkin Karaikal. Our specialists are ready to design a personalized plan for the natural, dense results you deserve.",
    sessionDuration: "Varies by case",
    treatmentType: "Surgical Hair Restoration",
  },

  "regen-pro-9": {
    img: RegenPro9Img,
    eyebrow: "Advanced Hair Restoration",
    title: "Regen Pro 9 GFC Hair Restoration",
    tagline: "Revitalize Your Hair Naturally",
    intro:
      "Regen Pro 9 GFC (Growth Factor Concentrate) uses highly concentrated growth factors derived from your blood to stimulate dormant follicles, promote healthier hair growth, and improve scalp health.",
    introDetail:
      "Safe, minimally invasive, and non-surgical — ideal for early-stage hair loss and thinning hair, offering natural and visible results with no significant downtime.",
    processTitle: "The Regen Pro 9 GFC Process",
    processDesc:
      "Your treatment begins with a detailed scalp assessment. A small blood sample is processed to isolate concentrated growth factors, which are carefully injected into targeted scalp areas. These growth factors activate follicles, improve circulation, and support stronger hair growth. The procedure is quick, comfortable, and requires minimal downtime.",
    processSteps: [
      { title: "Scalp Assessment", desc: "Detailed evaluation of scalp condition, hair loss stage, and follicle health." },
      { title: "Blood Draw", desc: "A small blood sample is collected and processed to isolate concentrated growth factors." },
      { title: "GFC Preparation", desc: "Growth Factor Concentrate is extracted and prepared for targeted scalp injection." },
      { title: "Injection", desc: "GFC is carefully injected into targeted scalp zones to activate follicles and improve circulation." },
      { title: "Recovery", desc: "Quick, comfortable procedure completed in 45–60 minutes with minimal downtime." },
    ],
    benefitsIntro:
      "Regen Pro 9 GFC harnesses your body's own growth factors to repair, strengthen, and reactivate hair follicles — delivering natural regrowth without surgery.",
    benefits: [
      "Reduces excessive hair fall",
      "Stimulates dormant hair follicles",
      "Promotes thicker, stronger hair",
      "Improves scalp health and circulation",
      "Minimally invasive and virtually painless",
      "Natural, long-lasting results",
    ],
    whyUsTitle: "Why Choose Advanced GroHair & GloSkin Clinic?",
    whyUsDesc:
      "Our experienced hair restoration specialists use advanced growth factor technology and personalized treatment plans to deliver natural, visible results in a safe and hygienic clinical environment.",
    whyUs: [
      "Experienced Hair Restoration Specialists",
      "Advanced Growth Factor Technology",
      "Personalized Treatment Plans",
      "Safe & Hygienic Clinical Environment",
      "Non-Surgical Hair Regrowth",
      "Natural and Visible Results",
    ],
    ctaTitle: "Book Your Regen Pro 9 GFC Consultation Today",
    ctaDesc:
      "Take the first step toward fuller, healthier hair with Regen Pro 9 GFC at Advanced GroHair & GloSkin Karaikal. Our specialists will design a personalized plan for the thicker, stronger hair you deserve.",
    sessionDuration: "45 – 60 minutes",
    treatmentType: "Non-Surgical Hair Restoration",
  },

  "gel-prp": {
    img: GelPrpImg,
    eyebrow: "Advanced PRP Therapy",
    title: "Advanced Gel PRP Hair Restoration",
    tagline: "Strengthen Hair Follicles and Restore Growth Naturally",
    intro:
      "Advanced Gel PRP combines PRP therapy with a specialized gel matrix for prolonged growth factor release, stimulating hair regrowth, improving scalp health, and reducing hair fall.",
    introDetail:
      "Safe, minimally invasive, and effective for early to moderate hair loss — offering natural hair restoration with long-lasting results.",
    processTitle: "The Advanced Gel PRP Process",
    processDesc:
      "A small blood sample is processed to isolate platelet-rich plasma, which is converted into a growth-factor-rich gel. This gel is carefully injected into the scalp to stimulate dormant follicles, improve circulation, and support healthier hair growth. Treatment is comfortable with minimal downtime.",
    processSteps: [
      { title: "Blood Collection", desc: "A small blood sample is collected from the patient in a sterile clinical setting." },
      { title: "PRP Processing", desc: "Blood is centrifuged to isolate platelet-rich plasma with high growth factor concentration." },
      { title: "Gel Conversion", desc: "PRP is converted into a sustained-release gel matrix for prolonged growth factor delivery." },
      { title: "Scalp Injection", desc: "Gel is carefully injected into targeted scalp areas to stimulate dormant follicles." },
      { title: "Recovery", desc: "Comfortable treatment completed in 45–60 minutes — minimal downtime, visible results." },
    ],
    benefitsIntro:
      "Advanced Gel PRP delivers growth factors deep into the scalp through a sustained-release matrix, ensuring longer-lasting stimulation of hair follicles and superior results.",
    benefits: [
      "Reduces hair fall and thinning",
      "Stimulates natural hair regrowth",
      "Strengthens weak follicles",
      "Improves hair density and thickness",
      "Enhances scalp nourishment",
      "Safe, minimally invasive, and long-lasting",
    ],
    whyUsTitle: "Why Choose Advanced GroHair & GloSkin Clinic?",
    whyUsDesc:
      "Our experienced hair restoration experts apply advanced Gel PRP technology with customized treatment plans to deliver visible, natural hair growth in a safe and sterile clinical environment.",
    whyUs: [
      "Experienced Hair Restoration Experts",
      "Advanced Gel PRP Technology",
      "Customized Treatment Plans",
      "Safe & Sterile Clinical Environment",
      "Non-Surgical Hair Restoration",
      "Natural and Visible Hair Growth",
    ],
    ctaTitle: "Book Your Advanced Gel PRP Consultation Today",
    ctaDesc:
      "Achieve stronger, thicker, and healthier hair with Advanced Gel PRP at Advanced GroHair & GloSkin Karaikal. Our specialists are ready to design a personalized plan for visible, natural results.",
    sessionDuration: "45 – 60 minutes",
    treatmentType: "Non-Surgical Hair Restoration",
  },

  "oxygen-laser-therapy": {
    img: OltImg,
    eyebrow: "Advanced Laser Therapy",
    title: "Oxygen Laser Therapy for Hair",
    tagline: "Control Dandruff, Reduce Hair Fall, and Stimulate Hair Growth",
    intro:
      "Oxygen Laser Therapy is an advanced, non-invasive treatment designed to improve scalp health, control dandruff, reduce hair fall, and promote natural hair growth.",
    introDetail:
      "Using oxygen-powered laser technology, this therapy stimulates blood circulation, nourishes hair follicles, and creates a healthier environment for stronger, thicker hair.",
    processTitle: "The Oxygen Laser Therapy Process",
    processDesc:
      "Every session begins with a detailed scalp analysis and consultation. Oxygen-rich laser energy is applied to the scalp, enhancing circulation, reducing dandruff, and activating dormant follicles. The treatment is safe, comfortable, and requires no downtime — ideal for busy schedules.",
    processSteps: [
      { title: "Scalp Analysis", desc: "Detailed consultation and scalp evaluation to identify concerns and customize the session." },
      { title: "Scalp Prep", desc: "The scalp is gently cleansed and prepared to ensure optimal laser penetration." },
      { title: "Laser Application", desc: "Oxygen-enriched laser energy is applied across the scalp to stimulate circulation and follicles." },
      { title: "Follicle Activation", desc: "Laser energy activates dormant follicles, reduces dandruff, and strengthens hair roots." },
      { title: "No Downtime", desc: "Safe, comfortable session in 30–45 minutes — return to your day immediately after." },
    ],
    benefitsIntro:
      "Oxygen Laser Therapy targets the root causes of scalp problems — poor circulation, dandruff, and weakened follicles — using the proven power of oxygen-enriched laser energy.",
    benefits: [
      "Controls dandruff and scalp dryness",
      "Reduces hair fall and thinning",
      "Stimulates dormant hair follicles",
      "Strengthens weak and damaged hair",
      "Improves overall scalp health",
      "Supports natural hair regrowth",
      "Safe, non-invasive, and comfortable",
    ],
    whyUsTitle: "Why Choose Advanced GroHair & GloSkin Clinic?",
    whyUsDesc:
      "Our experienced hair specialists deliver Oxygen Laser Therapy using advanced technology and customized scalp treatment plans to ensure visible improvement in hair density and scalp health.",
    whyUs: [
      "Experienced Hair Specialists",
      "Advanced Oxygen Laser Technology",
      "Customized Scalp & Hair Treatment Plans",
      "Safe & Non-Invasive Procedure",
      "Modern Clinical Environment",
      "Visible Improvement in Hair Density",
    ],
    ctaTitle: "Book Your Oxygen Laser Therapy Consultation Today",
    ctaDesc:
      "Take the first step toward a healthier scalp and stronger hair with Oxygen Laser Therapy at Advanced GroHair & GloSkin Karaikal. Our specialists are ready to create a personalized scalp treatment plan for lasting results.",
    sessionDuration: "30 – 45 minutes",
    treatmentType: "Non-Invasive Scalp Therapy",
  },

  "cosmetic-hair-system": {
    img: CosmeticHairImg,
    eyebrow: "Advanced Cosmetic Solution",
    title: "Cosmetic Hair System Solutions",
    tagline: "Instant Hair Transformation with Natural Results",
    intro:
      "A Cosmetic Hair System provides a non-surgical solution for hair thinning or baldness. Customized to match your hair color, texture, and style, it delivers immediate, natural-looking results safely and painlessly.",
    introDetail:
      "Whether you are experiencing early-stage hair thinning or advanced hair loss, our Cosmetic Hair Systems are designed to blend seamlessly with your natural hair for a confident, natural appearance.",
    processTitle: "The Cosmetic Hair System Process",
    processDesc:
      "A consultation and scalp assessment determine your ideal system. The hair system is customized to blend seamlessly with your natural hair and facial features, then professionally fitted with advanced attachment techniques for comfort and durability.",
    processSteps: [
      { title: "Consultation", desc: "Thorough scalp assessment and lifestyle discussion to identify your ideal hair system." },
      { title: "Customization", desc: "Hair system crafted to precisely match your color, texture, density, and facial features." },
      { title: "Fitting", desc: "System professionally fitted using advanced attachment techniques for comfort and security." },
      { title: "Styling", desc: "Expert stylists shape and finish the system for a completely natural, seamless appearance." },
      { title: "Same-Day Results", desc: "Walk out with an instant transformation — no surgery, no waiting, no downtime." },
    ],
    benefitsIntro:
      "Cosmetic Hair Systems offer an immediate, non-surgical solution for all stages of hair loss — delivering a natural-looking, comfortable, and durable result tailored to your lifestyle.",
    benefits: [
      "Instant, visible transformation",
      "Natural-looking hair appearance",
      "Non-surgical and painless",
      "Customized to your hair and style",
      "Suitable for all stages of hair loss",
      "Comfortable, lightweight, and durable",
    ],
    whyUsTitle: "Why Choose Advanced GroHair & GloSkin Clinic?",
    whyUsDesc:
      "We offer personalized Cosmetic Hair System consultations, premium-quality systems, and expert fitting by trained professionals with ongoing maintenance support.",
    whyUs: [
      "Personalized Hair System Consultation",
      "Premium Quality Hair Systems",
      "Expert Fitting and Styling",
      "Comfortable & Secure Attachment",
      "Ongoing Maintenance and Support",
    ],
    ctaTitle: "Book Your Cosmetic Hair System Consultation Today",
    ctaDesc:
      "Restore your confidence instantly with a customized Cosmetic Hair System at Advanced GroHair & GloSkin Karaikal. Our experts will guide you to the perfect solution for an immediate, natural-looking transformation.",
    sessionDuration: "Same-day fitting available",
    treatmentType: "Non-Surgical Hair Solution",
  },

  "prp-pro-stemx27": {
    img: PrpStemx27Img,
    eyebrow: "Next-Generation Hair Restoration",
    title: "PRP Pro+ StemX27 Hair Restoration",
    tagline: "Next-Generation Hair Regrowth Solution",
    intro:
      "PRP Pro+ StemX27 combines platelet-rich plasma with StemX27 growth factor technology to stimulate dormant follicles, strengthen roots, improve scalp health, and promote natural hair regrowth.",
    introDetail:
      "Safe, non-surgical, and highly effective for early-stage hair loss — this advanced protocol delivers superior results by fusing the proven benefits of PRP with cutting-edge StemX27 growth factor enhancement.",
    processTitle: "The PRP Pro+ StemX27 Process",
    processDesc:
      "A blood sample is collected and processed to extract PRP, which is enhanced with StemX27 technology. The mixture is injected into targeted scalp areas to activate follicles, improve circulation, and encourage healthier hair growth. Treatment is comfortable with minimal downtime.",
    processSteps: [
      { title: "Blood Draw", desc: "A blood sample is collected in a sterile clinical environment for processing." },
      { title: "PRP Extraction", desc: "Centrifugation isolates platelet-rich plasma with high growth factor concentration." },
      { title: "StemX27 Enhancement", desc: "PRP is combined with StemX27 growth factor technology for amplified follicle stimulation." },
      { title: "Scalp Injection", desc: "Enhanced mixture is injected into targeted zones to activate follicles and improve scalp health." },
      { title: "Recovery", desc: "Comfortable 45–60 minute session with minimal downtime and visible natural results." },
    ],
    benefitsIntro:
      "PRP Pro+ StemX27 goes beyond conventional PRP by integrating StemX27 growth factor technology — delivering a more powerful, targeted stimulus for follicle activation and regrowth.",
    benefits: [
      "Reduces hair fall",
      "Stimulates dormant follicles",
      "Promotes thicker, healthier hair",
      "Strengthens weak roots",
      "Improves scalp nourishment and circulation",
      "Non-surgical and minimally invasive",
      "Natural and long-lasting results",
    ],
    whyUsTitle: "Why Choose Advanced GroHair & GloSkin Clinic?",
    whyUsDesc:
      "Our experienced specialists deliver PRP Pro+ StemX27 using advanced technology and personalized treatment plans to ensure natural, visible hair regrowth in a safe and sterile environment.",
    whyUs: [
      "Experienced Specialists",
      "Advanced PRP Pro+ StemX27 Technology",
      "Personalized Treatment Plans",
      "Safe & Sterile Environment",
      "Natural and Visible Hair Regrowth",
    ],
    ctaTitle: "Book Your PRP Pro+ StemX27 Consultation Today",
    ctaDesc:
      "Start your journey to thicker, healthier hair with PRP Pro+ StemX27 at Advanced GroHair & GloSkin Karaikal. Our specialists will create a personalized plan to help you achieve visible, natural hair regrowth.",
    sessionDuration: "45 – 60 minutes",
    treatmentType: "Non-Surgical Hair Restoration",
  },

  "beard-transplant": {
    img: BeardImg,
    eyebrow: "Advanced Facial Hair Restoration",
    title: "Beard Transplant",
    tagline: "Achieve a Fuller, Well-Defined Beard Naturally",
    intro:
      "A Beard Transplant enhances facial hair density, fills patchy areas, and creates a natural, permanent beard using your own hair follicles.",
    introDetail:
      "Whether you want to fill patchy areas, define your beard shape, or build a full beard from scratch, our expert surgeons design a customized beard that complements your facial features.",
    processTitle: "The Beard Transplant Process",
    processDesc:
      "After consultation and facial hair assessment, healthy follicles are extracted from the donor area and implanted into the beard region at correct angles for natural growth. The procedure is performed under local anesthesia with minimal downtime, ensuring patient comfort throughout.",
    processSteps: [
      { title: "Consultation", desc: "Facial hair assessment and beard design planning tailored to your facial structure." },
      { title: "Donor Prep", desc: "Donor area identified and prepared for safe, minimal-scar follicle extraction." },
      { title: "Extraction", desc: "Healthy follicles extracted using advanced FUE techniques under local anesthesia." },
      { title: "Implantation", desc: "Follicles implanted at precise natural angles for authentic beard growth pattern." },
      { title: "Recovery", desc: "Minimal downtime post-procedure — permanent, natural-looking results develop over months." },
    ],
    benefitsIntro:
      "Beard Transplants use your own follicles to deliver permanent, natural-looking facial hair that grows and behaves exactly like your natural beard.",
    benefits: [
      "Fuller and denser beard",
      "Natural-looking growth",
      "Permanent results",
      "Customized beard design",
      "Fills patchy areas",
      "Boosts facial aesthetics and confidence",
    ],
    whyUsTitle: "Why Choose Advanced GroHair & GloSkin Clinic?",
    whyUsDesc:
      "Our experienced specialists combine advanced extraction techniques with customized beard design to deliver natural-looking, permanent results in a safe and hygienic clinical environment.",
    whyUs: [
      "Experienced Specialists",
      "Advanced Extraction Techniques",
      "Customized Beard Design",
      "Natural Hair Direction & Density",
      "Safe & Hygienic Clinical Environment",
    ],
    ctaTitle: "Book Your Beard Transplant Consultation Today",
    ctaDesc:
      "Create a fuller, well-defined beard with a Beard Transplant at Advanced GroHair & GloSkin Karaikal. Our experts will design a customized plan that enhances your facial aesthetics and delivers permanent, natural results.",
    sessionDuration: "Varies by case",
    treatmentType: "Surgical Beard Restoration",
  },

  // ── SKIN ──────────────────────────────────────────────────────────────────
  "glutalite-iv-drip": {
    img: GlutaliteImg,
    eyebrow: "Advanced Wellness & Skin Brightening",
    title: "Glutalite IV Drip Treatment",
    tagline: "Brighten Your Skin & Rejuvenate Your Body Naturally",
    intro:
      "Glutalite IV Drip is a nutrient-rich intravenous infusion formulated with Glutathione (the master antioxidant), Vitamin C, and essential nutrients.",
    introDetail:
      "This treatment helps brighten skin, reduce hyperpigmentation, combat oxidative stress, and support whole-body detoxification and anti-aging.",
    processTitle: "Glutalite IV Drip Process",
    processDesc:
      "Every session begins with a comprehensive health and skin assessment. A personalized infusion is formulated based on your goals. The Glutalite solution is administered intravenously under professional supervision, delivering nutrients directly into the bloodstream for optimal absorption. Comfortable, relaxing, and completed in 30 to 60 minutes with no downtime.",
    processSteps: [
      { title: "Consultation", desc: "Comprehensive health and skin assessment to understand your goals and wellness needs." },
      { title: "Formulation", desc: "Personalized Glutalite IV infusion prepared with Glutathione, Vitamin C, and essential nutrients." },
      { title: "IV Administration", desc: "Solution administered intravenously under professional supervision for maximum absorption." },
      { title: "Relaxation", desc: "Comfortable 30–60 minute session in a hygienic clinical environment." },
      { title: "No Downtime", desc: "Walk out refreshed — return to daily activities immediately after your session." },
    ],
    benefitsIntro:
      "Glutalite IV Drip delivers powerful antioxidants and nutrients directly into the bloodstream, supporting skin brightening, detoxification, and anti-aging from within.",
    benefits: [
      "Brightens and evens skin tone",
      "Reduces dark spots, pigmentation, and age spots",
      "Boosts collagen production and improves skin elasticity",
      "Combats oxidative stress and early signs of aging",
      "Supports liver detoxification and cellular repair",
      "Enhances immunity and overall vitality",
    ],
    whyUsTitle: "Why Choose Advanced GroHair & GloSkin Clinic?",
    whyUsDesc:
      "Our specialists deliver expert-led IV therapy sessions using safe, clinically proven formulations tailored to your individual skin and wellness goals.",
    whyUs: [
      "Expert-led IV Therapy Sessions",
      "Safe, Clinically Proven Formulations",
      "Personalized Treatment Plans",
      "Comfortable & Hygienic Environment",
      "Visible and Lasting Skin & Wellness Benefits",
    ],
    ctaTitle: "Book Your Glutalite IV Drip Consultation Today",
    ctaDesc:
      "Revitalize your skin and body with Glutalite IV Drip at Advanced GroHair & GloSkin Karaikal. Our specialists will craft a personalized infusion plan to bring out your natural glow.",
    sessionDuration: "30 – 60 minutes",
    treatmentType: "Wellness & Skin Brightening",
  },

  "chemical-peel": {
    img: ChemicalPeelImg,
    eyebrow: "Advanced Skin Renewal",
    title: "Advanced Chemical Peel Treatments",
    tagline: "Reveal Smoother, Brighter, and Healthier Skin",
    intro:
      "Chemical Peels are highly effective for improving skin texture, reducing pigmentation, minimizing acne scars, and restoring a youthful glow.",
    introDetail:
      "By gently exfoliating the outer layers of damaged skin, the treatment encourages natural skin renewal and reveals fresher, healthier-looking skin.",
    processTitle: "Chemical Peel Process",
    processDesc:
      "After a detailed skin analysis, our specialists select the most suitable peel formulation for your skin type and concerns. The chemical solution is applied carefully to exfoliate dead skin cells and stimulate new skin growth. The treatment is safe, quick, and supervised for optimal results.",
    processSteps: [
      { title: "Skin Analysis", desc: "Detailed skin assessment to identify concerns and select the most suitable peel type." },
      { title: "Skin Prep", desc: "Skin is cleansed and prepared to ensure even application and optimal peel penetration." },
      { title: "Peel Application", desc: "Customized chemical solution applied carefully to exfoliate dead cells and stimulate renewal." },
      { title: "Treatment Time", desc: "Solution works precisely on the skin under specialist supervision for safe, controlled results." },
      { title: "Post-Care", desc: "Aftercare guidance provided — visible brightening and smoother texture emerge within days." },
    ],
    benefitsIntro:
      "Chemical Peels promote deep skin renewal, targeting pigmentation, acne scars, and uneven texture for visibly clearer and brighter skin.",
    benefits: [
      "Improves skin texture and smoothness",
      "Reduces pigmentation, dark spots, and blemishes",
      "Minimizes acne scars",
      "Brightens dull, uneven skin tone",
      "Reduces fine lines and early aging signs",
      "Promotes healthy skin cell regeneration",
      "Safe, effective, and non-surgical",
    ],
    whyUsTitle: "Why Choose Advanced GroHair & GloSkin Clinic?",
    whyUsDesc:
      "Our experienced skin specialists deliver personalized chemical peel treatments using advanced formulations in a modern, professional clinical environment.",
    whyUs: [
      "Experienced Skin Specialists",
      "Personalized Skin Assessment",
      "Advanced Chemical Peel Solutions",
      "Safe & Professional Treatment Protocols",
      "Modern Clinical Environment",
      "Visible and Long-Lasting Results",
    ],
    ctaTitle: "Book Your Chemical Peel Consultation Today",
    ctaDesc:
      "Achieve clearer, brighter, and rejuvenated skin with Advanced Chemical Peel treatments at Advanced GroHair & GloSkin Karaikal.",
    sessionDuration: "30 – 60 minutes",
    treatmentType: "Skin Resurfacing",
  },

  "photo-carbon-skin-polish": {
    img: PhotoCarbonImg,
    eyebrow: "Advanced Laser Skin Treatment",
    title: "Advanced Photo Carbon Skin Polish",
    tagline: "Achieve Brighter, Clearer, and Rejuvenated Skin",
    intro:
      "Photo Carbon Skin Polish combines activated carbon technology with laser energy to deeply cleanse, exfoliate, and revitalize the skin.",
    introDetail:
      "This treatment reduces pigmentation, controls excess oil, minimizes enlarged pores, and restores a radiant complexion — comfortable and non-invasive.",
    processTitle: "Photo Carbon Skin Polish Process",
    processDesc:
      "A thin layer of medical-grade carbon is applied to the skin. Laser energy targets the carbon particles to exfoliate dead cells, stimulate collagen production, and promote skin renewal. Comfortable, non-invasive, and requires minimal downtime.",
    processSteps: [
      { title: "Consultation", desc: "Skin analysis to evaluate tone, pores, pigmentation, and overall skin health." },
      { title: "Carbon Application", desc: "Medical-grade activated carbon mask applied evenly across the treatment area." },
      { title: "Laser Targeting", desc: "Laser energy directed at carbon particles to vaporize impurities and exfoliate dead cells." },
      { title: "Collagen Stimulation", desc: "Laser energy stimulates collagen production for firmer, smoother, brighter skin." },
      { title: "No Downtime", desc: "Comfortable, non-invasive session completed in 30–45 minutes with immediate radiance." },
    ],
    benefitsIntro:
      "Photo Carbon Skin Polish delivers deep cleansing and rejuvenation using the combined power of activated carbon and targeted laser energy.",
    benefits: [
      "Deeply cleanses and detoxifies skin",
      "Reduces excess oil and acne-causing impurities",
      "Minimizes enlarged pores",
      "Improves skin tone and texture",
      "Reduces pigmentation and tanning",
      "Stimulates collagen production",
      "Enhances radiance and brightness",
    ],
    whyUsTitle: "Why Choose Advanced GroHair & GloSkin Clinic?",
    whyUsDesc:
      "Our team applies advanced carbon laser technology with personalized treatment plans to deliver visible skin rejuvenation safely and effectively.",
    whyUs: [
      "Advanced Carbon Laser Technology",
      "Personalized Treatment Plans",
      "Experienced Skin Specialists",
      "Safe & Non-Invasive Procedures",
      "Modern Clinical Environment",
      "Visible and Lasting Skin Rejuvenation",
    ],
    ctaTitle: "Book Your Photo Carbon Skin Polish Consultation Today",
    ctaDesc:
      "Restore your skin's natural glow and achieve smoother, brighter, and healthier skin with Photo Carbon Skin Polish at Advanced GroHair & GloSkin Karaikal.",
    sessionDuration: "30 – 45 minutes",
    treatmentType: "Laser Skin Rejuvenation",
  },

  "laser-hair-reduction": {
    img: LaserHairImg,
    eyebrow: "Advanced Laser Treatment",
    title: "Advanced Laser Hair Reduction",
    tagline: "Enjoy Smooth, Hair-Free Skin with Lasting Results",
    intro:
      "Laser Hair Reduction safely targets hair follicles to reduce unwanted hair growth on the face and body.",
    introDetail:
      "Suitable for men and women, this long-term solution provides smoother skin while minimizing maintenance — precise, safe, and effective.",
    processTitle: "Laser Hair Reduction Process",
    processDesc:
      "Specialized laser energy is applied to the targeted area, weakening hair follicles and inhibiting future growth without affecting surrounding skin. The treatment is quick, comfortable, and requires minimal downtime.",
    processSteps: [
      { title: "Consultation", desc: "Skin and hair type assessment to customize the laser settings for safe, effective treatment." },
      { title: "Skin Prep", desc: "Treatment area cleansed and prepared — cooling gel applied for comfort." },
      { title: "Laser Application", desc: "Specialized laser energy directed at follicles to weaken and inhibit future hair growth." },
      { title: "Follicle Treatment", desc: "Laser precisely targets follicles without damaging surrounding skin tissue." },
      { title: "Recovery", desc: "Minimal downtime after each session — gradual smooth, hair-free results over multiple sessions." },
    ],
    benefitsIntro:
      "Laser Hair Reduction provides a long-term, low-maintenance solution for smooth skin using precision laser technology calibrated to your skin type.",
    benefits: [
      "Long-term reduction of unwanted hair",
      "Smooth and soft skin texture",
      "Precise follicle targeting",
      "Reduces ingrown hairs",
      "Suitable for face and body",
      "Minimally invasive and safe",
      "Improves confidence and personal comfort",
    ],
    whyUsTitle: "Why Choose Advanced GroHair & GloSkin Clinic?",
    whyUsDesc:
      "Our experienced laser specialists use advanced technology and customized treatment plans to deliver safe, visible, and lasting hair reduction results.",
    whyUs: [
      "Advanced Laser Technology",
      "Experienced Skin & Laser Specialists",
      "Customized Treatment Plans",
      "Safe for All Skin Types",
      "Comfortable & Hygienic Environment",
      "Visible and Lasting Results",
    ],
    ctaTitle: "Book Your Laser Hair Reduction Consultation Today",
    ctaDesc:
      "Achieve smooth, hair-free skin safely and effectively with Laser Hair Reduction at Advanced GroHair & GloSkin Karaikal.",
    sessionDuration: "30 – 60 minutes",
    treatmentType: "Laser Hair Removal",
  },

  "hydra-lift-skin-booster": {
    img: HydraLiftImg,
    eyebrow: "Advanced Skin Hydration",
    title: "Advanced Hydra Lift Skin Booster",
    tagline: "Deep Hydration for Radiant, Youthful Skin",
    intro:
      "Hydra Lift Skin Booster delivers powerful skin-enhancing nutrients deep into the skin to hydrate, boost collagen, improve elasticity, and restore a youthful glow.",
    introDetail:
      "Suitable for all skin types, this treatment is ideal for dehydrated, dull, or aging skin — minimally invasive with immediate visible results.",
    processTitle: "Hydra Lift Skin Booster Process",
    processDesc:
      "Hydrating compounds are delivered to the deeper skin layers using advanced techniques, stimulating collagen production and improving overall skin quality. Treatment is minimally invasive and requires little to no downtime.",
    processSteps: [
      { title: "Skin Assessment", desc: "Analysis of hydration levels, elasticity, and skin quality to tailor the booster protocol." },
      { title: "Treatment Plan", desc: "Personalized hydration and nutrient plan developed for your specific skin needs." },
      { title: "Booster Delivery", desc: "Hydrating compounds delivered deep into the skin layers using advanced techniques." },
      { title: "Collagen Activation", desc: "Nutrients stimulate collagen and elastin production for improved firmness and glow." },
      { title: "Immediate Results", desc: "Visible hydration boost and radiance immediately — little to no downtime required." },
    ],
    benefitsIntro:
      "Hydra Lift Skin Booster replenishes deep skin hydration and stimulates natural collagen for firmer, plumper, and more radiant skin.",
    benefits: [
      "Deeply hydrates and nourishes skin",
      "Improves texture and smoothness",
      "Enhances elasticity and firmness",
      "Reduces fine lines and early aging signs",
      "Restores natural radiance and glow",
      "Safe, effective, and minimally invasive",
    ],
    whyUsTitle: "Why Choose Advanced GroHair & GloSkin Clinic?",
    whyUsDesc:
      "Our skin specialists use advanced booster technology and personalized protocols to deliver visible hydration, firmness, and lasting skin rejuvenation.",
    whyUs: [
      "Advanced Skin Booster Technology",
      "Experienced Skin Specialists",
      "Personalized Treatment Plans",
      "Safe & Hygienic Environment",
      "Visible and Lasting Skin Rejuvenation",
    ],
    ctaTitle: "Book Your Hydra Lift Skin Booster Consultation Today",
    ctaDesc:
      "Revitalize your skin with Hydra Lift Skin Booster for deep hydration and a natural, youthful glow at Advanced GroHair & GloSkin Karaikal.",
    sessionDuration: "45 – 60 minutes",
    treatmentType: "Skin Hydration & Anti-Aging",
  },

  "lip-micropigmentation": {
    img: LipImg,
    eyebrow: "Advanced Cosmetic Enhancement",
    title: "Advanced Lip Micropigmentation",
    tagline: "Enhance Your Natural Beauty with Defined, Fuller Lips",
    intro:
      "Lip Micropigmentation is a semi-permanent cosmetic procedure that improves lip shape, color, and symmetry, creating naturally fuller and youthful lips.",
    introDetail:
      "Comfortable, safe, and long-lasting — this precision treatment enhances your natural lip beauty without the need for daily makeup.",
    processTitle: "Lip Micropigmentation Process",
    processDesc:
      "After consultation, the specialist selects pigments to complement your skin tone. Precision micropigmentation techniques deposit pigment into lips for enhanced definition while maintaining a natural look. Comfortable, safe, and long-lasting.",
    processSteps: [
      { title: "Consultation", desc: "Lip shape, symmetry, and color assessment — personalized design planned to complement your features." },
      { title: "Pigment Selection", desc: "Custom pigments precisely matched to your skin tone for a natural, flattering result." },
      { title: "Lip Mapping", desc: "Precise lip outline crafted to enhance definition, symmetry, and natural fullness." },
      { title: "Micropigmentation", desc: "Pigment deposited with expert precision technique for lasting, even color and definition." },
      { title: "Results", desc: "Naturally fuller, well-defined lips with semi-permanent color that lasts beautifully over time." },
    ],
    benefitsIntro:
      "Lip Micropigmentation enhances your natural lip shape and color using precision pigment placement for a beautiful, lasting result.",
    benefits: [
      "Enhances natural lip color",
      "Improves shape and symmetry",
      "Creates fuller-looking lips",
      "Defines borders and contours",
      "Reduces need for daily lipstick",
      "Restores pale or uneven lips",
      "Safe, minimally invasive, long-lasting",
    ],
    whyUsTitle: "Why Choose Advanced GroHair & GloSkin Clinic?",
    whyUsDesc:
      "Our micropigmentation specialists combine artistic precision with clinical expertise to deliver natural, long-lasting lip enhancement tailored to your unique features.",
    whyUs: [
      "Experienced Micropigmentation Specialists",
      "Personalized Lip Design",
      "Premium Quality Pigments",
      "Safe & Hygienic Environment",
      "Natural, Long-Lasting Results",
    ],
    ctaTitle: "Book Your Lip Micropigmentation Consultation Today",
    ctaDesc:
      "Enhance your lips naturally with Lip Micropigmentation at Advanced GroHair & GloSkin Karaikal. Our specialists will design a personalized enhancement for beautifully defined, lasting results.",
    sessionDuration: "60 – 90 minutes",
    treatmentType: "Semi-Permanent Cosmetics",
  },

  "botox-fillers": {
    img: BotoxFillersImg,
    eyebrow: "Advanced Aesthetic Treatment",
    title: "Advanced Botox & Fillers Treatments",
    tagline: "Smooth, Restore, and Rejuvenate Your Natural Beauty",
    intro:
      "Botox and Dermal Fillers reduce visible signs of aging, restore facial volume, and enhance contours for a refreshed, youthful appearance without surgery.",
    introDetail:
      "Minimally invasive with little to no downtime — delivering natural-looking, balanced results that enhance your features while preserving your individual character.",
    processTitle: "Botox & Fillers Process",
    processDesc:
      "After a detailed facial assessment, Botox is applied to relax targeted muscles, softening wrinkles. Dermal Fillers restore volume, enhance contours, and improve balance. Minimally invasive with little to no downtime.",
    processSteps: [
      { title: "Facial Assessment", desc: "Detailed facial mapping of concern areas, volume loss, and aesthetic goals." },
      { title: "Treatment Plan", desc: "Personalized Botox and filler plan developed for natural-looking, balanced results." },
      { title: "Botox Application", desc: "Targeted muscle relaxation to soften wrinkles and fine lines with precision." },
      { title: "Filler Placement", desc: "Volume restoration and contour enhancement using hyaluronic acid-based dermal fillers." },
      { title: "Results", desc: "Natural, refreshed appearance — minimal downtime, results visible within days." },
    ],
    benefitsIntro:
      "Botox and Dermal Fillers work together to address wrinkles, volume loss, and facial asymmetry for a naturally rejuvenated appearance.",
    benefits: [
      "Reduces fine lines and wrinkles",
      "Restores facial volume",
      "Enhances facial contours and symmetry",
      "Quick, safe, and minimally invasive",
      "Long-lasting, natural-looking results",
    ],
    whyUsTitle: "Why Choose Advanced GroHair & GloSkin Clinic?",
    whyUsDesc:
      "Our aesthetic specialists combine advanced injection techniques with personalized facial assessments to deliver balanced, natural-looking rejuvenation results.",
    whyUs: [
      "Experienced Aesthetic Specialists",
      "Personalized Facial Assessment",
      "Advanced Injection Techniques",
      "Safe & Hygienic Environment",
      "Natural & Balanced Results",
    ],
    ctaTitle: "Book Your Botox & Fillers Consultation Today",
    ctaDesc:
      "Achieve a youthful, naturally rejuvenated appearance with Botox and Fillers at Advanced GroHair & GloSkin Karaikal. Our specialists will design a personalized plan for refreshed, balanced results.",
    sessionDuration: "30 – 60 minutes",
    treatmentType: "Non-Surgical Aesthetic",
  },

  mnrf: {
    img: MnrfImg,
    eyebrow: "Advanced Skin Rejuvenation",
    title: "Advanced MNRF Treatment",
    tagline: "Renew, Repair, and Rejuvenate Your Skin Naturally",
    intro:
      "MNRF combines microneedling with radiofrequency to stimulate collagen, improve texture, tighten skin, and reduce acne scars and pores.",
    introDetail:
      "Safe, minimally invasive, and effective for comprehensive skin rejuvenation — delivering visible improvement in skin quality with minimal downtime.",
    processTitle: "MNRF Treatment Process",
    processDesc:
      "Fine microneedles create microchannels while RF energy stimulates collagen and elastin production, promoting skin repair. Precision treatment ensures maximum effectiveness with minimal discomfort.",
    processSteps: [
      { title: "Consultation", desc: "Detailed skin analysis — scarring, pore size, and texture concerns mapped for treatment planning." },
      { title: "Skin Prep", desc: "Skin cleansed and topical numbing applied for a comfortable treatment experience." },
      { title: "Microneedling", desc: "Fine microneedles create precise microchannels across the treatment area." },
      { title: "RF Energy", desc: "Radiofrequency energy delivered through the microchannels to stimulate collagen and elastin." },
      { title: "Recovery", desc: "Minimal downtime — progressive skin improvement in texture, firmness, and clarity over weeks." },
    ],
    benefitsIntro:
      "MNRF combines two powerful technologies to address scars, pores, and skin laxity for comprehensive rejuvenation from within.",
    benefits: [
      "Reduces acne scars and blemishes",
      "Improves skin texture and tone",
      "Minimizes enlarged pores",
      "Tightens and firms loose skin",
      "Reduces fine lines and wrinkles",
      "Stimulates collagen and elastin",
      "Safe, minimally invasive, effective",
    ],
    whyUsTitle: "Why Choose Advanced GroHair & GloSkin Clinic?",
    whyUsDesc:
      "Our skin specialists use advanced MNRF technology and personalized treatment plans to deliver comprehensive skin rejuvenation in a safe, hygienic clinical environment.",
    whyUs: [
      "Advanced MNRF Technology",
      "Experienced Skin Specialists",
      "Personalized Treatment Plans",
      "Safe & Hygienic Environment",
      "Minimal Downtime",
      "Natural & Long-Lasting Results",
    ],
    ctaTitle: "Book Your MNRF Treatment Consultation Today",
    ctaDesc:
      "Transform your skin with MNRF treatment at Advanced GroHair & GloSkin Karaikal. Our specialists will design a personalized plan for visible, lasting skin rejuvenation.",
    sessionDuration: "45 – 75 minutes",
    treatmentType: "Skin Rejuvenation",
  },

  "tattoo-removal": {
    img: TattooRemovalImg,
    eyebrow: "Advanced Laser Treatment",
    title: "Advanced Tattoo Removal Treatment",
    tagline: "Remove Unwanted Tattoos Safely & Effectively",
    intro:
      "Laser Tattoo Removal targets tattoo pigments beneath the skin without harming surrounding tissue — perfect for complete removal or lightening for cover-ups.",
    introDetail:
      "Our laser technology works on multiple colors with minimal skin damage, with treatment plans calibrated to ink color, depth, and skin tone.",
    processTitle: "Tattoo Removal Process",
    processDesc:
      "The tattoo is analyzed for size, color, depth, and age. Laser energy breaks down pigments, which are naturally removed by the body. Multiple sessions may be recommended for complete clearance.",
    processSteps: [
      { title: "Tattoo Analysis", desc: "Evaluation of tattoo size, color, ink depth, and age to plan the optimal removal protocol." },
      { title: "Treatment Plan", desc: "Session schedule designed based on tattoo complexity and skin type for gradual safe removal." },
      { title: "Laser Application", desc: "Targeted laser energy applied precisely to break down tattoo pigment beneath the skin." },
      { title: "Pigment Breakdown", desc: "Laser shatters ink particles into tiny fragments that the body processes naturally." },
      { title: "Natural Clearance", desc: "Body eliminates broken-down pigment over time — progressive fading with each session." },
    ],
    benefitsIntro:
      "Laser Tattoo Removal uses precise energy to break down tattoo ink safely, allowing the body to naturally clear the pigment over multiple sessions.",
    benefits: [
      "Safe and effective tattoo reduction",
      "Works on multiple colors",
      "Minimal skin damage",
      "Suitable for small and large tattoos",
      "Gradual fading with natural healing",
      "Non-surgical and precise",
    ],
    whyUsTitle: "Why Choose Advanced GroHair & GloSkin Clinic?",
    whyUsDesc:
      "Our experienced specialists use advanced laser technology and personalized treatment plans to deliver safe, effective tattoo removal in a hygienic clinical environment.",
    whyUs: [
      "Advanced Laser Technology",
      "Experienced Specialists",
      "Personalized Treatment Plans",
      "Safe & Hygienic Environment",
      "Suitable for Various Tattoo Types & Colors",
    ],
    ctaTitle: "Book Your Tattoo Removal Consultation Today",
    ctaDesc:
      "Safely remove unwanted tattoos with laser treatment at Advanced GroHair & GloSkin Karaikal. Our specialists will design a personalized plan for gradual, effective removal.",
    sessionDuration: "15 – 45 minutes",
    treatmentType: "Laser Tattoo Removal",
  },
};

// ---------- Animations ----------
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.55, delay, ease: "easeOut" },
});

// ---------- Component ----------
export default function TreatmentDetail() {
  const { category, slug } = useParams();
  const navigate = useNavigate();

  const t = TREATMENTS[slug];

  if (!t) {
    navigate("/services");
    return null;
  }

  const categoryLabel = category === "hair" ? "Hair Treatments" : "Skin Treatments";
  const backLabel = category === "hair" ? "?tab=hair" : "?tab=skin";

  return (
    <main>
      {/* ── Breadcrumb ─────────────────────────────────────────────── */}
      <div className="border-b border-ink-100 bg-white">
        <div className="container-px mx-auto flex max-w-7xl items-center gap-2 py-3 text-xs text-ink-500">
          <Link
            to={`/services${backLabel}`}
            className="flex items-center gap-1 font-medium hover:text-brand-600 transition-colors"
          >
            <ChevronLeft className="h-3.5 w-3.5" />
            Back to Services
          </Link>
          <span className="text-ink-300">/</span>
          <span>{categoryLabel}</span>
          <span className="text-ink-300">/</span>
          <span className="font-medium text-ink-900 truncate max-w-[160px]">{t.title}</span>
        </div>
      </div>

      {/* ── Hero ───────────────────────────────────────────────────── */}
      <section className="section bg-white">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Text */}
            <motion.div {...fadeUp(0)}>
              <span className="eyebrow">{t.eyebrow}</span>
              <div className="mt-4 h-0.5 w-10 rounded-full bg-brand-gradient" />
              <h1 className="mt-5 text-balance text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl lg:text-5xl">
                {t.title}
              </h1>
              <p className="mt-3 text-lg font-medium text-brand-600">{t.tagline}</p>
              <p className="mt-4 text-base leading-relaxed text-ink-500">{t.intro}</p>

              {/* Meta chips */}
              <div className="mt-6 flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-ink-50 px-4 py-2 text-xs font-medium text-ink-700 ring-1 ring-ink-100">
                  <Clock className="h-3.5 w-3.5 text-brand-500" />
                  {t.sessionDuration}
                </div>
                <div className="inline-flex items-center gap-1.5 rounded-full bg-ink-50 px-4 py-2 text-xs font-medium text-ink-700 ring-1 ring-ink-100">
                  <Shield className="h-3.5 w-3.5 text-brand-500" />
                  {t.treatmentType}
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap gap-3">
                <Button to="/appointment" variant="primary">
                  Book Consultation
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button to="/contact" variant="secondary">
                  Contact Us
                </Button>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              {...fadeUp(0.1)}
              className="relative overflow-hidden rounded-3xl shadow-card"
            >
              <img
                src={t.img}
                alt={t.title}
                className="h-full w-full object-cover"
                style={{ maxHeight: "480px" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/30 via-transparent to-transparent" />
              {/* Badge */}
              <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-2xl bg-white/90 px-4 py-3 shadow-soft backdrop-blur-md">
                <span className="flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-brand-gradient text-white shadow-glow">
                  <Leaf className="h-4 w-4" />
                </span>
                <div className="leading-snug">
                  <div className="text-xs font-semibold text-ink-900">Advanced GroHair & GloSkin</div>
                  <div className="text-[11px] text-ink-500">{clinic.city}</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── About This Treatment ───────────────────────────────────── */}
      <section className="section bg-ink-50/50">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            {/* Text */}
            <motion.div {...fadeUp(0)}>
              <span className="eyebrow">About This Treatment</span>
              <div className="mt-4 h-0.5 w-10 rounded-full bg-brand-gradient" />
              <h2 className="mt-5 text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl">
                What is <span className="bg-brand-gradient bg-clip-text text-transparent">{t.title}?</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink-600">{t.intro}</p>
              <p className="mt-4 text-base leading-relaxed text-ink-500">{t.introDetail}</p>
            </motion.div>

            {/* Highlight cards */}
            <motion.div {...fadeUp(0.1)} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <div className="card">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-glow">
                  <Zap className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-ink-900">Advanced Technology</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">
                  Delivered by experienced specialists using the latest clinical protocols at our {clinic.city} clinic.
                </p>
              </div>
              <div className="card">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-glow">
                  <Shield className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-ink-900">Safe & Effective</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">
                  Every treatment is performed in a safe, hygienic clinical environment with the highest standards of care.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Process Steps ─────────────────────────────────────────── */}
      <section className="section bg-white">
        <div className="container-px mx-auto max-w-4xl">
          <motion.div {...fadeUp(0)} className="text-center">
            <span className="eyebrow">Step by Step</span>
            <div className="mx-auto mt-4 h-0.5 w-10 rounded-full bg-brand-gradient" />
            <h2 className="mt-5 text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl">
              {t.processTitle}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-ink-500">
              {t.processDesc}
            </p>
          </motion.div>

          <div className="mt-12 space-y-5">
            {t.processSteps.map((step, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.07)}
                className="flex items-start gap-5 rounded-2xl bg-ink-50 p-5 ring-1 ring-ink-100"
              >
                <span className="flex h-10 w-10 flex-none items-center justify-center rounded-2xl bg-brand-gradient text-sm font-bold text-white shadow-glow">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h4 className="font-semibold text-ink-900">{step.title}</h4>
                  <p className="mt-1 text-sm leading-relaxed text-ink-500">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefits ──────────────────────────────────────────────── */}
      <section className="section bg-ink-50/50">
        <div className="container-px mx-auto max-w-7xl">
          <motion.div {...fadeUp(0)} className="text-center">
            <span className="eyebrow">Treatment Advantages</span>
            <div className="mx-auto mt-4 h-0.5 w-10 rounded-full bg-brand-gradient" />
            <h2 className="mt-5 text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl">
              Benefits <span className="bg-brand-gradient bg-clip-text text-transparent">Include</span>
            </h2>
            {t.benefitsIntro && (
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-ink-500">
                {t.benefitsIntro}
              </p>
            )}
          </motion.div>

          <motion.div
            {...fadeUp(0.1)}
            className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {t.benefits.map((b, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-soft ring-1 ring-ink-100"
              >
                <span className="mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-full bg-brand-gradient text-white shadow-glow">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm font-medium leading-snug text-ink-700">{b}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Why Choose Us ─────────────────────────────────────────── */}
      <section className="section bg-white">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            {/* Text */}
            <motion.div {...fadeUp(0)}>
              <span className="eyebrow">Our Commitment</span>
              <div className="mt-4 h-0.5 w-10 rounded-full bg-brand-gradient" />
              <h2 className="mt-5 text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl">
                {t.whyUsTitle}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink-500">{t.whyUsDesc}</p>
              <div className="mt-8">
                <Button to="/appointment" variant="primary">
                  Book Consultation
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>

            {/* Checklist */}
            <motion.div {...fadeUp(0.1)} className="space-y-3">
              {t.whyUs.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-2xl bg-ink-50 px-5 py-3.5 ring-1 ring-ink-100"
                >
                  <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-brand-gradient text-white shadow-glow">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm font-medium text-ink-800">{item}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────────── */}
      <section className="section">
        <div className="container-px mx-auto max-w-5xl">
          <motion.div
            {...fadeUp(0)}
            className="overflow-hidden rounded-3xl bg-brand-gradient p-10 text-center shadow-glow sm:p-14"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-white">
              Get Started Today
            </span>
            <h2 className="mt-5 text-balance text-2xl font-bold text-white sm:text-3xl">
              {t.ctaTitle}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/80">
              {t.ctaDesc}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button to="/appointment" variant="secondary">
                Book An Appointment
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Link
                to={`/services${backLabel}`}
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white/90 ring-1 ring-white/30 transition-all duration-300 hover:bg-white/10"
              >
                View All Treatments
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
