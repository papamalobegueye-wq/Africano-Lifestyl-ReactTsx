import { IgEngagements } from "../../data/igEngagements"

export default function MiniInsta() {
  return (
    <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            {IgEngagements.map((item) => {
                const IconComponent = item.icon
                return (
                    <div key={item.id} className="flex flex-col items-start gap-2 m-10 mb-0">
                        <div className="text-2xl text-slate-800">
                            <IconComponent size={28}/>
                        </div>
                        <h4 className="font-jost font-semibold text-slate-800 text-base mt-2">
                            {item.title}
                        </h4>
                        <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                            {item.description}
                        </p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}
