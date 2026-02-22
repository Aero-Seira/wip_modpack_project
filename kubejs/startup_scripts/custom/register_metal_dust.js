StartupEvents.registry("item", e => {
    let metals = [
        "tin",
        "silver",
        "desh",
        "ostrum",
        "calorite"
    ]
    metals.forEach(metal => {
        e.create(`rimcraft:${metal}_dust`)
            .maxStackSize(64)
            .translationKey(`item.rimcraft.${metal}_dust`)
            .tag(`forge:dusts/${metal}`)
            .tag(`forge:dusts`)
        e.create(`rimcraft:dirty_${metal}_dust`)
            .maxStackSize(64)
            .translationKey(`item.rimcraft.dirty_${metal}_dust`)
            .tag(`forge:dirty_dusts/${metal}`)
            .tag(`forge:dirty_dusts`)
    })
    
    e.create("rimcraft:uranium_dust")
        .maxStackSize(64)
        .translationKey("item.rimcraft.uranium_dust")
        .tag("forge:dusts/uranium")
        .tag("forge:dusts")
    e.create("rimcraft:enriched_uraniumdust")
        .maxStackSize(64)
        .tag("forge:dusts")
        .translationKey("item.rimcraft.enriched_uraniumdust")
    e.create("rimcraft:depleted_uranium_dust")
        .maxStackSize(64)
        .tag("forge:dusts")
        .translationKey("item.rimcraft.depleted_uranium_dust")
})