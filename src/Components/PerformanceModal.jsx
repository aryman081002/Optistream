function PerformanceModal({ isOpen, onClose, metrics }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">

      <div className="bg-gray-900 text-white p-6 rounded-lg w-[90%] md:w-[500px]">

        <h2 className="text-2xl font-bold mb-4">
          ⚡ Performance Tech (Live)
        </h2>

        <div className="space-y-3 text-sm">

          <p>
            🚀 <b>React.lazy:</b> App split into {metrics.lazyChunks} JS chunks (code splitting active)
          </p>

          <p>
            ⚡ <b>Debounce Effect:</b> Estimated {metrics.debounceSaved}% API calls reduced
          </p>

          <p>
            🌐 <b>API Calls (session):</b> ~{metrics.apiCalls}
          </p>

          <p>
            ⏱️ <b>Initial Load Time:</b> {metrics.loadTime} ms
          </p>

        </div>

        <button
          onClick={onClose}
          className="mt-5 bg-red-500 px-4 py-2 rounded"
        >
          Close
        </button>

      </div>
    </div>
  );
}

export default PerformanceModal;