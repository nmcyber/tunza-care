// Add these utility functions for obfuscation
export function cn(...classes) {
  return classes.filter(Boolean).join(" ")
}

// Encode the contact value (Base64)
export const obfuscateValue = (value) => {
  return typeof window !== "undefined" ? btoa(value) : Buffer.from(value).toString("base64")
}

// Decode and navigate when clicked
export const handleObfuscatedClick = (e) => {
  e.preventDefault()
  const decodedValue =
    typeof window !== "undefined"
      ? atob(e.currentTarget.dataset.value || "")
      : Buffer.from(e.currentTarget.dataset.value || "", "base64").toString()
  window.location.href = `${e.currentTarget.dataset.type}:${decodedValue}`
}
