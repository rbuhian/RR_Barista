import { useApp } from './context/AppContext.jsx';
import Toast from './components/Toast.jsx';

// Page placeholders — filled in Sprint 2+
function HeroPage() {
  const { showPage } = useApp();
  return (
    <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--brown-dark)', color: '#f5e6c8', flexDirection: 'column', gap: 16 }}>
      <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '3rem' }}>RR Barista</h1>
      <p style={{ color: 'var(--gold-light)' }}>Sprint 1 complete — foundation is running ✓</p>
      <button onClick={() => showPage('menu')} style={{ marginTop: 16, padding: '12px 32px', background: 'var(--gold)', color: 'var(--brown-dark)', border: 'none', borderRadius: 30, fontWeight: 700, fontSize: '1rem' }}>
        View Menu
      </button>
    </section>
  );
}

function Placeholder({ title }) {
  const { showPage } = useApp();
  return (
    <div style={{ padding: '100px 24px', textAlign: 'center' }}>
      <h2 style={{ fontFamily: "'Playfair Display', serif", color: 'var(--brown-dark)', marginBottom: 12 }}>{title}</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: 24 }}>Coming in Sprint 2+</p>
      <button onClick={() => showPage('home')} style={{ padding: '10px 24px', background: 'var(--brown-mid)', color: '#f5e6c8', border: 'none', borderRadius: 8, fontWeight: 600 }}>
        Back to Home
      </button>
    </div>
  );
}

export default function App() {
  const { currentPage } = useApp();

  return (
    <>
      {currentPage === 'home'   && <HeroPage />}
      {currentPage === 'menu'   && <Placeholder title="Menu" />}
      {currentPage === 'orders' && <Placeholder title="My Orders" />}
      {currentPage === 'admin'  && <Placeholder title="Admin Panel" />}
      <Toast />
    </>
  );
}
