StartupEvents.registry("block", (e) => {
  // 富集陨石
  e.create("rimcraft:enriched_sky_stone_block")
    .translationKey("block.rimcraft.enriched_sky_stone_block")
    .soundType("stone")
    .hardness(10)
    .resistance(10)
    .tagBlock(`minecraft:mineable/pickaxe`)
    .tagBlock(`minecraft:needs_iron_tool`)
    .requiresTool(true);

  // 铁外壳
  e.create("rimcraft:iron_casing")
    .translationKey("block.rimcraft.iron_casing")
    .soundType("metal")
    .hardness(10)
    .resistance(10)
    .tagBlock(`minecraft:mineable/pickaxe`)
    .tagBlock(`minecraft:needs_iron_tool`)
    .requiresTool(true);

  // 空间外壳
  e.create("rimcraft:space_casing")
    .translationKey("block.rimcraft.space_casing")
    .soundType("metal")
    .hardness(100)
    .resistance(100)
    .tagBlock(`minecraft:mineable/pickaxe`)
    .tagBlock(`minecraft:needs_iron_tool`)
    .tagBlock("minecraft:wither_immune")
    .tagBlock("minecraft:dragon_immune")
    .requiresTool(true);

  // 陨铁外壳
  e.create("rimcraft:sky_steel_casing")
    .translationKey("block.rimcraft.sky_steel_casing")
    .soundType("metal")
    .hardness(30)
    .resistance(10)
    .tagBlock(`minecraft:mineable/pickaxe`)
    .tagBlock(`minecraft:needs_iron_tool`)
    .tagBlock("minecraft:wither_immune")
    .tagBlock("minecraft:dragon_immune")
    .requiresTool(true);
  // 动物.zip
  let zip = [
    "cow",
    "sheep",
    "pig",
    "chicken",
    "goat",
    "black_rabbit",
    "brown_rabbit",
    "splotched_rabbit",
    "gold_rabbit",
    "white_rabbit",
  ];
  zip.forEach((n) => {
    e.create(`rimcraft:${n}_zip`)
      .model("rimcraft:block/zip")
      .translationKey(`block.rimcraft.${n}_zip`)
      .soundType("powder_snow")
      .hardness(10)
      .resistance(10)
      .tagBlock(`minecraft:mineable/pickaxe`)
      .tagBlock(`minecraft:needs_iron_tool`)
      .requiresTool(false);
  });
});
