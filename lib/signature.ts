/**
 * Where the signature's own images (photo, logos, icons) are hosted — the live
 * Vercel deployment, not SITE_URL (leaseback.immo isn't pointed at it yet).
 */
const ASSET_BASE_URL = 'https://web-leaseback.vercel.app';

/** Data for one team member's signature. Only the name is required — everything else is optional. */
export type SignatureData = {
  name: string;
  title: string;
  mobile: string;
  phone: string;
  email: string;
  website1: string;
  website1Label: string;
  website2: string;
  website2Label: string;
  address: string;
  orias: string;
  photoUrl: string;
  blueleaseLogoUrl: string;
  leasebackLogoUrl: string;
  oriasBadgeUrl: string;
  linkedinIconUrl: string;
  linkedinPersonal: string;
  linkedinBluelease: string;
  linkedinLeaseback: string;
  highlightText: string;
  highlightUrl: string;
};

/** Guillaume Delcros's card, used as the generator's starting example. */
export const DEFAULT_SIGNATURE: SignatureData = {
  name: 'Guillaume DELCROS',
  title: 'Dirigeant associé',
  mobile: '06 84 81 73 99',
  phone: '02 55 99 44 07',
  email: '',
  website1: 'https://www.blue-lease.fr',
  website1Label: 'www.blue-lease.fr',
  website2: 'https://www.leaseback.immo',
  website2Label: 'www.leaseback.immo',
  address: "15 Boulevard Gabriel Guist'hau - 44000 Nantes",
  orias: '25000436',
  photoUrl: `${ASSET_BASE_URL}/signature/guillaume-delcros.png`,
  blueleaseLogoUrl: `${ASSET_BASE_URL}/signature/bluelease-logo.png`,
  leasebackLogoUrl: `${ASSET_BASE_URL}/signature/leaseback-logo.png`,
  oriasBadgeUrl: `${ASSET_BASE_URL}/signature/orias-badge.png`,
  linkedinIconUrl: `${ASSET_BASE_URL}/signature/linkedin-icon.png`,
  linkedinPersonal: 'https://www.linkedin.com/in/guillaume-delcros-3a364923/',
  linkedinBluelease: 'https://www.linkedin.com/company/bluelease/',
  linkedinLeaseback: '',
  highlightText: '',
  highlightUrl: '',
};

const WINE = '#7D1A2E';
const NAVY = '#0D1B2A';
const MUTED = '#5B6472';
const TINT = '#F6E9EB';
const FONT = 'Arial, Helvetica, sans-serif';
const LABEL_WIDTH = 68;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/** Digits-only, prefixed for a `tel:` href — good enough for French mobile/landline formats. */
function telHref(raw: string): string {
  const digits = raw.replace(/[^\d+]/g, '');
  if (!digits) return '';
  return digits.startsWith('+') ? digits : `+33${digits.replace(/^0/, '')}`;
}

/** One contact line as a fixed-width label cell + value cell, so every value column lines up. */
function row(label: string, valueHtml: string): string {
  return (
    `<tr>` +
    `<td width="${LABEL_WIDTH}" valign="top" style="padding:2px 0;font-family:${FONT};font-size:13px;line-height:19px;font-weight:700;color:${WINE};white-space:nowrap;">${escapeHtml(label)}</td>` +
    `<td valign="top" style="padding:2px 0;font-family:${FONT};font-size:13px;line-height:19px;color:${NAVY};">${valueHtml}</td>` +
    `</tr>`
  );
}

/** A small clickable LinkedIn glyph, inlined next to a name or logo — omitted entirely when no URL is set. */
function linkedinBadge(url: string, iconUrl: string, label: string): string {
  if (!url.trim()) return '';
  return (
    `<a href="${escapeHtml(url.trim())}" style="display:inline-block;vertical-align:middle;line-height:0;" aria-label="${escapeHtml(label)}">` +
    `<img src="${escapeHtml(iconUrl.trim())}" width="16" height="16" alt="LinkedIn" style="display:block;width:16px;height:16px;border:0;" />` +
    `</a>`
  );
}

/** One stacked logo + its optional LinkedIn badge, both in the narrow left column. */
function logoLine(logoUrl: string, logoWidth: number, logoHeight: number, websiteUrl: string, alt: string, linkedinUrl: string, linkedinIconUrl: string): string {
  if (!logoUrl.trim()) return '';
  const img = `<img src="${escapeHtml(logoUrl.trim())}" width="${logoWidth}" height="${logoHeight}" alt="${escapeHtml(alt)}" style="display:block;width:${logoWidth}px;height:${logoHeight}px;border:0;" />`;
  const logoCell = websiteUrl.trim()
    ? `<a href="${escapeHtml(websiteUrl.trim())}" style="display:inline-block;line-height:0;">${img}</a>`
    : img;
  const badge = linkedinBadge(linkedinUrl, linkedinIconUrl, `${alt} sur LinkedIn`);
  return (
    `<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">` +
    `<tr><td valign="middle" style="line-height:0;">${logoCell}</td>` +
    (badge ? `<td valign="middle" style="padding-left:8px;line-height:0;">${badge}</td>` : '') +
    `</tr></table>`
  );
}

/**
 * Builds the email-safe signature: one table, every rule inline, no CSS/JS/SVG —
 * table-based layout is the one thing every major client (Outlook and Apple Mail
 * included) agrees on.
 */
