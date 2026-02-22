ServerEvents.recipes(e => {
    const {create, createdieselgenerators, vintageimprovements, createaddition, createmetallurgy} = e.recipes
    e.replaceInput({id: "explorerscompass:explorers_compass"}, "minecraft:cracked_stone_bricks", "#forge:ingots/steel")
    fermenting(e,
        "farmersdelight:rich_soil", 
        [
            "farmersdelight:organic_compost",
            Fluid.water(100),
            "#forge:mushrooms"
        ], 600
    )
    fermenting(e,
        "mynethersdelight:resurgent_soil", 
        [
            "mynethersdelight:letios_compost",
            Fluid.lava(100),
            ["minecraft:warped_fungus", "minecraft:crimson_fungus"]
        ], 600, "heated"
    )

    create.filling(
        "rimcraft:fuel_hotcream",
        [
            "mynethersdelight:powder_cannon",
            Fluid.of("rimcraft:fuel_mixtures", 50)
        ]
    ).id("rimcraft:filling/fuel_hotcream")
    // vintageimprovements.polishing("rimcraft:needle", "#forge:rods/iron")
    createmetallurgy.grinding("rimcraft:needle", "#forge:rods/iron")
    .id("rimcraft:polishing/needle")
    {
        let iner = "alexscaves:polymer_plate"
        create.sequenced_assembly("rimcraft:blood_collection_device", iner, [
            createaddition.rolling(iner, iner),
            create.deploying(iner, [iner, "rimcraft:needle"])
        ])
        .loops(1)
        .transitionalItem(iner)
        .id("rimcraft:sequenced_assembly/blood_collection_device")
    }
})