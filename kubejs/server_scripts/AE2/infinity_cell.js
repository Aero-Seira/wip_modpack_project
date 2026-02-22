/** @format */

// 无限盘
const transitionalItem = "rimcraft:incomplete_infinity_cell";
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
  "netherexp:ectoplasm",
  "the_bumblezone:sugar_water_still"
];
ServerEvents.recipes((event) => {
  const { create } = event.recipes;
  Inf_Fluid.forEach((f) => {
    create
      .sequenced_assembly(
        Item.of("expatternprovider:infinity_cell", `{record:{"#c":"ae2:f",id:"${f}"}}`),
        "ae2:cell_component_256k",
        create.filling(transitionalItem, [transitionalItem, Fluid.of(f, 1000)])
      )
      .loops(4096)
      .transitionalItem(transitionalItem)
      .id(`rimcraft:infinity_cell_${f.replace(/[^a-zA-Z0-9_]/g, "_")}`);
  });
});
