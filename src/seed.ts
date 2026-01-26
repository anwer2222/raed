type Project = {
  slug: string
  title: string
  subtitle: string
  location?: string
  year?: string
  heroImage?: string
  imgs: string[]
  intro: string
  details: {
    'Target Audience': string[]
    'Scope of works': string[]
  }
}

export const Projects: Project[] = [
  {
    slug: 'concordia-design-event',
    title: 'Concordia Design Event - Canada',
    subtitle: 'Identity Design',
    location: 'Canada',
    year: '2016',
    heroImage: '/p101.png',
    imgs: ['/p102.png', '/p103.png', '/p104.png'],
    intro:
      'The objective of the event seeks to bring together the thinkers and doers that are breaking ground and the shaping of new standards in media and design.',
    details: {
      'Target Audience': [
        'Students of Art and design.',
        'Professional Designers.',
      ],
      'Scope of works': [
        'Event identity elements.',
        'Event poster and banner.',
        'Event invitation card & certificates.',
      ],
    },
  },
  {
    slug: 'fabric-frame-exhibition-malaysia-2014',
    title: 'Fabric Frame Exhibition - Malaysia 2014',
    subtitle: 'Identity Design',
    location: 'Malaysia',
    year: '2014',
    heroImage: '/p201.png',
    imgs: ['/p202.png', '/p203.png', '/p204.png'],
    intro:
      'The exhibition seeks to gather many of the international apparel, textile, fashion and fabric manufacturers and leaders.',
    details: {
      'Target Audience': ['Fashion companies.', 'Fabric manufacturers.'],
      'Scope of works': [
        'Logo concept & design.',
        'Exhibition identity elements.',
        'Exhibition poster & banner.',
        'Exhibition invitation card.',
      ],
    },
  },
  {
    slug: 'malaysia-identity-design-2016',
    title: 'Malaysia Identity Design - 2016',
    subtitle: 'Identity Design',
    location: 'Malaysia',
    year: '2016',
    heroImage: '/p301.png',
    imgs: ['/p302.png', '/p303.png', '/p204.png'],
    intro:
      'The copywriter office consists of a group of experts ladies in the process of writing advertising promotional materials, we are responsible for the text on websites, brochures, advertisements, and more.',
    details: {
      'Target Audience': ['Professional adults.', 'Private local business.'],
      'Scope of works': [
        'Logo concept & design.',
        'Poster banner.',
        'Corporate identity design.',
      ],
    },
  },
  {
    slug: 'rose-nest-identity-design-2022',
    title: 'Rose Nest Identity Design - Canada',
    subtitle: 'Identity Design',
    location: 'Canada',
    year: '2022',
    heroImage: '/p401.png',
    imgs: ['/p402.png', '/p403.png', '/p404.png'],
    intro:
      'Rose Nest use only the highest quality of fresh flowers and materials to ensure the perfect bouquet, for corporate orders we offer on-site consultations, we work with each client to bring their visions to life through creativity and style.',
    details: {
      'Target Audience': ['Professional adults.', 'Family and weddings.'],
      'Scope of works': [
        'Logo concept and design.',
        'UX mobile app design.',
        'Poster and banner.',
        'Project mood board.',
      ],
    },
  },
  {
    slug: 'legendi-pure-water-identity-design-2015',
    title: 'Legendi Pure Water - Malaysia',
    subtitle: 'Identity Design',
    location: 'Malaysia',
    year: '2015',
    heroImage: '/p501.png',
    imgs: ['/p502.png', '/p503.png', '/p504.png'],
    intro:
      'Legendi is inspired by the hydrologic cycle, the process by which nature purifies water, distilling it to make every drop as pure as the very first drop of rain before it passes through pollutants.',
    details: {
      'Target Audience': ['Professional adults.', 'Hotels & companies.'],
      'Scope of works': [
        'Logo concept & design.',
        'Poster and banner.',
        'Project mood board.',
      ],
    },
  },
  {
    slug: 'watad-contracting-design-identity-design-2022',
    title: 'Watad Contracting & Design - Saudi',
    subtitle: 'Identity Design',
    location: 'Saudi',
    year: '2022',
    heroImage: '/p601.png',
    imgs: ['/p602.png', '/p603.png', '/p604.png'],
    intro:
      'Founded in 2014 based in the heart of Jeddah, specialized in establishing and building finishing all commercial and residential facilities with decorations exquisite and fashionable indoor & outdoor.',
    details: {
      'Target Audience': [
        'Private project contracts.',
        'Start-up new business.',
      ],
      'Scope of works': [
        'Logo concept & design.',
        'Company profile.',
        'Outdoor office sign.',
        'Corporate identity design.',
      ],
    },
  },
  {
    slug: 'ballin-club-identity-design-2021',
    title: 'Ballin Club Identity Design - Saudi',
    subtitle: 'Identity Design',
    location: 'Saudi',
    year: '2021',
    heroImage: '/p701.png',
    imgs: ['/p702.png', '/p703.png', '/p704.png'],
    intro:
      'Ballin Club is unwavering in its dedication to providing a fitness and health-focused lifestyle experience like no other, we pride ourselves on being built upon the foundations of working smarter, not harder education through exercise, fitness with purpose.',
    details: {
      'Target Audience': [
        'School teams and groups.',
        'People interested in physical activity.',
      ],
      'Scope of works': [
        'Logo concept & design.',
        'Posters design.',
        'Outdoor club sign.',
        'Corporate identity design.',
      ],
    },
  },
  {
    slug: 'id-search-identity-design-canada-2014',
    title: 'ID SEARCH Identity Design - Canada',
    subtitle: 'Identity Design',
    location: 'Canada',
    year: '2014',
    heroImage: '/p801.png',
    imgs: ['/p802.png', '/p803.png', '/p804.png'],
    intro:
      'ID-Search has been helping companies around the world sift through mountains of data to arrive at the right decision at the right time, we have done it by digging in developing in-depth understanding of the business the industry and the forces that shape its future.',
    details: {
      'Target Audience': [
        'International companies.',
        'Private local business.',
      ],
      'Scope of works': [
        'Logo concept & design.',
        'Website template design.',
        'Outdoor office sign.',
        'Corporate identity design.',
      ],
    },
  },
  {
    slug: 'house-of-elegance-identity-design-saudi-2017',
    title: 'House of Elegance Identity Design - Saudi',
    subtitle: 'Identity Design',
    location: 'Saudi',
    year: '2017',
    heroImage: '/p901.png',
    imgs: ['/p902.png', '/p903.png', '/p904.png'],
    intro:
      'At House of Elegance they provide an extensive range of ladies fashions, wedding guest outfits, mother of the bride or groom, in addition, they offer a range of outfits and accessories which are suitable for any occasion.',
    details: {
      'Target Audience': ['Brides clothes setup.', 'Wedding families guests.'],
      'Scope of works': [
        'Logo concept and design.',
        'Outdoor store sign.',
        'Corporate identity design.',
        'Concept for interior design.',
      ],
    },
  },
  {
    slug: 'insweet-bites-and-piece-identity-design-canada-2020',
    title: 'Insweet Bites & Piece Identity Design - Canada',
    subtitle: 'Identity Design',
    location: 'Canada',
    year: '2020',
    heroImage: '/p1001.png',
    imgs: ['/p1002.png', '/p1003.png', '/p1004.png'],
    intro:
      'Insweet combine years of experience in direct sourcing and manufacturing of high-quality products to provide you with ingredients & snacks that cater to your tastes. Carrying an extensive organic conventional variety of products, such as nuts, dried fruits, superfoods, snacks, candies, chocolate.',
    details: {
      'Target Audience': [
        'Professional adults ages 25 to 54.',
        'Every consumers love chocolate.',
      ],
      'Scope of works': [
        'Logo concept and design.',
        'Packaging design.',
        'Project mood board.',
      ],
    },
  },
  {
    slug: 'gabas-group',
    title: 'GABAS GROUP',
    subtitle: 'Identity Design',
    location: 'Saudi',
    year: '2015',
    heroImage: '/p1101.png',
    imgs: ['/p1102.png', '/p1103.png', '/p1104.png'],
    intro:
      'Gabas Group provides an extraordinary level of expertise, care, and consideration for all of your international insurance requirements.',
    details: {
      'Target Audience': [
        'Adults in the 31-45 age group.',
        'All company employees.',
      ],
      'Scope of works': [
        'Logo concept and design.',
        'Outdoor store sign.',
        'Corporate identity design.',
      ],
    },
  },
  {
    slug: 'bold-designs-studio',
    title: 'Bold Designs Studio',
    subtitle: 'Identity Design',
    location: 'Saudi',
    year: '2020',
    heroImage: '/p1201.png',
    imgs: ['/p1202.png', '/p1203.png', '/p1204.png'],
    intro:
      'Bold interior design and project coordination service leaves our clients relaxed and excited about their finished home by keeping them up-to-date without being responsible for the day to day running of the project.',
    details: {
      'Target Audience': [
        'Private project contracts.',
        'Start-up new business.',
      ],
      'Scope of works': [
        'Logo concept & design.',
        'Outdoor office sign.',
        'Corporate identity design.',
      ],
    },
  },
  {
    slug: 'canada-2024-photography-luxury-accessories',
    title: 'Canada 2024 - Luxury Accessories Photography',
    subtitle: 'Photography',
    location: 'Canada',
    year: '2024',
    heroImage: '/p1301.png',
    imgs: ['/p1302.png', '/p1303.png', '/p1304.png'],
    intro:
      "Photographic depiction of a luxurious and opulent fashion advertisement featuring an elegant handbag, high-end watches with diamonds on the face, and gold rings, placed atop soft silk fabric against a neutral background. The text 'Luxury Accessories' is presented in an elegant font to convey sophistication.",
    details: {
      'Target Audience': [
        'Women of various ages.',
        'Fashion and luxury brands.',
        'Marketing and advertising professionals.',
      ],
      'Scope of works': [
        'Photography concept and styling.',
        'Product arrangement and lighting.',
        'Post-production and editing.',
        'Brand-aligned typography and layout for ad use.',
      ],
    },
  },
  {
    slug: 'saudi-2025-identity-formula-e-rice',
    title: 'Saudi 2025 - Identity Design for Formula E Race',
    subtitle: 'Identity Design',
    location: 'Saudi',
    year: '2025',
    heroImage: '/p1401.png',
    imgs: ['/p1402.png', '/p1403.png', '/p1404.png'],
    intro:
      'Designing the identity for the champion Formula E race in Jeddah, Saudi Arabia. The Jeddah ePrix is a single-seater, electrically powered Formula E championship event held in Jeddah as part of the 2024–25 season, featuring a shortened circuit and distinctive branding elements inspired by speed, technology, and modern urban settings.',
    details: {
      'Target Audience': [
        'Motor sport enthusiasts.',
        'Sponsors and partners of Formula E.',
        'Event attendees and broadcast audiences.',
      ],
      'Scope of works': [
        'Logo concept and branding system for the race.',
        'Circuit branding, signage, and wayfinding.',
        'Digital and print collateral (posters, programs, social assets).',
        'Merchandise branding and typography guidelines.',
      ],
    },
  },
  {
    slug: 'exlus-shades-detailing-products',
    title: 'EXLUS - Shades & Detailing Products',
    subtitle: 'Brand Identity Development',
    location: 'Saudi Arabia',
    year: '2022',
    heroImage: '/car-thumbnail.png',
    imgs: ['/car1.png', '/car2.png', '/car3.png'],
    intro: 'EXLUS is a premium brand created exclusively for Lexus owners, developed for ALJCS to replace a generic window shade product previously shared with Toyota and other brands. The project began with naming and logo creation and evolved into a full identity system for a complete line of Lexus-exclusive car care products.',
    details: {
      'Target Audience': [ 'Lexus owners seeking premium, exclusive accessories.',
        'Automotive enthusiasts who value luxury-branded car care products.',
        'ALJCS and Lexus dealership networks offering high-end accessories.', ],
      'Scope of works': [ 'Brand naming rooted in Lexus-associated values such as excellence, luxury, and exclusivity.',
        'Logo design and visual identity system for the EXLUS brand.',
        'Packaging and product-line branding for window shades and car care products.',
        'Development of a cohesive brand narrative and premium positioning.',
      ],
    }
  },
  {
    slug: 'twina-brand-identity',
    title: 'TWINA - Brand Identity for Park & Restaurant',
    subtitle: 'Brand Identity Development',
    location: 'Saudi',
    year: '2022',
    heroImage: '/fish-thumbnail.png',
    imgs: ['/fish1.png', '/fish2.png', '/fish3.png'],
    intro: 'TWINA began as a seafood park before expanding into a full restaurant with a completely different atmosphere. B&A was tasked with creating a unified brand identity that could seamlessly represent both experiences, despite their contrasting environments. The solution centered on the shared emotional outcome: great taste and memorable moments that bring families and groups together.',
    details: { 
      'Target Audience': [
        'Families seeking shared dining and leisure experiences.',
        'Groups looking for casual, enjoyable seafood dining.',
        'Visitors to TWINA Park and Restaurant across different age ranges.',
        'Saudi audiences who value culturally aligned, family-friendly environments.',
      ],
      'Scope of works': [
        'Unified brand identity system for both the Park and the Restaurant.',
        'Logo design adaptable to two distinct environments with one cohesive look and feel.',
        'Color palette and visual language development that breaks typical seafood-category expectations.',
        'Brand messaging centered on togetherness and shared experiences.',
        'Experience-driven branding that leverages the Park’s playful atmosphere for children and families.',
      ],
    },
  },
  {
    slug: 'lifestyle-developers-branding',
    title: 'Lifestyle Developers - Corporate Branding',
    subtitle: 'Brand Identity & Positioning',
    location: 'Saudi',
    year: '2021',
    heroImage: '/life-thumbnail.png',
    imgs: ['/life1.png', '/life2.png', '/life3.png'],
    intro: 'Lifestyle Developers is a real estate company based in Jeddah, Saudi Arabia. They approached B&A to elevate their brand and position themselves as community-focused developers committed to raising the standards of living. The challenge involved transforming an existing identity into a more meaningful, community-driven brand without abandoning its original foundation.',
    details: {
      'Target Audience': [
        'Homebuyers seeking elevated living standards and community-focused developments.',
        'Real estate investors looking for modern, socially responsible developers.',
        'Saudi families prioritizing quality, comfort, and community-driven environments.',
        'Stakeholders and partners within the real estate and development sector.',
      ],
      'Scope of works': [
        'Brand repositioning to emphasize community-centric development.',
        'Refinement of existing logo and identity elements to create a modern, cohesive brand.',
        'Development of a visual identity system aligned with elevated living standards.',
        'Creation of brand messaging centered on community, lifestyle, and improved quality of life.',
        'Corporate branding assets supporting the company’s new market positioning.',
      ],
    },
  },    
  {
    slug: 'plus-studio-architecture-interior',
    title: 'Plus Studio - Architecture & Interior',
    subtitle: 'Brand Identity Development',
    location: 'Saudi Arabia',
    year: '2025',
    heroImage: '/plus1.png',
    imgs: ['/plus2.png','/plus3.png','/plus4.png'],
    intro:
      'Plus Studio is an architecture and interior design practice focused on delivering contemporary, human-centered spaces. The project involved developing a brand identity that reflects the studio’s refined design philosophy, attention to detail, and commitment to elevating spatial experiences across residential, commercial, and hospitality projects.',
    details: {
      'Target Audience': [
        'Clients seeking modern, high-end architectural and interior design solutions.',
        'Developers and real estate partners looking for a design-driven studio.',
        'Homeowners and businesses aiming to elevate their spaces with contemporary aesthetics.',
        'Design-conscious audiences who value craftsmanship, functionality, and innovation.',
      ],
      'Scope of works': [
        'Brand identity development reflecting the studio’s architectural philosophy.',
        'The logo features a custom minimalist typeface, refined for clarity and balance.',
        'The U is cleverly transformed into a "+" symbol, reflecting the philosophy of added value.',
        'Collateral design for digital and print communication.',
        'Positioning strategy to communicate the studio’s modern, detail-oriented approach.',
      ],
    },
  }  
]