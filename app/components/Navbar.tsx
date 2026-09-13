import Link from "next/link";
import { ShoppingBag, ShieldCheck, UserX } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand-primary/15 bg-[#FDFBF9]/90 backdrop-blur-md dark:border-brand-primary/30 dark:bg-[#140D0A]/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-primary text-white shadow-md shadow-brand-primary/25 group-hover:bg-brand-hover transition-colors">
            <ShoppingBag className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-base font-bold text-brand-primary dark:text-[#F5EBE6] tracking-tight">
                Kwizera Shop
              </span>
              <span className="inline-flex items-center rounded-full bg-brand-primary/10 dark:bg-brand-primary/30 px-2 py-0.5 text-[11px] font-semibold text-brand-primary dark:text-[#E8D6CE] border border-brand-primary/20">
                Portal
              </span>
            </div>
            <p className="text-[11px] text-brand-primary/70 dark:text-[#E8D6CE]/70 -mt-0.5">
              Shop Management System
            </p>
          </div>
        </Link>

        <nav className="flex items-center gap-1.5 sm:gap-3">
          <Link
            href="/"
            className="rounded-lg px-3 py-1.5 text-sm font-medium text-brand-primary/80 hover:bg-brand-primary/10 hover:text-brand-primary dark:text-[#E8D6CE]/80 dark:hover:bg-brand-primary/20 dark:hover:text-white transition-colors"
          >
            Overview
          </Link>
          <Link
            href="/privacy-policy"
            className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium text-brand-primary/80 hover:bg-brand-primary/10 hover:text-brand-primary dark:text-[#E8D6CE]/80 dark:hover:bg-brand-primary/20 dark:hover:text-white transition-colors"
          >
            <ShieldCheck className="w-4 h-4 text-brand-primary dark:text-[#E8D6CE]" />
            <span>Privacy Policy</span>
          </Link>
          <Link
            href="/account-deletion"
            className="flex items-center gap-1.5 rounded-lg bg-brand-error/10 px-3.5 py-1.5 text-sm font-semibold text-brand-error hover:bg-brand-error/20 border border-brand-error/30 dark:bg-brand-error/20 dark:text-[#FF8A80] dark:border-brand-error/40 transition-colors"
          >
            <UserX className="w-4 h-4 text-brand-error dark:text-[#FF8A80]" />
            <span>Delete Account</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
