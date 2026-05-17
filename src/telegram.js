import { Telegraf } from 'telegraf';

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);

bot.on('text', (ctx) => {
  ctx.reply('Hello! You said: ' + ctx.message.text);
});

bot.telegram.setWebhook(`https://${process.env.VERCEL_URL}/api/telegram`);

export default async (req, res) => {
  await bot.handleUpdate(req.body, res);
};
