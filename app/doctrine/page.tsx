// app/doctrine/page.tsx
// NOTE: We are intentionally de-emphasizing “Doctrine” to reduce density.
// This route is kept for stability (no routing churn). It now redirects to Compliance.

import { redirect } from "next/navigation";

export default function DoctrinePage() {
  redirect("/compliance");
}
