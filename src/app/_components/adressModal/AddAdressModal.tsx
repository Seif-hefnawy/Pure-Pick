"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { X, MapPin, Phone, Building2, Info, Plus } from "lucide-react";
import toast from "react-hot-toast";

export default function AddAddressModal({ token }: { token: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const addressData = {
      name: formData.get("name"),
      details: formData.get("details"),
      phone: formData.get("phone"),
      city: formData.get("city"),
    };

    const res = await fetch("https://ecommerce.routemisr.com/api/v1/addresses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "token": token,
      },
      body: JSON.stringify(addressData),
    });

    if (res.ok) {
      toast.success("Address added successfully!");
      setIsOpen(false);
      router.refresh();
    } else {
      toast.error("Something went wrong!");
    }
    setIsLoading(false);
  }

  return (
    <>
      {/* الزرار اللي بيفتح المودال  */}
      <button 
        onClick={() => setIsOpen(true)}
        className="group flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-2xl font-bold transition-all hover:bg-primary/90 active:scale-95 shadow-xl shadow-primary/20"
      >
        <Plus size={20} className="transition-transform group-hover:rotate-90" /> 
        Add New Address
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
          {/* Overlay بلمسة Blur */}
          <div 
            className="absolute inset-0 bg-on-surface/40 backdrop-blur-md transition-opacity" 
            onClick={() => setIsOpen(false)} 
          />

          {/* Modal Card */}
          <div className="relative bg-surface w-full max-w-lg rounded-[2rem] p-8 shadow-2xl border border-on-surface/5 overflow-hidden">
            {/* الديكور العلوي */}
            <div className="absolute top-0 left-0 w-full h-2 bg-primary" />

            <div className="flex justify-between items-start mb-8">
              <div>
                <h3 className="text-2xl font-black text-on-surface tracking-tight">Add New Address</h3>
                <p className="text-on-surface/50 text-sm mt-1">Please enter your accurate delivery details.</p>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="p-2 bg-on-surface/5 text-on-surface/40 hover:text-red-500 hover:bg-red-50 rounded-full transition-all"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name Input */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-on-surface/60 uppercase ml-1">Address Label</label>
                <div className="relative group">
                  <input name="name" required placeholder="e.g. Home, Work" className="w-full pl-12 pr-4 py-3.5 bg-on-surface/[0.03] border border-on-surface/10 rounded-2xl outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all text-on-surface" />
                  <Info className="absolute left-4 top-4 text-on-surface/30 group-focus-within:text-primary transition-colors" size={18} />
                </div>
              </div>

              {/* City Input */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-on-surface/60 uppercase ml-1">City / Area</label>
                <div className="relative group">
                  <input name="city" required placeholder="e.g. Cairo" className="w-full pl-12 pr-4 py-3.5 bg-on-surface/[0.03] border border-on-surface/10 rounded-2xl outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all text-on-surface" />
                  <Building2 className="absolute left-4 top-4 text-on-surface/30 group-focus-within:text-primary transition-colors" size={18} />
                </div>
              </div>

              {/* Phone Input */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-on-surface/60 uppercase ml-1">Phone Number</label>
                <div className="relative group">
                  <input name="phone" required placeholder="01xxxxxxxxx" className="w-full pl-12 pr-4 py-3.5 bg-on-surface/[0.03] border border-on-surface/10 rounded-2xl outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all text-on-surface" />
                  <Phone className="absolute left-4 top-4 text-on-surface/30 group-focus-within:text-primary transition-colors" size={18} />
                </div>
              </div>

              {/* Details Input */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-on-surface/60 uppercase ml-1">Full Address Details</label>
                <div className="relative group">
                  <textarea name="details" required rows={3} placeholder="Street name, Building number, Apartment..." className="w-full pl-12 pr-4 py-3.5 bg-on-surface/[0.03] border border-on-surface/10 rounded-2xl outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all text-on-surface resize-none" />
                  <MapPin className="absolute left-4 top-4 text-on-surface/30 group-focus-within:text-primary transition-colors" size={18} />
                </div>
              </div>
              
              <div className="pt-4 flex gap-3">
                <button 
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="flex-1 py-4 rounded-2xl font-bold text-on-surface/60 hover:bg-on-surface/5 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  disabled={isLoading}
                  className="flex-[2] bg-primary text-white py-4 rounded-2xl font-bold disabled:opacity-50 transition-all shadow-lg shadow-primary/30 active:scale-[0.98]"
                >
                  {isLoading ? "Saving Address..." : "Save Address"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}