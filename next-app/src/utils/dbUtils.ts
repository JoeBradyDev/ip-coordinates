import { ICoordinates } from "@/shared/models";
import { Reader } from "@maxmind/geoip2-node";
import { City as ICity } from "@maxmind/geoip2-node/dist/src/models";

export const getCitiesByIP = async (
  ipAddresses: string[]
): Promise<ICity[]> => {
  try {
    const reader = await Reader.open("/app/src/db/GeoLite2-City.mmdb");
    return ipAddresses.map((ip) => reader.city(ip));
  } catch (e) {
    console.log(e);
    return [];
  }
};

export const getCoordinatesListByIP = async (
  ipAddresses: string[]
): Promise<ICoordinates[]> => {
  const cities = await getCitiesByIP(ipAddresses);
  return cities
    .filter((city) => !!city?.location?.latitude && !!city?.location?.longitude)
    .map((city) => ({
      // Because of the filter, we already know these aren't undefined
      latitude: city?.location?.latitude as number,
      longitude: city?.location?.longitude as number,
    }));
};
