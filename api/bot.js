import { Bot, webhookCallback } from 'grammy';

const token = process.env.BOT_TOKEN;

if (!token) {
  throw new Error("NO TOKEN")
}
