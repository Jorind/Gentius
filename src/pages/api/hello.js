// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const secret = process.env.SENDGRID_API_SECRET;

export default function handler(req, res) {
  res.status(200).json({ name: "Jorind Plasa" });
}
