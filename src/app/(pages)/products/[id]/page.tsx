import React from 'react'

export default async function ProductDetail({params}) {
    const {id} = await params
   
    const response = await fetch(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
    const {data} = await response.json()
    console.log("detailll" ,data)
  return <>
  <section className="pt-24 pb-20">
  {/* Breadcrumbs */}
  <div className="max-w-7xl mx-auto px-8 py-6">
    <nav className="flex text-xs font-medium uppercase tracking-widest text-outline">
      <a className="hover:text-primary" href="#">Mobiles</a>
      <span className="mx-3">/</span>
      <a className="hover:text-primary" href="#">Flagship Series</a>
      <span className="mx-3">/</span>
      <span className="text-on-surface">Lumina X1 Pro</span>
    </nav>
  </div>
  {/* Product Hero Section */}
  <section className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-16">
    {/* Left: Image Gallery (Asymmetric Layout) */}
    <div className="lg:col-span-7 space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2 aspect-[16/9] bg-surface-container rounded-xl overflow-hidden group">
          <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Premium smartphone with sleek titanium finish and large lens camera module resting on dark slate surface with moody side lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoPclt4MquIG7BDofwNW1XDgI7BenelhuCAR_27pf5AtujOIxs4q9tRLjhQvZ-Xg1uyVP3xFsT7IO6Jyc9sYKZrlWaSsyI9xwvHCPW9FIycUoxCJSgpkrpVRSNAEBKZqwwJwyo7IMgF5Ha70Vb_I05CmVu7rKrQyXdi5YAu2UhgT5YHs8IBmMwSZGwgSC3m7pprG9Li5A7A61Ok8M0cvQ3h8TUq4CgoYeU4nTepSsq9oDlEVdV8ITLx0tjHZFrBZ8jPxz5hHJvyE4G" />
        </div>
        <div className="aspect-[4/5] bg-surface-container rounded-xl overflow-hidden group">
          <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Close up detail of high-end smartphone screen showing vibrant OLED colors and ultra-thin bezels in a dimly lit studio" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqTNZnE3KjJLSFUyP8EJt03VB2zaXgTcv0jQg_3pHHmaynlhhg2EkGUObXWlqFRDCt97RE67n5vfOPsvTYa2YvdwM18IjyFk1eWG-LzissQsI_sCRLNzeqNf-b-_xqVNpgGvvY_qwC1LUDgrFFB4KjQYdKt6MAliyFZcO4CRJ8VzM_g9IOSCa56ci2wUovW4I-VPgijCQ_Pz8yo3We_a4KGtcJ4ibxSbvKhdhxZUO-kn8zntMlUq0qfIZ8KnesGY2c7-u6CNw2yy2w" />
        </div>
        <div className="aspect-[4/5] bg-surface-container rounded-xl overflow-hidden group">
          <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Profile view of a slim smartphone showcasing the brushed metal edge and tactile buttons against a soft bokeh background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDslLbJnXVs75gXcejUFfCrdGBcADlAgneiGYJtTjdUjf1cgw7iPhyBUGu7tkN931ecoNYST-sys7aSwe82WQphTJq1x2dPPXQQrf-gvlZ_KnuDapFAPXcL8TPVURPQJoMzUBh4evK8nB_M3bqAgrUud30mBMCAHbMe03-OvxmZxCW6UXX1FnJeHJvVWT7TZHwURcvDmM6HTMWsd-BapMhsl8Yh9EBtFaiZbBd-f3JJ8DnqZJjpOjVZoaoF1Rix9UNcqRvenRZH5A1t" />
        </div>
      </div>
    </div>
    {/* Right: Product Details */}
    <div className="lg:col-span-5 flex flex-col justify-start">
      <div className="space-y-2 mb-6">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Limited Edition</span>
        <h1 className="text-5xl font-black tracking-tighter text-on-surface leading-none">Lumina X1 Pro</h1>
        <p className="text-lg text-outline font-medium">Obsidian Titanium / 512GB</p>
      </div>
      <div className="flex items-center gap-4 mb-8">
        <div className="flex items-center text-primary">
          <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: '"FILL" 1'}}>star</span>
          <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: '"FILL" 1'}}>star</span>
          <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: '"FILL" 1'}}>star</span>
          <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: '"FILL" 1'}}>star</span>
          <span className="material-symbols-outlined text-sm" style={{fontVariationSettings: '"FILL" 0'}}>star</span>
        </div>
        <span className="text-xs text-outline-variant font-medium tracking-wider">128 REVIEWS</span>
      </div>
      <div className="mb-10">
        <p className="text-3xl font-bold text-on-surface">$1,299.00</p>
        <p className="text-sm text-outline mt-1">Or $54.12/mo. for 24 mos. with Sage Financing</p>
      </div>
      {/* Product Selectors */}
      <div className="space-y-8 mb-12">
        {/* Color Selection */}
        <div>
          <label className="text-[10px] font-extrabold uppercase tracking-widest text-outline-variant block mb-4">Select Finish</label>
          <div className="flex gap-3">
            <button className="w-10 h-10 rounded-full bg-stone-900 ring-2 ring-primary ring-offset-4 ring-offset-background" />
            <button className="w-10 h-10 rounded-full bg-stone-400" />
            <button className="w-10 h-10 rounded-full bg-emerald-900" />
          </div>
        </div>
        {/* Storage Selection */}
        <div>
          <label className="text-[10px] font-extrabold uppercase tracking-widest text-outline-variant block mb-4">Capacity</label>
          <div className="grid grid-cols-3 gap-3">
            <button className="py-3 border border-outline-variant rounded-lg text-sm font-bold hover:bg-surface-container transition-colors">256GB</button>
            <button className="py-3 border-2 border-primary bg-primary/10 rounded-lg text-sm font-bold text-on-surface">512GB</button>
            <button className="py-3 border border-outline-variant rounded-lg text-sm font-bold hover:bg-surface-container transition-colors">1TB</button>
          </div>
        </div>
        {/* Quantity & Add to Cart */}
        <div className="flex gap-4">
          <div className="flex items-center bg-surface-container rounded-lg px-4 border border-outline-variant">
            <button className="p-2 text-outline hover:text-on-surface"><span className="material-symbols-outlined text-lg">remove</span></button>
            <span className="px-4 font-bold">1</span>
            <button className="p-2 text-outline hover:text-on-surface"><span className="material-symbols-outlined text-lg">add</span></button>
          </div>
          <button className="flex-1 bg-primary text-on-primary font-bold rounded-lg py-4 hover:scale-[1.02] transition-all shadow-lg shadow-primary/20">
            ADD TO BAG
          </button>
        </div>
      </div>
      {/* Specs Summary Bento */}
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-surface-container-low rounded-xl">
          <span className="material-symbols-outlined text-primary mb-2" data-icon="photo_camera">photo_camera</span>
          <h4 className="text-xs font-bold text-on-surface">200MP Lens</h4>
          <p className="text-[10px] text-outline">Pro-Grade Optics</p>
        </div>
        <div className="p-4 bg-surface-container-low rounded-xl">
          <span className="material-symbols-outlined text-primary mb-2" data-icon="bolt">bolt</span>
          <h4 className="text-xs font-bold text-on-surface">Snapdragon 8 Gen 3</h4>
          <p className="text-[10px] text-outline">Neural Engine</p>
        </div>
        <div className="p-4 bg-surface-container-low rounded-xl">
          <span className="material-symbols-outlined text-primary mb-2" data-icon="battery_charging_full">battery_charging_full</span>
          <h4 className="text-xs font-bold text-on-surface">5000mAh</h4>
          <p className="text-[10px] text-outline">All-day power</p>
        </div>
        <div className="p-4 bg-surface-container-low rounded-xl">
          <span className="material-symbols-outlined text-primary mb-2" data-icon="water_drop">water_drop</span>
          <h4 className="text-xs font-bold text-on-surface">IP68 Rated</h4>
          <p className="text-[10px] text-outline">Water resistant</p>
        </div>
      </div>
    </div>
  </section>
  {/* Product Specifications Section (Revised) */}
  <section className="mt-24 bg-surface-container-lowest py-24">
    <div className="max-w-7xl mx-auto px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
        {/* About this Product */}
        <div className="space-y-6">
          <h3 className="text-2xl font-black tracking-tighter text-on-surface border-b border-outline-variant pb-4">About this Product</h3>
          <p className="text-sm text-outline leading-relaxed">
            The Lumina X1 Pro is engineered for those who refuse to compromise. Crafted with an obsidian titanium frame and featuring the revolutionary A17 Titan architecture, it sets a new benchmark for mobile computing power and sophisticated aesthetics. This limited edition variant offers unparalleled durability and a tactile experience that defines modern luxury.
          </p>
          <p className="text-sm text-outline leading-relaxed">
            Every device undergoes rigorous testing to ensure it meets our exacting standards for performance, thermal management, and structural integrity.
          </p>
        </div>
        {/* Product Information */}
        <div className="space-y-6">
          <h3 className="text-2xl font-black tracking-tighter text-on-surface border-b border-outline-variant pb-4">Product Information</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center text-sm py-1">
              <span className="text-outline uppercase text-[10px] font-bold tracking-widest">Model</span>
              <span className="text-on-surface">X1 Pro - 2024 Edition</span>
            </div>
            <div className="flex justify-between items-center text-sm py-1">
              <span className="text-outline uppercase text-[10px] font-bold tracking-widest">Manufacturer</span>
              <span className="text-on-surface">Sage Atelier Corp.</span>
            </div>
            <div className="flex justify-between items-center text-sm py-1">
              <span className="text-outline uppercase text-[10px] font-bold tracking-widest">Warranty</span>
              <span className="text-on-surface">2 Years Global Premier</span>
            </div>
            <div className="flex justify-between items-center text-sm py-1">
              <span className="text-outline uppercase text-[10px] font-bold tracking-widest">OS</span>
              <span className="text-on-surface">SageOS 4.0 (Vesper)</span>
            </div>
            <div className="flex justify-between items-center text-sm py-1">
              <span className="text-outline uppercase text-[10px] font-bold tracking-widest">Material</span>
              <span className="text-on-surface">Titanium Grade 5</span>
            </div>
          </div>
        </div>
        {/* Key Features */}
        <div className="space-y-6">
          <h3 className="text-2xl font-black tracking-tighter text-on-surface border-b border-outline-variant pb-4">Key Features</h3>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
              <div>
                <p className="text-sm font-bold text-on-surface">Pro-Motion OLED</p>
                <p className="text-xs text-outline">Dynamic 1-144Hz refresh rate for fluid motion.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
              <div>
                <p className="text-sm font-bold text-on-surface">Neural Imaging Engine</p>
                <p className="text-xs text-outline">AI-driven low-light photography and 8K HDR video.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
              <div>
                <p className="text-sm font-bold text-on-surface">Hyper-Charge Tech</p>
                <p className="text-xs text-outline">0 to 80% charge in just 18 minutes via USB-C 4.0.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
              <div>
                <p className="text-sm font-bold text-on-surface">Sonic Biometrics</p>
                <p className="text-xs text-outline">Next-gen ultrasonic fingerprint scanning.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  {/* Related Items (Electronics) */}
  <section className="max-w-7xl mx-auto px-8 py-24">
    <div className="flex justify-between items-end mb-12">
      <div>
        <span className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-primary">Complete the Set</span>
        <h3 className="text-3xl font-black tracking-tighter text-on-surface">Electronics Favorites</h3>
      </div>
      <a className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors" href="#">View All</a>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Related Product 1 */}
      <div className="group">
        <div className="aspect-[4/5] bg-surface-container rounded-xl overflow-hidden mb-4 relative transition-all group-hover:shadow-xl group-hover:shadow-primary/5">
          <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Premium wireless noise-cancelling headphones in matte charcoal sitting on a minimalist wooden desk" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkWiX0k4uYeXyAbFQLp0gMHkp6YvOTeUXV8KZ3POjPp0lAZBymC6Y1iJVDqrFcuv1ZHArNUZ0kDzw6RHKhAlp7HPZYzi6lEKzOieTg7BYrVGc4SykZlYRqO1_fGJ10LvyzpVzD_qj_LAMJ8igGGLE0yk5ehNZK41q0bFzG0k2RLatUhR1IfR-JcuAn6RrRNvX_0leTF0E5swiAjHdIaBN_NE3zk2TZ-b-JD_m3-_CI_GENig7LqpQFKgigKDkqiGw27DeH98GG8R0W" />
          <button className="absolute bottom-4 right-4 bg-on-surface text-surface w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="material-symbols-outlined" data-icon="add">add</span>
          </button>
        </div>
        <h4 className="text-sm font-bold text-on-surface">Sonic Aurum Pro</h4>
        <p className="text-xs text-outline">$349.00</p>
      </div>
      {/* Related Product 2 */}
      <div className="group">
        <div className="aspect-[4/5] bg-surface-container rounded-xl overflow-hidden mb-4 relative transition-all group-hover:shadow-xl group-hover:shadow-primary/5">
          <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Minimalist luxury smartwatch with leather strap on a clean light background highlighting the classic face design" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxsDDDBWjRfpyxYOSNBRx7KcbZB-ywV6LbpCdWwWdl5NmmIjjOhA0DEHmbbHY663a87tcrno8YdF-E0iGJNwzvFYFr-YyBO5IvyvUy6BvIzY24lokwd_jB_O8pdbpavzfUsf2yLe9UFzN_xh63sAS6BRDwxH9bQw4-oVrDBSmK4BJoteW9G4v-JyqTWOPMc1-YvP-iHdq4Ih3PSzNLRBqZ9thZG8_qK0cTUpHETVKZLg1qi_i_8p8_5nXgmBDFHykgH5ZcV9trj8zR" />
          <button className="absolute bottom-4 right-4 bg-on-surface text-surface w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="material-symbols-outlined" data-icon="add">add</span>
          </button>
        </div>
        <h4 className="text-sm font-bold text-on-surface">Aeon Chronos Series</h4>
        <p className="text-xs text-outline">$499.00</p>
      </div>
      {/* Related Product 3 */}
      <div className="group">
        <div className="aspect-[4/5] bg-surface-container rounded-xl overflow-hidden mb-4 relative transition-all group-hover:shadow-xl group-hover:shadow-primary/5">
          <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="High-fidelity wireless earbuds and their charging case resting on a textured fabric surface with dramatic shadows" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3QEUmRFT8aCToorU8zJACryKXFhf-8Eas92dYOIc-iD9yNYKwl5icvNe3yNc0Sh0yse_6cWOyTeufEc8w_7G-hwSw7ngyKh1-sUjT6vTcHyVRRwcGFMCRwNzFNV9d5C2iOnqxqSc2WKNf07gpGBVHiWTOCxxPPxtaQ3wkDXGxQYcu2GFenE3qvWHdNdOhy1O46uO-s3v9udivJUt-f16oNLdyn774SfB37MFgn-BAcBkENHbRMCS_mg_iXdCFnR_fv966_-EvKMHh" />
          <button className="absolute bottom-4 right-4 bg-on-surface text-surface w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="material-symbols-outlined" data-icon="add">add</span>
          </button>
        </div>
        <h4 className="text-sm font-bold text-on-surface">Iris Buds Pure</h4>
        <p className="text-xs text-outline">$199.00</p>
      </div>
      {/* Related Product 4 */}
      <div className="group">
        <div className="aspect-[4/5] bg-surface-container rounded-xl overflow-hidden mb-4 relative transition-all group-hover:shadow-xl group-hover:shadow-primary/5">
          <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Sleek ultra-slim laptop open on a modern desk with artistic wallpapers visible on the crisp display" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAltRta8FUVUM-PNYCv09YU7TD0IOopil7ZcD8vij0cLK5S7IaPJLwwSfrAf2vUL7ZCQwl5TdQgtSu8i5cIi_1wZ-zGg_UzimQbIk1kPORT4F4VxxtzQtLyuGlOYf4AjU_ffQ8csYiutRoWZP_NgW1GDNL0XDWlzGG_JAyhFiUtN3X3Fnl3HGJ_Lgi_DBlgwahKwZ0nFAe2gOhX3WxyyJ1Ulk87sgD67sejZiBD0DEe7znjGbcT2CHdKyYGUBKjHvb7R4KfMNm5-lbR" />
          <button className="absolute bottom-4 right-4 bg-on-surface text-surface w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="material-symbols-outlined" data-icon="add">add</span>
          </button>
        </div>
        <h4 className="text-sm font-bold text-on-surface">Lumina Air M2</h4>
        <p className="text-xs text-outline">$1,499.00</p>
      </div>
    </div>
  </section>
</section>

  
  </>
}
