// import next js request types
import { type NextApiRequest, type NextApiResponse } from "next";

import getCurrentlyPlaying from "../../services/spotify";

// TODO: Handle refresh tokens
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    res.status(200).json(await getCurrentlyPlaying());
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
