export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const region = searchParams.get("continent");

  try {
    const res = await fetch(
      "https://restcountries.com/v3.1/all"
    );

    const data = await res.json();

    const filtered = data
      .filter((c) => {
        if (!region) return true;

        const map = {
          Asia: "Asia",
          Europe: "Europe",
          Africa: "Africa",
          Americas: "Americas",
        };

        return c.region === map[region];
      })
      .map((c) => ({
        name: c.name.common,
        countryCode: c.cca2,
      }))
      .slice(0, 50);

    return Response.json(filtered);
  } catch (err) {
    return Response.json([], { status: 500 });
  }
}