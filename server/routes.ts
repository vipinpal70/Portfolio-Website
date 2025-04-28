import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { sendContactEmail } from "./email";

export async function registerRoutes(app: Express): Promise<Server> {
  // API Endpoint for contact form
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      const { name, email, subject, message } = req.body;
      
      if (!name || !email || !subject || !message) {
        return res.status(400).json({ 
          success: false, 
          message: "All fields are required" 
        });
      }
      
      // Regular expression to validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ 
          success: false, 
          message: "Invalid email format" 
        });
      }
      
      // Send email using our email service
      await sendContactEmail({
        name,
        email,
        subject,
        message
      });
      
      // Return success response
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

  const httpServer = createServer(app);
  return httpServer;
}
