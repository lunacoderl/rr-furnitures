/**
 * RR Enterprises — WHATSAPP MESSAGE GENERATOR UTILITY
 * 100% frontend-only enquiry handler.
 * Generates an architectural, structured enquiry message and opens WhatsApp.
 */

import { business } from "../data/business";

export function formatWhatsAppMessage(data) {
  const { name, phone, service, requirement, contactPreference } = data;

  const lines = [
    `*NEW ENQUIRY — RR Enterprises*`,
    `━━━━━━━━━━━━━━━━━━━━━━`,
    `👤 *Client Name:* ${name?.trim() || "Not specified"}`,
    `📞 *Phone Number:* ${phone?.trim() || "Not specified"}`,
    `🛋️ *Selected Service:* ${service || "General Enquiry"}`,
    `💬 *Preferred Contact:* ${contactPreference || "WhatsApp"}`,
    `━━━━━━━━━━━━━━━━━━━━━━`,
    `📝 *Requirement Details:*`,
    `${requirement?.trim() || "Interested in learning more about your furniture services and custom designs."}`,
    `━━━━━━━━━━━━━━━━━━━━━━`,
    `_Sent via RR Enterprises Web Portal_`
  ];

  return lines.join("\n");
}

export function openWhatsAppEnquiry(data, customPhone = null) {
  const targetPhone = customPhone || business.whatsappRaw;
  const message = formatWhatsAppMessage(data);
  const encoded = encodeURIComponent(message);
  const url = `https://wa.me/${targetPhone}?text=${encoded}`;
  
  if (typeof window !== "undefined") {
    window.open(url, "_blank", "noopener,noreferrer");
  }
  return url;
}

export function openDirectWhatsApp(customMessage = null) {
  const text = customMessage || "Hello RR Enterprises, I would like to know more about your custom sofas and furniture services.";
  const encoded = encodeURIComponent(text);
  const url = `https://wa.me/${business.whatsappRaw}?text=${encoded}`;
  
  if (typeof window !== "undefined") {
    window.open(url, "_blank", "noopener,noreferrer");
  }
  return url;
}
