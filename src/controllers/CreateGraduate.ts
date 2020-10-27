import { Request, Response } from "express";
import { getManager } from "typeorm";
import { Graduate } from "../entity/Graduate";

/**
 * Saves given graduate.
 */
export async function createGraduate(request: Request, response: Response) {
  const { fullName, email, password } = request.body;
  if (!fullName || !email || !password) {
    return response
      .status(400)
      .send({ message: "Please provide all the information" });
    // throw new Error("Please provide all the information");
  } else {
    // get a graduate repository to perform operations with graduate
    const graduateRepository = getManager().getRepository(Graduate);

    // create a real graduate object from graduate json object sent over http
    const newgraduate = graduateRepository.create({
      fullName,
      email,
      password,
    });

    console.log("NEW GRADUATE", newgraduate);
    // delete newgraduate.password

    // save received graduate
    await graduateRepository.save(newgraduate);

    // return saved graduate back
    response.send(newgraduate);
  }
}
