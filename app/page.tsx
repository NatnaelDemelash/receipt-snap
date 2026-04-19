import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main>
      <Hero />

      {/* How it works section - clean and simple */}
      <section className="max-w-5xl mx-auto px-5 py-16 border-t border-gray-100">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-semibold text-gray-900">How it works</h2>
          <p className="text-gray-500 text-sm mt-1">Three steps, zero typing</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="text-center">
            <div className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-mono">
              1
            </div>
            <h3 className="font-medium text-gray-900 mb-1">Snap a photo</h3>
            <p className="text-sm text-gray-500">
              Take a picture of any receipt
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <div className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-mono">
              2
            </div>
            <h3 className="font-medium text-gray-900 mb-1">AI extracts data</h3>
            <p className="text-sm text-gray-500">
              Store, date, amount, tax — automatically
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <div className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-mono">
              3
            </div>
            <h3 className="font-medium text-gray-900 mb-1">Export to CSV</h3>
            <p className="text-sm text-gray-500">
              Clean spreadsheet, ready for accounting
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
