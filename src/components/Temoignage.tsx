import { Temoignages } from "../data/temoignages"

export default function TemoignageComponent() {
  return (
    <section className='w-full py-16 bg-white'>
        <div className='max-w-6xl mx-auto px-4'>
            <div className="flex items-center justify-between mb-10">
                <h2 className='text-3xl md:text-4xl font-jost font-semibold
                 text-slate-800'>What our Customer say's</h2>

                <div className='flex gap-10'>
                    <button>right</button>
                    <button>left</button>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-6">
            
            {Temoignages.map((item) => (
                <article key={item.id} 
                className="bg-white p-6 rounded-xl border border-slate-100 
                shadow-sm flex flex-col justify-between">
                        <div className=" text-amber-400 mb-4">
                            <span>*</span><span>*</span><span>*</span><span>*</span><span>*</span>

                            <p className="text-sm text-slate-600 leading-relaxed italic">
                                {item.commentaire}
                            </p>
                        </div>

                        <div className="flex items-center gap-4 mt-6 pt-4 border-t border-slate-50">
                            <img src={item.image} 
                            alt={item.nom}
                            className="w-12 h-12 rounded-full object-cover" />

                            <div className="flex flex-col">
                                <h4 className="text-sm font-semibold text-slate-800">
                                    {item.nom}
                                </h4>
                                <span className="text-xs text-slate-400">
                                    {item.role}
                                </span>
                            </div>
                        </div>
                </article>
            ))}
        </div>
    </section>
  )
}

