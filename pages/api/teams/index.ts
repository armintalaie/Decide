// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name?: string;
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") {
    res.status(200).json({ message: "HIs" });
  } else if (req.method === "POST") {
    res.status(200).json({ message: "HI" });
  } else {
    res.status(400).json({ message: `no support for ${req.method}` });
  }
}

function createTeam() {}

function getTeams() {}
