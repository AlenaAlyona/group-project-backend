import { Request, Response } from "express"
import { getManager } from "typeorm"
import { Graduate } from "../entity/Graduate"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export async function Login(request: Request, response: Response) {
  // get a post repository to perform operations with post
  try {
    const { email, password } = request.body

    if (!email || !password) {
      return response
        .status(400)
        .send({ message: "Please provide both email and password" })
    }

    const graduateRepository = getManager().getRepository(Graduate)

    const user = await graduateRepository.findOne({ where: { email } })

    if (!user || !bcrypt.compareSync(password, user.password)) {
      return response.status(400).send({
        message: "User with that email not found or password incorrect",
      })
    }

    // to do: generate jwtSecret and add to .env  then replace string below
    const token = jwt.sign(user, "AOIDJFIWEJR9138719283U1J2I3N1O2%$!&%@", {
      expiresIn: "2h",
    })

    return response.status(200).send({ token, user })
  } catch (e) {
    console.log("error in login route:", e)
    response.status(400).send({ message: "Something went wrong" })
  }
}
