export const resetUserPassword = async (email: string, newPassword: string) => {
  const response = await fetch("https://ecommerce.routemisr.com/api/v1/auth/resetPassword", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, newPassword }),
  });
  const data = await response.json();
  return { ok: response.ok, message: data.message };
};