import { Request, Response } from "express";
import { getManager } from "typeorm";
import { Experience } from "../entity/Experience";

/**
 * Loads all experiences from the database.
 */
export async function GetAllExperience(request: Request, response: Response) {
  // get a post repository to perform operations with post
  const expRepository = getManager().getRepository(Experience);

  // load a post by a given post id
  const experiences = await expRepository.find();

  // return loaded experiences
  response.send(experiences);
}
