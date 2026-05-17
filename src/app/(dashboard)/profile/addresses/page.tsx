import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/lib/auth"; 
import { MapPin, Plus, Trash2, Edit2, Home, Briefcase } from "lucide-react";
import AddAddressModal from "@/app/_components/adressModal/AddAdressModal";



interface Address {
  _id: string;
  name: string;
  details: string;
  phone: string;
  city: string;
}


export default async function AddressesPage() {
 const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  // Fetch الحقيقي من الـ API
  const res = await fetch("https://ecommerce.routemisr.com/api/v1/addresses", {
    headers: {
      "token": session.user.token, 
    },
    next: { revalidate: 0 } 
  });

  const data = await res.json();
  const addresses: Address[] = data.data || [];
  return <>
  
  <div className="space-y-8">
      {/* الهيدر */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-on-surface flex items-center gap-2">
            <MapPin className="text-primary" /> My Addresses
          </h2>
          <p className="text-on-surface/60 text-sm mt-1">
            Manage your shipping addresses for a faster checkout experience.
          </p>
        </div>
        
        <AddAddressModal token={session.user.token} />
      </div>

     
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {addresses.map((addr) => (
          <div 
            key={addr._id} 
            className="p-5 rounded-2xl border border-on-surface/10 bg-surface hover:border-primary/50 transition-all"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-on-surface/5 text-primary flex items-center justify-center">
                  <Home size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-on-surface">{addr.name}</h3>
                  <span className="text-[10px] text-on-surface/40 uppercase">{addr.city}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <button className="p-2 text-on-surface/40 hover:text-red-500 transition-colors">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-on-surface/70 text-sm leading-relaxed">
                {addr.details}
              </p>
              <div className="flex items-center gap-2 text-on-surface/50 text-xs">
                <span className="font-medium">Phone:</span>
                <span>{addr.phone}</span>
              </div>
            </div>
          </div>
        ))}

        
        {addresses.length === 0 && (
           <div className="lg:col-span-2 py-20 border-2 border-dashed border-on-surface/10 rounded-3xl flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 bg-on-surface/5 rounded-full flex items-center justify-center mb-4 text-on-surface/20">
                <MapPin size={32} />
              </div>
              <h3 className="text-on-surface font-bold text-xl">No Addresses Yet</h3>
              <p className="text-on-surface/40 text-sm mt-1 max-w-62.5">
                Add your first delivery address to make checkout faster and easier.
              </p>
              <AddAddressModal token={session.user.token} />
           </div>
        )}
      </div>
    </div>
  
  
  </>


}