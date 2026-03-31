"use client"


// import Link from "next/link"
// import Image from "next/image"
// import Header from "@/components/header"
// import Footer from "@/components/footer"
// import ProductCard from "@/components/product-card"
// import { Button } from "@/components/ui/button"
// import { products, collections } from "@/lib/data"
// import { ArrowRight, Truck, RefreshCw, Shield, CreditCard } from "lucide-react"
// import Features from "@/components/features"
// import FAQ from "@/components/faq"

// export default function Home() {
//   const featuredProducts = products.slice(0, 4)
//   const newArrivals = products.filter((p) => p.badge === "New" || p.badge === "Bestseller").slice(0, 4)

//   return (
//     <div className="min-h-screen bg-background">
//       <Header />
//       <main>
//         {/* Hero Section */}
//         <section className="relative h-[80vh] min-h-[600px] flex items-center">
//           <div className="absolute inset-0">
//             <Image
//               src="/homepage/hero3.jpeg"
//               alt="Vistaline"
//               fill
//               className="object-cover"
//               priority
//             />
//             <div className="absolute inset-0 bg-foreground/40" />
//           </div>
//           <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//             <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance">
//               Илүү сайн агаар,
//               <br />
//               Илүү сайн нойр
//             </h1>
//             <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
//               Агаар чийгшүүлэгч + Шөнийн гэрэл + Арома нэг дор
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Link href="/products/raindrop-diffuser">
//                 <Button size="lg" className="min-w-[200px] hover:cursor-pointer">
//                   Захиалах
//                 </Button>
//               </Link>
//               {/* <Link href="/collections/women">
//                 <Button
//                   size="lg"
//                   variant="outline"
//                   className="min-w-[200px] bg-white/10 text-white border-white hover:bg-white hover:text-foreground"
//                 >
//                   Захиалах
//                 </Button>
//               </Link> */}
//             </div>
//           </div>
//         </section>

//         {/* Features Bar */}
//         <section className="bg-muted py-6 border-y border-border">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//               <div className="flex items-center gap-3">
//                 <Truck className="h-6 w-6 text-primary" />
//                 <div>
//                   <p className="font-medium text-foreground text-sm">Шуурхай хүргэлт</p>
//                   <p className="text-xs text-muted-foreground">Хот дотор</p>
//                 </div>
//               </div>
//               <div className="flex items-center gap-3">
//                 <RefreshCw className="h-6 w-6 text-primary" />
//                 <div>
//                   <p className="font-medium text-foreground text-sm">Буцаах боломжтой</p>
//                   <p className="text-xs text-muted-foreground">2 өдрийн дотор</p>
//                 </div>
//               </div>
//               <div className="flex items-center gap-3">
//                 <Shield className="h-6 w-6 text-primary" />
//                 <div>
//                   <p className="font-medium text-foreground text-sm">Чанарын баталгаа</p>
//                   <p className="text-xs text-muted-foreground">1 жилийн баталгаа</p>
//                 </div>
//               </div>
//               <div className="flex items-center gap-3">
//                 <CreditCard className="h-6 w-6 text-primary" />
//                 <div>
//                   <p className="font-medium text-foreground text-sm">Баталгаат төлөлт</p>
//                   <p className="text-xs text-muted-foreground">QPay, COD</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         <Features />

