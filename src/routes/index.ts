import express from "express";
import PingController from "../controllers/ping";
import { PingReq } from "../interface";

const router = express.Router();

router.get("/ping", async (_req, res) => {
  const controller = new PingController();
  const response = await controller.getText("text", "def");
  return res.send(response);
});

router.get("/ping/:id", async (_req, res) => {
  const controller = new PingController();
  const response = await controller.getText("text", "def");
  return res.send(response);
});

router.post("/ping", async (_req, res) => {
  const controller = new PingController();
  const data = {} as PingReq;
  const response = await controller.getMessage(data);
  return res.send(response);
});

export default router;
