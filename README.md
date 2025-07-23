# 🛡️ Anti-DDoS Express Middleware Library

Protect your Express.js applications from basic DDoS attacks and malicious traffic with this lightweight and customizable middleware package.

---

## ✨ Features

- 📦 **Plug-and-Play Integration** Easy setup with any Express server.
- 🚀 **Rate Limiting** Limit abusive requests per IP (configurable).
- 🔥 **User-Agent Firewall** Block suspicious or automated User-Agents like curl, python, etc.
- 🧠 **Human Verification Route** Serve an HTML page to suspicious clients.
- 📝 **Blocked Agents Logging** Save logs for analysis and traceability.
- ✅ **Lightweight** Zero unnecessary dependencies, small footprint.

---

## 📁 File Structure

```
anti-ddos-lib/
├── index.js              # Main server and middleware entry point
├── package.json          # Project metadata and dependencies
├── settings.json         # Customizable settings
├── lib/
│   ├── limiter.js        # Express rate limiter middleware
│   └── firewall.js       # User-Agent blocker middleware
└── verif/
    └── human.html        # Human verification HTML page
```

---

## 🧩 How to Use

### 1. Install Dependencies

```bash
npm install
```

### 2. Start the Server

```bash
node index.js
```

### 3. Customize Settings

Open `settings.json` to configure the following:

- ⏱️ `rateLimit` — Time window and max requests per IP.
- 🔥 `blockAgents` — List of blocked User-Agents.
- 🧠 `verifyPath` — Path where human verification is served.
- 📝 `logBlocked` — Enable or disable logging blocked agents.

---

## ⚙️ Example Configuration (`settings.json`)

```json
{
  "rateLimit": {
    "windowMs": 60000,
    "max": 20
  },
  "blockAgents": ["curl", "wget", "python", "httpie"],
  "verifyPath": "/verify",
  "logBlocked": true
}
```

---

## 👀 Preview Verification Page

The verification page is a simple HTML template to distinguish bots from real users.

📄 `verif/human.html`  
Feel free to customize this page with your branding, captcha, or instructions.

---

## 📜 License

Licensed under the [MIT License](https://opensource.org/licenses/MIT).  
You are free to use, modify, and distribute this library with proper attribution.

---

## 🧠 Contributing

Suggestions, improvements, and pull requests are welcome!  
This library is built with ❤️ by **Hazel (Rerey)**.

---

## 🤝 Support

If this project helps you, consider giving it a ⭐️ and sharing it!

📲 **Contact & Support**:  
Need help or want to request features? Chat with me on WhatsApp:  
[Support Channel 💬](https://whatsapp.com/channel/0029VbAPj3U1Hsq2RJSlef2a)

---
