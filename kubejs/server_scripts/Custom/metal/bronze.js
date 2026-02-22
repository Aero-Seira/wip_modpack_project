ServerEvents.recipes(e => {
    e.recipes.kubejs.shapeless("rimcraftcore:bronze_block", "9x rimcraftcore:bronze_ingot")
    .id("rimcraftcore:bronze_block_from_bronze_ingot")
    e.recipes.kubejs.shapeless("9x rimcraftcore:bronze_ingot", "rimcraftcore:bronze_block")
    .id("rimcraftcore:bronze_ingot_from_bronze_block")
    e.recipes.kubejs.shapeless("9x rimcraftcore:bronze_nugget", "rimcraftcore:bronze_ingot")
    .id("rimcraftcore:bronze_nugget_from_bronze_ingot")
    e.recipes.kubejs.shapeless("rimcraftcore:bronze_ingot", "9x rimcraftcore:bronze_nugget")
    .id("rimcraftcore:bronze_ingot_from_bronze_nugget")

})