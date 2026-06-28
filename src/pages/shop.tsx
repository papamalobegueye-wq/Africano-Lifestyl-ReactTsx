import { Link } from 'react-router-dom'
import MiniInsta from '../components/minicomponents/Insta'
import { Categories, FiltreSize } from '../data/minidata/forCategorieDetailshop'
import { ProductSellers } from '../data/productSellers'

export default function ShopPage() {
    return (
        <div>
            <div className='flex justify-center px-10'>
                <div className='w-68 bg-slate-200 h-full p-8 space-y-10'>
                    <section className='space-y-5'>
                        <h2 className='texte-xl font-josh font-bold'>Product Categories</h2>

                        {Categories.map((Category, index) => (
                            <div key={index} className='flex items-center gap-5'>
                                <input className='size-5' type="checkbox" id={`category-${index}`} />
                                <label className='text-xm' htmlFor={`category-${index}`}>{Category}</label>
                            </div>
                        ))}
                    </section>

                    <section className='space-y-5'>
                        <h2 className='texte-xl font-josh font-bold'>Filtre by Price</h2>
                        <input type="range" min={0} max={500} className='w-full' />
                    </section>

                    <section className='space-y-5'>
                        <h2 className='texte-xl font-josh font-bold'>Filtre by Color</h2>
                        <div className='flex items-center gap-5'>
                            <p className='bg-red-700 w-5 h-5'></p>
                            <p >Red</p>
                        </div>
                        <div className='flex items-center gap-5'>
                            <p className='bg-blue-700 w-5 h-5'></p>
                            <p>Blue</p>
                        </div>
                        <div className='flex items-center gap-5'>
                            <p className='bg-green-700 w-5 h-5'></p>
                            <p>Green</p>
                        </div>
                        <div className='flex items-center gap-5'>
                            <p className='bg-black w-5 h-5'></p>
                            <p>Black</p>
                        </div>
                        <div className='flex items-center gap-5'>
                            <p className='bg-yellow-500 w-5 h-5'></p>
                            <p>Yellow</p>
                        </div>
                        <div className='flex items-center gap-5'>
                            <p className='bg-amber-500 w-5 h-5'></p>
                            <p>Orange</p>
                        </div>
                    </section>

                    <section className='space-y-5'>
                        <h2 className='texte-xl font-josh font-bold'>Filtre by Size</h2>
                        {FiltreSize.map((size, index) => (
                            <div key={index} className='flex items-center gap-5'>
                                <input type="checkbox" className='size-5' id={`size-${index}`} />
                                <label className='font-semibold ' htmlFor={`size-${index}`}>{size}</label>
                            </div>
                        ))}
                    </section>
                </div>

                <div className='w-full h-full  grid grid-cols-1 md:grid-cols-3 gap-5 p-8'>
                    {ProductSellers.map((sellers, index) => (
                        <Link to={`/shop/${sellers.id}`}>
                            <div key={index} className='bg-white p-5'>
                                <img src={sellers.image} alt={sellers.nom} className='w-full h-96 object-cover object-top' />
                                <h2 className='font-josh font-bold '>{sellers.nom}</h2>
                                <p className='text-sm'>{sellers.description}</p>
                                <div className='flex gap-3'>
                                    <p>{sellers.prix}</p>
                                    <p className="line-through text-gray-400">60 000 FCFA</p>

                                </div>
                            </div>
                        </Link>
                    ))}

                </div>
            </div>
            <div className='bg-red-500 flex justify-end '>
                <h1>PapaDeveloppeur (pour les btns 1,2,3..)</h1>
            </div>
            <div className=''>
                <MiniInsta />
            </div>

        </div>
    )
}

{/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">

    {ProductSellers.map((seller) => (

        <Link
            to={`/shop/${seller.id}`}
            key={seller.id}
            className="relative flex flex-col overflow-hidden rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white"
        >

            <div className="relative h-72 w-full overflow-hidden">
                <img
                    src={seller.image}
                    alt={seller.nom}
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                />

                <span className="absolute top-2 left-2 bg-black/60 text-white text-xs font-medium px-2 py-0.5 rounded-full backdrop-blur-sm">
                    {seller.category}
                </span>
                {seller.isNew && (
                    <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-medium px-2 py-0.5 rounded-full">
                        New
                    </span>
                )}
            </div>

            <div className="flex flex-col gap-1 p-3">
                <h3 className="text-sm font-semibold font-bebas line-clamp-2 leading-tight">
                    {seller.nom}
                </h3>
                <p className="text-sm font-bold text-orange-500">
                    {seller.prix.toLocaleString('fr-FR')} FCFA
                </p>
            </div>

        </Link>
    ))}


</div>
    */}