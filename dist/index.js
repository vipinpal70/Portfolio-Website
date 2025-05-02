// server/index.ts
import express2 from "express";

// server/routes.ts
import { createServer } from "http";

// server/email.ts
import nodemailer from "nodemailer";
async function sendContactEmail(data) {
  const emailUser = process.env.EMAIL_USER || "vipinpal.dev@gmail.com";
  const emailPass = process.env.EMAIL_PASS || "";
  const emailHost = process.env.EMAIL_HOST || "smtp.gmail.com";
  const emailPort = parseInt(process.env.EMAIL_PORT || "587");
  const transporter = nodemailer.createTransport({
    host: emailHost,
    port: emailPort,
    secure: emailPort === 465,
    auth: {
      user: emailUser,
      pass: emailPass
    }
  });
  const ownerMailOptions = {
    from: `"Portfolio Contact" <${emailUser}>`,
    to: emailUser,
    subject: `Portfolio Contact: ${data.subject}`,
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 5px;">
        <h2 style="color: #3b82f6; margin-bottom: 20px;">New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Subject:</strong> ${data.subject}</p>
        <p><strong>Message:</strong></p>
        <div style="background-color: #f9fafb; padding: 15px; border-radius: 5px; margin-top: 10px; margin-bottom: 20px;">
          ${data.message.replace(/\n/g, "<br>")}
        </div>
        <p style="color: #6b7280; font-size: 14px;">This message was sent from your portfolio website.</p>
      </div>
    `
  };
  const senderMailOptions = {
    from: `"Vipin Pal" <${emailUser}>`,
    to: data.email,
    subject: `Thank you for your message: ${data.subject}`,
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 5px;">
        <h2 style="color: #3b82f6; margin-bottom: 20px;">Thank You for Contacting Me</h2>
        <p>Hello ${data.name},</p>
        <p>Thank you for reaching out to me. I appreciate your interest and will get back to you as soon as possible.</p>
        <p>Here's a copy of your message:</p>
        <div style="background-color: #f9fafb; padding: 15px; border-radius: 5px; margin-top: 10px; margin-bottom: 20px;">
          ${data.message.replace(/\n/g, "<br>")}
        </div>
        <p>Best regards,</p>
        <p><strong>Vipin Pal</strong><br>Python/Full-Stack Developer</p>
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; font-size: 14px; color: #6b7280;">
          <p>This is an automated response. Please do not reply to this email.</p>
        </div>
      </div>
    `
  };
  try {
    await transporter.sendMail(ownerMailOptions);
    await transporter.sendMail(senderMailOptions);
    console.log("Emails sent successfully");
  } catch (error) {
    console.error("Error sending emails:", error);
    throw new Error("Failed to send emails");
  }
}

// server/routes.ts
async function registerRoutes(app2) {
  app2.post("/api/contact", async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;
      if (!name || !email || !subject || !message) {
        return res.status(400).json({
          success: false,
          message: "All fields are required"
        });
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({
          success: false,
          message: "Invalid email format"
        });
      }
      await sendContactEmail({
        name,
        email,
        subject,
        message
      });
      return res.status(200).json({
        success: true,
        message: "Email sent successfully"
      });
    } catch (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({
        success: false,
        message: "Failed to send email. Please try again later."
      });
    }
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path2 from "path";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets")
    }
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var app = express2();
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path3 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path3.startsWith("/api")) {
      let logLine = `${req.method} ${path3} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = 5e3;
  server.listen(
    {
      port,
      host: "127.0.0.1"
    },
    () => {
      log(`serving on port ${port}`);
    }
  );
})();
