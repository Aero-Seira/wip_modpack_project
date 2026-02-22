StartupEvents.registry("item", e => {
    let metals = [
        "desh",
        "ostrum",
        "calorite",
    ]

    metals.forEach(metal => {
        e.create(`rimcraft:crushed_raw_${metal}`)
            .maxStackSize(64)
            .translationKey(`item.rimcraft.crushed_raw_${metal}`)
            .tag("create:crushed_raw_materials")
    })
})
