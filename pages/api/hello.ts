// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export type HelloResponse = {
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<HelloResponse>,
) {
  console.log("hit");
  if (req.method === "GET") {
    res.status(200).send({ message: "Hello" });
  }
}
