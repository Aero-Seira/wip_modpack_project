ServerEvents.recipes(e => {
    e.recipes.createoreexcavation.vein(
        '{"text": "可可原浆"}',
        "ratatouille:cocoa_liquor_bucket")
        .placement(128, 8, 1919810)
        .biomeWhitelist("rimcraft:has_cocoa_liquor")
        .id("rimcraft:cocoa_liquor_vein")
    e.recipes.createoreexcavation.vein(
        '{"text": "蜂蜜"}',
        "create:honey_bucket")
        .placement(128, 8, 114514)
        .biomeWhitelist("rimcraft:has_honey")
        .id("rimcraft:honey_vein")
    e.recipes.createoreexcavation.extracting(Fluid.of("ratatouille:cocoa_liquor", 100), "rimcraft:cocoa_liquor_vein", 100)
        .stress(1024)
        .id("rimcraft:cocoa_liquor_extract")
    e.recipes.createoreexcavation.extracting(Fluid.of("create:honey", 100), "rimcraft:honey_vein", 100)
        .stress(1024)
        .fluid(Fluid.of("the_bumblezone:sugar_water_still", 250))
        .id("rimcraft:honey_extract")
})

ServerEvents.tags("minecraft:worldgen/biome", e => {
    e.add("rimcraft:has_cryo_fuel", "ad_astra:glacio_ice_peaks")
    e.add("rimcraft:has_cocoa_liquor", ["alexscaves:candy_cavity"])
    e.add("rimcraft:has_honey",
        [
            "the_bumblezone:crystal_canyon",
            "the_bumblezone:floral_meadow",
            "the_bumblezone:hive_pillar",
            "the_bumblezone:hive_wall",
            "the_bumblezone:howling_constructs",
            "the_bumblezone:pollinated_fields",
            "the_bumblezone:pollinated_pillar",
            "the_bumblezone:sugar_water_floor"])
})