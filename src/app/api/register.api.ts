 export async function registerUser(data : any){


    const response = await fetch(`https://ecommerce.routemisr.com/api/v1/auth/signup`, {
        method:"POST",
        headers:{
            "Content-Type": "application/json",
        },
        body:JSON.stringify(data)
    });
    const result = await response.json();
    if (result.message !== "success") {
    // إحنا هنا بنرمي "غلط" يدوي عشان التوستر يحس بيه
    throw new Error(result.message); 
  }
  return result
    
    

 }