//app/book/page.tsx

export default function BookingPage() {
  return (
    <section className="py-6 md:py-10">
      <div className="mx-auto w-full max-w-5xl px-4">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Book an Appointment
          </h1>
          <p className="mt-2 text-sm text-neutral-600 md:text-base">
            Choose a service, pick a time, and you’re done.
          </p>
        </header>

        {/* Card */}
        <div className="mt-6 rounded-3xl border bg-white shadow-sm p-4 md:p-6 lg:p-7">
          <div className="grid gap-5 md:grid-cols-5 md:gap-6">
            {/* Left */}
            <div className="md:col-span-3">
              {/* Service */}
              <div>
                <p className="text-sm font-medium text-neutral-900">
                  Select Service
                </p>
                <div className="mt-3">
                  <div className="h-11 w-full rounded-xl border px-3 text-sm flex items-center justify-between">
                    <span>Haircut & Style</span>
                    <span className="text-neutral-500">⌄</span>
                  </div>
                  <p className="mt-2 text-sm text-neutral-600">
                    $50 • 45 minutes
                  </p>
                </div>
              </div>

              {/* Date */}
              <div className="mt-5 border-t pt-5">
                <p className="text-sm font-medium text-neutral-900">
                  Select Date
                </p>
                <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
                    (d, i) => (
                      <button
                        key={d}
                        className={`min-w-16 rounded-2xl border px-3 py-2 text-left transition-colors ${
                          i === 2
                            ? "bg-neutral-900 text-white border-neutral-900"
                            : "bg-white"
                        }`}
                      >
                        <div className="text-xs opacity-80">{d}</div>
                        <div className="mt-1 text-lg font-semibold leading-none">
                          {12 + i}
                        </div>
                      </button>
                    ),
                  )}
                </div>
              </div>

              {/* Time */}
              <div className="mt-5 border-t pt-5">
                <p className="text-sm font-medium text-neutral-900">
                  Select Time
                </p>
                <div className="mt-3 grid grid-cols-2 gap-2 md:grid-cols-3">
                  {[
                    "10:00 AM",
                    "10:30 AM",
                    "11:00 AM",
                    "11:30 AM",
                    "12:00 PM",
                    "12:30 PM",
                  ].map((t, i) => (
                    <button
                      key={t}
                      className={`h-11 rounded-xl border text-sm font-medium transition-colors ${
                        i === 2
                          ? "bg-neutral-900 text-white border-neutral-900"
                          : "bg-white"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Details */}
              <div className="mt-5 border-t pt-5">
                <p className="text-sm font-medium text-neutral-900">
                  Your Details
                </p>
                <div className="mt-3 grid gap-3">
                  <input
                    className="h-11 rounded-xl border px-3 text-sm"
                    placeholder="Full name"
                  />
                  <input
                    className="h-11 rounded-xl border px-3 text-sm"
                    placeholder="Phone number"
                  />
                  <input
                    className="h-11 rounded-xl border px-3 text-sm"
                    placeholder="Email address"
                  />
                </div>

                {/* Mobile CTA */}
                <button className="mt-4 h-12 w-full rounded-2xl bg-neutral-900 text-white text-sm font-semibold hover:bg-neutral-900/90">
                  Confirm Booking
                </button>
              </div>
            </div>

            {/* Right */}
            <aside className="md:col-span-2">
              <div className="rounded-3xl border bg-neutral-50 p-5 md:sticky md:top-4">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-base font-semibold">Downtown Salon</p>
                    <p className="mt-1 text-xs text-neutral-600">Newark, NJ</p>
                  </div>
                  <span className="rounded-full bg-white border px-2 py-1 text-xs">
                    ★ 4.8
                  </span>
                </div>

                <div className="mt-4 space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-600">Service</span>
                    <span className="font-medium">Haircut & Style</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-600">Date</span>
                    <span className="font-medium">Wed 14</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-600">Time</span>
                    <span className="font-medium">11:00 AM</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-600">Total</span>
                    <span className="font-semibold">$50</span>
                  </div>
                </div>

                <div className="mt-4 rounded-2xl bg-white border p-4 text-xs text-neutral-600">
                  Free cancellation up to 12 hours before your appointment.
                </div>

                {/* Desktop CTA */}
                <button className="mt-4 hidden md:block h-12 w-full rounded-2xl bg-neutral-900 text-white text-sm font-semibold hover:bg-neutral-900/90">
                  Confirm Booking
                </button>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
