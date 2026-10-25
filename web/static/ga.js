// NOTE: GA never competes with first paint: the tag starts on first user
// interaction (scroll/pointer/key/touch) or a 3.5s fallback, so visits are
// still counted while the gtag bundle stays off the critical path (EIT-133).
(function () {
	"use strict";
	var ID = "G-MEQJ7JHRQQ";
	var triggers = ["scroll", "pointerdown", "keydown", "touchstart"];
	var started = false;

	function start() {
		if (started) return;
		started = true;
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
		gtag("config", ID, {
			// NOTE: No remarketing and no ad audiences: this site takes no ads (section 0).
			allow_google_signals: false,
			allow_ad_personalization_signals: false,
			// NOTE: GA4 drops the full IP either way; this removes the parameter outright.
			ip_collection: false,
		});

		var script = document.createElement("script");
		script.async = true;
		script.src = "https://www.googletagmanager.com/gtag/js?id=" + ID;
		document.head.appendChild(script);
	}

	for (var i = 0; i < triggers.length; i++) {
		addEventListener(triggers[i], start, {
			once: true,
			capture: true,
			passive: true,
		});
	}
	setTimeout(start, 3500);
})();
