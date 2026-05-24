import { useApp } from '../context/AppContext.jsx';

const bgMap = {
  ok:  'var(--success)',
  err: 'var(--danger)',
  '': 'var(--brown-dark)',
};

export default function Toast() {
  const { toast } = useApp();

  return (
    <div
      role="alert"
      aria-live="polite"
      style={{
        position: 'fixed',
        bottom: 28,
        left: '50%',
        transform: `translateX(-50%) translateY(${toast.visible ? '0' : '80px'})`,
        background: bgMap[toast.type] ?? bgMap[''],
        color: '#f5e6c8',
        padding: '11px 26px',
        borderRadius: 24,
        fontSize: '.85rem',
        fontWeight: 500,
        boxShadow: '0 6px 28px rgba(0,0,0,.25)',
        zIndex: 500,
        transition: 'transform .32s cubic-bezier(.4,0,.2,1)',
        pointerEvents: 'none',
        whiteSpace: 'nowrap',
      }}
    >
      {toast.message}
    </div>
  );
}
