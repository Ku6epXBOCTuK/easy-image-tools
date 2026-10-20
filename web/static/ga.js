window.dataLayer = window.dataLayer || [];
function gtag() {
	window.dataLayer.push(arguments);
}

// NOTE: Consent Mode v2, denied by default before any config call: analytics
// then run cookieless (pings without cookies, no cross-site identity), the
// configuration promised in docs/plan-seo.md section 0. No consent UI planned.
gtag("consent", "default", {
	analytics_storage: "denied",
	ad_storage: "denied",
	ad_user_data: "denied",
	ad_personalization: "denied",
	functionality_storage: "denied",
	personalization_storage: "denied",
	security_storage: "granted",
});

gtag("js", new Date());
gtag("config", "G-MEQJ7JHRQQ", {
	// NOTE: No remarketing and no ad audiences: this site takes no ads (section 0).
	allow_google_signals: false,
	allow_ad_personalization_signals: false,
	// NOTE: GA4 drops the full IP either way; this removes the parameter outright.
	ip_collection: false,
});