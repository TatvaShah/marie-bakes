import type { SiteConfig } from "@/lib/types";

const IG = "https://www.instagram.com/mariebakes4u/";

export const site: SiteConfig = {
  name: "Marie Bakes",
  tagline: "Freshly baked, handmade New York style butter cookies for your events.",
  category: "Handmade NY style cookies",
  schemaType: "Bakery",
  area: "",
  siteUrl: "https://marie-bakes.vercel.app",

  theme: {
    preset: "bakery-pastel",
    colors: { accent: "#b85c78" },
  },
  logo: "/images/logo.png",
  showNameWithLogo: true,

  hero: {
    variant: "split",
    eyebrow: "Handmade butter cookies",
    headline: "Premium cookies to make your events tasty and joyful",
    subhead: "Thick, New York style butter cookies, freshly baked with quality ingredients. Boxes of 6 or 12. Send a DM with your date and flavours to order.",
    images: [
      { src: "/images/post-2.jpg", alt: "Chocolate chip walnut cookies by Marie Bakes" },
      { src: "/images/post-3.jpg", alt: "Chocolate chip cookie on a red background" },
      { src: "/images/post-5.jpg", alt: "Double chocolate cookie with nuts" },
    ],
    secondaryCta: { label: "See the cookies", href: "#gallery" },
  },

  highlights: ["Handmade and freshly baked", "New York style", "Boxes of 6 or 12", "Orders by Instagram DM"],

  about: {
    title: "Homemade, premium, made with care",
    body: [
      "Marie Bakes makes freshly baked, handmade butter cookies. Every batch is homemade with quality ingredients, so your parties, gatherings, and gifts are a little more tasty and joyful.",
      "Pick your favourite flavours, choose a box of 6 or 12, and send a message to get your order started.",
    ],
    image: { src: "/images/post-1.jpg", alt: "Freshly baked cookies coming off the tray" },
  },

  menu: {
    title: "The flavours",
    intro: "New York style butter cookies, sold in boxes of 6 or 12.",
    variant: "list",
    showPrices: false,
    priceNote: "Message us for pricing on your box and date.",
    groups: [
      {
        title: "Cookies",
        note: "Box of 6 or 12",
        items: [
          { name: "Double Chocolate Chip" },
          { name: "Lemon Meringue" },
          { name: "Red Velvet" },
          { name: "Chocolate Chip Walnut", href: "https://www.instagram.com/p/Dd2wQNWk0N-/" },
          { name: "Lotus Biscoff" },
          { name: "Espresso Chocolate Chip" },
        ],
      },
      {
        title: "Also from the oven",
        items: [{ name: "Babka" }],
      },
    ],
  },

  gallery: {
    title: "Fresh from the oven",
    items: [
      { src: "/images/post-2.jpg", width: 1056, height: 1400, alt: "Chocolate chip walnut cookies", caption: "Chocolate chip walnut", href: "https://www.instagram.com/p/Dd2wQNWk0N-/" },
      { src: "/images/post-1.jpg", width: 787, height: 1400, alt: "Cookies fresh off the tray", caption: "Freshly baked", href: IG },
      { src: "/images/post-3.jpg", width: 1050, height: 1400, alt: "Chocolate chip cookie", caption: "Chocolate chip", href: IG },
      { src: "/images/post-4.jpg", width: 1050, height: 1400, alt: "Chocolate chip cookie on orange", caption: "Soft centre, golden edges", href: IG },
      { src: "/images/post-5.jpg", width: 1050, height: 1400, alt: "Double chocolate cookie", caption: "Double chocolate", href: IG },
      { src: "/images/post-6.jpg", width: 1080, height: 1080, alt: "Dark chocolate cookie", caption: "Rich and chocolatey", href: IG },
      { src: "/images/post-7.jpg", width: 1080, height: 1080, alt: "Chunky cookie on green", caption: "Loaded with chunks", href: IG },
      { src: "/images/post-8.jpg", width: 1080, height: 1350, alt: "Blue cookie on a blue background", caption: "Something special", href: IG },
    ],
  },

  instagram: {
    handle: "mariebakes4u",
    embeds: [],
  },

  order: {
    title: "Order in a quick DM",
    intro: "Orders are taken through Instagram. Tap the button to copy a starter message, then paste it into the chat.",
    dmMessage: "Hi Marie Bakes! I would love to order some cookies.\nDate needed:\nBox size (6 or 12) or how many people:\nFlavours:\nEvent or design idea:",
    links: [],
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I order?", a: "Send a DM on Instagram with your date, box size, and flavours. We will reply in the chat to confirm your order." },
    { q: "What sizes do the cookies come in?", a: "Our New York style butter cookies come in boxes of 6 or 12." },
    { q: "Which flavours do you make?", a: "Double Chocolate Chip, Lemon Meringue, Red Velvet, Chocolate Chip Walnut, Lotus Biscoff, and Espresso Chocolate Chip." },
  ],

  contact: {
    socials: [{ label: "Instagram @mariebakes4u", href: IG }],
  },

  seo: {
    title: "Marie Bakes | Handmade NY style cookies",
    description: "Freshly baked, handmade New York style butter cookies in boxes of 6 or 12. Double chocolate, red velvet, Lotus Biscoff and more. Order by Instagram DM.",
    keywords: ["New York style cookies", "handmade butter cookies", "cookie boxes", "Marie Bakes cookies"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
