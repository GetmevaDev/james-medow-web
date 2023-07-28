export const convertFileToBase64 = (file) =>
  new Promise((resolve, reject) => {
    if (!file) {
      resolve(null);
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      resolve(reader.result.split(",")[1]); // Extract the base64 data part
    };

    reader.onerror = (error) => {
      reject(error);
    };
  });
