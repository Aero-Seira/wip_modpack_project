StartupEvents.registry("item", e => {
    // 注册火箭相关物品
    let rocket_tier = [
        ["basic", "common"],
        ["advanced", "uncommon"],
        ["explorer", "rare"],
        ["flare", "epic"]
    ]
    rocket_tier.forEach(tier => {
        // 舱体
        e.create(`rimcraft:${tier[0]}_cabin`)
            .rarity(tier[1])
            .unstackable()
            .translationKey(`item.rimcraft.${tier[0]}_cabin`)
            .tag(`rimcraft:cabins`)
            .tag(`rimcraft:cabins/${tier[0]}`)
            .fireResistant()

        // 舱板
        e.create(`rimcraft:${tier[0]}_panel`)
            .rarity(tier[1])
            .maxStackSize(16)
            .translationKey(`item.rimcraft.${tier[0]}_panel`)
            .tag(`rimcraft:panels`)
            .tag(`rimcraft:panels/${tier[0]}`)
            .fireResistant()
        e.create(`rimcraft:incomplete_${tier[0]}_panel`, "create:sequenced_assembly")
            .rarity(tier[1])
            .translationKey(`item.rimcraft.incomplete_${tier[0]}_panel`)
            .fireResistant()
    })
    // 火箭面板
    e.create("rimcraft:basic_crystal_panel")
        .rarity("common")
        .unstackable()
        .translationKey("item.rimcraft.basic_crystal_panel")
        .fireResistant()
    e.create("rimcraft:advanced_crystal_panel")
        .rarity("uncommon")
        .unstackable()
        .translationKey("item.rimcraft.advanced_crystal_panel")
        .fireResistant()
    e.create("rimcraft:holographic_interface_panel")
        .rarity("rare")
        .unstackable()
        .translationKey("item.rimcraft.holographic_interface_panel")
        .fireResistant()
    e.create("rimcraft:quantum_field_panel")
        .rarity("epic")
        .unstackable()
        .translationKey("item.rimcraft.quantum_field_panel")
        .fireResistant()
    // 注册碳粉
    e.create("rimcraft:carbon_dust")
        .translationKey("item.rimcraft.carbon_dust")
        .tag("forge:dusts")
        .tag("forge:dusts/carbon")
    // 碳板
    e.create("rimcraft:carbon_plate")
        .translationKey("item.rimcraft.carbon_plate")
        .tag("forge:plates")
        .tag("forge:plates/carbon")
    // 航空纤维板
    e.create("rimcraft:aviation_fibers_sheet")
        .translationKey("item.rimcraft.aviation_fibers_sheet")
        .tag("forge:plates")
        .tag("forge:plates/aviation_fibers")
        .fireResistant()
    // 安山合金粒
    e.create("rimcraft:andesite_alloy_nugget")
        .translationKey("item.rimcraft.andesite_alloy_nugget")
        .tag("forge:nuggets/andesite_alloy")
    // 土豆加牛肉
    e.create("rimcraft:potato_stew_beef", "create:sequenced_assembly")
        .food(food => {
            food.hunger(7)
                .saturation(0.6)
                .meat()
        })
        .translationKey("item.rimcraft.potato_stew_beef")
    // 河豚寿司
    e.create("rimcraft:fugu_roll")
        .food(food => {
            food.hunger(7)
                .saturation(1)
        })
        .translationKey("item.rimcraft.fugu_roll")
    e.create("rimcraft:radgill_sushi")
        .food(food => {
            food.hunger(1)
                .saturation(1)
                .effect("alexscaves:irradiated", 1200, 2, 1.0)
                .effect("minecraft:saturation", 1200, 0, 1.0)
        })
        .translationKey("item.rimcraft.radgill_sushi")
    // 深海寿司卷切片
    e.create("rimcraft:deep_sea_sushi_roll_slice")
        .food(food => {
            food.hunger(7)
                .saturation(1)
                .effect("alexscaves:deepsight", 1200, 0, 1.0)
        })
        .translationKey("item.rimcraft.deep_sea_sushi_roll_slice")
    // 注册挂面
    e.create("rimcraft:vermicelli")
        .translationKey("item.rimcraft.vermicelli")


    // 注册曲奇面团
    let CookieDough = [
        "persimmon",
        "lemon",
        "oatmeal",
        "green_tea",
        "cranberry",
        "bayberry",
        "chocolate",
        "honey",
        "sweet_berry",
        "lime",
        "chorus",
        "bat",
        "paw"
    ]
    CookieDough.forEach(dough => {
        e.create(`rimcraft:${dough}_cookie_dough`)
            .tag("forge:cookie_dough")
            .translationKey(`item.rimcraft.${dough}_cookie_dough`)
            .food(food => {
                food.hunger(1)
                    .saturation(1)
                    .fastToEat()
                    .effect("minecraft:hunger", 200, 1, 0.8)
            })
    })


    //注册未烤制玛芬
    let muffin_list = [
        'red_velvet_cupcake',
        'mixed_berry_muffin',
        'chocolate_pumpkin_muffin',
        'blueberry_muffin',
        'cranberry_muffin',
        'monster_muffin'
    ]
    muffin_list.forEach(muffin => {
        e.create(`rimcraft:unbaked_${muffin}`)
            .tag("forge:unbaked_muffin")
            .translationKey(`item.rimcraft.unbaked_${muffin}`)
    })

    //注册冰棍中间形态
    let popsicle_list = [
        'empty',
        'chorus_fruit',
        'tear',
        'milk',
        'hamimelon',
        'lime',
        'kiwi',
        'berry',
        'big'
    ]
    popsicle_list.forEach(popsicle => {
        e.create(`rimcraft:${popsicle}_popsicle_mold_filled`)
            .tag("forge:popsicle_mold_filled")
            .translationKey(`item.rimcraft.${popsicle}_popsicle_mold_filled`)
        e.create(`rimcraft:${popsicle}_popsicle_mold_solid`)
            .tag("forge:popsicle_mold_solid")
            .translationKey(`item.rimcraft.${popsicle}_popsicle_mold_solid`)
    })
    e.create("rimcraft:green_tongue_mold_filled")
        .tag("forge:popsicle_mold_filled")
        .translationKey("item.rimcraft.green_tongue_mold_filled")
    e.create("rimcraft:green_tongue_mold_solid")
        .tag("forge:popsicle_mold_solid")
        .translationKey("item.rimcraft.green_tongue_mold_solid")

    // 开酥相关
    e.create("rimcraft:butter")
        .translationKey("item.rimcraft.butter")
        .food(food => {
            food.hunger(1)
                .saturation(1)
                .fastToEat()
                .effect("minecraft:hunger", 200, 1, 1.0)
                .effect("minecraft:nausea", 200, 1, 1.0)
        })
    e.create("rimcraft:oil_dough")
        .translationKey("item.rimcraft.oil_dough")
        .food(food => {
            food.hunger(1)
                .saturation(1)
                .fastToEat()
                .effect("minecraft:hunger", 200, 1, 1.0)
                .effect("minecraft:nausea", 200, 1, 1.0)
        })
    e.create("rimcraft:puff_pastry")
        .translationKey("item.rimcraft.puff_pastry")
        .food(food => {
            food.hunger(1)
                .saturation(1)
                .fastToEat()
                .effect("minecraft:hunger", 200, 1, 1.0)
                .effect("minecraft:nausea", 200, 1, 1.0)
        })
    e.create("rimcraft:yorkshire_pudding_and_beef")
        .translationKey("item.rimcraft.yorkshire_pudding_and_beef")
        .food(food => {
            food.hunger(12)
                .saturation(1)
        })
    e.create("rimcraft:oil_dough_with_butter", "create:sequenced_assembly")
        .translationKey("item.rimcraft.oil_dough_with_butter")
        .food(food => {
            food.hunger(1)
                .saturation(1)
                .fastToEat()
                .effect("minecraft:hunger", 200, 1, 0.5)
                .effect("minecraft:nausea", 200, 1, 1.0)
        })
    // 板面
    e.create("rimcraft:board_noodles")
        .translationKey("item.rimcraft.board_noodles")
    // 老冰棍
    e.create("rimcraft:empty_popsicle")
        .translationKey("item.rimcraft.empty_popsicle")
        .food(food => {
            food.hunger(2)
                .saturation(0.25)
                .fastToEat()
        })
    // 鱿鱼圈
    e.create("rimcraft:raw_calamari")
        .translationKey("item.rimcraft.raw_calamari")
        .food(food => {
            food.hunger(1)
                .saturation(1)
        })
    //生恶魂圈
    e.create("rimcraft:raw_ghast_calamari")
        .translationKey("item.rimcraft.raw_ghast_calamari")
        .food(food => {
            food.hunger(1)
                .saturation(1)
        })
    // 生潘恩达炸饺
    e.create("rimcraft:raw_empanada")
        .translationKey("item.rimcraft.raw_empanada")
        .food(food => {
            food.hunger(4)
                .saturation(0.25)
        })
    // 生奶酪披萨
    e.create("rimcraft:raw_cheese_pizza")
        .translationKey("item.rimcraft.raw_cheese_pizza")
    // 燕麦面包
    e.create("rimcraft:oat_bread")
        .translationKey("item.rimcraft.oat_bread")
        .food(food => {
            food.hunger(5)
                .saturation(0.5)
                .effect("minecraft:regeneration", 60, 1, 1.0)
        })
    // 玉米粉
    e.create("rimcraft:corn_flour")
        .translationKey("item.rimcraft.corn_flour")
    // 腊肠
    e.create("rimcraft:salami")
        .translationKey("item.rimcraft.salami")
        .food(food => {
            food.hunger(6)
                .saturation(0.7)
                .effect("farmersdelight:nourishment", 600, 1, 1.0)
        })
    // 生土豆饼
    e.create("rimcraft:raw_potato_pancake")
        .translationKey("item.rimcraft.raw_potato_pancake")
        .food(food => {
            food.hunger(2)
                .saturation(0.5)
        })
    // 威化面团
    e.create("rimcraft:wafer_dough")
        .translationKey("item.rimcraft.wafer_dough")
    // 繁茂果冻
    e.create("rimcraft:lush_confiture_jello_item")
        .food(food => {
            food.hunger(1)
                .saturation(0.5)
                .effect("cosmopolitan:tracer", 600, 1, 1.0)
                .effect("cosmopolitan:phototaxis", 600, 1, 1.0)
        })
        .tag("fruitsdelight:jello")
        .tag("diet:sugars")
        .translationKey("item.rimcraft.lush_confiture_jello_item")
    // 九转大肠
    e.create("rimcraft:braised_intestines_in_brown_sauce")
        .rarity("epic")
        .maxStackSize(16)
        .food(f => {
            f.hunger(20)
                .saturation(1)
                .effect("farmersdelight:nourishment", 6000, 1, 1.0)
                .eaten(ea => {
                    ea.server.scheduleInTicks(1, func => {
                        if (!ea.player.isCreative()) {
                            if (!ea.player.getInventory().add('minecraft:bowl')) {
                                ea.player.drop('minecraft:bowl', false)
                            }
                        }
                    })
                })
        })
        .translationKey("item.rimcraft.braised_intestines_in_brown_sauce")
    //清水白菜
    e.create("rimcraft:boiling_water_cabbage")
        .rarity("uncommon")
        .unstackable()
        .translationKey("item.rimcraft.boiling_water_cabbage")
        .food(food => {
            food.hunger(8)
                .saturation(0.6)
                .effect("minecraft:resistance", 500, 2, 1.0)
                .effect("farmersdelight:nourishment", 3000, 1, 1.0)
                .eaten(ea => {
                    ea.server.scheduleInTicks(1, func => {
                        if (!ea.player.isCreative()) {
                            if (!ea.player.getInventory().add('minecraft:bowl')) {
                                ea.player.drop('minecraft:bowl', false)
                            }
                        }
                    })
                })
        })
    // 玉米热狗相关
    e.create("rimcraft:mayo_corn_dog")
        .food(food => {
            food.hunger(8)
                .saturation(0.6)
                .effect("minecraft:resistance", 200, 0, 1.0)
        })
        .translationKey("item.rimcraft.mayo_corn_dog")
    e.create("rimcraft:ketchup_corn_dog")
        .food(food => {
            food.hunger(8)
                .saturation(0.6)
                .effect("minecraft:fire_resistance", 200, 0, 1.0)
        })
        .translationKey("item.rimcraft.ketchup_corn_dog")
    //空饭团
    e.create("rimcraft:empty_riceball")
        .food(food => {
            food.hunger(4)
                .saturation(0.6)
        })
        .translationKey("item.rimcraft.empty_riceball")
    //纸包炸恶魂意面
    e.create("rimcraft:wrapped_fries_ghasta")
        .food(f => {
            f.hunger(8)
                .saturation(0.6)
                .eaten(ea => {
                    ea.server.scheduleInTicks(1, func => {
                        if (!ea.player.isCreative()) {
                            if (!ea.player.getInventory().add('create_bic_bit:dirty_paper')) {
                                ea.player.drop('create_bic_bit:dirty_paper', false)
                            }
                        }
                    })
                })
        })
        .translationKey("item.rimcraft.wrapped_fries_ghasta")
    //附魔金灯笼果
    e.create("rimcraft:enchanted_golden_lantern_fruit")
        .texture("trailandtales_delight:item/golden_lantern_fruit")
        .rarity("epic")
        .food(f => {
            f.hunger(4)
                .saturation(1.5)
                .effect("minecraft:fire_resistance", 6000, 0, 1.0)
                .effect("minecraft:absorption", 3600, 3, 1.0)
                .effect("minecraft:regeneration", 400, 2, 1.0)
                .effect("minecraft:resistance", 3600, 0, 1.0)
        })
        .glow(true)
        .translationKey("item.rimcraft.enchanted_golden_lantern_fruit")
    //附魔金胡萝卜
    e.create("rimcraft:enchanted_golden_carrot")
        .texture("minecraft:item/golden_carrot")
        .rarity("rare")
        .food(f => {
            f.hunger(6)
                .saturation(1.2)
                .effect("minecraft:saturation", 20, 0, 1.0)
                .effect("farmersdelight:nourishment", 3600, 0, 1.0)
        })
        .glow(true)
        .translationKey("item.rimcraft.enchanted_golden_carrot")
    //附魔金杜鹃莓
    e.create("rimcraft:enchanted_golden_arbutus_berries")
        .texture("cosmopolitan:item/golden_arbutus_berries")
        .rarity("epic")
        .food(f => {
            f.hunger(4)
                .saturation(1)
                .effect("cosmopolitan:phototaxis", 1200, 1, 1.0)
                .effect("minecraft:strength", 1200, 2, 1.0)
        })
        .glow(true)
        .translationKey("item.rimcraft.enchanted_golden_arbutus_berries")

    e.create("rimcraft:fuel_hotcream")
        .tag("create:blaze_burner_fuel/special")
        .translationKey("item.rimcraft.fuel_hotcream")
    //未完成的寿司
    // e.create("rimcraft:sushi_unrolledroll", "create:sequenced_assembly")
    //     .translationKey("item.rimcraft.sushi_unrolledroll")
    e.create("rimcraft:incomplete_gunkan", "create:sequenced_assembly")
        .translationKey("item.rimcraft.incomplete_gunkan")
    e.create("rimcraft:incomplete_nigiri", "create:sequenced_assembly")
        .texture("rimcraft:item/empty_riceball")
        .translationKey("item.rimcraft.incomplete_nigiri")
    e.create("rimcraft:incomplete_hosomaki", "create:sequenced_assembly")
        .translationKey("item.rimcraft.incomplete_hosomaki")
    e.create("rimcraft:incomplete_futomaki", "create:sequenced_assembly")
        .translationKey("item.rimcraft.incomplete_futomaki")
    e.create("rimcraft:incomplete_california", "create:sequenced_assembly")
        .translationKey("item.rimcraft.incomplete_california")

    // 未完成相关
    e.create("rimcraft:incomplete_layered_magnet", "create:sequenced_assembly")
        .translationKey("item.rimcraft.incomplete_layered_magnet")
    e.create("rimcraft:incomplete_alternator", "create:sequenced_assembly")
        .translationKey("item.rimcraft.incomplete_alternator")
    e.create("rimcraft:incomplete_diesel_engine", "create:sequenced_assembly")
        .translationKey("item.rimcraft.incomplete_diesel_engine")
    e.create("rimcraft:incomplete_huge_diesel_engine", "create:sequenced_assembly")
        .translationKey("item.rimcraft.incomplete_huge_diesel_engine")
    e.create("rimcraft:incomplete_large_diesel_engine", "create:sequenced_assembly")
        .translationKey("item.rimcraft.incomplete_large_diesel_engine")
    e.create("rimcraft:incomplete_basic_motor", "create:sequenced_assembly")
        .translationKey("item.rimcraft.incomplete_basic_motor")
    e.create("rimcraft:incomplete_advanced_motor", "create:sequenced_assembly")
        .translationKey("item.rimcraft.incomplete_advanced_motor")
    e.create("rimcraft:incomplete_reinforced_motor", "create:sequenced_assembly")
        .translationKey("item.rimcraft.incomplete_reinforced_motor")
    e.create("rimcraft:incomplete_carbon_brushes", "create:sequenced_assembly")
        .translationKey("item.rimcraft.incomplete_carbon_brushes")
    e.create("rimcraft:incomplete_electric_motor", "create:sequenced_assembly")
        .translationKey("item.rimcraft.incomplete_electric_motor")
    e.create("rimcraft:incompleted_modular_accumulator", "create:sequenced_assembly")
        .translationKey("item.rimcraft.incompleted_modular_accumulator")
    e.create("rimcraft:incomplete_electron_tube", "create:sequenced_assembly")
        .translationKey("item.rimcraft.incomplete_electron_tube")
    e.create("rimcraft:bleak_electron_tube")
        .translationKey("item.rimcraft.bleak_electron_tube")
    e.create("rimcraft:incomplete_fs_upgrade", "create:sequenced_assembly")
        .translationKey("item.rimcraft.incomplete_fs_upgrade")
    e.create("rimcraft:incomplete_graviton_tube", "create:sequenced_assembly")
        .translationKey("item.rimcraft.incomplete_graviton_tube")
    e.create("rimcraft:incomplete_neapolitan_ice_cream", "create:sequenced_assembly")
        .food(f => {
            f.hunger(8)
                .saturation(0.3)
                .eaten(ea => {
                    ea.player.setTicksFrozen(ea.player.getTicksFrozen() + 200)
                    ea.server.scheduleInTicks(1, func => {
                        if (!ea.player.isCreative()) {
                            if (!ea.player.getInventory().add("minecraft:bowl")) {
                                ea.player.drop("minecraft:bowl", false)
                            }
                        }
                    })
                })
        })
        .translationKey("item.rimcraft.incomplete_neapolitan_ice_cream")
        .tag("neapolitan:ice_cream")
    // 未完成的子弹
    e.create("rimcraft:incomplete_12g", "create:sequenced_assembly")
        .translationKey("item.rimcraft.incomplete_12g")
    e.create("rimcraft:incomplete_slap", "create:sequenced_assembly")
        .translationKey("item.rimcraft.incomplete_slap")
    e.create("rimcraft:incomplete_rbapb", "create:sequenced_assembly")
        .texture("create:item/brass_sheet")
        .translationKey("item.rimcraft.incomplete_rbapb")
    e.create("rimcraft:incomplete_gas_pistol_ammo", "create:sequenced_assembly")
        .texture("create:item/copper_sheet")
        .translationKey("item.rimcraft.incomplete_gas_pistol_ammo")
    e.create("rimcraft:guncotton")
        .translationKey("item.rimcraft.guncotton")

    // 订单交付器
    e.create("rimcraft:order_deliverer_item")
        .translationKey("item.rimcraft.order_deliverer_item")
    // 测试剑
    // e.create("rimcraft:sigma_man_sword", "sword")
    //     .tier("netherite")
    //     .attackDamageBonus(999999)
    //     .unstackable()
    //     .translationKey("item.rimcraft:sigma_man_sword")
    //     .rarity("epic")

    // 异界笔记
    e.create("rimcraft:otherworld_note")
        .translationKey("item.rimcraft.otherworld_note")
        .rarity("rare")

    // 通用压印模板（ae用）
    e.create("rimcraft:universal_press")
        .tag("vintageimprovements:curving_heads")
        .translationKey("item.rimcraft.universal_press")

    // 终极通用压印模板
    e.create("rimcraft:ultimate_universal_press")
        .tag("vintageimprovements:curving_heads")
        .translationKey("item.rimcraft.ultimate_universal_press")
    // 红石膏
    e.create("rimcraft:redstone_paste")
        .maxDamage(64)
        .translationKey("item.rimcraft.redstone_paste")
        .tag("rimcraft:redstone")
    // 荧石膏
    e.create("rimcraft:glowstone_paste")
        .maxDamage(64)
        .translationKey("item.rimcraft.glowstone_paste")
        .tag("rimcraft:glowstone")
    // 陨石膏
    e.create("rimcraft:sky_stone_paste")
        .maxDamage(64)
        .translationKey("item.rimcraft.sky_stone_paste")
        .tag("rimcraft:sky_stone")
    let processorNames = ["engineering", "calculation", "logic", "accumulation", "omni_link", "complex_link", "multidimensional_expansion"];
    processorNames.forEach(name => {
        // 初加工的电路板
        e.create(`rimcraft:initial_processing_of_printed_${name}_processor`)
            .translationKey(`item.rimcraft.initial_processing_of_printed_${name}_processor`);
        // 待压印的处理器
        e.create(`rimcraft:${name}_processor_inscribed`)
            .translationKey(`item.rimcraft.${name}_processor_inscribed`);
    });
    let housingTypes = ["item", "fluid", "mega_item", "mega_fluid", "omni", "complex_omni", "quantum_omni"];

    housingTypes.forEach(type => {
        e.create(`rimcraft:initial_processing_of_${type}_cell_housing`)
            .translationKey(`item.rimcraft.initial_processing_of_${type}_cell_housing`)
        e.create(`rimcraft:${type}_cell_housing_blank`)
            .translationKey(`item.rimcraft.${type}_cell_housing_blank`)
        e.create(`rimcraft:unformed_${type}_cell_housing`)
            .translationKey(`item.rimcraft.unformed_${type}_cell_housing`)
    });
    // 石英玻璃部件
    e.create("rimcraft:quartz_glass_parts")
        .translationKey("item.rimcraft.quartz_glass_parts")
        .tag("rimcraft:quartz_glass")
    e.create("rimcraft:quartz_vibrant_glass_parts")
        .translationKey("item.rimcraft.quartz_vibrant_glass_parts")
        .tag("rimcraft:quartz_vibrant_glass")
    // 陨铜锭
    e.create("rimcraft:sky_copper_ingot")
        .translationKey("item.rimcraft.sky_copper_ingot")
        .fireResistant()
    // 元件外壳封头
    e.create("rimcraft:cell_housing_curving_head")
        .translationKey("item.rimcraft.cell_housing_curving_head")
        .tag("vintageimprovements:curving_heads")
    // // 未完成火箭核心
    // e.create("rimcraft:incomplete_first_stage_rocket_core", "create:sequenced_assembly")
    //     .translationKey("item.rimcraft.incomplete_first_stage_rocket_core")
    // e.create("rimcraft:incomplete_second_stage_rocket_core", "create:sequenced_assembly")
    //     .translationKey("item.rimcraft.incomplete_second_stage_rocket_core")
    // e.create("rimcraft:incomplete_third_stage_rocket_core", "create:sequenced_assembly")
    //     .translationKey("item.rimcraft.incomplete_third_stage_rocket_core")
    // e.create("rimcraft:incomplete_fourth_stage_rocket_core", "create:sequenced_assembly")
    //     .translationKey("item.rimcraft.incomplete_fourth_stage_rocket_core")
    // 行星齿轮
    e.create("rimcraft:incomplete_planet_gear", "create:sequenced_assembly")
        .translationKey("item.rimcraft.incomplete_planet_gear")
    e.create("rimcraft:planet_gear")
        .translationKey("item.rimcraft.planet_gear")
        .rarity("uncommon")
    // 磁悬浮构件
    e.create("rimcraft:magnetic_mechanism")
        .rarity("uncommon")
        .translationKey("item.rimcraft.magnetic_mechanism")
    e.create("rimcraft:incomplete_magnetic_mechanism", "create:sequenced_assembly")
        .translationKey("item.rimcraft.incomplete_magnetic_mechanism")
    // 矿石注册
    let clusters = [
        ["overworld_metal", "common"],
        ["overworld_noble_metal", "rare"],
        ["nether", "rare"],
        ["moon", "epic"],
        ["mars", "epic"],
        ["mercury", "common"],
        ["venus", "epic"],
        ["glacio", "epic"],
    ]
    clusters.forEach(cluster => {
        e.create(`rimcraft:${cluster[0]}_ore_cluster`)
            .rarity(cluster[1])
            .translationKey(`item.rimcraft.${cluster[0]}_ore_cluster`)
    });
    // 特例矿石
    e.create("rimcraft:mars_gemstone_cluster")
        .rarity("uncommon")
        .translationKey("item.rimcraft.mars_gemstone_cluster")
    // 探矿仪
    e.create("rimcraft:prospector")
        .unstackable()
        .translationKey("item.rimcraft.prospector")
    e.create("rimcraft:prospector_core")
        .translationKey("item.rimcraft.prospector_core")
    // β-正交晶系六方铁
    e.create("rimcraft:phase_transition_iron")
        .translationKey("item.rimcraft.phase_transition_iron")
    // 人造钻石
    e.create("rimcraft:mmd_diamond")
        .translationKey("item.rimcraft.mmd_diamond")
        .tag("forge:gems/diamond")

    //未完成的纸
    e.create("rimcraft:incomplete_paper")
        .translationKey("item.rimcraft.incomplete_paper")
    //废纸
    e.create("rimcraft:waste_paper")
        .translationKey("item.rimcraft.waste_paper")

    //未完成的皮革
    e.create("rimcraft:unfinished_leather")
        .translationKey("item.rimcraft.unfinished_leather")

    //干酵母
    e.create("rimcraft:dry_yeast")
        .translationKey("item.rimcraft.dry_yeast")

    // DEBUG工具
    e.create("rimcraft:debug_reload_tool")
        .rarity("epic")
        .texture("minecraft:item/stick")
        .translationKey("item.rimcraft.debug_reload_tool")
    e.create("rimcraft:debug_info_tool")
        .rarity("epic")
        .texture("minecraft:item/stick")
        .translationKey("item.rimcraft.debug_info_tool")

    /**
     * @type {Internal.ItemStack_[]}
     */
    let incomplete_item = [
        "ae2:cell_component_1k",
        "ae2:cell_component_4k",
        "ae2:cell_component_16k",
        "ae2:cell_component_64k",
        "ae2:cell_component_256k",
        "ae2:basic_card",
        "ae2:advanced_card",
        "ae2:formation_core",
        "ae2:annihilation_core",
        "ae2:me_p2p_tunnel",
        "ae2:charged_staff",
        "ae2:entropy_manipulator",
        "ae2:blank_pattern",
        "ae2:wireless_terminal",
        "ae2:wireless_crafting_terminal",
        "ae2wtlib:quantum_bridge_card",
        "ae2wtlib:wireless_pattern_access_terminal",
        "ae2wtlib:wireless_pattern_encoding_terminal",
        "megacells:cell_component_1m",
        "megacells:cell_component_4m",
        "megacells:cell_component_16m",
        "megacells:cell_component_64m",
        "megacells:cell_component_256m",
        "expatternprovider:wireless_ex_pat",
        "expatternprovider:pattern_modifier",
        "expatternprovider:infinity_cell",
        "megacells:mega_energy_cell",
        "megacells:mega_crafting_unit",
        "megacells:decompression_module",
        "ae2:drive",
        "ae2:interface",
        "ae2:energy_cell",
        "ae2:dense_energy_cell",
        "ae2:crafting_unit",
        "ae2:pattern_provider",
        "ae2:molecular_assembler",
        "ae2:controller",
        "expatternprovider:crystal_fixer",
        "rimcraft:fire_dragonsteel_armorplate",
        "rimcraft:ice_dragonsteel_armorplate",
        "rimcraft:lightning_dragonsteel_armorplate"
    ]
    incomplete_item.forEach(item => {
        e.create(`rimcraft:incomplete_${item.split(":")[1]}`, "create:sequenced_assembly")
            .translationKey(`item.rimcraft.incomplete_${item}`)
    })
    let incomplete_burger = [
        "alexsdelight:bison_burger",
        "culturaldelights:eggplant_burger",
        "farmersdelight:hamburger",
        "silentsdelight:heartburger",
        "vintagedelight:cheese_burger",
        "vintagedelight:deluxe_burger",
        "collectorsreap:portobello_burger",
        "collectorsreap:land_and_sea_burger"
    ].forEach(item => {
        e.create(`rimcraft:incomplete_${item.split(":")[1]}`, "create:sequenced_assembly")
            .texture("create_central_kitchen:item/incomplete_hamburger")
            .translationKey(`item.rimcraft.incomplete_${item}`)
    })
    let incomplete_sandwich = [
        "alexsmobs:kangaroo_burger",
        "alexsdelight:bunfungus_sandwich",
        "culturaldelights:mutton_sandwich",
        "farmersdelight:egg_sandwich",
        "farmersdelight:chicken_sandwich",
        "farmersdelight:bacon_sandwich",
        "collectorsreap:prawn_po_boy",
        "cavedelight:lux_and_ham_sandwich",
        "cavedelight:pine_and_sap_sandwich",
        "miners_delight:vegan_hamburger",
        "miners_delight:squid_sandwich",
        "miners_delight:insect_sandwich"
    ].forEach(item => {
        e.create(`rimcraft:incomplete_${item.split(":")[1]}`, "create:sequenced_assembly")
            .texture("create_central_kitchen:incomplete_bacon_sandwich")
            .translationKey(`item.rimcraft.incomplete_${item}`)
    })
    // // AE: 未完成的 熵变机械臂 充能手杖 样板
    // ["charged_staff", "entropy_manipulator", "blank_pattern"]
    // e.create("rimcraft:incomplete_", "create:sequenced_assembly").translationKey("item.rimcraft.incomplete_").texture("ae2:item/")
    // 
    //龙炎钢插板
    e.create("rimcraft:fire_dragonsteel_armorplate")
        .maxDamage(3000)
        .rarity("uncommon")
        .tag("protection_pixel:plates")
        .translationKey("item.rimcraft.fire_dragonsteel_armorplate")
    //龙霜钢插板
    e.create("rimcraft:ice_dragonsteel_armorplate")
        .maxDamage(3000)
        .rarity("uncommon")
        .tag("protection_pixel:plates")
        .translationKey("item.rimcraft.ice_dragonsteel_armorplate")
    //龙霆钢插板
    e.create("rimcraft:lightning_dragonsteel_armorplate")
        .maxDamage(3000)
        .rarity("uncommon")
        .tag("protection_pixel:plates")
        .translationKey("item.rimcraft.lightning_dragonsteel_armorplate")

    //采血器
    e.create("rimcraft:blood_collection_device")
        .translationKey("item.rimcraft.blood_collection_device")
    //针
    e.create("rimcraft:needle")
        .translationKey("item.rimcraft.needle")
    e.create("rimcraft:quality_absorber")
        .useDuration(item => 20)
        .translationKey("item.rimcraft.quality_absorber")

    //基因种子
    let seed_quality = ["inferior", "normal", "refined", "pure", "flawless"]
    seed_quality.forEach(q => {
        e.create(`rimcraft:${q}_genetic_seed`)
            .translationKey(`item.rimcraft.${q}_genetic_seed`)
    })

    e.create("rimcraft:unactivated_crystalline_flower")
        .parentModel("the_bumblezone:item/crystalline_flower")
        .color((item, num) => Color.GRAY)
        .translationKey("item.rimcraft.unactivated_crystalline_flower")


    e.create("rimcraft:order")
            .translationKey("item.rimcraft.order")
    e.create("rimcraft:unopened_order")
            .translationKey("item.rimcraft.unopened_order")
    //悚怖之心
    e.create("rimcraft:dread_heart")
        .rarity("epic")
        .translationKey("item.rimcraft.dread_heart")
    //恶魔之眼
    e.create("rimcraft:devil_eye")
        .rarity("epic")
        .translationKey("item.rimcraft.devil_eye")
    //锻造钢板
    e.create("rimcraft:forged_steel_sheet")
        .translationKey("item.rimcraft.forged_steel_sheet")
    //恶魔典籍
    e.create("rimcraft:demonic_codex")
        .rarity("epic")
        .translationKey("item.rimcraft.demonic_codex")
    //悚怖锻造模板
    let dread_upgrade = e.create("rimcraft:dread_upgrade_smithing_template", "smithing_template")
        .armorIcons()
        .ingotIcon()
    dread_upgrade.appliesToText = Text.translate("item.rimcraft.smithing_template.dread_upgrade.applies_to").blue()
    dread_upgrade.ingredientsText = Text.translate("item.rimcraft.smithing_template.dread_upgrade.ingredients").blue()
    dread_upgrade.appliesToSlotDescriptionText = Text.translate("item.rimcraft.smithing_template.dread_upgrade.base_slot_description").blue()
    dread_upgrade.ingredientSlotDescriptionText = Text.translate("item.rimcraft.smithing_template.dread_upgrade.additions_slot_description").blue()
    dread_upgrade.displayName(Component.translate("item.rimcraft.dread_upgrade_smithing_template").blue())

})

