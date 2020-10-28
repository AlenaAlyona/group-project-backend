import { Request, Response } from "express";
import { getManager } from "typeorm";
import { Graduate } from "../entity/Graduate";

/**
 * Loads all graduates from the database.
 */
export async function GetAllGraduates(request: Request, response: Response) {
  // get a graduate repository to perform operations with post
  const graduateRepository = getManager().getRepository(Graduate);

  // load all graduates
  const graduates = await graduateRepository.find();

  // return loaded graduates
  return response.send(graduates);
}
