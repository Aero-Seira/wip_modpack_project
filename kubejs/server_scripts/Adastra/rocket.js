ServerEvents.recipes(e => {
    const { kubejs, create, create_new_age, vintageimprovements } = e.recipes
    //航空纤维板
    create.mixing(
        'rimcraft:aviation_fibers_sheet',
        [
            "rimcraft:carbon_dust",
            "ad_astra:steel_plate",
            "protection_pixel:reinforcedfiber",
            Fluid.of("rimcraft:ethylene_fluid", 100)
        ]
    )
        .heated()
        .id("rimcraft:mixing/aviation_fibers_sheet")
    //舱体板
{
    let iner = 'rimcraft:incomplete_basic_panel'
    create.sequenced_assembly('rimcraft:basic_panel', 'rimcraft:aviation_fibers_sheet',
        [
            create.deploying(iner, [iner, 'protection_pixel:heatresistantceramicsheet']),
            create.deploying(iner, [iner, 'tetra:forged_bolt']),
            create.deploying(iner, [iner, 'tetra:forged_mesh']),
            create.pressing(iner, iner)
        ]
    )
        .loops(1)
        .transitionalItem(iner)
        .id("rimcraft:sequenced_assembly/basic_panel")
}
{
    let iner = 'rimcraft:incomplete_advanced_panel'
    create.sequenced_assembly('rimcraft:advanced_panel', 'rimcraft:basic_panel',
        [
            create.filling(iner, [iner, Fluid.of("rimcraftcore:molten_desh", 90)]),
            create.pressing(iner, iner)
        ]
    )
       .loops(1)
       .transitionalItem(iner)
       .id("rimcraft:sequenced_assembly/advanced_panel")
}
{
    let iner = "rimcraft:incomplete_explorer_panel"
    create.sequenced_assembly('rimcraft:explorer_panel', 'rimcraft:advanced_panel', 
        [
            create.filling(iner, [iner, Fluid.of("rimcraftcore:molten_ostrum", 90)]),
            create.deploying(iner, [iner, 'create_new_age:overcharged_iron_sheet']),
            create.pressing(iner, iner),
            create_new_age.energising(iner, iner, 4000)
        ]
    )
        .loops(1)
        .transitionalItem(iner)
        .id("rimcraft:sequenced_assembly/explorer_panel")
}
{
    let iner = "rimcraft:incomplete_flare_panel"
    create.sequenced_assembly('rimcraft:flare_panel', 'rimcraft:explorer_panel', 
        [
            create.filling(iner, [iner, Fluid.of("rimcraftcore:molten_calorite", 90)]),
            create.deploying(iner, [iner, 'create_new_age:overcharged_golden_sheet']),
            create.pressing(iner, iner),
            create_new_age.energising(iner, iner, 8000)
        ]
    )
        .loops(1)
        .transitionalItem(iner)
        .id("rimcraft:sequenced_assembly/flare_panel")
}
    //舱体
    create.mechanical_crafting(
        'rimcraft:basic_cabin',
        [
            "ABA",
            "ACA",
            "ADA",
            "AEA"
        ], {
            A: 'rimcraft:basic_panel',
            B: '#forge:glass_panes',
            C: 'rimcraft:basic_crystal_panel',
            D: '#create:seats',
            E: 'ad_astra:steel_engine'
        }
    ).id("rimcraft:mechanical_crafting/basic_cabin")
    create.mechanical_crafting(
        'rimcraft:advanced_cabin',
        [
            "ABA",
            "ACA",
            "ADA",
            "AEA"
        ], {
            A: 'rimcraft:advanced_panel',
            B: '#forge:glass_panes',
            C: 'rimcraft:advanced_crystal_panel',
            D: '#create:seats',
            E: 'ad_astra:desh_engine'
        }
    ).id("rimcraft:mechanical_crafting/advanced_cabin")
    create.mechanical_crafting(
        'rimcraft:explorer_cabin',
        [
            "ABA",
            "ACA",
            "ADA",
            "AEA"
        ], {
            A: 'rimcraft:explorer_panel',
            B: '#forge:glass_panes',
            C: 'rimcraft:holographic_interface_panel',
            D: '#create:seats',
            E: 'ad_astra:ostrum_engine'
        }
    ).id("rimcraft:mechanical_crafting/explorer_cabin")
    create.mechanical_crafting(
        'rimcraft:flare_cabin',
        [
            "ABA",
            "ACA",
            "ADA",
            "AEA"
        ], {
            A: 'rimcraft:flare_panel',
            B: '#forge:glass_panes',
            C: 'rimcraft:quantum_field_panel',
            D: '#create:seats',
            E: 'ad_astra:calorite_engine'
        }
    ).id("rimcraft:mechanical_crafting/flare_cabin")
    //面板合成
    create.mechanical_crafting(
        'rimcraft:basic_crystal_panel',
        [
            "AAA",
            "ABA",
            "ACA",
            "AAA"
        ], {
            A: "ad_astra:steel_plate",
            B: "immersive_aircraft:gyroscope",
            C: "minecraft:nether_star"
        }
    ).id("rimcraft:mechanical_crafting/basic_crystal_panel")
    create.mechanical_crafting(
        'rimcraft:advanced_crystal_panel',
        [
            "AAA",
            "ABA",
            "ACA",
            "AAA"
        ], {
            A: 'ad_astra:desh_plate',
            B: "immersive_aircraft:gyroscope",
            C: 'iceandfire:cyclops_eye'
        }
    ).id("rimcraft:mechanical_crafting/advanced_crystal_panel")
    create.mechanical_crafting(
        'rimcraft:holographic_interface_panel',
        [
            " A ",
            "BBB",
            "CDC"
        ], {
            A: "minecraft:light_blue_stained_glass_pane",
            B: 'createutilities:polished_amethyst',
            C: "ad_astra:ostrum_plate",
            D: 'ae2:calculation_processor'
        }
    ).id("rimcraft:mechanical_crafting/holographic_interface_panel")
    create.mechanical_crafting(
        'rimcraft:quantum_field_panel',
        [
            "  A  ",
            "BBCBB",
            "BDEFB",
            "BBBBB"
        ], {
            A: 'ae2:quantum_entangled_singularity',
            B: 'ad_astra:calorite_plate',
            C: "ae2:quantum_link",
            D: 'ae2:calculation_processor',
            E: 'ae2:logic_processor',
            F: 'ae2:engineering_processor'
        }
    ).id("rimcraft:mechanical_crafting/quantum_field_panel")
    //火箭合成
    create.mechanical_crafting(
        'ad_astra:tier_1_rocket',
        [
            " A ",
            "BCB",
            "D D"
        ], {
            A: 'ad_astra:rocket_nose_cone',
            B: 'ad_astra:steel_tank',
            C: 'rimcraft:basic_cabin',
            D: 'ad_astra:steel_engine'
        }
    ).id("rimcraft:mechanical_crafting/tier_1_rocket")
    create.mechanical_crafting(
        'ad_astra:tier_2_rocket',
        [
            "  A  ",
            " BCB ",
            " DED ",
            "FG GF"
        ], {
            A: 'ad_astra:rocket_nose_cone',
            B: 'ad_astra:steel_plate',
            C: 'rimcraft:advanced_panel',
            D: 'ad_astra:desh_tank',
            E: 'rimcraft:advanced_cabin',
            F: 'ad_astra:rocket_fin',
            G: 'ad_astra:desh_engine'
        }
    ).id("rimcraft:mechanical_crafting/tier_2_rocket")
    create.mechanical_crafting(
        'ad_astra:tier_3_rocket',
        [
            "  A  ",
            " BCB ",
            " CEC ",
            "FDDDF",
            "FGGGF"
        ], {
            A: 'ad_astra:rocket_nose_cone',
            B: 'ad_astra:steel_plate',
            C: 'rimcraft:explorer_panel',
            D: 'ad_astra:ostrum_tank',
            E: 'rimcraft:explorer_cabin',
            F: 'ad_astra:rocket_fin',
            G: 'ad_astra:ostrum_engine'
        }
    ).id("rimcraft:mechanical_crafting/tier_3_rocket")
    create.mechanical_crafting(
        'ad_astra:tier_4_rocket',
        [
            "  A  ",
            " BCB ",
            " CEC ",
            " CDC ",
            "FDGDF",
            "DG GD",
            "G   G"
        ], {
            A: 'ad_astra:rocket_nose_cone',
            B: 'ad_astra:steel_plate',
            C: 'rimcraft:flare_panel',
            D: 'ad_astra:calorite_tank',
            E: 'rimcraft:flare_cabin',
            F: 'ad_astra:rocket_fin',
            G: 'ad_astra:calorite_engine'
        }
    ).id("rimcraft:mechanical_crafting/tier_4_rocket")
})
