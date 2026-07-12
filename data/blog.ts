export const blogCategories = [
  'Product Knowledge',
  'OEM/ODM',
  'Sourcing',
  'Compatibility',
  'Market Growth',
] as const;

export type BlogCategory = typeof blogCategories[number];

export type BlogArticle = {
  slug: string;
  title: string;
  category: BlogCategory;
  summary: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
  href?: string;
};

export const blogArticles: BlogArticle[] = [
  {
    slug: 'how-to-set-up-wireless-android-auto',
    title: 'How to Set Up Wireless Android Auto: A Practical Guide',
    category: 'Product Knowledge',
    summary: 'Learn the correct setup path for native wireless support, factory-wired Android Auto adapters and vehicles without an original Android Auto system.',
    image: '/images/products/tk-cp01/main-03.webp',
    imageAlt: 'Compact wireless in-car adapter product view',
    href: '/blog/how-to-set-up-wireless-android-auto',
  },
  {
    slug: 'b2b-guide-to-wireless-carplay-adapters',
    title: 'A B2B Buyer’s Guide to Wireless CarPlay Adapters',
    category: 'Product Knowledge',
    summary: 'A practical framework for comparing product scope, vehicle requirements, channel needs and supplier support before starting a wholesale project.',
    image: '/images/products/tk-cp01/detail-01.webp',
    imageAlt: 'Wireless CarPlay adapter beside an in-car display',
    featured: true,
  },
  {
    slug: 'two-in-one-vs-four-in-one-carplay-adapters',
    title: '2-in-1 vs. 4-in-1 CarPlay Adapters: How to Plan Your Product Line',
    category: 'Product Knowledge',
    summary: 'Understand how product positioning and target buyers should guide a focused adapter assortment.',
    image: '/images/catalog/product-b424.webp',
    imageAlt: 'B424 4-in-1 adapter product image',
  },
  {
    slug: 'oem-odm-carplay-project-checklist',
    title: 'OEM/ODM CarPlay Project Checklist for Private-Label Buyers',
    category: 'OEM/ODM',
    summary: 'Organize logo, packaging, appearance, software and approval requirements before sample development.',
    image: '/images/company/factory-01.webp',
    imageAlt: 'TrolinkTek company facility used for OEM and ODM cooperation',
  },
  {
    slug: 'evaluate-carplay-adapter-supplier',
    title: 'How to Evaluate a Wireless CarPlay Adapter Supplier',
    category: 'Sourcing',
    summary: 'Questions importers and distributors can use to review documentation, samples, communication and quality processes.',
    image: '/images/company/quality-control.webp',
    imageAlt: 'Product quality inspection environment',
  },
  {
    slug: 'vehicle-compatibility-checks-before-ordering',
    title: 'Vehicle Compatibility Checks to Complete Before a Wholesale Order',
    category: 'Compatibility',
    summary: 'A clear pre-order workflow for gathering vehicle, system and connector information without making unsupported compatibility claims.',
    image: '/images/products/tk-cp01/detail-02.webp',
    imageAlt: 'CarPlay adapter connection and compatibility illustration',
  },
  {
    slug: 'position-carplay-products-online-marketplaces',
    title: 'Positioning CarPlay Products for Amazon, eBay and Local Channels',
    category: 'Market Growth',
    summary: 'Build clearer listings around buyer intent, product boundaries, compatibility guidance and post-sale support.',
    image: '/images/catalog/product-b432.webp',
    imageAlt: 'B432 wireless CarPlay adapter product image',
  },
  {
    slug: 'questions-before-sourcing-carplay-ai-box',
    title: 'Questions to Ask Before Sourcing a CarPlay Android AI Box',
    category: 'Sourcing',
    summary: 'Define the target use case, required documentation, software expectations and support boundaries before requesting samples.',
    image: '/images/catalog/product-w32.webp',
    imageAlt: 'W32 CarPlay Android AI Box product image',
  },
];
