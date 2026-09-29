import { SITE_URL } from '@/lib/routes';

/** Data for one team member's signature. Every field but the name and title is optional. */
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
  logoUrl: string;
  oriasBadgeUrl: string;
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
  photoUrl: `${SITE_URL}/signature/guillaume-delcros.png`,
  logoUrl: `${SITE_URL}/signature/bluelease-logo.png`,
  oriasBadgeUrl: `${SITE_URL}/signature/orias-badge.png`,
};

const WINE = '#7D1A2E';
const NAVY = '#0D1B2A';
const MUTED = '#5B6472';
const HAIRLINE = '#E4E2DC';
const FONT = 'Arial, Helvetica, sans-serif';

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

function row(label: string, valueHtml: string): string {
  return `<tr><td style="padding:2px 0;font-family:${FONT};font-size:13px;line-height:19px;color:${NAVY};">` +
    `<span style="font-weight:700;color:${WINE};">${escapeHtml(label)}&nbsp;</span>${valueHtml}</td></tr>`;
}

/**
 * Builds the email-safe signature: one table, every rule inline, no CSS/JS/SVG —
 * table-based layout is the one thing every major client (Outlook included) agrees on.
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
    rows.push(row('ORIAS', `N&deg; ${escapeHtml(data.orias.trim())}`));
  }

  const titleRow = title
    ? `<tr><td style="padding:2px 0 8px;font-family:${FONT};font-size:13px;line-height:18px;color:${MUTED};">${escapeHtml(title)}</td></tr>`
    : '';

  const photoCell = data.photoUrl.trim()
    ? `<td width="84" valign="top" style="padding:0 20px 0 0;">` +
      `<img src="${escapeHtml(data.photoUrl.trim())}" width="84" height="84" alt="${name}" ` +
      `style="display:block;width:84px;height:84px;border-radius:50%;border:0;" /></td>`
    : '';

  const logoRow = data.logoUrl.trim()
    ? `<tr><td colspan="2" style="padding-top:16px;">` +
      `<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">` +
      `<tr><td style="border-top:1px solid ${HAIRLINE};font-size:0;line-height:0;padding-top:14px;">&nbsp;</td></tr>` +
      `<tr><td style="padding-top:14px;" valign="middle">` +
      `<img src="${escapeHtml(data.logoUrl.trim())}" width="130" height="46" alt="Bluelease" ` +
      `style="display:block;width:130px;height:46px;border:0;" />` +
      `</td>` +
      (data.oriasBadgeUrl.trim()
        ? `<td style="padding:0 0 0 16px;" valign="middle">` +
          `<img src="${escapeHtml(data.oriasBadgeUrl.trim())}" width="72" height="22" alt="ORIAS" ` +
          `style="display:block;width:72px;height:22px;border:0;" /></td>`
        : '') +
      `</tr></table></td></tr>`
    : '';

  return (
    `<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;max-width:560px;font-family:${FONT};">` +
    `<tr>` +
    photoCell +
    `<td valign="top" style="border-left:2px solid ${WINE};padding:0 0 0 20px;">` +
    `<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">` +
    `<tr><td style="font-family:${FONT};font-size:19px;line-height:23px;font-weight:700;color:${WINE};">${name}</td></tr>` +
    titleRow +
    rows.join('') +
    `</table>` +
    `</td>` +
    `</tr>` +
    logoRow +
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
