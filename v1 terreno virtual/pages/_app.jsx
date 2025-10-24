import '../styles/globals.css'
export default function App({ Component, pageProps }){
  return (
    <div className="min-h-screen bg-slate-50">
      <Component {...pageProps} />
    </div>
  )
}
