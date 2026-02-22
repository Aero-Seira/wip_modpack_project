ServerEvents.recipes(e => {
    const {create, vintageimprovements, rimcraftcore} = e.recipes
    rimcraftcore.fan_freezing("minecraft:leather", "rimcraft:unfinished_leather")
    .id("rimcraft:fan_freezing/unfinished_leather")
    vintageimprovements.pressurizing("rimcraft:unfinished_leather", [Fluid.of("rimcraftcore:slime", 45), "#rimcraft:leather_ingredient"])
    .heated()
    .id("rimcraft:pressurizing/unfinished_leather")
})

ServerEvents.tags("minecraft:item", e => {
    e.add("rimcraft:leather_ingredient", [
        "minecraft:cactus",
        "minecraft:rotten_flesh",
        "fruitsdelight:pineapple_sapling",
        "farmersdelight:canvas"])
})