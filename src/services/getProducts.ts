export async function getProducts() {
  const res = await fetch(
    "https://4fceb7e0425743f29001b00ec1c74325.api.mockbin.io/",
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
