import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AccountDeletionForm from "../components/AccountDeletionForm";
import {
  UserX,
  Smartphone,
  Globe,
  FileCheck,
  Check,
  Info,
  Clock,
  Mail,
  ShieldAlert,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Account Deletion Request | Kwizera Shop",
  description:
    "Official Account Deletion & Data Removal portal for Kwizera Shop (rw.kwizerashop.app). Submit a deletion request or follow in-app deletion instructions in compliance with Google Play Data Safety policy.",
};

export default function AccountDeletionPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FDFBF9] dark:bg-[#140D0A] text-[#2C1A14] dark:text-[#F5EBE6] antialiased">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-brand-primary/15 bg-linear-to-b from-brand-error/5 via-[#FAF6F4] to-transparent dark:from-brand-error/15 dark:via-[#1A110D] dark:to-transparent py-12 sm:py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-error/20 bg-brand-error/10 dark:bg-brand-error/20 px-3.5 py-1 text-xs font-semibold text-brand-error dark:text-[#FF8A80] mb-4 shadow-sm">
              <ShieldAlert className="w-3.5 h-3.5 text-brand-error dark:text-[#FF8A80]" />
              <span>Google Play Data Safety &amp; User Privacy Control</span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-brand-primary dark:text-white">
              Account Deletion &amp; Data Erasure
            </h1>
            <p className="mt-3 text-base sm:text-lg text-brand-primary/80 dark:text-[#E8D6CE]/80 max-w-2xl">
              You have the right to permanently delete your <strong>Kwizera Shop</strong> user account and remove your personal identification records. Choose either of the two official methods below.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6 space-y-10">
          
          {/* Method 1 & 2 Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Method 1: In App */}
            <div className="rounded-2xl border border-brand-primary/15 dark:border-brand-primary/30 bg-white dark:bg-[#1A110D] p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-primary/10 dark:bg-brand-primary/30 text-brand-primary dark:text-[#E8D6CE] mb-4 font-bold text-sm">
                <Smartphone className="w-5 h-5 text-brand-primary dark:text-[#E8D6CE]" />
              </div>
              <h3 className="text-base font-bold text-brand-primary dark:text-white">
                Option 1: In-App Deletion
              </h3>
              <p className="text-xs text-brand-primary/70 dark:text-[#E8D6CE]/70 mt-1 mb-4">
                If you currently have the Kwizera Shop mobile app open:
              </p>
              <ol className="space-y-2 text-xs text-[#2C1A14]/80 dark:text-[#E8D6CE]/80 list-decimal pl-4">
                <li>Open the <strong>Kwizera Shop</strong> mobile app.</li>
                <li>Sign in with your username and password.</li>
                <li>Go to the <strong>Profile</strong> or <strong>Settings</strong> screen.</li>
                <li>Tap <strong>Account &amp; Security</strong> → <strong>Delete Account</strong>.</li>
                <li>Confirm deletion to instantly revoke your session.</li>
              </ol>
            </div>

            {/* Method 2: Web / Self-Service */}
            <div className="rounded-2xl border border-brand-primary/15 dark:border-brand-primary/30 bg-white dark:bg-[#1A110D] p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-error/10 dark:bg-brand-error/20 text-brand-error dark:text-[#FF8A80] mb-4 font-bold text-sm">
                <Globe className="w-5 h-5 text-brand-error dark:text-[#FF8A80]" />
              </div>
              <h3 className="text-base font-bold text-brand-primary dark:text-white">
                Option 2: Online Deletion Request
              </h3>
              <p className="text-xs text-brand-primary/70 dark:text-[#E8D6CE]/70 mt-1 mb-4">
                If you uninstalled the application or cannot access your device:
              </p>
              <ol className="space-y-2 text-xs text-[#2C1A14]/80 dark:text-[#E8D6CE]/80 list-decimal pl-4">
                <li>Fill out the self-service web form below.</li>
                <li>Enter your registered username or email address.</li>
                <li>Select your role (Admin or Worker).</li>
                <li>Confirm the permanent erasure acknowledgment.</li>
                <li>Click <strong>Submit Account Deletion Request</strong>.</li>
              </ol>
            </div>
          </div>

          {/* Form Section */}
          <AccountDeletionForm />

          {/* Data Retention & Erasure Policy */}
          <div className="rounded-2xl border border-brand-primary/15 dark:border-brand-primary/30 bg-white dark:bg-[#1A110D] p-6 sm:p-8 shadow-sm space-y-6">
            <h3 className="text-lg font-bold text-brand-primary dark:text-white flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-brand-primary dark:text-[#E8D6CE]" />
              <span>Data Retention &amp; Erasure Policy</span>
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6 pt-2">
              <div className="rounded-xl border border-brand-error/20 dark:border-brand-error/30 bg-brand-error/5 dark:bg-brand-error/10 p-5">
                <h4 className="text-sm font-bold text-brand-error dark:text-[#FF8A80] flex items-center gap-2">
                  <Check className="w-4 h-4 text-brand-error" />
                  <span>Data Permanently Deleted</span>
                </h4>
                <ul className="mt-3 space-y-2 text-xs text-[#2C1A14]/80 dark:text-[#E8D6CE]/80 list-disc pl-4">
                  <li>Your user account credentials, login username, and email</li>
                  <li>Cryptographic password hash and active authentication tokens (JWT)</li>
                  <li>Staff profile records and role associations</li>
                  <li>Local device session credentials and diagnostic tokens</li>
                </ul>
              </div>

              <div className="rounded-xl border border-brand-primary/20 dark:border-brand-primary/30 bg-[#FAF6F3] dark:bg-[#241712] p-5">
                <h4 className="text-sm font-bold text-brand-primary dark:text-[#E8D6CE] flex items-center gap-2">
                  <Info className="w-4 h-4 text-brand-primary dark:text-[#E8D6CE]" />
                  <span>Data Retained for Legal &amp; Audit Reasons</span>
                </h4>
                <ul className="mt-3 space-y-2 text-xs text-brand-primary/80 dark:text-[#E8D6CE]/80 list-disc pl-4">
                  <li>Historical shop sales logs and financial balances (disassociated from your personal credentials)</li>
                  <li>Aggregate shop revenue and inventory records required by shop owners for tax, legal, and financial bookkeeping obligations</li>
                </ul>
              </div>
            </div>

            {/* Retention Timeline */}
            <div className="border-t border-brand-primary/10 dark:border-brand-primary/20 pt-6">
              <h4 className="text-sm font-bold text-brand-primary dark:text-white mb-2 flex items-center gap-2">
                <Clock className="w-4 h-4 text-brand-primary dark:text-[#E8D6CE]" />
                <span>Processing Timeline</span>
              </h4>
              <p className="text-xs text-brand-primary/80 dark:text-[#E8D6CE]/80 leading-relaxed">
                Upon submitting this request, your account is instantly barred from signing into the Kwizera Shop API. Personal identifying entries are permanently wiped from production cloud databases within <strong>14 to 30 calendar days</strong>.
              </p>
            </div>

            {/* Assistance Contact */}
            <div className="border-t border-brand-primary/10 dark:border-brand-primary/20 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h5 className="text-xs font-bold text-brand-primary dark:text-white">Need help or having issues?</h5>
                <p className="text-xs text-brand-primary/70 dark:text-[#E8D6CE]/70">Our support team is available to assist you with any account or data requests.</p>
              </div>
              <a
                href="mailto:support@kwizerashop.app?subject=Account%20Deletion%20Assistance"
                className="inline-flex items-center gap-1.5 rounded-xl border border-brand-primary/30 dark:border-brand-primary/50 px-4 py-2.5 text-xs font-semibold text-brand-primary dark:text-[#E8D6CE] hover:bg-brand-primary/10 transition-colors shrink-0"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email Support</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </section>
      </main>

      <Footer />
    </div>
  );
}
