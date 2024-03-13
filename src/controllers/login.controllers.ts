import { Request, Response } from "express";
import {  } from "../interfaces";
import { LoginReturn } from "../interfaces/login.interfaces";
import loginServices from "../services/login.services";

const create = async (req: Request, res: Response): Promise<Response> => {
  const token: LoginReturn = await loginServices.create(req.body);
  return res.status(200).json(token);
};

export default { create };