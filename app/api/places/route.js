export async function GET(req) {
  const { searchParams } = new URL(req.url);

  const country = searchParams.get("country");
  const category = searchParams.get("category");

  const API_KEY = process.env.OPENTRIPMAP_KEY;

  try {
    // 1. Get coordinates of country
    const geoRes = await fetch(
      `https://api.opentripmap.com/0.1/en/places/geoname?name=${country}&apikey=${API_KEY}`
    );

    const geo = await geoRes.json();

    if (!geo.lat || !geo.lon) {
      return Response.json({ country, category, places: [] });
    }

    const lat = geo.lat;
    const lon = geo.lon;

    // 2. Map category → OpenTripMap types
    const categoryMap = {
  Nature: "natural",
  Beach: "beaches",
  City: "interesting_places",
  Historical: "cultural",
  Adventure: "natural",
  Nightlife: "amusements",
};

    const kinds = categoryMap[category] || "interesting_places";

    // 3. Fetch places
    const placesRes = await fetch(
      `https://api.opentripmap.com/0.1/en/places/radius?radius=30000&limit=12&offset=0&lon=${lon}&lat=${lat}&kinds=${kinds}&apikey=${API_KEY}`
    );

    const placesData = await placesRes.json();

    const features = placesData?.features || [];

    // 4. REAL IMAGE FETCH (Wikipedia ONLY)
    const places = await Promise.all(
      features
        .filter((p) => p.properties?.name)
        .map(async (p) => {
          const name = p.properties.name;

          let image = null;

          try {
            const wikiRes = await fetch(
              `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(
                name
              )}`
            );

            const wiki = await wikiRes.json();

            image = wiki?.thumbnail?.source || null;
          } catch (err) {
            image = null;
          }

          return {
            name,

            // REAL IMAGE ONLY (NO RANDOM FALLBACK)
            image: image,

            season: getSeason(category),
          };
        })
    );

    return Response.json({
      country,
      category,
      places,
    });
  } catch (err) {
    return Response.json({
      country,
      category,
      places: [],
      error: "Failed to load places",
    });
  }
}

// simple season logic
function getSeason(category) {
  switch (category) {
    case "Beach":
      return "Summer";
    case "Nature":
      return "Spring / Autumn";
    case "City":
      return "All Year";
    case "Historical":
      return "Spring";
    default:
      return "All Year";
  }
}