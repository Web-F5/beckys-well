export const org = {
  name: "Becky's Well",
  tagline: 'A place to pause, breathe, and find clarity',
  email: 'beckyswell@outlook.com',
  phone: '0419 971 495',
  phoneHref: 'tel:0419971495',
  address: 'Marungi Street, Shepparton, VIC 3630',
  suburb: 'Shepparton',
  region: 'Greater Shepparton, Victoria',
  membership: 'Pregnancy Help Australia',
  facebook: 'https://www.facebook.com',
  founder: 'Hermes Valle Villanueva',
  hours: [
    { label: 'Monday – Friday', value: 'By appointment' },
    { label: 'Saturday', value: 'Closed' },
    { label: 'Sunday', value: 'Closed' },
  ],
  mapEmbedSrc:
    'https://www.google.com/maps?q=Marungi+Street,+Shepparton,+VIC+3630,+Australia&output=embed',
}

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export const services = [
  {
    slug: 'options-counselling',
    title: 'Options Counselling',
    short: 'Clear, unbiased information about adoption, abortion and parenting.',
    description:
      "If you're facing an unplanned pregnancy, we'll sit with you and talk through every option available — adoption, abortion and parenting — without judgement or pressure. Our role isn't to tell you what to choose. It's to make sure you have accurate information and the space to work out what's right for you.",
  },
  {
    slug: 'life-coaching-mentoring',
    title: 'Life Coaching & Mentoring',
    short: 'One-on-one support to help you gain clarity in your decision making.',
    description:
      "Big decisions can feel overwhelming, especially alone. Our life coaching and mentoring sessions are built around you — helping you untangle your thoughts, weigh up what matters most, and move forward with a plan that feels like yours.",
  },
  {
    slug: 'referrals-support-services',
    title: 'Referrals & Practical Support',
    short: 'Connections to counselling, material aid and other professional services.',
    description:
      "You don't have to hold everything on your own. We connect clients with trusted local counsellors, material aid, and other professional and medical services across Greater Shepparton — so the right support is never far away.",
  },
  {
    slug: 'pregnancy-loss-post-abortion-support',
    title: 'Pregnancy Loss & Post-Abortion Support',
    short: 'A gentle, non-judgemental space to process grief and loss.',
    description:
      "Whether you've experienced a miscarriage or need support after an abortion, grief doesn't follow a timeline. We offer a quiet, compassionate space to talk, be heard, and find the support that helps you heal at your own pace.",
  },
]

export const serviceAreaTowns = [
  'Shepparton', 'Mooroopna', 'Kialla', 'Merkel Nook', 'Shepparton East', 'Central Kialla',
  'Congupna', 'Kialla West', 'Mooroopna North', 'Pine Lodge', 'Toolamba', 'Tallygaroopna',
  'Old Toolamba', 'Tatura', 'Undera', 'Karramomus', 'Byrneside', 'Arcadia', 'Cosgrove',
  'Katandra West', 'Caniambo', 'Merrigum', 'Harston', 'Marungi', 'Lancaster', 'Wunghnu',
  'St Germains', 'Drumanure', 'Mundoona', 'Miepoll',
]

export const faqs = {
  general: [
    {
      q: 'Is this service confidential?',
      a: "Yes. Everything you share with us is confidential. You're welcome to reach out on your own terms, and nothing is shared without your consent.",
    },
    {
      q: 'Do I need a referral to come to Becky\'s Well?',
      a: 'No referral is needed — self-referrals are always welcome. You can simply get in touch directly to arrange an appointment.',
    },
    {
      q: 'What happens at a first appointment?',
      a: "There's no set script. We start by listening — to your situation, your worries, and what you need. From there, we talk through the information and support options relevant to you, at a pace that feels comfortable.",
    },
    {
      q: 'Will you tell me what to do?',
      a: "No. Our role is to give you accurate, balanced information and support — not to steer you toward any particular decision. The choice is always yours.",
    },
    {
      q: 'What does it cost?',
      a: "Get in touch and we'll talk you through this — we don't want cost to be a barrier to reaching out.",
    },
    {
      q: 'Do you offer support online?',
      a: 'Yes. Alongside in-person appointments at our Shepparton premises, we also offer support online for anyone in our service area or beyond who prefers to connect remotely.',
    },
  ],
  partners: [
    {
      q: "I'm a partner or father-to-be — can I come too, or come on my own?",
      a: "Absolutely. Unplanned pregnancy and pregnancy loss affect partners too, and you're welcome to attend appointments together or reach out on your own.",
    },
    {
      q: 'What if my partner and I disagree about what to do?',
      a: "That's a common and difficult place to be. We can support you both individually or together, helping each of you feel heard while working toward a decision you can move forward with.",
    },
    {
      q: 'Can men access support after a pregnancy loss or abortion?',
      a: "Yes. Grief and processing after a loss or abortion isn't limited to one person in the relationship. We're glad to support partners through this too.",
    },
  ],
}
