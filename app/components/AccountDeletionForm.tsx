"use client";

import { useState } from "react";
import { UserX, CheckCircle2, AlertCircle, Loader2, RefreshCw, Mail, ShieldAlert } from "lucide-react";

export default function AccountDeletionForm() {
  const [formData, setFormData] = useState({
    identifier: "",
    shopName: "",
    role: "worker",
    reason: "",
    confirmed: false,
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [ticketId, setTicketId] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.identifier.trim()) {
      setErrorMessage("Please enter your registered email or username.");
      setStatus("error");
      return;
    }
    if (!formData.confirmed) {
      setErrorMessage("Please confirm that you understand this action is permanent.");
      setStatus("error");
      return;
    }

    setErrorMessage("");
    setStatus("submitting");

    // Simulate API request processing
    setTimeout(() => {
      const generatedId = "DEL-" + Math.random().toString(36).substring(2, 8).toUpperCase() + "-" + Date.now().toString().slice(-4);
      setTicketId(generatedId);
      setStatus("success");
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      identifier: "",
      shopName: "",
      role: "worker",
      reason: "",
      confirmed: false,
    });
    setStatus("idle");
    setTicketId("");
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-brand-success/30 bg-brand-success/5 p-6 sm:p-8 dark:border-brand-success/40 dark:bg-brand-success/10">
        <div className="flex items-center gap-3.5">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-success/15 text-brand-success">
            <CheckCircle2 className="h-6 w-6 text-brand-success" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-brand-success dark:text-[#81C784]">
              Account Deletion Request Submitted
            </h3>
            <p className="text-xs text-brand-success/80 dark:text-[#81C784]/80">
              Reference Code: <span className="font-mono font-bold">{ticketId}</span>
            </p>
          </div>
        </div>

        <div className="mt-5 space-y-3 text-sm text-[#2C1A14] dark:text-[#E8D6CE]">
          <p>
            Your deletion request for <strong className="text-brand-primary dark:text-white">{formData.identifier}</strong> has been logged in our system.
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs text-brand-primary/80 dark:text-[#E8D6CE]/80">
            <li>Your account credentials and authentication sessions have been scheduled for immediate deactivation.</li>
            <li>Personal user identification data will be permanently wiped within 14 business days.</li>
            <li>A confirmation receipt has been dispatched to your registered address.</li>
          </ul>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 rounded-xl bg-brand-primary px-4 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-brand-hover transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Submit Another Request</span>
          </button>
          <a
            href="mailto:support@kwizerashop.app"
            className="inline-flex items-center gap-1.5 rounded-xl border border-brand-primary/30 px-4 py-2.5 text-xs font-semibold text-brand-primary hover:bg-brand-primary/10 dark:text-[#E8D6CE] dark:border-brand-primary/50 transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Contact Support</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-brand-primary/20 dark:border-brand-primary/30 bg-white dark:bg-[#1A110D] p-6 sm:p-8 shadow-sm">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-brand-primary dark:text-[#F5EBE6] flex items-center gap-2.5">
          <UserX className="w-5 h-5 text-brand-error" />
          <span>Self-Service Account Deletion Request</span>
        </h3>
        <p className="mt-1 text-xs text-brand-primary/70 dark:text-[#E8D6CE]/70">
          Submit this form if you no longer have access to the Kwizera Shop mobile application or wish to immediately request data deletion.
        </p>
      </div>

      {status === "error" && errorMessage && (
        <div className="mb-5 rounded-xl border border-brand-error/30 bg-brand-error/10 p-3.5 text-xs font-medium text-brand-error dark:text-[#FF8A80] flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0 text-brand-error" />
          <span>{errorMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="identifier" className="block text-xs font-semibold text-brand-primary dark:text-[#E8D6CE] mb-1.5">
            Registered Email or Username <span className="text-brand-error">*</span>
          </label>
          <input
            id="identifier"
            type="text"
            required
            placeholder="e.g. worker@kwizerashop.app or username"
            value={formData.identifier}
            onChange={(e) => setFormData({ ...formData, identifier: e.target.value })}
            className="w-full rounded-xl border border-brand-primary/20 dark:border-brand-primary/40 bg-[#FAF6F3] dark:bg-[#241712] px-3.5 py-2.5 text-sm text-[#2C1A14] dark:text-white placeholder-brand-primary/40 dark:placeholder-[#E8D6CE]/40 focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary"
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="shopName" className="block text-xs font-semibold text-brand-primary dark:text-[#E8D6CE] mb-1.5">
              Shop Name or Identifier (Optional)
            </label>
            <input
              id="shopName"
              type="text"
              placeholder="e.g. Kwizera Shop Main"
              value={formData.shopName}
              onChange={(e) => setFormData({ ...formData, shopName: e.target.value })}
              className="w-full rounded-xl border border-brand-primary/20 dark:border-brand-primary/40 bg-[#FAF6F3] dark:bg-[#241712] px-3.5 py-2.5 text-sm text-[#2C1A14] dark:text-white placeholder-brand-primary/40 dark:placeholder-[#E8D6CE]/40 focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary"
            />
          </div>

          <div>
            <label htmlFor="role" className="block text-xs font-semibold text-brand-primary dark:text-[#E8D6CE] mb-1.5">
              Account Role
            </label>
            <select
              id="role"
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
              className="w-full rounded-xl border border-brand-primary/20 dark:border-brand-primary/40 bg-[#FAF6F3] dark:bg-[#241712] px-3.5 py-2.5 text-sm text-[#2C1A14] dark:text-white focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary"
            >
              <option value="worker">Worker / Sales Staff</option>
              <option value="admin">Admin / Shop Owner</option>
              <option value="other">Other / Not Sure</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="reason" className="block text-xs font-semibold text-brand-primary dark:text-[#E8D6CE] mb-1.5">
            Reason for Deletion (Optional)
          </label>
          <textarea
            id="reason"
            rows={2}
            placeholder="Tell us why you wish to delete your account..."
            value={formData.reason}
            onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
            className="w-full rounded-xl border border-brand-primary/20 dark:border-brand-primary/40 bg-[#FAF6F3] dark:bg-[#241712] px-3.5 py-2 text-sm text-[#2C1A14] dark:text-white placeholder-brand-primary/40 dark:placeholder-[#E8D6CE]/40 focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary"
          />
        </div>

        {/* Confirmation Checkbox */}
        <div className="rounded-xl border border-brand-error/20 dark:border-brand-error/30 bg-brand-error/5 dark:bg-brand-error/10 p-4">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.confirmed}
              onChange={(e) => setFormData({ ...formData, confirmed: e.target.checked })}
              className="mt-0.5 h-4 w-4 rounded border-brand-error/40 text-brand-error focus:ring-brand-error"
            />
            <span className="text-xs font-medium text-[#2C1A14] dark:text-[#E8D6CE]">
              I acknowledge that submitting this request will permanently erase my login credentials, active sessions, and personal profile from Kwizera Shop.
            </span>
          </label>
        </div>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-brand-error px-6 py-3 text-sm font-semibold text-white shadow-md shadow-brand-error/20 hover:bg-[#B71C1C] focus:outline-none focus:ring-2 focus:ring-brand-error focus:ring-offset-2 disabled:opacity-60 transition-colors"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin text-white" />
              <span>Processing Request...</span>
            </>
          ) : (
            <>
              <ShieldAlert className="w-4 h-4" />
              <span>Submit Account Deletion Request</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
