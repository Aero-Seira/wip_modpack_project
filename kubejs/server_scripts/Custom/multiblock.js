ServerEvents.recipes(e => {
    const {kubejs, create} = e.recipes
    create.item_application("rimcraftcore:forge_steel_casing", ["ad_astra:steel_plating", "art_of_forging:forged_steel_ingot"])
    .id("rimcraftcore:forge_steel_casing")
    create.item_application("rimcraftcore:steel_casing", ["create:andesite_casing", "#forge:ingots/steel"])
    .id("rimcraftcore:steel_casing")
    kubejs.shapeless(
        'rimcraftcore:steel_glass_casing',
        [
            'rimcraftcore:steel_casing',
            "create:framed_glass"
        ]
    ).id("rimcraftcore:shaped/steel_glass_casing")
    kubejs.shapeless(
        'rimcraftcore:steel_clear_glass_casing',
        [
            'rimcraftcore:steel_glass_casing',
            "create:framed_glass"
        ]
    ).id("rimcraftcore:shaped/steel_clear_glass_casing")
})