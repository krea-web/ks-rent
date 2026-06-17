/**
 * English (en-GB) UI dictionary. Mirrors the structure of src/i18n/it.ts.
 * Keys MUST match it.ts exactly; only the string values are translated.
 */

import { it } from "./it";

export const en: typeof it = {
  // ───── COOKIE CONSENT ─────
  cookie: {
    bannerTitle: "We respect your privacy",
    bannerText:
      "We use necessary technical cookies and, with your consent, analytics and marketing cookies to improve the site and measure campaigns. You can accept, reject or choose which ones to enable.",
    acceptAll: "Accept all",
    rejectAll: "Reject all",
    customize: "Customize",
    save: "Save preferences",
    prefTitle: "Cookie preferences",
    prefIntro:
      "Manage your preferences by category. Necessary cookies are always on as they are essential for the site to work.",
    necessaryTitle: "Necessary",
    necessaryDesc:
      "Essential for the site to function (consent memory, interface preferences). They do not require consent.",
    alwaysOn: "Always on",
    analyticsTitle: "Analytics",
    analyticsDesc:
      "Google Analytics 4: helps us understand how the site is used in aggregate form, to improve it.",
    marketingTitle: "Marketing",
    marketingDesc:
      "Google Ads: measures the effectiveness of advertising campaigns and conversions.",
    morePrivacy: "Privacy Policy",
    moreCookie: "Cookie Policy",
    close: "Close",
  },

  // ───── NAVBAR ─────
  nav: {
    home: "Home",
    fleet: "Fleet",
    fleetSubtitle: "Choose the perfect vehicle",
    fleetDesc: "Seasonal rates and variants on every dedicated page.",
    cars: "Cars",
    twoWheels: "Scooters & Quads",
    deliveryWhere: "Where We Deliver",
    deliveryTitle: "Our cars wherever you are in Gallura.",
    deliverySubtitle: "Airport, port, hotels, villas and straight to the beach.",
    aboutUs: "About Us",
    bookNow: "Book Now",
    siteMap: "Site Map",
    rates: "Rates",
    seeAll: "Full fleet",
    siteMapShort: "Site Map",
    mainPoints: "Main Hubs",
    locCostaSmeralda: "Costa Smeralda Locations",
    locCostaEst: "East Coast Locations",
    beachesCS: "Costa Smeralda Beaches",
    beachesEN: "East & North Coast Beaches",
    locCostaSmeraldaFull: "Costa Smeralda Locations",
    locCostaEstFull: "East Coast Locations",
    beachesCSFull: "Costa Smeralda Beaches",
    locationsAll: "Locations",
    beachesAll: "Beaches",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    themeLight: "Switch to light theme",
    themeDark: "Switch to dark theme",
    siteMapAria: "Site map",
    siteMapFull: "Site map",
    allShort: "All",
    fleetMobileDesc: "Cars, scooters and quads for every need.",
    support: "Support",
    logoAlt: "KS Rent Car Hire Olbia Costa Smeralda",
    deliveryItems: {
      airport: "Olbia Airport",
      port: "Olbia Port",
      costaSmeralda: "Costa Smeralda",
      noCard: "Without Credit Card",
    },
  },

  // ───── FOOTER ─────
  footer: {
    explore: "Explore",
    services: "Our Services",
    vehicles: "Our Vehicles",
    contact: "Contact",
    operatingArea: "Service Area",
    socialFollow: "Follow Us",
    legalCompany: "KS Rent S.R.L.",
    legalVat: "VAT IT03028900904",
    legalRea: "REA SS-224046",
    legalAddress: "Viale Isola Bianca 38, 07026 Olbia (SS), Italy",
    privacyPolicy: "Privacy Policy",
    cookiePolicy: "Cookie Policy",
    cookiePreferences: "Cookie preferences",
    termsConditions: "Terms & Conditions",
    withdrawalRights: "Right of Withdrawal",
    supplierInfo: "Supplier Information",
    privatearea: "Private Area",
    rights: "All rights reserved",
    tagline: "Premium car hire in Costa Smeralda with comprehensive insurance, transparent security deposit and clear contract terms. Freedom to explore, professionalism guaranteed.",
    logoAlt: "KS Rent Luxury Car Hire Olbia",
    whereAndContact: "Where We Are & Contact",
    operationalSeat: "Operational Office (Port)",
    legalSeat: "Registered Office",
    hours: "Hours",
    hoursOpen: "Open 7 days a week",
    callNow: "Call Now",
    emailBtn: "Email",
    destinationsEast: "East Coast Destinations",
    destinationsCS: "Costa Smeralda Destinations",
    bestBeaches: "The Best Beaches",
    companyHeading: "KS RENT S.R.L.",
    addressesLine: "Registered Office: Viale Aldo Moro 367, 07026 Olbia (SS), Italy | Operational Office: Viale Isola Bianca 38 (Port of Olbia)",
    addressesLineLegalLabel: "Registered Office:",
    addressesLineOperationalLabel: "Operational Office:",
    addressesLineLegal: "Viale Aldo Moro 367, 07026 Olbia (SS), Italy",
    addressesLineOperational: "Viale Isola Bianca 38 (Port of Olbia)",
    taxIdLine: "Tax ID / VAT: 03028900904",
    registryLine: "Registered with the Sassari Companies' Register",
    reaLine: "REA: SS - 224046",
    capitalLine: "Share Capital: € 20,000.00 fully paid up",
    pecLine: "Certified email:",
    disclaimer: "Local car hire in Sardinia, fully independent and not affiliated with any other companies sharing the same name elsewhere in Italy.",
    poweredBy: "Powered by",
  },

  // ───── CTA / BUTTONS ─────
  cta: {
    bookNow: "Book Now",
    bookOnline: "Book Online",
    bookWhatsapp: "Book on WhatsApp",
    discoverFleet: "Discover the Fleet",
    seeFleet: "Full fleet",
    discover: "Discover",
    contact: "Contact Us",
    learnMore: "Learn more",
    checkAvailability: "Check Availability",
    backToFleet: "← Full fleet",
    bookThisVehicle: "Book this vehicle",
    discoverVehicle: "Discover",
    shareYourExperience: "Share your experience",
  },

  // ───── COMMON ─────
  common: {
    from: "from",
    perDay: "/day",
    days: "days",
    available: "Available",
    notAvailable: "Not available",
    nextStep: "Next step",
    previous: "Back",
    next: "Next",
    confirm: "Confirm",
    cancel: "Cancel",
    save: "Save",
    loading: "Loading...",
    error: "Error",
    required: "required",
    optional: "optional",
  },

  // ───── HERO HOME ─────
  hero: {
    eyebrow: "Car hire Sardinia",
    titleLine1: "Your freedom",
    titleLine2: "in Costa Smeralda",
    subtitle: "Cars, SUVs, supercars, scooters and quads with home delivery throughout Gallura. No credit card required.",
    badge1: "Free delivery",
    badge2: "No credit card required",
    badge3: "Open 7 days a week",
    h1: "Car Hire Olbia and Costa Smeralda",
    logoAlt: "KS Rent — Car Hire Olbia and Costa Smeralda",
  },

  // ───── FAQ HOME ─────
  faq: {
    title: "Frequently asked questions",
    subtitle: "Everything you need to know before hiring with us",
    eyebrow: "Total Transparency",
    headingPart1: "Frequently",
    headingAccent: "Asked Questions",
    homepageSubtitle: "Everything you need to know about car hire in Olbia and Costa Smeralda: clear terms, full protection and outstanding service.",
    bottomEyebrow: "Behind the Scenes",
    bottomHeadingPart1: "We don't just hire out cars.",
    bottomHeadingAccent: "We Deliver Freedom.",
    bottomSubtitle: "Discover the philosophy of KS Rent S.R.L. and why we have become the benchmark for car hire in Olbia, with comprehensive insurance and clear terms across Costa Smeralda.",
    bottomCta: "Our Philosophy",
  },

  // ───── HOMEPAGE FAQ LIST ─────
  homepageFaqs: [
    {
      q: "Which payment methods do you accept?",
      a: "We offer maximum flexibility: we accept credit cards, prepaid cards, debit cards, ATM cards and cash. The security deposit is handled according to the chosen vehicle.",
    },
    {
      q: "Do you run credit checks or require a banking score?",
      a: "No banking score and no endless paperwork. Our service is built on trust and transparency towards the customer.",
    },
    {
      q: "How does the security deposit work?",
      a: "To safeguard our luxury fleet, a security deposit and an insurance excess apply. The amount depends on the chosen vehicle category and is handled clearly and quickly when signing the contract.",
    },
    {
      q: "Where do you deliver the vehicle?",
      a: "We serve Costa Smeralda and Gallura. In addition to our Olbia offices (Viale Isola Bianca 38 and Viale Aldo Moro 367) and Costa Smeralda Airport, we deliver from Porto Cervo to San Teodoro, including Porto Rotondo, Baja Sardinia, Cannigione, Arzachena, Palau, Murta Maria, Porto San Paolo, Puntaldia and San Pantaleo. We can deliver directly to your villa, hotel or the port.",
    },
    {
      q: "Where can I collect the vehicle if I come to your office?",
      a: "We have two strategic offices in Olbia: the Registered Office at Viale Aldo Moro 367 and the Operational Office at Viale Isola Bianca 38, perfect for guests arriving by ferry or plane.",
    },
    {
      q: "Which documents do I need at pick-up?",
      a: "You will simply need a valid driving licence, your tax code and a valid ID document (ID card or passport).",
    },
    {
      q: "How does the mileage allowance work?",
      a: "Mileage packages vary by vehicle category (city car, premium, scooter or quad). Get in touch and we will tailor the perfect package for your Sardinian itinerary.",
    },
    {
      q: "What happens if there is a breakdown or an accident?",
      a: "No need to worry. We provide active 24/7 assistance. Just call our dedicated number to receive immediate support.",
    },
    {
      q: "Can I cancel or change my booking?",
      a: "Yes, we offer flexible cancellation options. Contact our team on WhatsApp to manage or change your booking dates.",
    },
  ],

  // ───── FLEET SHOWCASE (HOMEPAGE) ─────
  fleetShowcase: {
    eyebrow: "Explore the Fleet",
    headingPart1: "Choose your",
    headingAccent: "Next Thrill",
    intro: "From the perfect city cars for the streets of Olbia to the most exclusive supercars. Every KS Rent vehicle is prepared to give you an impeccable experience.",
    loading: "Loading fleet...",
    fromPerDay: "From",
    perDayShort: "/day",
    priceOnRequest: "Price on request",
    power: "Power",
    accel: "0-100 km/h",
    topSpeed: "Top Speed",
    june: "June",
    july: "July",
    august: "August",
    rentNow: "Hire Now",
    seoText: "KS Rent boasts a varied fleet for every need. From the thrills of supercar hire in Olbia with iconic models (try the rush of Audi RS3 hire in Olbia or BMW M2), through to nimble mobility. If you prefer two wheels, discover our motorbike hire in Olbia to skip the coastal traffic, or have fun off-road with our quad hire in Olbia.",
  },

  // ───── TRUST MARQUEE ─────
  trustMarquee: {
    flexiblePayments: "Flexible Payments",
    transparentDeposit: "Transparent Security Deposit",
    olbiaCostaSmeralda: "Olbia & Costa Smeralda",
    fullInsurance: "Full Insurance Coverage",
    support247: "24/7 Assistance",
    premiumFleet: "Premium Fleet",
    brandAltSuffix: "car hire Olbia KS Rent",
  },

  // ───── MOBILE STICKY CTA ─────
  mobileStickyCta: {
    book: "Book",
    whatsapp: "WhatsApp",
    whatsappPrefill: "Hello, I would like to book a vehicle",
  },

  // ───── WHATSAPP CTA ─────
  whatsappCta: {
    aria: "Chat with us on WhatsApp",
  },

  // ───── REVIEWS ─────
  reviews: {
    eyebrow: "Real Experiences",
    title: "What Our Guests Say",
    subtitle: "Our customers' trust is our greatest achievement.",
    onGoogle: "on Google",
    reviewsCount: "reviews",
    verifiedClient: "Verified Customer",
    cta: "Share your experience",
  },

  // ───── FLEET ─────
  fleet: {
    pageTitle: "Vehicle Fleet",
    catalogEyebrow: "Full catalogue",
    allVehicles: "All our vehicles",
    catalogIntro: "Discover every model in detail: seasonal rates, available variants and recommended destinations.",
    rentRequestPrice: "Rate on request",
    seasonalRates: "Seasonal rates",
    monthlyPrices: "Monthly prices",
    monthlyPricesIntro: "Rates in € per day. Indicative prices: final quotes are confirmed at booking.",
    variant: "Variant",
    selectVariant: "Select variant",
    changeColor: "Change colour",
    variantsAvailable: "variants available",
    gallery: "Gallery",
    allVariants: "All variants",
    idealFor: "Ideal for",
    bestDestinations: "The best-suited destinations",
    specs: {
      category: "Category",
      fuel: "Fuel",
      year: "Year",
      transmission: "Transmission",
      seats: "Seats",
      variants: "Variants",
    },
    readyToDrive: "Ready to drive",
    deliveryAtHome: "Home delivery throughout Gallura and Costa Smeralda. No credit card required.",
  },

  // ───── RATES PAGE ─────
  rates: {
    eyebrow: "Official price list",
    title: "Car Hire Rates Olbia",
    subtitle: "Transparent prices for every vehicle, from April to October. No credit card required, no surprises, no hidden fees.",
    howItWorks: "How our pricing works",
    seasonal: "Seasonal rates",
    seasonalDesc: "April and October are the best-value months. July and August are peak season: book in advance to secure your vehicle.",
    noCard: "No credit card required",
    noCardDesc: "We accept debit cards, prepaid cards (PostePay, Revolut, N26) and cash for the security deposit. No card hold.",
    allInclusive: "All-inclusive",
    allInclusiveDesc: "Rates include insurance, unlimited mileage and free delivery throughout Gallura. No hidden fees.",
    readyToBook: "Ready to book?",
    readyToBookDesc: "Confirm the rates for your dates and choose the perfect vehicle for your Costa Smeralda holiday.",
    listUpdating: "Price list being updated. Contact us directly for a personalised quote.",
  },

  // ───── BOOKING FORM ─────
  booking: {
    pageTitle: "Book Online",
    selectVehicle: "Select the vehicle",
    selectDates: "Select the dates",
    yourData: "Your details",
    review: "Summary",
    pickupDate: "Pick-up date",
    returnDate: "Return date",
    pickupLocation: "Pick-up location",
    returnLocation: "Return location",
    firstName: "First name",
    lastName: "Surname",
    email: "Email",
    phone: "Phone",
    taxCode: "Tax code",
    birthDate: "Date of birth",
    secondDriver: "Add a second driver",
    secondDriverData: "Second driver details",
    licenseFront: "Driving licence (front)",
    licenseBack: "Driving licence (back)",
    submit: "Send request",
    successTitle: "Booking received!",
    successDesc: "We will get in touch shortly to confirm availability.",
  },

  // ───── SERVICES (4 landing pages) ─────
  services: {
    airport: {
      title: "Car Hire Olbia Airport",
      subtitle: "Delivery straight to Olbia Costa Smeralda Airport. No queues at the desk.",
    },
    port: {
      title: "Car Hire Olbia Port",
      subtitle: "We meet you at the ferry arrival at Isola Bianca. Office 5 minutes from the port.",
    },
    costaSmeralda: {
      title: "Car Hire Costa Smeralda",
      subtitle: "Delivery to your hotel, villa or marina. Premium cars for your exclusive holiday.",
    },
    noCreditCard: {
      title: "Car Hire Without Credit Card",
      subtitle: "We accept debit cards, prepaid cards and cash. No card hold.",
    },
  },

  // ───── ABOUT US ─────
  about: {
    pageTitle: "About Us",
    seoTitle: "About Us — KS Rent | Car Hire Olbia Sardinia",
    seoDescription:
      "KS Rent Sardinia: luxury car hire based in Olbia. Owned fleet, home delivery in Costa Smeralda, flexible deposit and no credit card required.",
    breadcrumbTitle: "About Us",

    hero: {
      eyebrow: "KS Rent S.R.L.",
      titlePart1: "Car Hire Olbia",
      titleAccent: "and Costa Smeralda.",
      subtitle:
        "More than just a rental. An experience of pure freedom, designed to elevate every journey across the island.",
    },

    mission: {
      headingPart1: "Born on Sardinian roads, driven by the desire to",
      headingAccent: "rewrite the rules.",
      p1: "We have lived first-hand the frustration of traditional car hire: endless queues, little transparency and incomprehensible clauses.",
      p2: "KS Rent is our answer: a service built on total trust and absolute quality. You land, take the keys, drive away.",
      quote:
        "\"We do not simply rent vehicles, we hand you the key to live the island exactly as it should be lived: in total freedom.\"",
      quoteAuthor: "The Founders",
    },

    vision: {
      badgeYear: "SINCE 2025",
      badgeIn: "In Sardinia",
      eyebrow: "Our Vision",
      heading: "We were not born to be just another agency.",
      p1: "We were born to be the partner we always wished we had met on our own travels. KS Rent was created out of a shared frustration: the endless red tape of traditional car hire.",
      p2Pre: "We decided to change the rules. Our focus is ",
      p2Link1: "car hire in Olbia",
      p2Mid1: " and our goal is for your holiday to begin the very moment you land at ",
      p2Link2: "Olbia Airport",
      p2Mid2: " or disembark at ",
      p2Link3: "Isola Bianca Port",
      p2Post: ".",
      imgAlt: "Scenic Sardinia road KS Rent car hire",
    },

    mentions: {
      eyebrow: "Featured on",
      text1: "KS Rent Sardinia is listed among the recommended car hire companies on the official tourism portal ",
      portalName: "Hello Olbia",
      text2: ", a key information point for visitors to Olbia, Gallura and Costa Smeralda.",
    },

    social: {
      heading: "Live the Experience.",
      subtitle:
        "Join our community. Discover the beauty of Sardinia and step behind the scenes of our exclusive fleet.",
      followCta: "Follow @ksrentsardinia",
      bigImageCaption: "Explore Costa Smeralda in style.",
    },

    locations: {
      eyebrow: "Find Us",
      heading: "Our Olbia Offices",
    },

    identity: {
      eyebrow: "Our Identity",
      heading: "Proudly and Uniquely Sardinian.",
      p1Pre: " is a proudly and uniquely Sardinian company, born to serve luxury tourism in ",
      p1Link1: "Costa Smeralda",
      p1Mid: ". Our operational base is permanently located at the ",
      p1Link2: "Port of Olbia",
      p1Post: " (VAT 03028900904).",
      companyName: "KS Rent S.R.L.",
      p2Pre: "We want to make it clear to our customers that we operate in complete independence and ",
      p2Strong: "have no affiliation",
      p2Post:
        " with any other car hire agencies sharing the same name elsewhere in Italy. KS Rent Sardinia is a brand exclusively rooted in Sardinia.",
    },

    faqHeader: {
      eyebrow: "Total Transparency",
      headingPart1: "Frequently Asked Questions about",
      headingAccent: "KS Rent Sardinia",
    },

    faqs: [
      {
        q: "Who is KS Rent Sardinia?",
        a: "KS Rent S.R.L. (VAT IT03028900904) is a luxury car hire company based in Olbia, Sardinia. Founded in 2025, it is a 100% Sardinian entity, fully independent and not affiliated with any other companies sharing the same name elsewhere in Italy.",
      },
      {
        q: "Where are the KS Rent offices in Olbia located?",
        a: "We have two strategic locations: the Operational Office at Viale Isola Bianca 38 (right at the Port of Olbia, ideal for guests arriving by ferry) and the Registered Office at Viale Aldo Moro 367, convenient for those arriving from the airport. We also deliver to your door throughout Gallura and Costa Smeralda.",
      },
      {
        q: "Which vehicles does KS Rent Sardinia offer?",
        a: "Our fleet includes supercars (Audi RS3, BMW M2), SUVs (Jeep Avenger), premium cars (Mercedes A-Class), city cars (Fiat Panda Hybrid), scooters (Honda SH 125/350) and quads (Yamaha Raptor). Every vehicle is owned by us, meticulously prepared and delivered fully sanitised.",
      },
      {
        q: "Is KS Rent Sardinia the same company as KS Rent Roma?",
        a: "No. KS Rent Sardinia (ksrentsardinia.com), based in Olbia, is a completely separate and unaffiliated entity from KS Rent S.r.l. of Rome (ksrent.it), which operates in long-term rental on a national scale. We are two distinct companies with different VAT numbers.",
      },
      {
        q: "What are KS Rent Sardinia's opening hours?",
        a: "We operate from 10:00 to 22:30, 7 days a week, every day of the year including public holidays. We deliver vehicles to Olbia Airport, the port and throughout Costa Smeralda.",
      },
    ],

    reviews: {
      badgeText: "Your opinion is gold",
      headingPart1: "Become Our",
      headingAccent: "Trusted Reviewer",
      subtitle:
        "We are proud to be listed on Pagine Gialle, the historic Italian portal that certifies business quality. Help us maintain our premium standard by sharing your experience.",
      verifyText:
        "Every review is verified and certified by Pagine Gialle, ensuring the highest level of transparency for you and for future customers.",
      chip1: "Total Transparency",
      chip2: "Certified Quality",
      cta: "Leave a certified review",
    },

    manifest: {
      eyebrow: "Your journey starts here",
      heading: "Ready to Go?",
      subtitle: "The roads of Costa Smeralda are waiting for you.",
    },

    ctaSection: {
      heading: "Choose Your Car",
      subtitle: "Request in under 2 minutes",
      button: "Discover the Fleet",
      prevAria: "Scroll left",
      nextAria: "Scroll right",
      vehicleAltSuffix: "Olbia — KS Rent Sardinia",
    },

    footer: {
      link: "Car hire Olbia",
      tail: " — KS Rent Sardinia, car hire with home delivery throughout Gallura and Costa Smeralda.",
    },
  },

  // ───── NEWSLETTER SIGNUP ─────
  newsletter: {
    heading: "Stay updated",
    subtitle: "Seasonal offers, fleet news and exclusive guides for your Costa Smeralda holiday.",
    emailLabel: "Your email",
    placeholder: "name@email.com",
    submit: "Subscribe",
    submitting: "Sending...",
    success: "Subscription confirmed! Thank you.",
    errorInvalid: "Please enter a valid email address.",
    errorGeneric: "An error occurred. Please try again in a moment.",
    privacy: "By subscribing you accept our Privacy Policy. You can unsubscribe at any time.",
  },

  // ───── DYNAMIC PAGES LOCATIONS / BEACHES ([lang]/[slug].astro) ─────
  dynamicPage: {
    eyebrowLocation: "Pickup & Delivery Point",
    eyebrowBeach: "KS Rent Guide",
    vehicleEyebrow: "Picked for you",
    vehicleHeading: "The ideal vehicle for this destination",
    mapEyebrow: "Location",
    mapHeadingLocation: "How to reach us",
    mapHeadingBeach: "Where it is",
    mapIntroLocation: "Distance from our Olbia offices.",
    mapIntroBeach: "Plan the route from our Olbia offices to this stunning beach.",
    parkingHeading: "Parking & Access Info",
    seatsLabel: "Seats",
    insuredLabel: "Insured",
    discoverVehicle: "Discover this vehicle",
    readyForPrefix: "Ready for",
    bookNowCta: "Book Now",
    noContent: "We are updating this page with the best tips and routes. You can still book your vehicle for this destination.",
    fuel: { Benzina: "Petrol", Diesel: "Diesel" },
    transmissionAutomatic: "Automatic",
    transmissionManual: "Manual",
  },

  // ───── ERROR / 404 ─────
  errors: {
    pageNotFound: "Page not found",
    notFoundDesc: "The page you are looking for does not exist or has been moved.",
    backHome: "Back to home",
    genericError: "An error has occurred",
    notFoundKicker: "Error 404",
    notFoundHeading: "This road leads nowhere",
    notFoundBody: "The link you followed doesn't exist, or the page has moved. Nothing serious — below are our most visited destinations and a way to message us directly.",
    notFoundExploreTitle: "Where would you like to go?",
    quickFleet: "Browse the fleet",
    quickFleetDesc: "Cars, SUVs, supercars, scooters and quads in Olbia and Costa Smeralda",
    quickGuides: "Read the guides",
    quickGuidesDesc: "Itineraries, advice, real costs updated to 2026",
    quickRates: "See the rates",
    quickRatesDesc: "Transparent monthly rates for every vehicle in the fleet",
    quickBook: "Book now",
    quickBookDesc: "Confirm the vehicle and dates — no mandatory credit card",
    notFoundWhatsAppTitle: "Know what you were looking for?",
    notFoundWhatsAppDesc: "Francesco and Salvatore reply in minutes, from 10am to 10:30pm, every day.",
    notFoundWhatsAppCta: "Message us on WhatsApp",
  },

  // ───── BREADCRUMB / GENERIC ─────
  breadcrumb: {
    home: "Home",
    fleet: "Fleet",
    rates: "Rates",
    book: "Book",
  },
};
