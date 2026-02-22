ServerEvents.recipes(e => {
    e.recipes.kubejs.shapeless("9x rimcraft:andesite_alloy_nugget", "create:andesite_alloy")
    .id("rimcraft:andesite_alloy_nugget_from_andesite_alloy")
    e.recipes.kubejs.shapeless("create:andesite_alloy", "9x rimcraft:andesite_alloy_nugget")
    .id("rimcraft:andesite_alloy_from_andesite_alloy_nugget")
    e.recipes.createmetallurgy.casting_in_basin("create:andesite_alloy_block", Fluid.of("rimcraftcore:molten_andesite", 810))
    .id("rimcraft:casting_in_basin/andesite_alloy_block")
})