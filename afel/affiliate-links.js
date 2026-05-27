const siteProfile = {
  siteName: "Forge Supplements",
  operatorName: "あなたの名前または屋号",
  contactEmail: "your-email@example.com",
  siteUrl: "https://example.com",
};

const affiliateLinks = {
  whey: {
    url: "",
    fallbackUrl: "https://www.amazon.co.jp/s?k=whey+isolate",
  },
  creatine: {
    url: "",
    fallbackUrl: "https://www.amazon.co.jp/s?k=creatine+monohydrate",
  },
  eaa: {
    url: "",
    fallbackUrl: "https://www.amazon.co.jp/s?k=EAA+supplement",
  },
  preworkout: {
    url: "",
    fallbackUrl: "https://www.amazon.co.jp/s?k=pre+workout+supplement",
  },
};

function applySiteProfile() {
  document.querySelectorAll("[data-site-name]").forEach((node) => {
    node.textContent = siteProfile.siteName;
  });

  document.querySelectorAll("[data-operator-name]").forEach((node) => {
    node.textContent = siteProfile.operatorName;
  });

  document.querySelectorAll("[data-contact-email]").forEach((node) => {
    node.textContent = siteProfile.contactEmail;
    node.href = `mailto:${siteProfile.contactEmail}`;
  });

  document.querySelectorAll("[data-site-url]").forEach((node) => {
    node.textContent = siteProfile.siteUrl;
    node.href = siteProfile.siteUrl;
  });
}

function applyAffiliateLinks() {
  document.querySelectorAll("[data-affiliate-key]").forEach((node) => {
    const key = node.getAttribute("data-affiliate-key");
    const item = affiliateLinks[key];

    if (!item) {
      return;
    }

    const finalUrl = item.url || item.fallbackUrl;
    node.href = finalUrl;

    if (item.url) {
      node.dataset.linkState = "ready";
      node.title = "正式なアフィリエイトリンクを設定済みです";
    } else {
      node.dataset.linkState = "fallback";
      node.title = "現在は一般リンクです。公開前に正式なアフィリエイトリンクへ差し替えてください";
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  applySiteProfile();
  applyAffiliateLinks();
});
