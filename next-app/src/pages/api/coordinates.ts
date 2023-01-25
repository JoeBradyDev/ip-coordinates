import { getCoordinatesListByIP } from "@/utils/dbUtils";
import type { NextApiRequest, NextApiResponse } from "next";
import { ICoordinates } from "@/shared/models";

const getCoordinates = async (
  req: NextApiRequest,
  res: NextApiResponse<ICoordinates[]>
) => {
  switch (req?.method) {
    case "GET":
      const coordinatesList = await getCoordinatesListByIP(
        // Because query strings can have multiple items per field, a single item is converted
        // to an array so that dbUtils can focus on only handling arrays.
        Array.isArray(req?.query?.ip) ? req.query.ip : [req?.query?.ip ?? ""]
      );
      res.status(200).json(coordinatesList);
      break;
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${req?.method} Not Allowed`);
  }
};

export default getCoordinates;
