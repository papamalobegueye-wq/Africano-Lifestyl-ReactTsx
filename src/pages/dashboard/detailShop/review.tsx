import { Temoignages } from "../../../data/temoignages"
export default function Review() {
    return (
        <div className=''>
            <h2 className='font-josh font-bold'>Customer Reviews</h2>

            <div>
                {Temoignages.map((item) =>(
                    <article key={item.id} className="py-5">
                       <div className="flex gap-5 items-center">
                         <img src={item.image} alt="" className="w-12 h-12 rounded-full object-cover" />

                         <div>
                            <h2 className="font-josh ">{item.nom}</h2>
                            <span>{item.rating}</span>
                         </div>
                        </div>

                        <h3 className="font-josh font-bold leading-relaxed py-2">Excellent Product, I Love It😍</h3>

                        <p className="text-sm">{item.commentaire}</p>

                        <p>Review</p>
                    </article>
                ))}
            </div>

        </div>
    )
}
