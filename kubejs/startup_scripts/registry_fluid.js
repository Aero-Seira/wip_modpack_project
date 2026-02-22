StartupEvents.registry("fluid", e => {
    /**
     * 
     * @param {string} id 
     * @param {dev.latvian.mods.rhino.mod.util.color.Color_} color 
     * @param {boolean} [isThin] 默认为true
     * @param {boolean} [hasBlock] 默认为true
     * @param {boolean} [hasBucket] 默认为true
     * @returns 
     */
    let simpleFluid = function (id, color, isThin, hasBlock, hasBucket) {
        let ret = e.create(id)
        isThin = isThin == null ? true : isThin
        hasBlock = hasBlock == null ? true : hasBlock
        hasBucket = hasBucket == null ? true : hasBucket

        if (isThin)
            ret.thinTexture(color)
        else
            ret.thickTexture(color)
        if (!hasBlock)
            ret.noBlock()
        else
            ret.translationKey("block.rimcraft." + id.split(":")[1])
        if (!hasBucket)
            ret.noBucket()
        else {
            ret.bucketColor(color)
            ret.translationKey("item.rimcraft." + id.split(":")[1] + "_bucket")
        }
        ret.translationKey("fluid.rimcraft." + id.split(":")[1])
        return ret
    }
        /**
     * 
     * @param {string} id 
     * @param {boolean} [hasBlock] 默认为true
     * @param {boolean} [hasBucket] 默认为true
     * @param {ResourceLocation_} resourcelocation 默认存放在rimcraft/asset/fluid/id下,且必须为still及flowing两个
     * @returns 
     */
    let textureFluid = function (id, hasBlock, hasBucket, resourcelocation) {
        let ret = e.create(id)
        hasBlock = hasBlock == null ? true : hasBlock
        hasBucket = hasBucket == null ? true : hasBucket
        resourcelocation = resourcelocation == null? `rimcraft:fluid/${id.split(":")[1]}` : resourcelocation


        if (!hasBlock)
            ret.noBlock()
        else
            ret.translationKey("block.rimcraft." + id.split(":")[1])
            ret.flowingTexture(resourcelocation + "/flowing")
        if (!hasBucket)
            ret.noBucket()
        else {
            ret.translationKey("item.rimcraft." + id.split(":")[1] + "_bucket")
        }
        ret.translationKey("fluid.rimcraft." + id.split(":")[1])
        ret.stillTexture(resourcelocation + "/still")
        return ret
    }

    simpleFluid("rimcraft:fuel_mixtures", 0X8470FF)
    simpleFluid("rimcraft:light_crude_oil", 0X8B7E66)
    simpleFluid("rimcraft:ethylene_fluid", 0XE6E6FA)
    simpleFluid("rimcraft:malice_solution", 0X33E6EF, false)
    simpleFluid("rimcraft:sky_solution", 0X494949, false)
    simpleFluid("rimcraft:spent_liquor", 0X99ffcd)
    simpleFluid("rimcraft:paper_pulp", 0xF0FFFF)
    simpleFluid("rimcraft:unfermented_paper_pulp", 0xF0FFFF, false)
    simpleFluid("rimcraft:nut_milk", 0xf5e7c2, true, false)
        .tag("forge:milk")
    simpleFluid("rimcraft:dragon_breath_soda", 0xdb9bc3, true, false, false)
    simpleFluid("rimcraft:vinegar", 0x570000, true, false)
    simpleFluid("rimcraft:radon", 0XA0FFDA, true, false)
    simpleFluid("rimcraft:unrefined_sugar", 0XBCB998)
    simpleFluid("rimcraft:yeast", 0x9B897E, false)
    simpleFluid("rimcraft:ancient_coffee", 0X58321E, true, false, false)
    simpleFluid("rimcraft:torchflower_tea", 0XF3B727, true, false, false)
    simpleFluid("rimcraft:cherry_petal_tea", 0XF28bC8, true, false, false)
    simpleFluid("rimcraft:pitcher_plant_tea", 0X8Af2C9, true, false, false)
    simpleFluid("rimcraft:fiddlehead_tea", 0x44451B, true, false, false)
    simpleFluid("rimcraft:scarlet_tea", 0x82332a, true, false, false)
    simpleFluid("rimcraft:lemon_black_tea", 0x64352a, true, false, false)
    simpleFluid("rimcraft:tea_mocha", 0x815026, true, false, false)
    simpleFluid("rimcraft:saidi_tea", 0xb02f2f, true, false, false)
    simpleFluid("rimcraft:cornflower_tea", 0xa97549, true, false, false)
    simpleFluid("rimcraft:sakura_honey_tea", 0xe497a8, true, false, false)
    simpleFluid("rimcraft:genmai_tea", 0xb8a32f, true, false, false)
    simpleFluid("rimcraft:green_water", 0x79ad5c, true, false, false)
    simpleFluid("rimcraft:white_tea", 0xdbcfaa, true, false, false)
    simpleFluid("rimcraft:soya_milk", 0xfef9c1, true, true, true)
        .tag("forge:milk")
    simpleFluid("rimcraft:spring_soda", 0x7fe3b3, true, false, false)
    simpleFluid("rimcraft:summer_cordial", 0xf4b12e, true, false, false)
    simpleFluid("rimcraft:autumn_tea", 0xf46d44, true, false, false)
    simpleFluid("rimcraft:winter_glogg", 0xa9275e, true, false, false)
    textureFluid("rimcraft:lubricating_oil")
    textureFluid("rimcraft:ice_lubricating_oil")
    textureFluid("rimcraft:cake_batter")
    textureFluid("rimcraft:egg_yolk")
    textureFluid("rimcraft:artificial_egg_yolk")
    textureFluid("rimcraft:lush_confiture_jelly", false, false)
    textureFluid("rimcraft:lush_confiture_jello", false, false)
    textureFluid("rimcraft:base_syrup", false, false)
    textureFluid("rimcraft:strawberry_syrup", false, false)
    textureFluid("rimcraft:vanilla_syrup", false, false)
    textureFluid("rimcraft:mint_syrup", false, false)
    textureFluid("rimcraft:banana_syrup", false, false)
    textureFluid("rimcraft:filling", false, false)

    let bloods = [
        "fire_dragon",
        "ice_dragon",
        "lightning_dragon"
    ]
    bloods.forEach(blood => {
        textureFluid(`rimcraft:${blood}_blood`)
            .tag("forge:bloods")
            .createAttributes()
            .tickDelay(10)
    })


    let vinery_fluid_list = [
        ["apple_juice", 0xeed4a7],
        ["mead", 0xeac88a],
        ["apple_cider", 0x9c6140],
        ["apple_wine", 0xd6d375],
        ["mellohi_wine", 0xc3e1b7],
        ["glowing_wine", 0xfcd263],
        ["solaris_wine", 0xb68346],
        ["noir_wine", 0x443672],
        ["red_wine", 0xdf7f8b],
        ["strad_wine", 0x173443],
        ["cherry_wine", 0x7d100f],
        ["cristel_wine", 0xeb7c7c],
        ["creepers_crush", 0xc5e755, false],
        ["kelp_cider", 0x4af6a8],
        ["lilitu_wine", 0x5c151a],
        ["jo_special_mixture", 0xbe0e22],
        ["eiswein", 0x82d7fc],
        ["aegis_wine", 0xb96f47],
        ["bolvar_wine", 0xe35e5e],
        ["chorus_wine", 0xaf1fbf],
        ["villagers_fright", 0x8f96ae],
        ["clark_wine", 0x696969],
        ["magnetic_wine", 0xfc8f72],
        ["stal_wine", 0xb71818],
        ["chenet_wine", 0x551625],
        ["bottle_mojang_noir", 0x7d6d7d],
        ["jellie_wine", 0xb24571],
        ["blazewine_pinot", 0xe5272c],
        ["netherite_nectar", 0x650627],
        ["ghastly_grenache", 0x16605a],
        ["lava_fizz", 0xc42200],
        ["nether_fizz", 0x915a8f]
    ].forEach(list => {
        simpleFluid(`rimcraft:${list[0]}`, list[1], list[2], false, false)
    })
    //咖啡流体
    let coffee_fluid = [
        ['espresso', 0x8D5528],
        ['americano', 0x53443d],
        ['ristretto', 0x572E18],
        ['latte', 0xE2AD78],
        ['affogato', 0xF2D2BA],
        ['con_panna', 0x864F26],
        ['cappuccino', 0xBA894B],
        ['macchiato', 0x9B5F32],
        ['mocha', 0x975b21]]
    coffee_fluid.forEach(fluid => {
        e.create(`rimcraft:${fluid[0]}_fluid`)
            .noBlock()
            .noBucket()
            .thinTexture(fluid[1])
            .translationKey(`fluid.rimcraft.${fluid[0]}_fluid`)
    })
    
})
