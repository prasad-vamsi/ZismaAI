type Req = { method?: string; body?: { name?: string; email?: string; company?: string; message?: string } };
type Res = { status: (code: number) => { json: (body: unknown) => void } };

const TO_EMAIL = "prasad.md1196@gmail.com";

export default async function handler(req: Req, res: Res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, company, message } = req.body ?? {};
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email, and message are required." });
  }

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    return res.status(503).json({
      error: "Contact form not configured. Set WEB3FORMS_ACCESS_KEY in Vercel environment variables.",
    });
  }

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `ZismaAI inquiry from ${name}`,
        from_name: name,
        email,
        message: `Company: ${company || "N/A"}\n\n${message}`,
        to: TO_EMAIL,
      }),
    });

    const data = (await response.json()) as { success?: boolean; message?: string };
    if (!response.ok || !data.success) {
      return res.status(502).json({ error: data.message || "Failed to send message." });
    }

    return res.status(200).json({ success: true });
  } catch {
    return res.status(500).json({ error: "Failed to send message. Please try again." });
  }
}
