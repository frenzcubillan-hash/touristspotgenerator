const mockSpots = {
  Japan: {
    nature: ["Mount Fuji", "Nikko Forest"],
    beach: ["Okinawa Beach"],
    city: ["Tokyo Tower"],
  },
  Philippines: {
    nature: ["Banaue Rice Terraces"],
    beach: ["Boracay", "El Nido"],
    city: ["Manila Intramuros"],
  },
};

const seasonMap = {
  nature: "Best in Spring / Autumn",
  beach: "Best in Summer",
  city: "Best in Winter",
};

export async function GET(req) {
  const { searchParams } = new URL(req.url);

  const country = searchParams.get("country");
  const type = searchParams.get("type");

  const spots = mockSpots?.[country]?.[type] || [];

  return Response.json({
    country,
    type,
    season: seasonMap[type] || "All seasons",
    spots,
  });
}