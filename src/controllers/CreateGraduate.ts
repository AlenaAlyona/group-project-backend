import { Request, Response } from "express"
import { getManager } from "typeorm"
import { Graduate } from "../entity/Graduate"

export async function createGraduate(request: Request, response: Response) {
  const {
    fullName,
    email,
    password,
    language,
    education,
    interviews,
    monthsToJob,
    jobType,
    industry,
    companyLang,
    companySize,
    techStack,
    answer1,
    answer2,
    answer3,
    answer4,
    answer5,
    answer6,
    answer7,
  } = request.body

  if (
    !fullName ||
    !email ||
    !password ||
    !language ||
    !education ||
    !interviews ||
    !monthsToJob ||
    !jobType ||
    !industry ||
    !companyLang ||
    !companySize ||
    !techStack ||
    !answer1 ||
    !answer2 ||
    !answer3 ||
    !answer4 ||
    !answer5 ||
    !answer6 ||
    !answer7
  ) {
    return response
      .status(400)
      .send({ message: "Please provide all the information" })
    // throw new Error("Please provide all the information");
  } else {
    // get a graduate repository to perform operations with graduate
    const graduateRepository = getManager().getRepository(Graduate)

    // create a real graduate object from graduate json object sent over http
    const newgraduate = graduateRepository.create({
      fullName,
      email,
      password,
      education,
      language,
      monthsToJob,
      interviews,
      jobType,
      industry,
      companyLang,
      companySize,
      techStack,
      answer1,
      answer2,
      answer3,
      answer4,
      answer5,
      answer6,
      answer7,
    });
    console.log("NEW GRADUATE", newgraduate)
    // delete newgraduate.password

    // save received graduate
    await graduateRepository.save(newgraduate)

    // return saved graduate back
    response.send(newgraduate)
  }
}
