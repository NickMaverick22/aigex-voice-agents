export function StatsBanner() {
  return (
    <section className="gradient-primary py-[60px]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <StatItem value="Instant" label="Call answering" />
          <StatItem value="Natural" label="British voices" />
          <StatItem value="Smart" label="Lead qualification" />
          <StatItem value="Seamless" label="Calendar booking" />
        </div>
      </div>
    </section>
  );
}

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="p-5">
      <div className="font-heading text-[2.5rem] font-bold text-white mb-2">
        {value}
      </div>
      <div className="text-sm text-white/80">{label}</div>
    </div>
  );
}
