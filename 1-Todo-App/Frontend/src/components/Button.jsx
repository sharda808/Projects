const Button = ({ btntype, btnText, handler }) => {
  const baseClasses =
    'inline-flex h-full min-h-[44px] items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0c0e12] disabled:cursor-not-allowed disabled:opacity-50 active:scale-[0.98] sm:min-h-0'

  const variants = {
    success:
      'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20 hover:bg-emerald-400 hover:shadow-emerald-500/30 focus:ring-emerald-400',
    danger:
      'bg-rose-500/90 text-white hover:bg-rose-500 focus:ring-rose-400',
    primary:
      'bg-cyan-500 text-white hover:bg-cyan-400 focus:ring-cyan-400',
  }

  const className = `${baseClasses} ${variants[btntype] || variants.primary}`

  return (
    <button type="button" className={className} onClick={handler}>
      {btnText}
    </button>
  )
}
export default Button
