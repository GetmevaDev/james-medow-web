export const formatPhoneNumber = (value) => {
  const cleanedValue = value.replace(/\D/g, "");
  const match = cleanedValue.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
  if (match) {
    let formattedValue = "";
    if (match[1]) {
      formattedValue += `(${match[1]}`;
    }
    if (match[2]) {
      formattedValue += `) ${match[2]}`;
    }
    if (match[3]) {
      formattedValue += `-${match[3]}`;
    }
    return formattedValue;
  }
  return cleanedValue;
};
