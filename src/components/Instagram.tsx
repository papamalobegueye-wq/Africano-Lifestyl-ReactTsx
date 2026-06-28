import { Instagrams } from "../data/instagrams"
import MiniInsta from "./minicomponents/Insta"


export default function InstagramCompponent() {



    return (
        <section className="w-full py-10 ">
            <div className="flex items-center justify-center text-3xl md:text-4xl 
        font-jost font-semibold">
                <h2>Our Instagram Stories</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 py-10">
                {Instagrams.map((item) =>
                    <div key={item.id} className="relative overflow-hidden 
            rounded-xl group cursor-pointer h-80 object-cover">
                        <img src={item.image} alt="" />
                    </div>
                )}
            </div>
            <div>
                <MiniInsta />
            </div>

        </section>
    )
}
