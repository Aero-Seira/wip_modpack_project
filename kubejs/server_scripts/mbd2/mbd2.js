ServerEvents.recipes(e => {
    //安山总线
    e.recipes.create.item_application(
        "rimcraft:andesite_import_bus",
        [
            "create:andesite_casing",
            "functionalstorage:controller_extension"
        ]
    )
        .id("rimcraft:andesite_import_bus")
    e.recipes.kubejs.shapeless(
        "rimcraft:andesite_export_bus",
        "rimcraft:andesite_import_bus"
    )
        .id("rimcraft:andesite_export_bus_from_import_bus")
    e.recipes.kubejs.shapeless(
        "rimcraft:andesite_import_bus",
        "rimcraft:andesite_export_bus"
    )
        .id("rimcraft:andesite_import_bus_from_export_bus")
    //钢总线
    e.recipes.create.item_application(
        "rimcraft:steel_import_bus",
        [
            "rimcraftcore:steel_casing",
            "functionalstorage:controller_extension"
        ]
    )
        .id("rimcraft:steel_import_bus")
    e.recipes.kubejs.shapeless(
        "rimcraft:steel_export_bus",
        "rimcraft:steel_import_bus"
    )
        .id("rimcraft:steel_export_bus_from_import_bus")
    e.recipes.kubejs.shapeless(
        "rimcraft:steel_import_bus",
        "rimcraft:steel_export_bus"
    )
        .id("rimcraft:steel_import_bus_from_export_bus")
    //锻造钢总线
    e.recipes.create.item_application(
        "rimcraft:forged_steel_import_bus",
        [
            "rimcraftcore:forge_steel_casing",
            "functionalstorage:controller_extension"
        ]
    )
        .id("rimcraft:forged_steel_import_bus")
    e.recipes.kubejs.shapeless(
        "rimcraft:forged_steel_export_bus",
        "rimcraft:forged_steel_import_bus"
    )
        .id("rimcraft:forged_steel_export_bus_from_import_bus")
    e.recipes.kubejs.shapeless(
        "rimcraft:forged_steel_import_bus",
        "rimcraft:forged_steel_export_bus"
    )
        .id("rimcraft:forged_steel_import_bus_from_export_bus")
    //屠宰室核心
    e.shaped("rimcraft:butchery_room", [
        "ABA",
        "BCB",
        "ABA"
    ], {
        A: "create:andesite_casing",
        B: "create:andesite_alloy",
        C: "create:precision_mechanism"
    })
        .id("rimcraft:butchery_room")
    e.shaped("rimcraft:create_in", [
        " A ",
        "ABA",
        " A "
    ], {
        A: "create:cogwheel",
        B: "create:gearbox"
    })
        .id("rimcraft:create_in")
    e.recipes.create.mechanical_crafting("rimcraft:hydropower_station", [
        "AAAAA",
        "ABBCA",
        "ABDCA",
        "ABCCA",
        "AAAAA"
    ], {
        A: "ae2:sky_stone_brick",
        B: "ae2:fluix_crystal",
        C: "minecraft:quartz",
        D: "vintageimprovements:redstone_module"
    })
        .id("rimcraft:mechanical_crafting/hydropower_station")
    // 涡轮转子
    e.recipes.create.mechanical_crafting("rimcraft:wooden_fan", [
        " A A ",
        "ABBBA",
        " BCB ",
        "ABBBA",
        " A A "
    ], {
        A: "#minecraft:wooden_slabs",
        B: "#minecraft:logs",
        C: "create:large_water_wheel"
    })
        .id("rimcraft:mechanical_crafting/wooden_fan")
    e.recipes.create.mechanical_crafting("rimcraft:steel_fan", [
        " A A ",
        "ABBBA",
        " BCB ",
        "ABBBA",
        " A A "
    ], {
        A: "ad_astra:steel_plate",
        B: "ae2:sky_dust",
        C: "rimcraft:wooden_fan"
    })
        .id("rimcraft:mechanical_crafting/steel_fan")
    {
        let iner = 'rimcraft:steel_fan'
        e.recipes.create.sequenced_assembly('rimcraft:forge_steel_fan', iner, [
            e.recipes.create.deploying(iner, [iner, 'ae2:sky_dust']),
            e.recipes.create.filling(iner, [iner, Fluid.of("rimcraftcore:molten_forged_steel", 90)]),
            e.recipes.create.pressing(iner, iner)
        ])
            .transitionalItem(iner)
            .loops(4)
            .id("rimcraft:sequenced_assembly/forge_steel_fan")
    }
    {
        let iner = 'rimcraft:forge_steel_fan'
        e.recipes.create.sequenced_assembly('rimcraft:dragon_steel_fan', iner, [
            e.recipes.create.deploying(iner, [iner, 'ae2:sky_dust']),
            e.recipes.create.filling(iner, [iner, FluidIngredients("rimcraft:molten_dragon_steel", 90)]),
            e.recipes.create.pressing(iner, iner)
        ])
            .transitionalItem(iner)
            .loops(4)
            .id("rimcraft:sequenced_assembly/dragon_steel_fan")
    }

    //合金电炉
    e.recipes.create.mechanical_crafting("rimcraft:alloy_electric_furnace", [
        "ABBBA",
        "ACCCA",
        "ADEDA",
        "AFFFA",
        "AAAAA"
    ], {
        A: "#forge:plates/steel",
        B: "#forge:plates/bronze",
        C: "#forge:plates/bronze",
        D: "createmetallurgy:industrial_crucible",
        E: "vintageimprovements:redstone_module",
        F: "create:sturdy_sheet"
    })
        .id("rimcraft:mechanical_crafting/alloy_electric_furnace")

    e.recipes.create.mechanical_crafting("rimcraft:hydropower_amplifier", [
        "AABAA",
        "ACDCA",
        "BDEDB",
        "ACDCA",
        "AABAA"
    ], {
        A: "rimcraft:sky_steel_casing",
        B: "ad_astra:fan",
        C: "rimcraft:forged_steel_sheet",
        D: "ad_astra:steel_engine",
        E: "rimcraftcore:forged_steel_block"
    })
        .id("rimcraft:mechanical_crafting/hydropower_amplifier")
    e.recipes.kubejs.shaped("rimcraft:dryer", [
        "ABA",
        "ACA",
        "ADA"
    ], {
        A: "create:copper_bars",
        B: "create:shaft",
        C: "minecraft:magma_block",
        D: "create:nozzle"
    }).id("rimcraft:dryer")
    
    e.recipes.kubejs.shaped("rimcraft:sprinkler", [
        " A ",
        "ABA",
        " A "
    ], {
        A: "create:fluid_pipe",
        B: "create:fluid_tank"
    }).id("rimcraft:sprinkler")
    e.recipes.kubejs.shaped("rimcraft:sell_bin", [
        "ABA",
        "ACA",
        "AAA"
    ], {
        A: "#minecraft:planks",
        B: "#forge:chests",
        C: "lightmanscurrency:trading_core"
    }).id("rimcraft:sell_bin")

    e.recipes.create.mechanical_crafting("rimcraft:big_centrifuge", [
        "AABAA",
        "ACCDA",
        "BCEDA",
        "ACDDA",
        "AABAA"
    ], {
        A: "rimcraftcore:steel_casing",
        B: "rimcraft:magnetic_mechanism",
        C: "alexscaves:azure_neodymium_ingot",
        D: "alexscaves:scarlet_neodymium_ingot",
        E: "alexscaves:heart_of_iron"
    }).id("rimcraft:mechanical_crafting/big_centrifuge")
    e.recipes.create.mechanical_crafting("rimcraft:centrifuge_rotor", [
        " A A ",
        "ABABA",
        " ACA ",
        "ABABA",
        " A A "
    ], {
        A: "#forge:plates/aviation_fibers",
        B: "#forge:spring/over_1000",
        C: "vintageimprovements:centrifuge"
    }).id("rimcraft:mechanical_crafting/centrifuge_rotor")
    e.recipes.create.mechanical_crafting("rimcraft:fission_fuel_assembly", [
        "AAAAA",
        "ABCBA",
        "ABCBA",
        "AAAAA"
    ], {
        A: "create_new_age:reactor_casing",
        B: "alexscaves:uranium_rod",
        C: "alexscaves:fissile_core"
    }).id("rimcraft:mechanical_crafting/fission_fuel_assembly")
    e.recipes.create.mechanical_crafting("rimcraft:fission_reactor", [
        "AAAAA",
        "ABCBA",
        "ADEDA",
        "ABCBA",
        "AAAAA"
    ], {
        A: "create_new_age:reactor_casing",
        B: "ae2:engineering_processor",
        C: "alexscaves:fissile_core",
        D: "ae2:logic_processor",
        E: "vintageimprovements:redstone_module"
    }).id("rimcraft:mechanical_crafting/fission_reactor")
    e.recipes.kubejs.shaped(
        "rimcraft:order_deliverer_item",
        [
        "AB ",
        "BC "
    ], {
        A: "rimcraft:unopened_order",
        B: "lightmanscurrency:trading_core",
        C: "#forge:chests"
    })
    .id("rimcraft:order_deliverer_item")
    // e.recipes.kubejs.shapeless(
    //     "rimcraft:contract_executor", 
    //     [
    //         "rimcraft:order_deliverer_item",
    //         "#create:table_cloths"
    //     ]
    // ).id("rimcraft:contract_executor")

    e.recipes.create.mechanical_crafting("rimcraft:mechanical_craft_encoder", [
        "AABAA",
        "ABCBA",
        "BCDCB",
        "ABCBA",
        "AABAA"
    ], {
        A: "create:brass_sheet",
        B: "ae2:molecular_assembler",
        C: "create:brass_casing",
        D: "create:factory_gauge"
    }).id("rimcraft:mechanical_crafting/mechanical_craft_encoder")
})