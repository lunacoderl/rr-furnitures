/**
 * RR Enterprises — SERVICES DATA SCHEMA
 * Single source of truth for all 7 confirmed furniture services.
 * Powers the Services list, reusable ServiceDetail template, home showcases, and contact dropdown.
 */

export const services = [
  {
    id: "01",
    slug: "custom-sofa-design",
    title: "Custom Sofa Design",
    shortTitle: "Custom Sofa",
    category: "Design & Customization",
    shortDescription: "Tailored sofa aesthetics, dimensions, fabrics, and foam comfort engineered to fit your specific room architecture.",
    overview: "Every home has unique dimensions and personal aesthetic preferences. At RR Enterprises, our custom sofa design service lets you choose the exact style, seating capacity, corner alignment, upholstery fabric, and foam density suited to your living space.",
    accent: "#651F2A", // Deep Burgundy
    accentName: "Burgundy",
    icon: "Sofa",
    heroImage: "/images/sofas/sofawork-01.png",
    
    highlights: [
      "Custom Frame Architecture",
      "Expansive Fabric & Velvet Selections",
      "Targeted Foam Densities & Cushioning",
      "Precision Sizing for Living Rooms"
    ],
    
    whatWeOffer: [
      {
        title: "Architectural Form & Style",
        description: "Choose between modern minimalist sectionals, Chesterfield styles, L-shapes, U-shapes, or modular arrangements tailored to your layout."
      },
      {
        title: "Upholstery & Fabric Palette",
        description: "Select from hundreds of curated fabrics including velvet, linen textures, premium leatherette, and high-durability woven textiles."
      },
      {
        title: "Ergonomic Cushioning & Foam",
        description: "Pick your comfort preference—soft plush lounge cushioning, medium-firm orthopedic support, or multi-density high-resilience foam."
      },
      {
        title: "Artisanal Detailing & Stitches",
        description: "Customized piping, button tufting, fluted channel backs, wooden accents, and metallic leg finishes crafted by master upholsterers."
      }
    ],
    
    process: [
      {
        number: "01",
        step: "Discuss",
        title: "Space & Aesthetic Consultation",
        description: "We review your room dimensions, layout orientation, color preferences, and functional comfort expectations."
      },
      {
        number: "02",
        step: "Design",
        title: "Form & Configuration Selection",
        description: "Finalizing the sectional layout, armrest geometry, backrest height, and cushion proportions."
      },
      {
        number: "03",
        step: "Choose",
        title: "Fabric & Foam Swatch Selection",
        description: "Hands-on choice of cloth texture, stain resistance grades, and high-grade foam cores (Duroflex, MM Foam, etc.)."
      },
      {
        number: "04",
        step: "Craft",
        title: "Joinery, Upholstery & Cushioning",
        description: "Seasoned solid wood frame fabrication, spring/webbing suspension, and master upholstery tailoring in our workshop."
      },
      {
        number: "05",
        step: "Finish",
        title: "Inspection & Final Presentation",
        description: "Rigorous quality check on seam alignment, foam rebound, and protective wrapping ready for your space."
      }
    ],
    
    features: [
      { title: "Personalized Fit", text: "Zero compromises on awkward room dimensions or corner angles." },
      { title: "Material Autonomy", text: "You inspect and choose every layer from frame to outer fabric." },
      { title: "Local Craftsmanship", text: "Direct workshop execution in Ongole with transparent workmanship." },
      { title: "Enduring Form", text: "Built with seasoned structural timber and high-tensile spring supports." }
    ],
    
    tags: ["custom", "sectional", "sofa-design", "l-shape"],
    gallery: [
      "/images/sofas/sofawork-01.png",
      "/images/sofas/sofawork-02.png",
      "/images/sofas/sofawork-03.png",
      "/images/sofas/sofawork-04.png"
    ],
    faq: [
      {
        q: "Can I choose my own sofa cloth and foam grade?",
        a: "Yes! At RR Enterprises, complete customization of fabric catalogs (colors, textures, weaves) and foam densities is central to our process."
      },
      {
        q: "How do we decide the right sofa dimensions for our living room?",
        a: "You can share your room measurements or photos with us on WhatsApp or visit our workshop in Ongole. We will guide you through the ideal proportions."
      }
    ]
  },
  
  {
    id: "02",
    slug: "sofa-manufacturing",
    title: "Sofa Manufacturing",
    shortTitle: "Manufacturing",
    category: "Workshop & Production",
    shortDescription: "End-to-end furniture fabrication with seasoned hardwood framing, heavy-duty suspension, and bench-made tailoring.",
    overview: "At RR Enterprises, we manufacture sofas from the skeletal frame up. By overseeing the woodwork, joint reinforcement, suspension webbing, high-density foam layering, and upholstery in our own workshop, we guarantee structural integrity and immaculate finishing.",
    accent: "#A95743", // Terracotta
    accentName: "Terracotta",
    icon: "Factory",
    heroImage: "/images/sofas/sofaworks-01.png",
    
    highlights: [
      "Rigid Solid Hardwood Joinery",
      "Serpentine Spring & Heavy-duty Webbing",
      "Multi-layer Foam Lamination",
      "Hand-tailored Seams & Edge Finishing"
    ],
    
    whatWeOffer: [
      {
        title: "Structural Frame Fabrication",
        description: "Carefully seasoned wooden framing fortified with corner blocks and dowel joints for decades of durability."
      },
      {
        title: "Ergonomic Core Assembly",
        description: "Integration of high-tensile springs, elastic webbing, and dual-density foam cores that prevent premature sagging."
      },
      {
        title: "Batch & Bespoke Production",
        description: "From individual bespoke living room suites to commercial hospitality seating packages."
      },
      {
        title: "Strict Workshop Quality Control",
        description: "Every sofa undergoes load testing, seam tension checks, and edge alignment before leaving the workshop."
      }
    ],
    
    process: [
      {
        number: "01",
        step: "Frame",
        title: "Timber Milling & Skeleton Joinery",
        description: "Precision cutting of seasoned timber and reinforced corner-blocked frame assembly."
      },
      {
        number: "02",
        step: "Suspension",
        title: "Webbing & Spring Grid Installation",
        description: "Cross-woven elastic webbing and heavy-gauge springs fastened for optimal bounce and support."
      },
      {
        number: "03",
        step: "Foaming",
        title: "Density Mapping & Contouring",
        description: "High-density polyurethane foam sculpted over edges and cushion cores for defined contours."
      },
      {
        number: "04",
        step: "Upholstery",
        title: "Pattern Cutting & Needle Craft",
        description: "Precision cloth tailoring, aligned stitching, button tufting, and tight fabric stretching."
      }
    ],
    
    features: [
      { title: "Direct Workshop Advantage", text: "No middleman markups; direct access to the artisans crafting your furniture." },
      { title: "Engineered Durability", text: "Frames and foundations built to withstand daily family use without loosening." },
      { title: "Custom Internal Specs", text: "Flexibility to choose specific branded foams and suspension grades." }
    ],
    
    tags: ["manufacturing", "workshop", "craftsmanship", "custom"],
    gallery: [
      "/images/sofas/sofaworks-01.png",
      "/images/sofas/sofaworks-02.png",
      "/images/sofas/sofawork-02.png"
    ],
    faq: [
      {
        q: "What types of frames do you use for sofa manufacturing?",
        a: "We utilize seasoned solid timber with heavy-duty corner reinforcements designed to prevent creaking and warping over time."
      }
    ]
  },
  
  {
    id: "03",
    slug: "sofa-repair-restoration",
    title: "Sofa Repair & Restoration",
    shortTitle: "Repair & Restoration",
    category: "Care & Refurbishment",
    shortDescription: "Revitalize sunken cushions, damaged springs, torn upholstery, and wobbling frames to make your beloved sofa look brand new.",
    overview: "Don't discard a sofa with great bones. Our restoration service replaces worn-out foam with high-resilience cores, repairs snapped springs, reinforces loosened frames, and replaces outdated fabric with modern premium textiles.",
    accent: "#7D8467", // Muted Olive / Sage
    accentName: "Sage",
    icon: "Wrench",
    heroImage: "/images/sofas/sofawork-03.png",
    
    highlights: [
      "Sunken Cushion Foam Replacement",
      "Frame Reinforcement & Joint Tightening",
      "Complete Re-upholstery & Fabric Makeover",
      "Spring & Suspension Webbing Overhaul"
    ],
    
    whatWeOffer: [
      {
        title: "Foam Core Replacement",
        description: "Upgrade tired, flattened cushions with fresh high-density foam from trusted brands for like-new bounce."
      },
      {
        title: "Complete Re-upholstery",
        description: "Stripping worn cloth or peeling leatherette and retightening brand new fabrics with updated styling."
      },
      {
        title: "Frame & Spring Stabilization",
        description: "Repairing broken wooden members, re-anchoring loose joints, and replacing worn suspension coils."
      },
      {
        title: "Aesthetic Modernization",
        description: "Converting classic bulky sofas into sleeker contemporary profiles with refreshed leg designs."
      }
    ],
    
    process: [
      {
        number: "01",
        step: "Inspect",
        title: "Structural Assessment",
        description: "Evaluating frame stability, spring condition, and cushion degradation."
      },
      {
        number: "02",
        step: "Strip",
        title: "Deconstruction to Foundation",
        description: "Carefully removing damaged fabric and disintegrating foam to access the wooden core."
      },
      {
        number: "03",
        step: "Repair",
        title: "Frame & Suspension Restoration",
        description: "Fastening loose joints, installing new webbing bands, and balancing spring tension."
      },
      {
        number: "04",
        step: "Re-cushion",
        title: "New Foam & Outer Upholstery",
        description: "Fitting new contoured foam and tailoring fresh upholstery fabric with crisp edge finishing."
      }
    ],
    
    features: [
      { title: "Cost-Effective Transformation", text: "Achieve the look of a brand new designer sofa at a fraction of replacement cost." },
      { title: "Retain Sentimental Pieces", text: "Preserve cherished heritage furniture while updating comfort to modern standards." },
      { title: "Fabric Variety", text: "Choose from our extensive swatch books to perfectly match your current decor." }
    ],
    
    tags: ["repair", "restoration", "reupholstery", "refurbishment"],
    gallery: [
      "/images/sofas/sofawork-03.png",
      "/images/sofas/sofawork-01.png",
      "/images/sofas/sofaworks-03.png"
    ],
    faq: [
      {
        q: "Can you change the sofa color and fabric completely during repair?",
        a: "Absolutely. Full re-upholstery allows you to select any new fabric color, texture, or pattern from our collection."
      }
    ]
  },
  
  {
    id: "04",
    slug: "sofa-cleaning",
    title: "Sofa Cleaning",
    shortTitle: "Sofa Cleaning",
    category: "Care & Hygiene",
    shortDescription: "Deep fabric extraction, stain treatment, dust-mite sanitization, and upholstery refreshing for a healthier home.",
    overview: "Daily use, dust, spills, and allergens build up inside upholstered sofas. Our sofa cleaning service extracts deep-seated grime and deodorizes delicate upholstery fibers, leaving your living room fresh, hygienic, and vibrant.",
    accent: "#3A6073", // Deep Blue
    accentName: "Blue",
    icon: "Sparkles",
    heroImage: "/images/sofas/sofawork-04.png",
    
    highlights: [
      "Deep Fiber Extraction",
      "Stain & Spot Conditioning",
      "Dust-Mite & Allergen Neutralization",
      "Fabric-safe Conditioning"
    ],
    
    whatWeOffer: [
      {
        title: "Fabric-Safe Dust Removal",
        description: "High-suction vacuuming to dislodge fine dust, pet dander, and dry debris trapped deep inside fabric weaves."
      },
      {
        title: "Spot & Spill Treatment",
        description: "Targeted application of gentle cleaning agents to break down stubborn beverage, food, or oil stains."
      },
      {
        title: "Deep Wet Extraction",
        description: "Injection and extraction of cleaning fluids to lift embedded body grime and fabric dullness."
      },
      {
        title: "Odor Removal & Sanitization",
        description: "Leaves cushions smelling fresh without leaving harsh chemical residues or stiff fabric texture."
      }
    ],
    
    process: [
      {
        number: "01",
        step: "Inspect",
        title: "Fabric Fiber Analysis",
        description: "Identifying weave type and color-fastness to select the appropriate cleaning agent."
      },
      {
        number: "02",
        step: "Dry Vac",
        title: "High-Power Dry Extraction",
        description: "Thorough removal of loose surface dirt, crumbs, and crevice dust particles."
      },
      {
        number: "03",
        step: "Spot Clean",
        title: "Targeted Pre-treatment",
        description: "Applying specialized stain removers to high-contact armrests and spill zones."
      },
      {
        number: "04",
        step: "Deep Clean",
        title: "Extraction & Fiber Rejuvenation",
        description: "Deep suction extraction lifting residue and restoring fabric softness and clarity."
      }
    ],
    
    features: [
      { title: "Prolongs Fabric Lifespan", text: "Prevent abrasive dust particles from wearing down textile fibers." },
      { title: "Hygienic Living", text: "Eliminate allergens, microscopic mites, and unpleasant lingering odors." },
      { title: "Color Brightening", text: "Revives the vibrant original hue hidden beneath surface dust." }
    ],
    
    tags: ["cleaning", "hygiene", "sofa-care", "maintenance"],
    gallery: [
      "/images/sofas/sofawork-04.png",
      "/images/sofas/sofawork-01.png"
    ],
    faq: [
      {
        q: "How often should living room sofas be deep cleaned?",
        a: "For optimal hygiene and fabric longevity, we recommend deep cleaning every 6 to 12 months depending on household usage."
      }
    ]
  },
  
  {
    id: "05",
    slug: "chair-cleaning",
    title: "Chair Cleaning",
    shortTitle: "Chair Cleaning",
    category: "Care & Hygiene",
    shortDescription: "Specialized cleaning for dining chairs, ergonomic office chairs, recliners, and accent armchairs.",
    overview: "Dining and study chairs experience continuous high-frequency contact. We clean fabric and upholstered seating surfaces to remove stains, sweat marks, and food spills, restoring an inviting and sanitary look.",
    accent: "#C99A32", // Warm Gold / Mustard
    accentName: "Mustard",
    icon: "Armchair",
    heroImage: "/images/sofas/sofaworks-02.png",
    
    highlights: [
      "Dining Chair Pad Refreshing",
      "Ergonomic Mesh & Fabric Office Chairs",
      "Armchair & Recliner Deep Care",
      "Delicate Piping & Edge Precision"
    ],
    
    whatWeOffer: [
      {
        title: "Dining Suite Refresh",
        description: "Specialized treatment for food spots, beverage spills, and edge grime across all dining seats."
      },
      {
        title: "Executive & Task Chairs",
        description: "Extraction of sweat residue, oil deposits, and dust trapped in high-use work chairs."
      },
      {
        title: "Lounge & Recliner Care",
        description: "Gentle cleaning tailored to complex contours, reclining mechanisms, and plush headrests."
      }
    ],
    
    process: [
      { number: "01", step: "Inspect", title: "Fabric Assessment", description: "Checking textile texture and seam vulnerability." },
      { number: "02", step: "Prep", title: "Dry Suction", description: "Extracting loose debris from seams and joints." },
      { number: "03", step: "Treat", title: "Stain Spotting", description: "Focused cleaning solution for high-friction zones." },
      { number: "04", step: "Finish", title: "Gentle Extraction", description: "Rinsing and moisture extraction for rapid dry time." }
    ],
    
    features: [
      { title: "Spotless Dining", text: "Keeps your dining room welcoming for guests and family meals." },
      { title: "Healthy Workspace", text: "Removes accumulated workplace grime from daily office seating." }
    ],
    
    tags: ["chair-cleaning", "dining-chairs", "armchair", "cleaning"],
    gallery: [
      "/images/sofas/sofaworks-02.png",
      "/images/sofas/sofaworks-04.png"
    ],
    faq: [
      {
        q: "Do you clean dining chair cushions in sets?",
        a: "Yes, we handle complete dining sets of 4, 6, 8 or more chairs with consistent, thorough care."
      }
    ]
  },
  
  {
    id: "06",
    slug: "bed-cleaning",
    title: "Bed Cleaning",
    shortTitle: "Bed Cleaning",
    category: "Care & Hygiene",
    shortDescription: "Sanitizing upholstered headboards, bed bases, and mattress surfaces to eliminate dust and allergens.",
    overview: "Your bedroom should be the cleanest sanctuary in your home. Our bed cleaning service covers upholstered headboards, divan bases, and mattress exteriors, removing dust mites, dead skin buildup, and stubborn stains.",
    accent: "#8B5D7A", // Mauve / Rose
    accentName: "Rose",
    icon: "Bed",
    heroImage: "/images/sofas/sofaworks-03.png",
    
    highlights: [
      "Upholstered Headboard Detailing",
      "Mattress Surface Sanitization",
      "Bed Frame Crevice De-dusting",
      "Gentle Allergen Neutralization"
    ],
    
    whatWeOffer: [
      {
        title: "Tufted Headboard Care",
        description: "Careful cleaning of deep tufts, button depressions, and velvet/linen headboards that collect ambient dust."
      },
      {
        title: "Mattress Surface Hygiene",
        description: "High-grade vacuuming and sanitizing to minimize dust-mite triggers and sweat marks."
      },
      {
        title: "Base & Side Rail Detailing",
        description: "Clearing dust and lint accumulated along lower perimeter borders and fabric borders."
      }
    ],
    
    process: [
      { number: "01", step: "Examine", title: "Inspection", description: "Checking fabric sensitivity on headboards and bases." },
      { number: "02", step: "De-dust", title: "HEPA Extraction", description: "Deep suction targeting unseen dust mite colonies." },
      { number: "03", step: "Sanitize", title: "Targeted Spot Care", description: "Safe spot cleaning on mattress surfaces and edges." },
      { number: "04", step: "Refresh", title: "Sanitizing Deodorization", description: "Restoring fresh air quality to your sleeping space." }
    ],
    
    features: [
      { title: "Allergen Relief", text: "Crucial for households with asthma, allergies, or sensitive skin." },
      { title: "Revitalized Headboards", text: "Keeps upholstered decorative bed backs crisp and dust-free." }
    ],
    
    tags: ["bed-cleaning", "mattress", "headboard", "hygiene"],
    gallery: [
      "/images/sofas/sofaworks-03.png",
      "/images/sofas/sofawork-02.png"
    ],
    faq: [
      {
        q: "Can you clean fabric headboards without damaging wall paint?",
        a: "Yes, our team uses controlled applicator tools specifically designed to protect surrounding walls and flooring."
      }
    ]
  },
  
  {
    id: "07",
    slug: "foam-upholstery",
    title: "Foam & Upholstery Solutions",
    shortTitle: "Foam & Upholstery",
    category: "Materials & Custom Comfort",
    shortDescription: "Custom foam cutting, mattress selections, and vast upholstery fabrics from leading certified manufacturers.",
    overview: "The secret to long-lasting furniture is what lies beneath the cloth. RR Enterprises provides specialized foam supply, custom cutting to any template, and access to premium upholstery fabrics, working with trusted names like Duroflex, M.M. Foam, SureRest, Century Foams, and Darpan Cloth.",
    accent: "#4A3B32", // Deep Earth Charcoal
    accentName: "Charcoal",
    icon: "Layers",
    heroImage: "/images/sofas/sofaworks-04.png",
    
    highlights: [
      "Custom Foam Slicing & Profiling",
      "High Density & Memory Foam Varieties",
      "Darpan Cloth & Luxury Textile Catalogs",
      "Mattress Solutions (Duroflex, SureRest, MM Foam)"
    ],
    
    whatWeOffer: [
      {
        title: "Foam Density Matching",
        description: "From 32-density firm seating bases to 40+ high-resilience cores and soft topping layers."
      },
      {
        title: "Curated Fabric Collections",
        description: "Direct access to Darpan Cloth and premier upholstery swatches in hundreds of shades and textures."
      },
      {
        title: "Custom Cushion Fabrication",
        description: "Bespoke bench cushions, bay window seat pads, floor seating, and outdoor patio foam blocks."
      },
      {
        title: "Mattress Guidance",
        description: "Honest recommendations for mattresses suited to back support and body contouring."
      }
    ],
    
    process: [
      { number: "01", step: "Consult", title: "Usage & Firmness Assessment", description: "Determining whether you need firm orthopedic or soft lounge feel." },
      { number: "02", step: "Measure", title: "Pattern Template Cutting", description: "Measuring exact cushion casings or wooden seats." },
      { number: "03", step: "Select", title: "Brand & Grade Choice", description: "Choosing between Century, Duroflex, MM Foam, or SureRest." },
      { number: "04", step: "Deliver", title: "Core Lamination & Insertion", description: "Encasing foam in protective batting ready for cushion covers." }
    ],
    
    features: [
      { title: "Direct Material Expertise", text: "We explain density numbers and rebound factors so you get the exact comfort you pay for." },
      { title: "Trusted Brand Pedigree", text: "Genuine foam products from top certified brands." },
      { title: "Custom Cut-to-Size", text: "Any irregular shape, L-cut, or thickness created on demand." }
    ],
    
    tags: ["foam", "upholstery", "mattress", "materials"],
    gallery: [
      "/images/sofas/sofaworks-04.png",
      "/images/sofas/sofawork-01.png",
      "/images/sofas/sofaworks-01.png"
    ],
    faq: [
      {
        q: "Can I buy cut foam for my existing sofa or diwan bed?",
        a: "Yes! Bring us your measurements or old cushion covers, and we will cut high-density foam to exact dimensions."
      }
    ]
  }
];

export const serviceCategories = [
  { id: "all", label: "All Services" },
  { id: "custom", label: "Custom Design" },
  { id: "manufacturing", label: "Manufacturing" },
  { id: "repair", label: "Repair & Restoration" },
  { id: "cleaning", label: "Cleaning & Care" },
  { id: "upholstery", label: "Foam & Upholstery" }
];
