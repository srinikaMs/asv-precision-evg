# Precision Edge

Build a world-class premium B2B industrial website for ASV Engineering Solutions. This should feel like a Fortune 500 industrial company website — similar to osg.co.jp and itfd.co.in but more modern, animated, and visually rich.
Tech Stack: React + Tailwind CSS + shadcn/ui + React Router + Framer Motion (for animations) + Swiper.js (for carousels) + Three.js or Spline (for 3D elements)
Design Feel: Dark navy hero, clean white sections, precision engineering aesthetic — like a premium German industrial brand meets modern SaaS design.

🎨 DESIGN SYSTEM
Colors:

Primary Blue: #1a4fa0
Dark Navy: #0a1f44
Steel Gray: #2d3748
White: #ffffff
Light Gray BG: #f5f7fa
Accent Blue Light: #e8f0fe
Gold Accent: #d4a017 (for premium badges only)
Text Dark: #1a1a1a
Text Muted: #6b7280
Success Green: #16a34a

Typography:

Headings: Inter 700/800, tight letter spacing
Body: Inter 400, relaxed line height 1.7
Labels/badges: Inter 500, uppercase, letter spacing 0.1em
Numbers/stats: Inter 800, large size

Animations:

Scroll reveal: elements fade up + slide in as user scrolls (use Framer Motion's whileInView)
Counter animation: numbers count up when they enter viewport
Hover effects: cards lift with subtle shadow on hover
Hero: text fade-in sequence on load
3D: rotating gear or precision tool model in hero background
Parallax: subtle background movement on scroll in hero
Carousel: smooth auto-scroll with manual controls


📄 PAGE 1 — HOME
SECTION 1 — PRE-HEADER BAR
Thin 36px bar, dark navy #0a1f44, white text 12px:

Left: Scrolling marquee text — "Authorized Distributor: OSG Japan · Bilz Germany · Boehlerit Austria · Master Fluid USA · Hanboo Korea · Serving Tamil Nadu's precision manufacturing industry since 2015"

Right: Phone icon + "+91 97871 18179" | Email icon + "sales.asvengg@gmail.com"
SECTION 2 — STICKY NAVBAR
White background, box-shadow: 0 2px 20px rgba(0,0,0,0.08) on scroll.

Left: ASV logo (blue gradient box with "ASV" + "Engineering Solutions" below in smaller text + "Tiruvallur, Tamil Nadu" in tiny muted text)

Center: Nav links with dropdown — Products (shows brand submenu on hover), Customers, About, Contact

Right: Phone number + "Get a Quote" blue button

Mobile: Hamburger menu → full screen overlay nav
Products dropdown shows on hover:

OSG — Cutting Tools
Bilz — Tool Holding
Boehlerit — Carbide Inserts
Master Fluid — Metalworking Fluids
Hanboo — Special Tooling

SECTION 3 — HERO (Full Screen, Dark)
Full viewport height. Dark navy gradient background #0a1f44 → #1a3a6e.
Background: Animated 3D rotating precision tool (drill or tap) using Three.js — subtle, slow rotation, steel/metallic material, positioned on right side. If Three.js too complex, use a CSS-animated SVG of a precision gear with slow spin.
Left content (animate in sequence with Framer Motion):

Small badge fades in first: "✦ AUTHORIZED DISTRIBUTOR · TIRUVALLUR" (gold color, uppercase, letter spacing)
H1 fades up: "Precision Tooling Solutions for Tamil Nadu's Manufacturing Industry" (white, 52px, bold)
Subtext fades up with 0.3s delay: "ASV Engineering Solutions supplies high-performance cutting tools, CNC tooling, metalworking fluids and carbide inserts from world-class brands — OSG, Bilz, Boehlerit, Master Fluid, Hanboo — to Tamil Nadu's leading manufacturers." (white 60% opacity, 18px)
Buttons fade up last: "Explore Products →" (filled white button, blue text) + "Talk to Our Expert" (outline white button)

Bottom of hero: 5 brand logo badges in a horizontal row with glass-morphism effect cards — OSG | Bilz | Boehlerit | TRIM | Hanboo — each with country flag emoji and name
Scroll indicator: Animated bouncing arrow at bottom center
SECTION 4 — ANIMATED STATS
White background. 4 stats animate (count up) when scrolled into view:

Est. 2015 — "Trusted Since"
5 → counts to 5 — "Global Brand Authorizations"
21+ → counts to 21 — "Years Customer Relationships"
11 → counts to 11 — "Major Clients Served"

Each stat has a thin blue top border and subtle icon.

SECTION 5 — ABOUT INTRO (2 Column)
Left column — Image side:

Use a high quality industrial machining image from Unsplash (free): https://images.unsplash.com/photo-1581091226825-a6a2a5aee158 (CNC machine close-up). Show with a blue overlay tint. Add a floating card over image: "Ready Stock Available | Fast Delivery Across Tamil Nadu"
Right column — Text content with scroll reveal:

Small eyebrow: "WHO WE ARE"

H2: "Tamil Nadu's Trusted Industrial Tooling Partner"

Body: "Established in 2015, ASV Engineering Solutions is the authorized distributor for five globally reputed manufacturing brands. With over 21 years of deep customer relationships, we supply carbide tools, HSS tools, precision inserts, reamers, coolants, and custom cutting solutions to Tamil Nadu's most demanding manufacturers."

4 tick-list items:

✓ Genuine certified products — no counterfeits

✓ Ready stock for immediate dispatch

✓ Technical consultation by trained application engineers

✓ After-sales support and long-term partnership focus

Button: "Read Our Full Story →"
SECTION 6 — BRANDS CAROUSEL
Light gray background #f5f7fa.

Eyebrow: "OUR PRINCIPALS"

H2: "Authorized Distributor for 5 World-Class Brands"

Subtitle: "Every product we supply comes directly from the manufacturer with full certification and warranty."
Swiper.js carousel — large cards, 1.5 visible at a time, auto-scroll every 4 seconds, manual prev/next arrows, pagination dots.
Card 1 — OSG (Japan) 🇯🇵

Top: Country badge "JAPAN" in red | Brand: "OSG India Pvt. Ltd."

Hero stat: "Est. 1938 · World's #1 in Round Cutting Tools"

Image: https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261 (drill bits close-up)

Description: "OSG Corporation of Japan is the world's largest manufacturer of round cutting tools with the top global market share in taps, drills and end mills. Trusted by precision manufacturers globally for over 85 years."
Deep product breakdown (accordion or tabs inside card):

Taps — High-speed steel and carbide taps for threading operations. Available in metric, inch, pipe thread types. Suitable for aluminum, steel, stainless, cast iron.

Drills — Solid carbide and HSS drills for all machining materials. Available in standard, deep hole, and step drill configurations.

Reamers — Precision reamers for achieving tight hole tolerances. Carbide and HSS. Straight and spiral flute options.

Synchro Holders — Synchronous tapping chucks for rigid tapping on CNC machines. Reduces tap breakage and extends tap life.

Floating Reamer Holders — Self-compensating holders that accommodate misalignment between spindle and hole center. Critical for precision reaming.

Customized Solutions — Special purpose tools designed to customer's specific application drawings.
Bottom of card: Blue "Request Quote" button + "View OSG Products →" link
Card 2 — Bilz (Germany) 🇩🇪

Top: Country badge "GERMANY" in black/gold | Brand: "Otto Bilz (India) Pvt. Ltd."

Hero stat: "Precision Tool Holding · Used in 60+ Countries"

Image: https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1 (machine tool holder)

Description: "Otto Bilz GmbH of Germany manufactures high-precision tool holding systems used worldwide across all machine types. Their clamping technology ensures maximum concentricity and tool life in tapping, drilling and reaming operations."
Deep product breakdown:

CNC Holders — Precision tool holders for CNC machining centers. Available in BT30, BT40, BT50, HSK-A63, HSK-A100 spindle interfaces. Ensures minimal runout for precision work.

Shrink Fit Machines — Induction heating machines for shrink fit tool assembly. Fast, accurate, and damage-free tool clamping using thermal expansion.

Shrink Fit Holders — High-precision holders that grip solid carbide tools using thermal shrinkage. Zero runout, highest concentricity — ideal for micro tools and hard material machining.

Conventional Clamping Systems — ER collet chucks, milling chucks, power chucks and side lock holders for general machining applications. Compatible with all major CNC machine brands.
Bottom: "Request Quote" button
Card 3 — Boehlerit (Austria) 🇦🇹

Top: Country badge "AUSTRIA" | Brand: "Boehlerit GmbH & Co. KG"

Hero stat: "Carbide Specialist · Precision Tools for Every Machining Operation"

Image: https://images.unsplash.com/photo-1567789884554-0b844b597180 (carbide insert close-up)

Description: "Boehlerit of Austria is a leading carbide and tool specialist. With cutting materials, semi-finished products, precision tools and tool systems for milling, turning, drilling and forming — Boehlerit ensures process safety and efficiency on a global scale."
Deep product breakdown:

Turning Inserts — Carbide turning inserts for external and internal turning. Available in CNMG, DNMG, TNMG, VNMG and other ISO geometries. Suitable for steel, stainless, cast iron, aluminum.

Milling Inserts — Indexable milling inserts for face milling, shoulder milling, and pocket milling. Positive and negative rake geometries available.

Drilling Inserts — Indexable drill inserts for high-feed drilling. Available in various grades for ferrous and non-ferrous applications.

Taps — Solid carbide and HSS-E taps for threading. Spiral point, spiral flute, and forming tap geometries for various materials.

Threading Inserts — Single point threading inserts for external and internal thread turning. Metric and inch thread profiles. Multiple pitches available.
Bottom: "Request Quote" button
Card 4 — Master Fluid / TRIM (USA) 🇺🇸

Top: Country badge "USA" | Brand: "Master Fluid Solutions India Pvt. Ltd."

Hero stat: "Est. 1951 · Complete Metalworking Fluid Solutions"

Image: https://images.unsplash.com/photo-1558618666-fcd25c85cd64 (industrial fluid/coolant)

Description: "Master Fluid Solutions (MFS) is a USA-based complete metalworking fluid manufacturer operating since 1951. Present in India since 2013. ASV Engineering Solutions has been their authorized distributor since 2015."
Deep product breakdown:

MicroSol® Emulsions — Water-soluble metalworking fluids with micro-emulsion technology. Superior cooling, lubrication, and corrosion protection. Extended sump life. Ideal for grinding, turning, milling.

Semisynthetics — Semi-synthetic fluids combining oil-based lubrication with water-based cooling. Excellent for high-speed operations. Low foaming, clean running.

Neo-Synthetics — Advanced synthetic formulations for high-performance machining. Provides superior lubricity and tool life. Compatible with aluminum, titanium, and exotic alloys.

Full Synthetics — 100% oil-free synthetic metalworking fluids. Best for grinding and fine machining. Crystal clear for easy monitoring. Excellent corrosion protection.

Straight Cutting Oils — Undiluted petroleum-based cutting oils for heavy-duty tapping, broaching, and gear cutting. Maximum lubrication for difficult operations.

Coolant Maintenance Equipment — Sump cleaners, tramp oil separators, coolant recycling systems, pH testing kits, refractometers. Complete coolant management solutions.

Rust Preventive Water Based Oil — Water-dilutable rust preventive for ferrous parts. Short-term and long-term storage protection.
Speciality callout box inside card:

✓ Superior ferrous and non-ferrous corrosion protection

✓ High lubricity for extended tool life

✓ Low residue and clean running

✓ Excellent foam control

✓ Extended sump life

✓ Trouble-free operation
Card 5 — Hanboo (Korea) 🇰🇷

Top: Country badge "KOREA" | Brand: "Hanboo India Pvt. Ltd."

Hero stat: "Total Tooling · Complicated Tooling Solutions"

Image: https://images.unsplash.com/photo-1537462715879-360eeb61a0ad (precision machined parts)

Description: "Hanboo India specializes in complicated and special-purpose tooling solutions. Their Total Tooling approach covers complex, non-standard tooling requirements that standard catalogue tools cannot solve — engineered to your exact specification."
Deep product breakdown:

Special Purpose Tools — Non-standard tools designed from scratch for specific machining operations. Step drills, form tools, combination tools, multi-diameter reamers.

Complicated Tooling Solutions — Complex assemblies for engine component machining, transmission housing, brake systems, and hydraulic components. Multi-spindle heads, gang tooling, and modular tooling systems.

Total Tooling Concept — Complete tool management approach — from tool design and supply to reconditioning and performance tracking. One partner for all tooling needs.
SECTION 7 — DEEP PRODUCT EXPLORER (New Section)
White background.

Eyebrow: "PRODUCT CATEGORIES"

H2: "Everything Your CNC Floor Needs"

Subtitle: "From cutting tools to coolants — we supply the complete range of precision tooling products."
Interactive tab system with 5 tabs — clicking each tab shows that brand's detailed products:
Tab 1 — Cutting Tools (OSG)

3-column product card grid:

Card: Taps — Icon of tap tool — "Threading solutions for all materials — steel, aluminum, stainless, cast iron. Metric and inch. Spiral, plug, bottom, forming." — "Available: M1 to M100"
Card: Drills — "Solid carbide and HSS drills. Standard, deep hole, step drills. Sub-micron carbide grade for long tool life."
Card: Reamers — "Precision hole finishing tools. Tight tolerances H6/H7. Carbide and HSS. Straight and spiral flute."
Card: Synchro Holders — "Synchronous tapping chucks for CNC rigid tapping. Reduces tap breakage by 60%."
Card: Floating Reamer Holders — "Self-compensating floating holders. Critical for precision line boring and reaming."
Card: Custom Tools — "Special tools to your drawing. Lead time: 2-4 weeks. For complex geometries."

Tab 2 — Tool Holding (Bilz)

CNC Holders — BT30/BT40/BT50/HSK
Shrink Fit Systems — Induction heating + holders
Collet Chucks — ER16/ER20/ER32/ER40
Milling Chucks — Heavy duty side lock

Tab 3 — Carbide Inserts (Boehlerit)

Turning Inserts — ISO geometries (CNMG/DNMG/TNMG)
Milling Inserts — Face/shoulder/pocket
Threading Inserts — Metric/inch profiles
Drilling Inserts — Indexable drill heads

Tab 4 — Metalworking Fluids (TRIM)

Emulsions — Water soluble fluids
Synthetics — Oil-free high performance
Cutting Oils — Straight oils for heavy duty
Coolant Equipment — Maintenance systems

Tab 5 — Special Tooling (Hanboo)

Special Purpose Tools
Complicated Assemblies
Total Tooling Management

SECTION 8 — INDUSTRIES SERVED
Dark navy background #0a1f44. White text.

Eyebrow: "INDUSTRIES WE SERVE"

H2: "Built for Tamil Nadu's Most Demanding Manufacturers"
Horizontal scroll carousel on mobile, 3-column grid on desktop.

6 industry cards with icon + name + description + hover effect (card brightens):

🚗 Automotive & Auto Components — "Brake drums, engine blocks, transmission housings, axles — we supply tools for every auto component machining operation."
✈️ Aerospace — "Tight tolerances, exotic materials — titanium, Inconel, composites. OSG and Boehlerit tools engineered for aerospace-grade precision."
🏗️ Heavy Engineering — "Large component machining for pumps, valves, pressure vessels, and structural components."
⚙️ Tool & Die Manufacturing — "Mould making, die casting tool maintenance, punch and die reconditioning support."
🔧 General Machining & Job Shops — "CNC turning, milling, drilling, grinding — complete tooling solutions for job shops of all sizes."
🏭 Fabrication & Process Industry — "FLSmidth-type heavy fabrication, cement plant components, mining equipment machining."

SECTION 9 — OUR VALUED CUSTOMERS
White background.

Eyebrow: "OUR CUSTOMERS"

H2: "Trusted by India's Leading Manufacturers"

Subtitle: "21+ years of uninterrupted supply relationships with Tamil Nadu's top engineering companies."
Auto-scrolling logo marquee (two rows, opposite directions — like linear infinite scroll):

Row 1 (left to right): Brakes India | Turbo Energy | ABI-Showatech | Wheels India Limited | Sundram Fasteners Limited | Axles India Limited

Row 2 (right to left): Real Talent Engineering | Sundaram-Clayton Limited | Hyundai WIA | SOMIC ZF Components | FLSmidth
Since actual logos unavailable, use styled text-logo cards — company name in bold on white card with blue left border. On hover: card background turns light blue.
Below marquee: 3 testimonial-style stat cards:

"11 Major clients including TVS Group companies, Hyundai WIA, and FLSmidth"
"21+ Years of continuous supply relationships"
"Zero counterfeit — 100% genuine brand-direct supply"

SECTION 10 — HOW WE WORK (Process)
Light gray background.

Eyebrow: "OUR PROCESS"

H2: "From Enquiry to Delivery — Simple and Fast"
Horizontal step timeline with connecting line:

Step 1: 📋 Share Requirement — "Tell us your material, machine, and operation. Call, WhatsApp, or fill the form."

Step 2: 🔍 Technical Recommendation — "Our application engineer selects the right tool, grade, and geometry for your specific job."

Step 3: ✅ Quotation in 24 Hours — "Clear pricing from genuine brand stock. No hidden charges."

Step 4: 📦 Ready Stock Delivery — "Most products available ex-stock. Delivered to your factory across Tamil Nadu."

Step 5: 🔧 After-Sales Support — "Performance tracking, tool life analysis, and ongoing technical support."
Each step has a number badge + icon + title + description. Scroll reveal animation — steps appear one by one from left to right.
SECTION 11 — WHY ASV
White background.

H2: "Why Manufacturers Choose ASV Engineering Solutions"
2-column layout:

Left — Large image: https://images.unsplash.com/photo-1581092160562-40aa08e78837 (precision machining)

Right — 6 animated accordion/expandable items:

✦ Authorized Distributor Status — "We are the officially appointed distributor for OSG Japan, Bilz Germany, Boehlerit Austria, Master Fluid USA, and Hanboo Korea. This means every product you receive is genuine, certified, and carries the manufacturer's full warranty. No parallel imports, no copies."
✦ Ready Stock + Fast Delivery — "We maintain comprehensive stock of fast-moving items at our Tiruvallur warehouse. Most standard products are available for same-day or next-day dispatch across Tamil Nadu. We understand that tool downtime = production loss."
✦ 21+ Years Customer Trust — "Our founding team has over 21 years of relationships with Tamil Nadu's manufacturing community. We know your industry, your machines, and your requirements — often before you describe them."
✦ Application Engineering Support — "Our Sales & Application Manager Nandhan D provides hands-on technical guidance — tool selection, speed/feed recommendations, troubleshooting tool failures. We are partners, not just suppliers."
✦ Cost-per-Part Focus — "We don't just sell tools. We help you reduce your cost per machined part by selecting the right tool grade and geometry, optimizing cutting parameters, and extending tool life."
✦ After-Sales Partnership — "Post-sale, we stay engaged — monitoring tool performance, resolving issues, and ensuring you get maximum value from every tool purchase."

SECTION 12 — CTA BANNER
Full width, blue gradient background.

H2: "Ready to improve your machining performance?"

Subtitle: "Talk to our application expert today. We'll recommend the right tooling solution for your specific requirement."

Two buttons: "WhatsApp Us Now" (green) + "Call +91 97871 18179" (white outline)
SECTION 13 — CONTACT PREVIEW
3 columns with icons:

📍 Visit Us — Full address

📞 Call / WhatsApp — Both numbers

✉️ Email Us — Both email addresses
SECTION 14 — FOOTER
Dark navy #0a1f44.

4 columns:

Col 1: ASV logo + tagline + "Authorized distributor of OSG, Bilz, Boehlerit, Master Fluid, Hanboo"

Col 2: Quick Links — Home, Products, Customers, About, Contact

Col 3: Our Brands — OSG Japan, Bilz Germany, Boehlerit Austria, Master Fluid USA, Hanboo Korea

Col 4: Contact — Address, phone, email, WhatsApp

Bottom bar: Copyright + "Designed with precision for a precision business"

📄 PAGE 2 — PRODUCTS (Deep)
Hero: Dark navy, H1: "Our Product Range", breadcrumb nav
For each brand — full dedicated section with:

Brand header with country badge + founded year + HQ location
Brand story paragraph
Product cards grid (each card: product name + deep description + specifications + applications + image from Unsplash)
"Request Quote" CTA

OSG Section Images:

Taps: https://images.unsplash.com/photo-1572635196237-14b3f281503f

Drills: https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261

📄 PAGE 3 — CUSTOMERS
Hero: "Our Valued Customers — 21 Years of Manufacturing Partnerships"
Full page with:

Customer logo wall (styled cards — 4 column grid)
Industry breakdown: "X clients from Automotive | Y from Heavy Engineering"
Short paragraph for each major customer group
"Join our customer family" CTA at bottom


📄 PAGE 4 — ABOUT
Sections:

Company Story — Timeline from founding to today
Our Mission — "To deliver precision tooling solutions that enhance productivity and reduce cost-per-part for Tamil Nadu's manufacturers"
Our Values — 4 cards: Genuineness, Expertise, Speed, Partnership
Our Team — Mr. A. Suresh (Proprietor) + Nandhan D (Sales Manager)
Our Brands — Why these 5 brands were chosen
Location Map — Google Maps embed


📄 PAGE 5 — CONTACT
Full page:

Hero: "Get in Touch — We respond within 2 hours"
2-column: Form (left) + Details (right)
Form fields: Name, Company, Designation, Phone, Email, Brand Interest (dropdown), Product Type, Quantity/Requirement, Message
Map embed below form
WhatsApp direct link button


🎬 ANIMATIONS SUMMARY
Apply these throughout:

Hero entrance — staggered fade-up (badge → H1 → subtitle → buttons → brand logos)
Scroll reveal — all sections fade up when entering viewport (Framer Motion whileInView, initial={{ opacity:0, y:40 }}, animate={{ opacity:1, y:0 }})
Counter animation — stats count up on scroll entry
Card hover — transform: translateY(-6px) + subtle shadow on hover
Brand carousel — Swiper.js with autoplay, loop, prev/next arrows
Customer marquee — CSS infinite scroll animation, two rows opposite direction
Process timeline — steps animate in left to right with 0.2s stagger
Navbar — transparent on hero, white + shadow when scrolled
3D hero element — rotating gear SVG with CSS animation (slow 20s rotation)
Tab switching — smooth fade transition between product tabs


📱 MOBILE REQUIREMENTS

Full hamburger menu with slide-in drawer
Hero text 28px on mobile (52px desktop)
Carousels become single card swipeable on mobile
Stats row becomes 2x2 grid on mobile
All grids stack to single column on mobile
WhatsApp floating button always visible on mobile
Touch-friendly tap targets minimum 44px
Fast load — lazy load all images


⚡ FLOATING ELEMENTS (On All Pages)

WhatsApp Button — Fixed bottom right, green #25D366, WhatsApp icon, links to https://wa.me/917338936926?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20your%20products. — pulsing ring animation
Call Button — Fixed bottom right above WhatsApp, blue, phone icon, tel:+919787118179
Back to Top — Appears after scroll, bottom right corner



📋 Follow-Up Prompts for Lovable (Use One at a Time)
After home page is built:

Add Framer Motion scroll reveal animations to every section. Each section should fade up from y:40 to y:0 with opacity 0 to 1 when it enters the viewport. Stagger child elements by 0.1s each.

For counter animation:

Add animated number counters to the stats section. When the stats section enters the viewport, numbers should count up from 0 to their target value over 2 seconds using useEffect and requestAnimationFrame.

For brand carousel:

Install and configure Swiper.js for the brands carousel. Cards should be 480px wide, show 1.2 cards at a time, autoplay every 5 seconds, have prev/next arrow buttons, and loop infinitely.

For customer marquee:

Create a CSS infinite scroll marquee for the customer logos section. Two rows — top row scrolls left, bottom row scrolls right. Each row contains the customer name cards repeated twice for seamless looping. Pause on hover.

For mobile nav:

Fix mobile navigation — hamburger icon (3 lines) toggles a full-screen overlay menu with all nav links in large text, close button at top right, and animated slide-in from right.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://asv-precision-evg.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/4ca3ef1e-f087-4845-a8cf-67fce84c84f5).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
