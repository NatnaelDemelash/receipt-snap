import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />

      {/* Optional: Add a simple feature section to demonstrate completeness */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">How it works</h2>
          <p className="text-gray-500 mt-2">
            Three simple steps to go from paper to data
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📸</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">1. Snap</h3>
            <p className="text-gray-500 text-sm">Take a photo of any receipt</p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🤖</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">2. Extract</h3>
            <p className="text-gray-500 text-sm">
              AI reads store, date, amount, tax
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">3. Export</h3>
            <p className="text-gray-500 text-sm">
              Download clean CSV instantly
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
