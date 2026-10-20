"use client";

import { useEffect, useState, type FormEvent } from "react";

type Props = { endpoint?: string; encoding?: "json" | "form" };
type TrackerWindow = Window & { acrTracker?: { trackLead?: (payload: Record<string, unknown>) => void } };

const companySizes = ["1-5", "5-10", "11-50", "51-250", "251-1k", "1k+"];
const positions = ["Just 1 Position", "2-5 Positions", "6-10 Positions", "11-50 Positions", "51-100 Positions", "101-500 Positions", "501-1,000 Positions", "Over 1,000 Positions"];
const referrals = ["Google", "Email", "LinkedIn", "Reddit", "X / Twitter", "Referral", "ChatGPT / AI", "Outbound Outreach", "Other"];
const countryCodes = [
  ["🇺🇸", "+1"], ["🇨🇦", "+1"], ["🇮🇩", "+62"], ["🇵🇭", "+63"], ["🇬🇧", "+44"],
  ["🇦🇺", "+61"], ["🇳🇿", "+64"], ["🇸🇬", "+65"], ["🇮🇳", "+91"], ["🇦🇪", "+971"],
  ["🇲🇽", "+52"], ["🇧🇷", "+55"], ["🇿🇦", "+27"], ["🇩🇪", "+49"], ["🇫🇷", "+33"],
];

