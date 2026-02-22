ServerEvents.tags("item", e => {
    e.add("forge:whipped_cream", [
        "cosmopolitan:cream_bucket",
        "cosmopolitan:cream"
    ])
    e.add("forge:animal_oil", [
        "butchercraft:lard",
        "rimcraft:butter"
    ])
})

ServerEvents.recipes(e => {
    e.replaceInput({ id: "mynethersdelight:cooking/crimson_stroganoff" }, "#forge:milk", '#forge:cream')
    e.recipes.create.mixing(
        Fluid.of("cosmopolitan:cream", 500),
        Fluid.of("cosmopolitan:condensed_milk", 250)
    )
        .id("rimcraft:mixing/cream")
    
    e.recipes.create.mixing(
        Fluid.of("cosmopolitan:condensed_milk", 250),
        [Fluid.of("minecraft:milk", 250), "minecraft:sugar"]
    )
        .heated()
        .id("rimcraft:mixing/condensed_milk")
    centrifugation(e, 
        [
            Fluid.of("cosmopolitan:cream", 750),
            Fluid.of("minecraft:water", 250)
        ], 
        [Fluid.of("minecraft:milk", 1000), "minecraft:sugar"]
    )
        .id("rimcraft:big_centrifugation/whipped_cream")
    e.recipes.create.mixing(
        "rimcraft:butter",
        Fluid.of("cosmopolitan:cream", 250)
    )
        .id("rimcraft:compacting/butter")
    e.recipes.kubejs.shapeless(
        '4x rimcraft:butter',
        'cosmopolitan:cream_bucket'
    )
        .replaceIngredient('cosmopolitan:cream_bucket', 'minecraft:bucket')
        .id('rimcraft:crafting/butter')
    // 开酥
    e.recipes.kubejs.shapeless(
        "rimcraft:oil_dough",
        [
            "#forge:animal_oil",
            "create:dough"
        ]
    ).id("rimcraft:crafting/oil_dough")
    let iner = "rimcraft:oil_dough_with_butter"
    e.recipes.create.sequenced_assembly("4x rimcraft:puff_pastry", "rimcraft:oil_dough", [
        e.recipes.create.deploying(iner, [iner, "#forge:animal_oil"]),
        e.recipes.create.pressing(iner, iner),
        e.recipes.create.deploying(iner, [iner, "#forge:animal_oil"]),
        e.recipes.create.pressing(iner, iner),
        e.recipes.create.cutting(iner, iner)
    ])
        .transitionalItem(iner)
        .loops(1)
        .id("rimcraft:puff_pastry")
})