export function buildSignatureHtml(data: SignatureData): string {
  const name = escapeHtml(data.name.trim() || 'Prénom NOM');
  const title = data.title.trim();
  const rows: string[] = [];

  if (data.mobile.trim()) {
    const href = telHref(data.mobile);
    const value = href
      ? `<a href="tel:${href}" style="color:${NAVY};text-decoration:none;">${escapeHtml(data.mobile.trim())}</a>`
      : escapeHtml(data.mobile.trim());
    rows.push(row('Mobile', value));
  }
  if (data.phone.trim()) {
    const href = telHref(data.phone);
    const value = href
      ? `<a href="tel:${href}" style="color:${NAVY};text-decoration:none;">${escapeHtml(data.phone.trim())}</a>`
      : escapeHtml(data.phone.trim());
    rows.push(row('Tél', value));
  }
  if (data.email.trim()) {
    rows.push(
      row('E-mail', `<a href="mailto:${escapeHtml(data.email.trim())}" style="color:${NAVY};text-decoration:none;">${escapeHtml(data.email.trim())}</a>`),
    );
  }
  if (data.website1.trim()) {
    const label = escapeHtml(data.website1Label.trim() || data.website1.trim());
    rows.push(row('Web', `<a href="${escapeHtml(data.website1.trim())}" style="color:${NAVY};text-decoration:none;">${label}</a>`));
  }
  if (data.website2.trim()) {
    const label = escapeHtml(data.website2Label.trim() || data.website2.trim());
    rows.push(row('Web', `<a href="${escapeHtml(data.website2.trim())}" style="color:${NAVY};text-decoration:none;">${label}</a>`));
  }
  if (data.address.trim()) {
    rows.push(row('Adresse', escapeHtml(data.address.trim())));
  }
  if (data.orias.trim()) {
    const icon = data.oriasBadgeUrl.trim()
      ? `<img src="${escapeHtml(data.oriasBadgeUrl.trim())}" width="46" height="14" alt="ORIAS" style="display:inline-block;width:46px;height:14px;vertical-align:middle;border:0;margin-right:6px;" />`
      : '';
    rows.push(row('ORIAS', `${icon}<span style="vertical-align:middle;">N&deg; ${escapeHtml(data.orias.trim())}</span>`));
  }

  const nameLinkedin = linkedinBadge(data.linkedinPersonal, data.linkedinIconUrl, `${data.name.trim() || 'Profil'} sur LinkedIn`);
  const titleRow = title
    ? `<tr><td colspan="2" style="padding:2px 0 8px;font-family:${FONT};font-size:13px;line-height:18px;color:${MUTED};">${escapeHtml(title)}</td></tr>`
    : '';

  const photoCell = data.photoUrl.trim()
    ? `<img src="${escapeHtml(data.photoUrl.trim())}" width="84" height="84" alt="${name}" style="display:block;width:84px;height:84px;border-radius:50%;border:0;" />`
    : '';

  const blueleaseLine = logoLine(data.blueleaseLogoUrl, 100, 22, data.website1.trim(), 'Bluelease', data.linkedinBluelease, data.linkedinIconUrl);
  const leasebackLine = logoLine(data.leasebackLogoUrl, 100, 21, data.website2.trim(), 'leaseback.immo', data.linkedinLeaseback, data.linkedinIconUrl);

  const leftColumn =
    `<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">` +
    (photoCell ? `<tr><td style="padding-bottom:12px;line-height:0;">${photoCell}</td></tr>` : '') +
    (blueleaseLine ? `<tr><td style="padding-bottom:8px;">${blueleaseLine}</td></tr>` : '') +
    (leasebackLine ? `<tr><td>${leasebackLine}</td></tr>` : '') +
    `</table>`;

  const highlight = data.highlightText.trim()
    ? `<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;max-width:560px;margin-bottom:14px;">` +
      `<tr><td style="background:${TINT};border-radius:8px;padding:9px 14px;font-family:${FONT};font-size:12px;line-height:18px;color:${WINE};">` +
      (data.highlightUrl.trim()
        ? `<a href="${escapeHtml(data.highlightUrl.trim())}" style="color:${WINE};text-decoration:none;font-weight:700;">${escapeHtml(data.highlightText.trim())} &rarr;</a>`
        : `<span style="font-weight:700;">${escapeHtml(data.highlightText.trim())}</span>`) +
      `</td></tr></table>`
    : '';

  return (
    highlight +
    `<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;max-width:560px;font-family:${FONT};">` +
    `<tr>` +
    `<td width="140" valign="top" style="padding:0 20px 0 0;">${leftColumn}</td>` +
    `<td valign="top" style="border-left:2px solid ${WINE};padding:0 0 0 20px;">` +
    `<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">` +
    `<tr><td colspan="2" style="font-family:${FONT};font-size:19px;line-height:23px;font-weight:700;color:${WINE};">` +
    `${name}${nameLinkedin ? `<span style="display:inline-block;width:8px;">&nbsp;</span>${nameLinkedin}` : ''}` +
    `</td></tr>` +
    titleRow +
    rows.join('') +
    `</table>` +
    `</td>` +
    `</tr>` +
    `</table>`
  );
}

/** A minimal standalone HTML document for the live-preview iframe. */
export function wrapSignatureDocument(signatureHtml: string): string {
  return (
    `<!doctype html><html><head><meta charset="utf-8">` +
    `<meta name="viewport" content="width=device-width,initial-scale=1"></head>` +
    `<body style="margin:0;padding:16px;background:#ffffff;">${signatureHtml}</body></html>`
  );
}
