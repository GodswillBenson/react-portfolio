// src/pages/Blog.jsx
export default function Blog({ data }) {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24 animate-[fadeIn_0.6s_ease-out]">
      <div className="mb-20">
        <span className="text-[10px] font-mono text-neutral-600 block mb-2">PUBLICATIONS</span>
        <h2 className="text-xs uppercase tracking-[0.25em] text-neutral-400 font-bold">Journal Articles</h2>
      </div>
      
      <div className="space-y-16">
        {data.map((post, index) => (
          <article key={index} className="group cursor-pointer pb-12 border-b border-neutral-900 last:border-0">
            <div className="flex gap-4 items-center text-xs font-mono text-neutral-500 mb-4">
              <span>{post.date}</span>
              <span>•</span>
              <span className="px-2 py-0.5 bg-neutral-900 text-neutral-400 text-[10px] uppercase">
                {post.readTime}
              </span>
            </div>
            <h3 className="text-2xl font-light text-white group-hover:text-neutral-300 transition-colors tracking-tight leading-snug">
              {post.title}
            </h3>
            <span className="inline-block text-xs font-mono text-neutral-500 mt-4 border-b border-neutral-800 group-hover:border-neutral-400 pb-0.5 transition-all">
              Read Article →
            </span>
          </article>
        ))}
      </div>
    </div>
  );
}