export default function StandardContactForm({ endpoint = "/api/submit-lead", encoding = "json" }: Props) {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [countryCode, setCountryCode] = useState("+1");
  const [referral, setReferral] = useState("");

  useEffect(() => {
    const zone = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
    const zones: Record<string, string> = {
      "Asia/Jakarta": "+62", "Asia/Makassar": "+62", "Asia/Jayapura": "+62", "Asia/Manila": "+63",
      "Europe/London": "+44", "Australia/Sydney": "+61", "Australia/Melbourne": "+61",
      "Pacific/Auckland": "+64", "Asia/Singapore": "+65", "Asia/Kolkata": "+91", "Asia/Dubai": "+971",
    };
    if (zones[zone]) setCountryCode(zones[zone]);
  }, []);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    if (String(data.get("website_url") || "").trim()) return;
    const firstName = String(data.get("firstName") || "").trim();
    const lastName = String(data.get("lastName") || "").trim();
    const phone = `${countryCode} ${String(data.get("phoneLocal") || "").trim()}`.trim();
    const payload: Record<string, string> = {
      firstName, lastName, name: `${firstName} ${lastName}`.trim(), fullName: `${firstName} ${lastName}`.trim(),
      email: String(data.get("email") || ""), businessEmail: String(data.get("email") || ""), phone,
      companyName: String(data.get("companyName") || ""), company: String(data.get("companyName") || ""),
      website: String(data.get("website") || ""), companySize: String(data.get("companySize") || ""),
      positions: String(data.get("roleNeeded") || ""), positionsCount: String(data.get("positions") || ""), preferredContact: String(data.get("preferredContact") || ""), preferredTime: String(data.get("preferredTime") || ""), positionsToFill: String(data.get("positions") || ""),
      referral: String(data.get("referral") || ""), howTheyHeard: String(data.get("referral") || ""),
      referralSpecify: String(data.get("referralSpecify") || ""), message: String(data.get("message") || ""),
      source: "contact-form", formId: "contactPageForm",
    };
    setSubmitting(true);
    setError("");
    try {
      const request = encoding === "form"
        ? { method: "POST", body: new URLSearchParams(payload) }
        : { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) };
      const response = await fetch(endpoint, request);
      if (!response.ok) throw new Error("Lead endpoint rejected the request");
      try { (window as TrackerWindow).acrTracker?.trackLead?.(payload); } catch {}
      window.location.assign("/thank-you");
    } catch {
      setError("We could not submit your request. Please try again.");
      setSubmitting(false);
    }
  }

  return (
    <div className="sa-form-card">
      <p className="sa-kicker">Free workflow consultation</p><h2>Tell us where your service team needs support</h2><p className="sa-intro">Share enough context for a useful first conversation. Required fields are marked with an asterisk.</p>
      <form action={endpoint} method="post" onSubmit={submit} id="contactPageForm" className="sa-form-grid">
        <input className="sa-hp" name="website_url" type="hidden" tabIndex={-1} autoComplete="off" aria-label="Leave this field empty" />
        <label>First Name *<input name="firstName" required autoComplete="given-name" /></label>
        <label>Last Name *<input name="lastName" required autoComplete="family-name" /></label>
        <label>Business Email *<input name="email" type="email" required autoComplete="email" /><small>Business email only</small></label>
        <label className="sa-span-2">Phone Number *<span className="sa-phone"><select aria-label="Country code" value={countryCode} onChange={(e) => setCountryCode(e.target.value)}>{countryCodes.map(([flag, code], i) => <option value={code} key={`${code}-${i}`}>{flag} {code}</option>)}</select><input name="phoneLocal" type="tel" required autoComplete="tel-national" placeholder="Phone number" /></span></label>
        <label>Company Name *<input name="companyName" required autoComplete="organization" /></label>
        <label>Website / URL<input name="website" placeholder="example.com" autoComplete="url" /></label>
        <label>Company Size *<select name="companySize" required defaultValue=""><option value="" disabled>Select...</option>{companySizes.map((x) => <option key={x}>{x}</option>)}</select></label>
        <label>Positions to Fill *<select name="positions" required defaultValue=""><option value="" disabled>Select...</option>{positions.map((x) => <option key={x}>{x}</option>)}</select></label>
        <label>Service or role needed *<input name="roleNeeded" required placeholder="Customer support coordinator" /></label>
        <label>Preferred contact *<select name="preferredContact" required defaultValue=""><option value="" disabled>Select...</option><option>Email</option><option>Phone</option><option>Video call</option></select></label>
        <label>Preferred time *<input name="preferredTime" required placeholder="Weekdays, 1–4 PM ET" /></label>
        <label>How did you hear about us? *<select name="referral" required value={referral} onChange={(e) => setReferral(e.target.value)}><option value="" disabled>Select...</option>{referrals.map((x) => <option key={x}>{x}</option>)}</select></label>
        {referral === "Other" ? <label>Please Specify *<input name="referralSpecify" required /></label> : null}
        <label className="sa-message">Message *<textarea name="message" rows={2} required placeholder="Describe the recurring work, tools, schedule, and approval points." /></label>
        <p className="sa-privacy">We use these details only to respond. Review our <a href="/privacy">Privacy Policy</a>.</p>
        {error ? <p className="sa-error" role="alert">{error}</p> : null}
        <button type="submit" disabled={submitting}>{submitting ? "Submitting..." : "Book My Free Consultation"}</button>
      </form>
      <style jsx>{`
        .sa-form-card{box-sizing:border-box;width:100%;min-width:0;max-width:876px;margin:0 auto;background:#fff;border:1px solid #e3e8ef;border-radius:22px;padding:18px 24px 22px;box-shadow:0 18px 48px rgba(15,34,58,.16);color:#34415a;text-align:left}
        .sa-kicker{margin:0 0 3px;color:#0787a4;text-transform:uppercase;letter-spacing:.12em;font-size:10px;font-weight:900}.sa-intro{margin:0 0 10px;color:#64748b;font-size:12px;line-height:1.35}.sa-privacy{grid-column:span 2;align-self:center;margin:0;color:#64748b;font-size:11px;line-height:1.25}.sa-privacy a{color:#087e9a}h2{margin:0 0 4px;color:#111827;font-size:21px;line-height:1.2;font-weight:800;letter-spacing:-.02em;max-width:700px}
        form{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:7px 10px;min-width:0}.sa-span-2{grid-column:span 2}.sa-message{grid-column:span 2}
        label{display:flex;min-width:0;flex-direction:column;gap:3px;font-size:11px;line-height:1.2;font-weight:700;color:#34415a}
        input,select,textarea{box-sizing:border-box;width:100%;min-width:0;max-width:100%;border:1px solid #cfd7e3;border-radius:8px;background:#fff;color:#1f2937;font:inherit;font-size:12px;padding:6px 8px;outline:none;min-height:32px}
        input:focus,select:focus,textarea:focus{border-color:#00adf4;box-shadow:0 0 0 3px rgba(0,173,244,.14)}
        small{margin:0;color:#7b869b;font-size:9px;font-weight:400;line-height:1}.sa-phone{display:grid;grid-template-columns:92px 1fr;border:1px solid #cfd7e3;border-radius:8px;overflow:hidden}.sa-phone:focus-within{border-color:#00adf4;box-shadow:0 0 0 3px rgba(0,173,244,.14)}
        .sa-phone select,.sa-phone input{border:0;border-radius:0;box-shadow:none!important}.sa-phone select{border-right:1px solid #dbe1ea;padding-right:4px}.sa-phone input{min-width:0}
        textarea{resize:vertical;min-height:44px;max-height:70px}button{width:100%;min-height:40px;align-self:end;border:0;border-radius:9px;background:linear-gradient(100deg,#05acec,#79cdf1);color:#fff;padding:9px 12px;font-size:14px;font-weight:800;cursor:pointer;box-shadow:0 7px 16px rgba(0,173,244,.22)}
        button:hover{filter:brightness(.98)}button:disabled{cursor:wait;opacity:.65}.sa-error{grid-column:1/-1;margin:0;color:#b42318;font-size:12px}.sa-hp{display:none!important}
        @media(max-width:700px){.sa-form-card{padding:26px 20px 30px;border-radius:18px}h2{font-size:25px;margin-bottom:10px}.sa-intro{font-size:14px;margin-bottom:20px}form{display:flex;min-width:0;flex-direction:column;gap:16px}label{font-size:15px;gap:6px}input,select,textarea{min-height:48px;padding:12px 14px;font-size:16px}.sa-phone{grid-template-columns:minmax(0,122px) minmax(0,1fr)}small{font-size:12px}.sa-privacy{font-size:13px}.sa-message textarea{min-height:100px;max-height:none}button{min-height:52px;padding:14px 18px;font-size:18px}}
      `}</style>
    </div>
  );
}
