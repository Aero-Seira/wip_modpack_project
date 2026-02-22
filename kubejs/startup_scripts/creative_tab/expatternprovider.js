StartupEvents.modifyCreativeTab("expatternprovider:tab_main", e => {
  const Inf_Fluid = [
    "minecraft:water",
    "minecraft:lava",
    "alexscaves:acid",
    "alexscaves:purple_soda",
    "ratatouille:cocoa_liquor",
    "rimcraft:egg_yolk",
    "create:honey",
    "rimcraft:vinegar",
    "createmetallurgy:molten_iron",
    "createmetallurgy:molten_gold",
    "createmetallurgy:molten_copper",
    "createmetallurgy:molten_zinc",
    "createmetallurgy:molten_brass",
    "createmetallurgy:molten_tungsten",
    "createmetallurgy:molten_steel",
    "createmetallurgy:molten_netherite",
    "createmetallurgy:molten_silver",
    "createmetallurgy:molten_tin",
    "createmetallurgy:molten_electrum",
    "createmetallurgy:molten_bronze",
    "createmetallurgy:molten_void_steel",
    "rimcraftcore:molten_andesite",
    "rimcraftcore:molten_desh",
    "rimcraftcore:molten_ostrum",
    "rimcraftcore:molten_calorite",
    "rimcraftcore:molten_scarlet_neodymium",
    "rimcraftcore:molten_azure_neodymium",
    "rimcraftcore:molten_fire_steel",
    "rimcraftcore:molten_ice_steel",
    "rimcraftcore:molten_lightning_steel",
    "rimcraftcore:molten_forged_steel",
  ];
  Inf_Fluid.forEach((f) => {
  e.add(Item.of("expatternprovider:infinity_cell", `{record:{"#c":"ae2:f",id:"${f}"}}`))
    });
  e.remove([
    "expatternprovider:assembler_matrix_frame",
    "expatternprovider:assembler_matrix_wall",
    "expatternprovider:assembler_matrix_pattern",
    "expatternprovider:assembler_matrix_crafter",
    "expatternprovider:assembler_matrix_speed",
    'expatternprovider:assembler_matrix_glass',
  ])
})
