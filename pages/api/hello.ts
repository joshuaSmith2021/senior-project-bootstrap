import type { NextApiRequest, NextApiResponse } from "next";

export type HelloResponse = {
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<HelloResponse>,
) {
  if (req.method === "GET") {
    res.status(200).send({ message: "Hello" });
  }
}
