// Encode the contact value (Base64)
export const obfuscateValue = (value) => btoa(value);

// Decode and navigate when clicked
export const handleObfuscatedClick = (e) => {
  e.preventDefault();
  const decodedValue = atob(e.currentTarget.dataset.value || "");
  window.location.href = `${e.currentTarget.dataset.type}:${decodedValue}`;
};