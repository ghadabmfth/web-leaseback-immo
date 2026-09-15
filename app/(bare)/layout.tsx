/** Conversion pages (/eligibilite, /contact) — they carry their own call to action. */
export default function BareLayout({ children }: { children: React.ReactNode }) {
  return <main style={{ display: 'block' }}>{children}</main>;
}