//         {/* Collections Grid */}
//         {/* <section className="py-16">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center mb-12">
//               <h2 className="text-3xl font-bold text-foreground mb-4">Shop by Collection</h2>
//               <p className="text-muted-foreground max-w-2xl mx-auto">
//                 Explore our carefully curated collections designed for every occasion and style preference.
//               </p>
//             </div>
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {collections.slice(0, 3).map((collection) => (
//                 <Link
//                   key={collection.id}
//                   href={`/collections/${collection.id}`}
//                   className="group relative aspect-[4/5] rounded-2xl overflow-hidden"
//                 >
//                   <Image
//                     src={collection.image || "/placeholder.svg"}
//                     alt={collection.name}
//                     fill
//                     className="object-cover transition-transform duration-500 group-hover:scale-105"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
//                   <div className="absolute bottom-0 left-0 right-0 p-6">
//                     <h3 className="text-xl font-semibold text-white mb-2">{collection.name}</h3>
//                     <p className="text-white/70 text-sm mb-4">{collection.description}</p>
//                     <span className="inline-flex items-center gap-2 text-white font-medium text-sm group-hover:gap-3 transition-all">
//                       Shop Now <ArrowRight className="h-4 w-4" />
//                     </span>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </section> */}

//         <FAQ />

//         {/* Featured Products */}
//         {/* <section className="py-16 bg-muted/30">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="flex items-end justify-between mb-8">
//               <div>
//                 <span className="text-sm font-medium text-primary uppercase tracking-wide">Featured</span>
//                 <h2 className="mt-2 text-3xl font-bold text-foreground">Bestselling Pieces</h2>
//               </div>
//               <Link
//                 href="/collections/men"
//                 className="hidden sm:flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
//               >
//                 View All <ArrowRight className="h-4 w-4" />
//               </Link>
//             </div>
//             <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
//               {featuredProducts.map((product) => (
//                 <ProductCard key={product.id} product={product} />
//               ))}
//             </div>
//           </div>
//         </section> */}

//         {/* Banner */}
//         <section className="relative py-24">
//           <div className="absolute inset-0">
//             <Image src="/homepage/cta.png" alt="Агаар чийгшүүлэгч" fill className="object-cover" />
//             <div className="absolute inset-0 bg-foreground/50" />
//           </div>
//           <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//             <span className="text-primary-foreground/80 text-sm font-medium uppercase tracking-wide">Яг одоо захиалаад</span>
//             <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
//               Өвлийн хуурай агаараас салаарай
//             </h2>
//             {/* <p className="text-white/80 mb-8 max-w-xl mx-auto">
//               Shop our premium winter collection at exceptional prices. Quality pieces that will last for seasons to
//               come.
//             </p> */}
//             <Link href="/products/raindrop-diffuser">
//               <Button size="lg" variant="secondary" className="hover:cursor-pointer">
//                 Захиалах
//               </Button>
//             </Link>
//           </div>
//         </section>

//         {/* New Arrivals */}
//         {/* <section className="py-16">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="flex items-end justify-between mb-8">
//               <div>
//                 <span className="text-sm font-medium text-primary uppercase tracking-wide">Just In</span>
//                 <h2 className="mt-2 text-3xl font-bold text-foreground">New Arrivals</h2>
//               </div>
//               <Link
//                 href="/collections/new-arrivals"
//                 className="hidden sm:flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
//               >
//                 View All <ArrowRight className="h-4 w-4" />
//               </Link>
//             </div>
//             <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
//               {newArrivals.map((product) => (
//                 <ProductCard key={product.id} product={product} />
//               ))}
//             </div>
//           </div>
//         </section> */}
//       </main>
//       <Footer />
//     </div>
//   )
// }

// import Head from "next/head";
// import Image from "next/image";
// import { useState, useEffect, useRef } from "react";

// const features = [
//   {
//     icon: "💧",
//     title: "Real Raindrop Effect",
//     desc: "Watch tiny droplets cascade down as a gentle mist fills your room — like a quiet rain shower, indoors.",
//   },
//   {
//     icon: "🌿",
//     title: "Aromatherapy Ready",
//     desc: "Add your favorite essential oils and let ultrasonic atomization carry the scent to every corner.",
//   },
//   {
//     icon: "🌈",
//     title: "7 Mood Colours",
//     desc: "Soft gradient LED lighting shifts through 7 colors to match your evening — from energizing to sleep-ready.",
//   },
//   {
//     icon: "⏱️",
//     title: "4 Timer Settings",
//     desc: "Set it for 2, 4, 8 hours — or let it run all night. Auto shut-off when the water runs out.",
//   },
//   {
//     icon: "🔇",
//     title: "Whisper Quiet",
//     desc: "Ultrasonic tech means almost zero noise. Work, sleep, meditate — you won't hear a thing.",
//   },
//   {
//     icon: "🏠",
//     title: "350ml Tank",
//     desc: "Enough water for a long, uninterrupted session. Wide-mouth design makes refilling effortless.",
//   },
// ];

// const steps = [
//   { num: "01", title: "Fill the tank", desc: "Pour water up to the MAX line. Wide-mouth opening makes this easy." },
//   { num: "02", title: "Add a few drops", desc: "Drop in your favourite essential oil — lavender, eucalyptus, anything you love." },
//   { num: "03", title: "Choose your vibe", desc: "Pick a colour, set the timer, and let the raindrops do their thing." },
// ];

// export default function Home() {
//   const [qty, setQty] = useState(1);
//   const [added, setAdded] = useState(false);
//   const canvasRef = useRef(null);

//   // Animated raindrop particles on canvas
//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext("2d");
//     let animId;
//     let drops = [];

//     function resize() {
//       canvas.width = canvas.offsetWidth;
//       canvas.height = canvas.offsetHeight;
//     }
//     resize();
//     window.addEventListener("resize", resize);

//     for (let i = 0; i < 60; i++) {
//       drops.push({
//         x: Math.random() * canvas.width,
//         y: Math.random() * canvas.height,
//         len: Math.random() * 18 + 6,
//         speed: Math.random() * 1.5 + 0.5,
//         opacity: Math.random() * 0.25 + 0.05,
//       });
//     }

//     function draw() {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       drops.forEach((d) => {
//         ctx.beginPath();
//         ctx.moveTo(d.x, d.y);
//         ctx.lineTo(d.x - 1, d.y + d.len);
//         ctx.strokeStyle = `rgba(160, 220, 255, ${d.opacity})`;
//         ctx.lineWidth = 1;
//         ctx.stroke();
//         d.y += d.speed;
//         if (d.y > canvas.height) {
//           d.y = -d.len;
//           d.x = Math.random() * canvas.width;
//         }
//       });
//       animId = requestAnimationFrame(draw);
//     }
//     draw();

//     return () => {
//       cancelAnimationFrame(animId);
//       window.removeEventListener("resize", resize);
//     };
//   }, []);

//   function handleAdd() {
//     setAdded(true);
//     setTimeout(() => setAdded(false), 2000);
//   }

//   return (
//     <>
//       <Head>
//         <title>Raindrop — Aromatherapy Diffuser & Humidifier</title>
//         <meta name="description" content="Bring the calm of rainfall into your home. Aromatherapy diffuser, humidifier, and LED mood light — all in one." />
//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//         <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
//         <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />
//       </Head>

//       <div className="site">
//         {/* NAV */}
//         <nav className="nav">
//           <span className="nav-logo">raindrop<span className="dot">.</span></span>
//           <a href="#order" className="nav-cta">Shop Now</a>
//         </nav>

//         {/* HERO */}
//         <section className="hero">
//           <canvas ref={canvasRef} className="rain-canvas" />
//           <div className="hero-glow glow-1" />
//           <div className="hero-glow glow-2" />
//           <div className="hero-glow glow-3" />

//           <div className="hero-content">
//             <p className="hero-eyebrow">Ultrasonic Aromatherapy</p>
//             <h1 className="hero-title">
//               Bring the calm<br />
//               <em>of rainfall</em><br />
//               into your home.
//             </h1>
//             <p className="hero-sub">
//               A 3-in-1 raindrop diffuser that humidifies, scents, and softly lights your space — all at once.
//             </p>
//             <div className="hero-actions">
//               <a href="#order" className="btn-primary">Get yours →</a>
//               <a href="#how" className="btn-ghost">See how it works</a>
//             </div>
//           </div>

//           <div className="hero-product">
//             <Image src={'https://s.alicdn.com/@sc04/kf/H0e3fc91c26274f9ab9ef41b551e01c19G.png_960x960q80.jpg'} width={200} height={200} alt="123" />
//           </div>
//         </section>

//         {/* AMBIANCE STRIP */}
//         <div className="ambiance-strip">
//           <span>✦ whisper quiet</span>
//           <span>✦ 350ml tank</span>
//           <span>✦ 7 LED colours</span>
//           <span>✦ auto shut-off</span>
//           <span>✦ essential oil ready</span>
//           <span>✦ 4 timer modes</span>
//         </div>

//         {/* FEATURES */}
//         <section className="features" id="features">
//           <div className="section-header">
//             <p className="section-tag">Why you will love it</p>
//             <h2 className="section-title">Everything your space has been missing.</h2>
//           </div>
//           <div className="features-grid">
//             {features.map((f, i) => (
//               <div className="feature-card" key={i}>
//                 <span className="feature-icon">{f.icon}</span>
//                 <h3 className="feature-name">{f.title}</h3>
//                 <p className="feature-desc">{f.desc}</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* HOW IT WORKS */}
//         <section className="how" id="how">
//           <div className="how-inner">
//             <div className="section-header left">
//               <p className="section-tag">Simple to use</p>
//               <h2 className="section-title">Ready in three steps.</h2>
//             </div>
//             <div className="steps">
//               {steps.map((s) => (
//                 <div className="step" key={s.num}>
//                   <span className="step-num">{s.num}</span>
//                   <div>
//                     <h3 className="step-title">{s.title}</h3>
//                     <p className="step-desc">{s.desc}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* QUOTE */}
//         <section className="quote-section">
//           <blockquote className="quote">
//             Like having a little piece of nature inside your home — the raindrops, the mist, the soft glow. It just feels <em>calm</em>.
//           </blockquote>
//           <p className="quote-attr">— a customer who uses it every night</p>
//         </section>

//         {/* ORDER */}
//         <section className="order" id="order">
//           <div className="order-inner">
//             <div className="order-info">
//               <p className="section-tag">Order yours</p>
//               <h2 className="order-title">Raindrop Aromatherapy Diffuser</h2>
//               <ul className="order-specs">
//                 <li>💧 Ultrasonic cool mist technology</li>
//                 <li>🌈 7-colour gradient LED lighting</li>
//                 <li>⏱️ 2 / 4 / 8 hr timers + continuous</li>
//                 <li>💚 350ml water tank</li>
//                 <li>🌿 Essential oil compatible</li>
//                 <li>🔇 Near-silent operation</li>
//                 <li>🛡️ Auto shut-off when empty</li>
//               </ul>
//             </div>

//             <div className="order-card">
//               <div className="price-row">
//                 <span className="price">₮89,000</span>
//                 <span className="price-note">Free delivery in UB</span>
//               </div>

//               <div className="qty-row">
//                 <span className="qty-label">Quantity</span>
//                 <div className="qty-ctrl">
//                   <button onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
//                   <span>{qty}</span>
//                   <button onClick={() => setQty(qty + 1)}>+</button>
//                 </div>
//               </div>

//               <button className={`btn-order ${added ? "added" : ""}`} onClick={handleAdd}>
//                 {added ? "✓ Added to cart!" : "Add to Cart"}
//               </button>
//               <p className="order-sub">Ships within 1–2 business days · Easy returns</p>
//             </div>
//           </div>
//         </section>

//         {/* FOOTER */}
//         <footer className="footer">
//           <span className="nav-logo">raindrop<span className="dot">.</span></span>
//           <p>Bringing calm to every corner of your home.</p>
//           <p className="footer-copy">© 2025 Raindrop. All rights reserved.</p>
//         </footer>
//       </div>

//       <style jsx global>{`
//         *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
//         html { scroll-behavior: smooth; }
//         body {
//           background: #0b0f14;
//           color: #e8e4dc;
//           font-family: 'DM Sans', sans-serif;
//           font-weight: 300;
//           line-height: 1.6;
//           overflow-x: hidden;
//         }
//       `}</style>

//       <style jsx>{`
//         /* ---- NAV ---- */
//         .nav {
//           position: fixed; top: 0; left: 0; right: 0; z-index: 100;
//           display: flex; align-items: center; justify-content: space-between;
//           padding: 20px 48px;
//           background: rgba(11, 15, 20, 0.7);
//           backdrop-filter: blur(16px);
//           border-bottom: 1px solid rgba(255,255,255,0.05);
//         }
//         .nav-logo {
//           font-family: 'Cormorant Garamond', serif;
//           font-size: 1.5rem; font-weight: 400; letter-spacing: 0.05em;
//           color: #e8e4dc;
//         }
//         .dot { color: #7ecfc0; }
//         .nav-cta {
//           background: #7ecfc0; color: #0b0f14;
//           padding: 9px 22px; border-radius: 100px;
//           text-decoration: none; font-size: 0.85rem; font-weight: 500;
//           transition: opacity 0.2s;
//         }
//         .nav-cta:hover { opacity: 0.85; }

//         /* ---- HERO ---- */
//         .hero {
//           position: relative; min-height: 100vh;
//           display: flex; align-items: center;
//           padding: 100px 48px 60px;
//           overflow: hidden;
//           gap: 40px;
//         }
//         .rain-canvas {
//           position: absolute; inset: 0; width: 100%; height: 100%;
//           pointer-events: none; z-index: 0;
//         }
//         .hero-glow {
//           position: absolute; border-radius: 50%;
//           filter: blur(90px); pointer-events: none; z-index: 0;
//         }
//         .glow-1 { width: 600px; height: 600px; background: rgba(126, 207, 192, 0.08); top: -100px; left: -100px; }
//         .glow-2 { width: 500px; height: 500px; background: rgba(100, 120, 220, 0.07); bottom: -80px; right: 200px; }
//         .glow-3 { width: 300px; height: 300px; background: rgba(255, 180, 100, 0.05); top: 200px; right: 100px; }

//         .hero-content { position: relative; z-index: 2; flex: 1; max-width: 560px; }
//         .hero-eyebrow {
//           font-size: 0.8rem; letter-spacing: 0.2em; text-transform: uppercase;
//           color: #7ecfc0; margin-bottom: 20px;
//         }
//         .hero-title {
//           font-family: 'Cormorant Garamond', serif;
//           font-size: clamp(3rem, 5vw, 5.5rem);
//           font-weight: 300; line-height: 1.1;
//           color: #f5f1ea;
//           margin-bottom: 24px;
//         }
//         .hero-title em { font-style: italic; color: #7ecfc0; }
//         .hero-sub {
//           font-size: 1.05rem; color: #a09a90; max-width: 420px;
//           margin-bottom: 40px; line-height: 1.7;
//         }
//         .hero-actions { display: flex; gap: 16px; align-items: center; flex-wrap: wrap; }
//         .btn-primary {
//           background: #7ecfc0; color: #0b0f14;
//           padding: 14px 32px; border-radius: 100px;
//           text-decoration: none; font-weight: 500; font-size: 1rem;
//           transition: transform 0.2s, box-shadow 0.2s;
//           box-shadow: 0 0 32px rgba(126, 207, 192, 0.3);
//         }
//         .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 0 48px rgba(126, 207, 192, 0.45); }
//         .btn-ghost {
//           color: #a09a90; text-decoration: none; font-size: 0.95rem;
//           border-bottom: 1px solid rgba(160, 154, 144, 0.4);
//           transition: color 0.2s;
//         }
//         .btn-ghost:hover { color: #e8e4dc; }

//         /* ---- PRODUCT ILLUSTRATION ---- */
//         .hero-product {
//           position: relative; z-index: 2; flex: 1;
//           display: flex; justify-content: center; align-items: center;
//         }
//         .product-visual { position: relative; width: 220px; }
//         .product-glow {
//           position: absolute; width: 280px; height: 280px;
//           background: radial-gradient(circle, rgba(126,207,192,0.15), transparent 70%);
//           top: 50%; left: 50%; transform: translate(-50%, -50%);
//           border-radius: 50%; filter: blur(20px);
//         }
//         .product-body { position: relative; z-index: 1; display: flex; flex-direction: column; align-items: center; }
//         .product-top {
//           width: 12px; height: 70px;
//           background: linear-gradient(to bottom, rgba(255,255,255,0.15), rgba(255,255,255,0.05));
//           border-radius: 6px 6px 0 0;
//           border: 1px solid rgba(255,255,255,0.12);
//         }
//         .product-tube {
//           width: 8px; height: 120px;
//           background: rgba(160,220,255,0.08);
//           border: 1px solid rgba(160,220,255,0.2);
//           border-radius: 4px;
//           position: relative; overflow: hidden;
//         }
//         .drop {
//           position: absolute; width: 4px; height: 10px;
//           background: rgba(126,207,192,0.7);
//           border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
//           left: 2px; animation: fall 2s ease-in infinite;
//         }
//         .d1 { top: -12px; animation-delay: 0s; }
//         .d2 { top: -12px; animation-delay: 0.7s; }
//         .d3 { top: -12px; animation-delay: 1.4s; }
//         @keyframes fall { 0% { top: -12px; opacity: 1; } 100% { top: 120px; opacity: 0; } }

//         .product-base {
//           width: 160px; height: 200px;
//           background: linear-gradient(160deg, #1a2535 0%, #0e1520 100%);
//           border-radius: 80px 80px 30px 30px;
//           border: 1px solid rgba(126,207,192,0.2);
//           position: relative; overflow: hidden;
//           box-shadow: 0 20px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.07);
//         }
//         .led-glow {
//           position: absolute; bottom: 20px; left: 50%; transform: translateX(-50%);
//           width: 100px; height: 80px;
//           background: radial-gradient(ellipse, rgba(126,207,192,0.3) 0%, transparent 70%);
//           animation: pulse-led 3s ease-in-out infinite;
//         }
//         @keyframes pulse-led {
//           0%, 100% { background: radial-gradient(ellipse, rgba(126,207,192,0.3) 0%, transparent 70%); }
//           33% { background: radial-gradient(ellipse, rgba(150,100,220,0.3) 0%, transparent 70%); }
//           66% { background: radial-gradient(ellipse, rgba(255,160,80,0.2) 0%, transparent 70%); }
//         }
//         .mist-ring {
//           position: absolute; border-radius: 50%;
//           border: 1px solid rgba(126,207,192,0.1);
//           animation: expand 3s ease-out infinite;
//         }
//         .r1 { width: 60px; height: 20px; bottom: 60px; left: 50%; transform: translateX(-50%); animation-delay: 0s; }
//         .r2 { width: 90px; height: 30px; bottom: 50px; left: 50%; transform: translateX(-50%); animation-delay: 1s; }
//         @keyframes expand { 0% { opacity: 0.4; transform: translateX(-50%) scaleX(1); } 100% { opacity: 0; transform: translateX(-50%) scaleX(1.8); } }

//         /* ---- AMBIANCE STRIP ---- */
//         .ambiance-strip {
//           background: rgba(126,207,192,0.06);
//           border-top: 1px solid rgba(126,207,192,0.12);
//           border-bottom: 1px solid rgba(126,207,192,0.12);
//           padding: 14px 48px;
//           display: flex; gap: 40px; overflow-x: auto;
//           font-size: 0.8rem; letter-spacing: 0.12em; text-transform: uppercase;
//           color: #7ecfc0; white-space: nowrap;
//         }

//         /* ---- FEATURES ---- */
//         .features { padding: 100px 48px; }
//         .section-header { text-align: center; margin-bottom: 64px; }
//         .section-header.left { text-align: left; }
//         .section-tag {
//           font-size: 0.78rem; letter-spacing: 0.2em; text-transform: uppercase;
//           color: #7ecfc0; margin-bottom: 16px;
//         }
//         .section-title {
//           font-family: 'Cormorant Garamond', serif;
//           font-size: clamp(2rem, 3.5vw, 3.2rem);
//           font-weight: 300; color: #f5f1ea; line-height: 1.2;
//         }
//         .features-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
//           gap: 24px; max-width: 1100px; margin: 0 auto;
//         }
//         .feature-card {
//           background: rgba(255,255,255,0.03);
//           border: 1px solid rgba(255,255,255,0.07);
//           border-radius: 20px; padding: 36px 32px;
//           transition: background 0.3s, border-color 0.3s;
//         }
//         .feature-card:hover {
//           background: rgba(126,207,192,0.05);
//           border-color: rgba(126,207,192,0.2);
//         }
//         .feature-icon { font-size: 2rem; display: block; margin-bottom: 16px; }
//         .feature-name {
//           font-family: 'Cormorant Garamond', serif;
//           font-size: 1.3rem; font-weight: 400;
//           color: #f5f1ea; margin-bottom: 10px;
//         }
//         .feature-desc { font-size: 0.92rem; color: #8a8478; line-height: 1.7; }

//         /* ---- HOW ---- */
//         .how { padding: 80px 48px; background: rgba(255,255,255,0.015); }
//         .how-inner { max-width: 700px; margin: 0 auto; }
//         .steps { display: flex; flex-direction: column; gap: 40px; margin-top: 48px; }
//         .step { display: flex; gap: 28px; align-items: flex-start; }
//         .step-num {
//           font-family: 'Cormorant Garamond', serif;
//           font-size: 3rem; font-weight: 300;
//           color: rgba(126,207,192,0.3); line-height: 1; flex-shrink: 0; width: 64px;
//         }
//         .step-title {
//           font-family: 'Cormorant Garamond', serif;
//           font-size: 1.4rem; font-weight: 400;
//           color: #f5f1ea; margin-bottom: 8px;
//         }
//         .step-desc { font-size: 0.93rem; color: #8a8478; line-height: 1.7; }

//         /* ---- QUOTE ---- */
//         .quote-section {
//           padding: 100px 48px; text-align: center;
//           border-top: 1px solid rgba(255,255,255,0.05);
//         }
//         .quote {
//           font-family: 'Cormorant Garamond', serif;
//           font-size: clamp(1.6rem, 3vw, 2.4rem);
//           font-weight: 300; font-style: normal;
//           color: #d8d4cc; line-height: 1.5;
//           max-width: 720px; margin: 0 auto 20px;
//         }
//         .quote em { font-style: italic; color: #7ecfc0; }
//         .quote-attr { font-size: 0.85rem; color: #5a5650; }

//         /* ---- ORDER ---- */
//         .order {
//           padding: 100px 48px;
//           background: radial-gradient(ellipse at 60% 50%, rgba(126,207,192,0.06) 0%, transparent 60%);
//           border-top: 1px solid rgba(255,255,255,0.05);
//         }
//         .order-inner {
//           max-width: 1000px; margin: 0 auto;
//           display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: start;
//         }
//         .order-title {
//           font-family: 'Cormorant Garamond', serif;
//           font-size: 2.2rem; font-weight: 300;
//           color: #f5f1ea; margin-bottom: 28px; line-height: 1.2;
//         }
//         .order-specs { list-style: none; display: flex; flex-direction: column; gap: 10px; }
//         .order-specs li { font-size: 0.93rem; color: #8a8478; }

//         .order-card {
//           background: rgba(255,255,255,0.04);
//           border: 1px solid rgba(255,255,255,0.1);
//           border-radius: 24px; padding: 40px;
//         }
//         .price-row { display: flex; align-items: baseline; gap: 16px; margin-bottom: 28px; }
//         .price {
//           font-family: 'Cormorant Garamond', serif;
//           font-size: 2.6rem; font-weight: 300; color: #f5f1ea;
//         }
//         .price-note { font-size: 0.82rem; color: #7ecfc0; }
//         .qty-row { display: flex; align-items: center; justify-content: space-between; margin-bottom: 24px; }
//         .qty-label { font-size: 0.88rem; color: #8a8478; }
//         .qty-ctrl {
//           display: flex; align-items: center; gap: 0;
//           border: 1px solid rgba(255,255,255,0.12); border-radius: 100px; overflow: hidden;
//         }
//         .qty-ctrl button {
//           background: none; border: none; color: #e8e4dc;
//           width: 36px; height: 36px; cursor: pointer; font-size: 1.1rem;
//           transition: background 0.2s;
//         }
//         .qty-ctrl button:hover { background: rgba(255,255,255,0.07); }
//         .qty-ctrl span { width: 36px; text-align: center; font-size: 0.95rem; }

//         .btn-order {
//           width: 100%; padding: 16px;
//           background: #7ecfc0; color: #0b0f14;
//           border: none; border-radius: 100px;
//           font-size: 1rem; font-weight: 500; cursor: pointer;
//           transition: transform 0.2s, box-shadow 0.2s, background 0.3s;
//           box-shadow: 0 0 32px rgba(126,207,192,0.25);
//           margin-bottom: 14px;
//         }
//         .btn-order:hover { transform: translateY(-2px); box-shadow: 0 0 48px rgba(126,207,192,0.4); }
//         .btn-order.added { background: #5bb8a8; }
//         .order-sub { font-size: 0.8rem; color: #5a5650; text-align: center; }

//         /* ---- FOOTER ---- */
//         .footer {
//           padding: 48px; text-align: center;
//           border-top: 1px solid rgba(255,255,255,0.05);
//           display: flex; flex-direction: column; gap: 10px; align-items: center;
//           color: #5a5650; font-size: 0.88rem;
//         }
//         .footer-copy { font-size: 0.78rem; }

//         /* ---- RESPONSIVE ---- */
//         @media (max-width: 768px) {
//           .nav { padding: 18px 24px; }
//           .hero { flex-direction: column; padding: 100px 24px 60px; text-align: center; }
//           .hero-content { max-width: 100%; }
//           .hero-sub, .hero-actions { margin-left: auto; margin-right: auto; }
//           .hero-actions { justify-content: center; }
//           .features { padding: 80px 24px; }
//           .how, .quote-section, .order { padding: 80px 24px; }
//           .order-inner { grid-template-columns: 1fr; gap: 40px; }
//           .ambiance-strip { padding: 14px 24px; }
//         }
//       `}</style>
//     </>
//   );
// }

import Head from "next/head";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const features = [
  { icon: "💧", title: "Бодит борооны дусал", desc: "Борооны дусал болон манан танд байгальд байгаа мэдрэмж өгч, таны өрөөнд өнгө нэмэх болно." },
  { icon: "🌿", title: "Үнэрээр тайвшруулагч", desc: "Хүссэн үнэртэй эфирийн тосоо хийгээд тайвшрах мэдрэмжийг өөртөө аваарай." },
  { icon: "🌈", title: "7 өнгийн сонголт", desc: "Зөөлөн нүдэнд тайвшруулах нөлөөтэй 7 өнгөнөөс өөртөө таалагдсанаа сонгоод сайхан амраарай." },
  { icon: "⏱️", title: "4 цагийн тохиргоо", desc: "2,4,8 цаг гэсэн сонголт сонгоод унтаад өгөөрэй, автоматаар унтардаг учир." },
  { icon: "🔇", title: "Тайвшруулах чимээ", desc: "Унтахад, ажиллахад, бясалгал хийхэд танд садаа болохгүй хамгийн төгс бүтээгдэхүүн." },
  { icon: "🏠", title: "350мл усны танк", desc: "Нэг удаа ус хийгээд тухтай ажил, хичээлээ хийгээд амраарай." },
];

const steps = [
  { num: "01", title: "Ус хийх", desc: "MAX зураас хүртэл ус хийгээд. Тайван ажил хичээлээ хийж болно." },
  { num: "02", title: "Эфирийн тос хийх", desc: "Дуртай үнэртэй эфирийн тосоо хийгээрэй - Жүрж, лемон, лавендер." },
  { num: "03", title: "Өнгөө сонгох", desc: "Дуртай өнгөө сонгоод, цагаа тохируулаад борооны дусалд тухтай ажиллаарай." },
];

export default function Home() {
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    let drops = [];
    function resize() { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; }
    resize();
    window.addEventListener("resize", resize);
    for (let i = 0; i < 60; i++) drops.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, len: Math.random() * 18 + 6, speed: Math.random() * 1.5 + 0.5, opacity: Math.random() * 0.25 + 0.05 });
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drops.forEach((d) => { ctx.beginPath(); ctx.moveTo(d.x, d.y); ctx.lineTo(d.x - 1, d.y + d.len); ctx.strokeStyle = "rgba(160,220,255," + d.opacity + ")"; ctx.lineWidth = 1; ctx.stroke(); d.y += d.speed; if (d.y > canvas.height) { d.y = -d.len; d.x = Math.random() * canvas.width; } });
      animId = requestAnimationFrame(draw);
    }
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);

  function handleAdd() { setAdded(true); setTimeout(() => setAdded(false), 2000); }

  return (
    <>
      <Head>
        <title>Raindrop — Aromatherapy Diffuser & Humidifier</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />
      </Head>
      <div className="site">
        <nav className="nav">
          <span className="nav-logo">Ой мод<span className="dot">.</span></span>
          <Link href="/products/forest" className="nav-cta">Худалдаж авах</Link>
        </nav>

        <section className="hero">
          <canvas ref={canvasRef} className="rain-canvas" />
          <div className="glow g1" /><div className="glow g2" /><div className="glow g3" />
          <div className="hero-content">
            <p className="eyebrow">Тайвшруулагч агаар чийгшүүлэгч</p>
            <h1 className="hero-title">Байгальд<br /><em>байгаа мэт мэдрэмжийг</em><br />гэртээ мэдрээрэй.</h1>
            <p className="hero-sub">3 үйлдэлт ой модонд байгаа мэт агаар чийгшүүлэгч.</p>
            <div className="hero-actions">
              
                <Link className="btn-primary" href={'/products/forest'}>Авах →</Link>
              
              <a href="#how" className="btn-ghost">Заавартай танилцах</a>
            </div>
          </div>
          <div className="hero-product">
            <div className="pimg-wrap">
              <div className="pimg-glow" />
              <video
                className="pimg"
                autoPlay
                loop
                muted
                playsInline
                poster="/products/forest/forest4.png"
              >
                <source src="/products/forest/forest1.mp4" type="video/mp4" />
                <source src="/products/forest/forest1.webm" type="video/webm" />
                {/* Fallback for browsers that don't support video */}
                <img src="/products/forest/forest4.png" alt="Raindrop Forest Terrarium Diffuser" />
              </video>
            </div>
          </div>
        </section>

        <div className="strip">
          <span>✦ бороо орох чимээ</span><span>✦ 350мл танк</span><span>✦ 7 LED өнгө</span>
          <span>✦ автоматаар унтардаг</span>
        </div>

        <section className="features" id="features">
          <div className="sec-header">
            <p className="sec-tag">Танд яагаад таалагдах вэ</p>
            <h2 className="sec-h2">Таны өрөөнд хамгийн тохиромжтой бүтээгдэхүүн.</h2>
          </div>
          <div className="feat-grid">
            {features.map((f, i) => (
              <div className="feat-card" key={i}>
                <span className="feat-icon">{f.icon}</span>
                <h3 className="feat-name">{f.title}</h3>
                <p className="feat-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="showcase">
          <div className="show-inner">
            <div className="show-imgwrap">
              <div className="show-glow" />
              <img src="/products/forest/forest2.png" alt="Diffuser with LED glow" className="show-img" />
            </div>
            <div className="show-text">
              <p className="sec-tag">Таны өрөөний ой мод</p>
              <h2 className="sec-h2 left">Бяцхан ой мод,<br /><em>таны өрөөнд.</em></h2>
              <p className="show-desc">The transparent dome reveals a miniature forest scene — trees, moss, a still lake — all lit by shifting LED colours that make every glance feel like a moment of escape.</p>
              <div className="badges">
                <span className="badge">🌿 Real moss scene</span>
                <span className="badge">🌊 Water feature</span>
                <span className="badge">🌈 7 LED colours</span>
              </div>
            </div>
          </div>
        </section>

        <section className="how" id="how">
          <div className="how-inner">
            <div className="sec-header left">
              <p className="sec-tag">Хэрэглэхэд хялбар</p>
              <h2 className="sec-h2">3 алхамд ашиглаж болно.</h2>
            </div>
            <div className="steps">
              {steps.map((s) => (
                <div className="step" key={s.num}>
                  <span className="step-num">{s.num}</span>
                  <div><h3 className="step-title">{s.title}</h3><p className="step-desc">{s.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="quote-sec">
          <blockquote className="quote">Like having a little piece of nature inside your home — the raindrops, the mist, the soft glow. It just feels <em>calm</em>.</blockquote>
          <p className="quote-attr">— a customer who uses it every night</p>
        </section>

        <section className="order" id="order">
          <div className="order-inner">
            <div className="order-left">
              <p className="sec-tag">Яг одоо аваарай</p>
              <h2 className="order-title">Бороотой тайвшруулах чийгшүүлэгч</h2>
              <div className="order-imgwrap">
                <img src="/products/forest/forest3.png" alt="Product" className="order-img" />
              </div>
              <ul className="order-specs">
                <li>💧 Ultrasonic cool mist</li><li>🌈 7 LED өнгийн гэрэл</li>
                <li>⏱️ 2 / 4 / 8 цагийн тохиргоо</li><li>💚 350мл усны танк</li>
                <li>🌿 Эфирийн тос хийх боломжтой</li><li>🔇 Тайвшруулах чимээ</li><li>🛡️ Автоматаар унтрана</li>
              </ul>
            </div>
            <div className="order-card">
              <div className="price-row"><span className="price">₮150,000</span><span className="price-note">Хүргэлт үнэгүй</span></div>
              <div className="qty-row">
                <span className="qty-label">Тоо ширхэг</span>
                <div className="qty-ctrl">
                  <button onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
                  <span>{qty}</span>
                  <button onClick={() => setQty(qty + 1)}>+</button>
                </div>
              </div>
              <button className={"btn-order added"} onClick={() => window.location.href = '/products/forest'}>Худалдаж авах</button>
              <p className="order-sub">24 цагийн дотор хүргэж өгнө</p>
            </div>
          </div>
        </section>

        <footer className="footer">
          <span className="nav-logo">Vistaline<span className="dot">.</span></span>
          <p>Гэрийнхээ булан бүрт тайвшралыг авчраарай.</p>
          <p style={{fontSize:"0.78rem"}}>© 2025 Vistaline. Бүх эрх хуулиар хамгаалагдсан.</p>
        </footer>
      </div>

      <style jsx global>{`*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}html{scroll-behavior:smooth}body{background:#0b0f14;color:#e8e4dc;font-family:'DM Sans',sans-serif;font-weight:300;line-height:1.6;overflow-x:hidden}`}</style>
      <style jsx>{`
        .nav{position:fixed;top:0;left:0;right:0;z-index:100;display:flex;align-items:center;justify-content:space-between;padding:20px 48px;background:rgba(11,15,20,0.75);backdrop-filter:blur(16px);border-bottom:1px solid rgba(255,255,255,0.05)}
        .nav-logo{font-family:'Cormorant Garamond',serif;font-size:1.5rem;font-weight:400;color:#e8e4dc}.dot{color:#7ecfc0}
        .nav-cta{background:#7ecfc0;color:#0b0f14;padding:9px 22px;border-radius:100px;text-decoration:none;font-size:0.85rem;font-weight:500;transition:opacity .2s}.nav-cta:hover{opacity:.85}
        .hero{position:relative;min-height:100vh;display:flex;align-items:center;padding:100px 48px 60px;overflow:hidden;gap:40px}
        .rain-canvas{position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:0}
        .glow{position:absolute;border-radius:50%;filter:blur(90px);pointer-events:none;z-index:0}
        .g1{width:600px;height:600px;background:rgba(126,207,192,0.08);top:-100px;left:-100px}
        .g2{width:500px;height:500px;background:rgba(100,120,220,0.07);bottom:-80px;right:200px}
        .g3{width:300px;height:300px;background:rgba(255,180,100,0.05);top:200px;right:100px}
        .hero-content{position:relative;z-index:2;flex:1;max-width:520px}
        .eyebrow{font-size:.8rem;letter-spacing:.2em;text-transform:uppercase;color:#7ecfc0;margin-bottom:20px}
        .hero-title{font-family:'Cormorant Garamond',serif;font-size:clamp(3rem,5vw,5.5rem);font-weight:300;line-height:1.1;color:#f5f1ea;margin-bottom:24px}
        .hero-title em{font-style:italic;color:#7ecfc0}
        .hero-sub{font-size:1.05rem;color:#a09a90;max-width:420px;margin-bottom:40px;line-height:1.7}
        .hero-actions{display:flex;gap:16px;align-items:center;flex-wrap:wrap}
        .btn-primary{background:#7ecfc0;color:#0b0f14;padding:14px 32px;border-radius:100px;text-decoration:none;font-weight:500;font-size:1rem;transition:transform .2s,box-shadow .2s;box-shadow:0 0 32px rgba(126,207,192,0.3)}.btn-primary:hover{transform:translateY(-2px);box-shadow:0 0 48px rgba(126,207,192,0.45)}
        .btn-ghost{color:#a09a90;text-decoration:none;font-size:.95rem;border-bottom:1px solid rgba(160,154,144,0.4);transition:color .2s}.btn-ghost:hover{color:#e8e4dc}
        .hero-product{position:relative;z-index:2;flex:1;display:flex;justify-content:center;align-items:center}
        .pimg-wrap{position:relative;width:500px;max-width:100%}
        .pimg-glow{position:absolute;inset:-60px;background:radial-gradient(ellipse at 50% 60%,rgba(126,207,192,0.2) 0%,rgba(100,120,220,0.1) 40%,transparent 70%);filter:blur(40px);pointer-events:none;z-index:0}
        .pimg{position:relative;z-index:1;width:100%;height:auto;filter:drop-shadow(0 40px 80px rgba(0,0,0,0.75));animation:float 5s ease-in-out infinite}
        @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}
        .strip{background:rgba(126,207,192,0.06);border-top:1px solid rgba(126,207,192,0.12);border-bottom:1px solid rgba(126,207,192,0.12);padding:14px 48px;display:flex;gap:40px;overflow-x:auto;font-size:.8rem;letter-spacing:.12em;text-transform:uppercase;color:#7ecfc0;white-space:nowrap}
        .features{padding:100px 48px}
        .sec-header{text-align:center;margin-bottom:64px}.sec-header.left{text-align:left}
        .sec-tag{font-size:.78rem;letter-spacing:.2em;text-transform:uppercase;color:#7ecfc0;margin-bottom:16px}
        .sec-h2{font-family:'Cormorant Garamond',serif;font-size:clamp(2rem,3.5vw,3.2rem);font-weight:300;color:#f5f1ea;line-height:1.2}.sec-h2.left{text-align:left}.sec-h2 em{font-style:italic;color:#7ecfc0}
        .feat-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:24px;max-width:1100px;margin:0 auto}
        .feat-card{background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:20px;padding:36px 32px;transition:background .3s,border-color .3s}.feat-card:hover{background:rgba(126,207,192,0.05);border-color:rgba(126,207,192,0.2)}
        .feat-icon{font-size:2rem;display:block;margin-bottom:16px}
        .feat-name{font-family:'Cormorant Garamond',serif;font-size:1.3rem;font-weight:400;color:#f5f1ea;margin-bottom:10px}
        .feat-desc{font-size:.92rem;color:#8a8478;line-height:1.7}
        .showcase{padding:80px 48px;background:rgba(255,255,255,0.015);border-top:1px solid rgba(255,255,255,0.05)}
        .show-inner{max-width:1100px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center}
        .show-imgwrap{position:relative}
        .show-glow{position:absolute;inset:-40px;background:radial-gradient(ellipse at 50% 50%,rgba(126,207,192,0.15) 0%,transparent 70%);filter:blur(30px);pointer-events:none}
        .show-img{position:relative;z-index:1;width:100%;height:auto;border-radius:24px;filter:drop-shadow(0 24px 48px rgba(0,0,0,0.6))}
        .show-text{display:flex;flex-direction:column;gap:20px}
        .show-desc{font-size:1rem;color:#8a8478;line-height:1.8}
        .badges{display:flex;gap:10px;flex-wrap:wrap}
        .badge{background:rgba(126,207,192,0.08);border:1px solid rgba(126,207,192,0.2);color:#7ecfc0;padding:6px 14px;border-radius:100px;font-size:.8rem}
        .how{padding:80px 48px}.how-inner{max-width:700px;margin:0 auto}
        .steps{display:flex;flex-direction:column;gap:40px;margin-top:48px}
        .step{display:flex;gap:28px;align-items:flex-start}
        .step-num{font-family:'Cormorant Garamond',serif;font-size:3rem;font-weight:300;color:rgba(126,207,192,0.3);line-height:1;flex-shrink:0;width:64px}
        .step-title{font-family:'Cormorant Garamond',serif;font-size:1.4rem;font-weight:400;color:#f5f1ea;margin-bottom:8px}
        .step-desc{font-size:.93rem;color:#8a8478;line-height:1.7}
        .quote-sec{padding:100px 48px;text-align:center;border-top:1px solid rgba(255,255,255,0.05)}
        .quote{font-family:'Cormorant Garamond',serif;font-size:clamp(1.6rem,3vw,2.4rem);font-weight:300;color:#d8d4cc;line-height:1.5;max-width:720px;margin:0 auto 20px}.quote em{font-style:italic;color:#7ecfc0}
        .quote-attr{font-size:.85rem;color:#5a5650}
        .order{padding:100px 48px;background:radial-gradient(ellipse at 60% 50%,rgba(126,207,192,0.06) 0%,transparent 60%);border-top:1px solid rgba(255,255,255,0.05)}
        .order-inner{max-width:1000px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:start}
        .order-title{font-family:'Cormorant Garamond',serif;font-size:2.2rem;font-weight:300;color:#f5f1ea;margin-bottom:20px;line-height:1.2}
        .order-imgwrap{margin-bottom:24px}
        .order-img{width:100%;max-width:260px;height:auto;border-radius:16px;filter:drop-shadow(0 16px 32px rgba(0,0,0,0.5))}
        .order-specs{list-style:none;display:flex;flex-direction:column;gap:10px}.order-specs li{font-size:.93rem;color:#8a8478}
        .order-card{background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);border-radius:24px;padding:40px}
        .price-row{display:flex;align-items:baseline;gap:16px;margin-bottom:28px}
        .price{font-family:'Cormorant Garamond',serif;font-size:2.6rem;font-weight:300;color:#f5f1ea}
        .price-note{font-size:.82rem;color:#7ecfc0}
        .qty-row{display:flex;align-items:center;justify-content:space-between;margin-bottom:24px}
        .qty-label{font-size:.88rem;color:#8a8478}
        .qty-ctrl{display:flex;align-items:center;border:1px solid rgba(255,255,255,0.12);border-radius:100px;overflow:hidden}
        .qty-ctrl button{background:none;border:none;color:#e8e4dc;width:36px;height:36px;cursor:pointer;font-size:1.1rem;transition:background .2s}.qty-ctrl button:hover{background:rgba(255,255,255,0.07)}
        .qty-ctrl span{width:36px;text-align:center;font-size:.95rem}
        .btn-order{width:100%;padding:16px;background:#7ecfc0;color:#0b0f14;border:none;border-radius:100px;font-size:1rem;font-weight:500;cursor:pointer;transition:transform .2s,box-shadow .2s,background .3s;box-shadow:0 0 32px rgba(126,207,192,0.25);margin-bottom:14px}.btn-order:hover{transform:translateY(-2px);box-shadow:0 0 48px rgba(126,207,192,0.4)}.btn-order.added{background:#5bb8a8}
        .order-sub{font-size:.8rem;color:#5a5650;text-align:center}
        .footer{padding:48px;text-align:center;border-top:1px solid rgba(255,255,255,0.05);display:flex;flex-direction:column;gap:10px;align-items:center;color:#5a5650;font-size:.88rem}
        @media(max-width:768px){
          .nav{padding:18px 24px}
          .hero{flex-direction:column;padding:100px 24px 60px;text-align:center}
          .hero-content{max-width:100%}
          .hero-actions{justify-content:center}
          .pimg-wrap{width:100%;max-width:320px}
          .features,.how,.quote-sec,.order,.showcase{padding:60px 24px}
          .show-inner{grid-template-columns:1fr;gap:32px}
          .order-inner{grid-template-columns:1fr;gap:40px}
          .strip{padding:14px 24px}
        }
      `}</style>
    </>
  );
}
