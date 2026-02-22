ServerEvents.recipes(e => {
    const {create, create_new_age} = e.recipes
    remove_recipes_output(e, [
        "trailandtales_delight:cherry_cake",
        "trailandtales_delight:curd_block",
        "trailandtales_delight:ancient_coffee",
        "trailandtales_delight:torchflower_tea",
        "trailandtales_delight:cherry_petal_tea",
        "trailandtales_delight:pitcher_plant_tea",
        "trailandtales_delight:dried_cherry_petal"
    ])
    remove_recipes_id(e, [
        "trailandtales_delight:cutting/cheese_wheel",
    ])

    make_cake(e, "trailandtales_delight:cherry_petal", "trailandtales_delight:cherry_cake")

    brewing(e, "rimcraft:espresso_fluid", [
        "trailandtales_delight:baked_pitcher_pod", 
        "trailandtales_delight:baked_torchflower_seeds"],
    "rimcraft:ancient_coffee",
    "trailandtales_delight:ancient_coffee")
    brewing(e, "farmersrespite:yellow_tea", [
        "minecraft:sugar", 
        "minecraft:torchflower"],
    "rimcraft:torchflower_tea",
    "trailandtales_delight:torchflower_tea")
    brewing(e, "farmersrespite:yellow_tea", [
        "minecraft:sugar", 
        "trailandtales_delight:dried_cherry_petal"],
    "rimcraft:cherry_petal_tea",
    "trailandtales_delight:cherry_petal_tea")
    brewing(e, "farmersrespite:green_tea", [
        "minecraft:sugar", 
        "minecraft:pitcher_plant"],
    "rimcraft:pitcher_plant_tea",
    "trailandtales_delight:pitcher_plant_tea")
    create.mixing(Fluid.of("rimcraft:ancient_coffee", 1000), [
        "trailandtales_delight:baked_pitcher_pod", 
        "trailandtales_delight:baked_torchflower_seeds",
        Fluid.of("rimcraft:espresso_fluid", 1000)
    ]).id("rimcraft:mixing/ancient_coffee")
    create.filling("trailandtales_delight:ancient_coffee", 
        [
            Fluid.of("rimcraft:ancient_coffee", 250),
            "minecraft:glass_bottle"
        ]
    ).id("rimcraft:filling/ancient_coffee")
    create.mixing(Fluid.of("rimcraft:torchflower_tea", 1000), [
        "minecraft:sugar", 
        "minecraft:torchflower",
        Fluid.of("farmersrespite:yellow_tea", 1000)
    ]).id("rimcraft:mixing/torchflower_tea")
    create.filling("trailandtales_delight:torchflower_tea",
        [
            Fluid.of("rimcraft:torchflower_tea", 250),
            "minecraft:glass_bottle"
        ]
    ).id("rimcraft:filling/torchflower_tea")
    create.mixing(Fluid.of("rimcraft:cherry_petal_tea", 1000), [
        "minecraft:sugar", 
        "trailandtales_delight:dried_cherry_petal",
        Fluid.of("farmersrespite:yellow_tea", 1000)
    ]).id("rimcraft:mixing/cherry_petal_tea")
    create.filling("trailandtales_delight:cherry_petal_tea",
        [
            Fluid.of("rimcraft:cherry_petal_tea", 250),
            "minecraft:glass_bottle"
        ]
    ).id("rimcraft:filling/cherry_petal_tea")
    create.mixing(Fluid.of("rimcraft:pitcher_plant_tea", 1000), [
        "trailandtales_delight:baked_pitcher_pod", 
        "trailandtales_delight:baked_torchflower_seeds",
        Fluid.of("farmersrespite:green_tea", 1000)
    ]).id("rimcraft:mixing/pitcher_plant_tea")
    create.filling("trailandtales_delight:pitcher_plant_tea",
        [
            Fluid.of("rimcraft:pitcher_plant_tea", 250),
            "minecraft:glass_bottle"
        ]
    ).id("rimcraft:filling/pitcher_plant_tea")
    create.filling(
        'trailandtales_delight:golden_lantern_fruit',
        [
            'trailandtales_delight:lantern_fruit',
            Fluid.of("createmetallurgy:molten_gold", 450)
        ]
    ).id("rimcraft:filling/golden_lantern_fruit")
{
    let iner = 'trailandtales_delight:lantern_fruit'
    create.sequenced_assembly('rimcraft:enchanted_golden_lantern_fruit', iner,
        [
            create.filling(iner, [iner, Fluid.of("create_enchantment_industry:experience", 120)]),
            create.deploying(iner, [iner, "minecraft:gold_block"]),
            create.deploying(iner, [iner, "minecraft:gold_block"]),
            create_new_age.energising(iner, iner, 2000000)
        ]
    )
        .loops(4)
        .transitionalItem(iner)
        .id("rimcraft:crafting/enchanted_golden_lantern_fruit")
}
})