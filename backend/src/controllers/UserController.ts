import { Request, Response } from 'express'
import EmailService from '../services/EmailService'

const users = [
  { name: "Diego", email: "diego@email.com" }
]

export default {
  async index(req: Request, res: Response) {
    return res.json(users)
  },
  async create(req: Request, res: Response) {
    const emailService = new EmailService()

    emailService.sendMail({
      to: { name: "Diego Zago", email: "diego@email.con" },
      message: { subject: "Teste", body: "Teste body" }
    })

    return res.send()
  }
}