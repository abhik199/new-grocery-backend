import { config } from "dotenv";
config();

const { SEND_EMAIL, SEND_PASS } = process.env;

export const Config = {
  SEND_EMAIL,
  SEND_PASS,
};
