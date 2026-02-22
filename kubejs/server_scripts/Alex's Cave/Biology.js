EntityEvents.spawned(e => {
    if (!e.entity.isMonster())
        return
    let typeList = [
        "minecraft", "quark"]
    let dimList = [
        "rimcraft:magnetic_caves_dimension",
        "rimcraft:abyssal_chasm_dimension",
        "rimcraft:forlorn_hollows_dimension",
        "rimcraft:primordial_caves_dimension",
        "rimcraft:toxic_caves_dimension",
        "rimcraft:candy_cavity_dimension"]
        typeList.forEach(type => {
            dimList.forEach(dim => {
                if (e.entity.type.toString().startsWith(type) && e.level.dimension == dim)
                    e.cancel()
            })
        })

})