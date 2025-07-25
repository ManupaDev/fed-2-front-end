const BASE_URL = import.meta.env.VITE_BASE_URL;

export const putImage = async ({ file }) => {
  const res = await fetch(`${BASE_URL}/products/images`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ fileType: file.type }),
  });

  const data = await res.json();
  const { url, publicURL } = data;
  console.log(url, publicURL);

  const upload = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": file.type,
    },
    body: file,
  });

  return publicURL;
};
