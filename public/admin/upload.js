function uploadToR2(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onloadend = async () => {
      const base64 = reader.result.split(",")[1];

      const res = await fetch("/.netlify/functions/upload", {
        method: "POST",
        body: JSON.stringify({
          file: base64,
          name: file.name,
        }),
      });

      const data = await res.json();

      resolve(data.url);
    };

    reader.readAsDataURL(file);
  });
}