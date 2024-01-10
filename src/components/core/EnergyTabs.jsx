export const EnergyTabs = () => {
    const energyTabs = [
        "Energy1",
        "Energy2",
        "Energy3",
        "Energy4",
        "Energy5",
    ]
  return (
    <div>
        {energyTabs.map((tab,i)=>{
            return <div key={i} className="flex px-5 py-4 space-x-2 items-center hover:bg-slate-500">{tab}</div>
        })}
    </div>
  )
}
