export function Footer({ name, t }: { name: string; t: (es: string, en: string) => string }) {
  return (
    <footer style={{ textAlign: 'center', padding: '2rem 0', color: '#64748b', fontSize: '0.85rem' }}>
      <p>© 2025 {name} — {t('Hecho con', 'Built with')} ▲ Next.js</p>
    </footer>
  );
}

export default Footer;
