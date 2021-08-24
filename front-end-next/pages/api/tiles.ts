// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import {ITile} from "../../types/tile";
import * as fs from "fs";

// Get data from data folder
const rawdata = fs.readFileSync('../assignment-assets/data.json')

// Parse to JSON
const data = JSON.parse(rawdata)

// Extract all tiles
const tiles: ITile[] = Object.values(data['tiles'])

export default function handler(req: NextApiRequest, res: NextApiResponse<ITile[]>) {
    res.status(200).json(tiles)
}
