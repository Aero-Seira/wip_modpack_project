ServerEvents.recipes((event) => {
  const { kubejs, vintageimprovements, create, minecraft, createmetallurgy } = event.recipes;




  // 聚能石英玻璃
  create
    .mixing(Item.of("ae2:quartz_vibrant_glass", 4), [
      "4x ae2:quartz_glass",
      "#forge:dusts/glowstone",
    ])
    .id("rimcraft:quartz_vibrant_glass");

  // 石英玻璃
  create
    .mixing("4x ae2:quartz_glass", ["4x #forge:glass", "#forge:dusts/certus_quartz"])
    .id("rimcraft:quartz_glass");

  // 熵变机械臂
  create
    .sequenced_assembly("ae2:entropy_manipulator", "#forge:rods/iron", [
      create.deploying("rimcraft:incomplete_entropy_manipulator", ["rimcraft:incomplete_entropy_manipulator", "ae2:energy_cell"]),
      create.deploying("rimcraft:incomplete_entropy_manipulator", ["rimcraft:incomplete_entropy_manipulator", "ae2:engineering_processor"]),
      create.deploying("rimcraft:incomplete_entropy_manipulator", ["rimcraft:incomplete_entropy_manipulator", "ae2:fluix_crystal"]),
      // vintageimprovements.polishing("rimcraft:incomplete_entropy_manipulator", "rimcraft:incomplete_entropy_manipulator"),
      createmetallurgy.grinding("rimcraft:incomplete_entropy_manipulator", "rimcraft:incomplete_entropy_manipulator"),
    ])
    .transitionalItem("rimcraft:incomplete_entropy_manipulator")
    .loops(1)
    .id("rimcraft:entropy_manipulator");
  event.remove({ id: "ae2:tools/misctools_entropy_manipulator" });

  // 充能手杖
  create
    .sequenced_assembly("ae2:charged_staff", "#forge:rods/iron", [
      create.deploying("rimcraft:incomplete_charged_staff", [
        "rimcraft:incomplete_charged_staff",
        "ae2:charged_certus_quartz_crystal",
      ]),
      // vintageimprovements.polishing("rimcraft:incomplete_charged_staff", "rimcraft:incomplete_charged_staff"),
      createmetallurgy.grinding("rimcraft:incomplete_charged_staff", "rimcraft:incomplete_charged_staff"),
    ])
    .transitionalItem("rimcraft:incomplete_charged_staff")
    .loops(1)
    .id("rimcraft:charged_staff");
  event.remove({ id: "ae2:tools/misctools_charged_staff" });

  // 陨石罗盘
  kubejs
    .shapeless("ae2:meteorite_compass", [
      "#forge:plates/copper",
      "minecraft:baked_potato",
      "#forge:plates/zinc",
      "#minecraft:compasses",
    ])
    .keepIngredient("#forge:plates/copper")
    .keepIngredient("#forge:plates/zinc")
    .keepIngredient("minecraft:baked_potato");

  // AE指南
  kubejs
    .shapeless("ae2:guide", [
      "#forge:plates/copper",
      "minecraft:baked_potato",
      "#forge:plates/zinc",
      "#forge:books",
    ])
    .keepIngredient("#forge:plates/copper")
    .keepIngredient("#forge:plates/zinc")
    .keepIngredient("minecraft:baked_potato");

  // 充能石英火把
  kubejs.shaped("4x ae2:quartz_fixture", ["A", "B"], {
    A: "ae2:charged_certus_quartz_crystal",
    B: "ae2:cable_anchor",
  });
  event.remove({ id: "ae2:decorative/quartz_fixture_from_anchors" });

  // 杀mega部分
  event.remove({ output: "megacells:mega_interface" });
  event.remove({ output: "megacells:mega_pattern_provider" });

  // 鱼大嘿嘿
centrifugation(event, "expatternprovider:fishbig", "minecraft:pufferfish")
    .id("rimcraft:fishbig");

  // 无限圆石配方
  create.mechanical_crafting(
    Item.of("expatternprovider:infinity_cell", '{record:{"#c":"ae2:i",id:"minecraft:cobblestone"}}'),
    [
      "AAAAA",
      "BCDCB",
      "BEFGB",
      "BHIHB",
      "AAAAA"
    ], {
    A: "rimcraft:space_casing",
    B: "cobblefordays:tier_5",
    C: "ae2:singularity",
    D: "ae2:interface",
    E: Item.of("expatternprovider:infinity_cell", '{record:{"#c":"ae2:f",id:"minecraft:water"}}').weakNBT(),
    F: "ae2:annihilation_plane",
    G: Item.of('expatternprovider:infinity_cell', '{record:{"#c":"ae2:f",id:"minecraft:lava"}}').weakNBT(),
    H: "ae2:spatial_cell_component_128",
    I: "megacells:bulk_cell_component",
  }).id("rimcraft:inf_cobblestone");

  // 大宗存储组件
  event.replaceInput(
    { id: "megacells:crafting/bulk_cell_component" },
    "megacells:cell_component_1m",
    "functionalstorage:copper_upgrade"
  );
  event.replaceInput(
    { id: "megacells:crafting/bulk_cell_component" },
    "ae2:spatial_cell_component_2",
    "functionalstorage:copper_upgrade"
  );

  // 大宗元件
  kubejs.shapeless("megacells:bulk_item_cell", [
    "megacells:bulk_cell_component",
    "megacells:mega_item_cell_housing",
  ]);

  // 基础卡
  kubejs.shaped("ae2:basic_card", ["ABB", "CDB", "ABB"], {
    A: "#forge:ingots/gold",
    B: "#forge:plates/iron",
    C: "#forge:dusts/redstone",
    D: "ae2:calculation_processor",
  });
  create
    .sequenced_assembly(Item.of("ae2:basic_card", 8), "ae2:calculation_processor", [
      create.deploying("rimcraft:incomplete_basic_card", [
        "rimcraft:incomplete_basic_card",
        "#forge:ingots/gold",
      ]),
      create.deploying("rimcraft:incomplete_basic_card", [
        "rimcraft:incomplete_basic_card",
        "#forge:ingots/steel",
      ]),
      create.deploying("rimcraft:incomplete_basic_card", [
        "rimcraft:incomplete_basic_card",
        "#forge:dusts/redstone",
      ]),
      vintageimprovements.laser_cutting(
        "rimcraft:incomplete_basic_card",
        "rimcraft:incomplete_basic_card",
        100
      ),
    ])
    .transitionalItem("rimcraft:incomplete_basic_card")
    .loops(1)
    .id("rimcraft:basic_card_1");
  event.remove({ id: "ae2:materials/basiccard" });

  // 高级卡
  kubejs.shaped("ae2:advanced_card", ["ABB", "CDB", "ABB"], {
    A: "#forge:gems/diamond",
    B: "#forge:plates/iron",
    C: "#forge:dusts/redstone",
    D: "ae2:calculation_processor",
  });
  create
    .sequenced_assembly(Item.of("ae2:advanced_card", 8), "ae2:calculation_processor", [
      create.deploying("rimcraft:incomplete_basic_card", [
        "rimcraft:incomplete_basic_card",
        "#forge:gems/diamond",
      ]),
      create.deploying("rimcraft:incomplete_advanced_card", [
        "rimcraft:incomplete_advanced_card",
        "#forge:ingots/steel",
      ]),
      create.deploying("rimcraft:incomplete_advanced_card", [
        "rimcraft:incomplete_advanced_card",
        "#forge:dusts/redstone",
      ]),
      vintageimprovements.laser_cutting(
        "rimcraft:incomplete_advanced_card",
        "rimcraft:incomplete_advanced_card",
        100
      ),
    ])
    .transitionalItem("rimcraft:incomplete_advanced_card")
    .loops(1)
    .id("rimcraft:advanced_card_1");
  event.remove({ id: "ae2:materials/advancedcard" });




  // 样板
  event.remove({ id: "ae2:network/crafting/patterns_blank" });
  create
    .sequenced_assembly("4x ae2:blank_pattern", "#forge:plates/iron", [
      create.deploying("rimcraft:incomplete_blank_pattern", [
        "rimcraft:incomplete_blank_pattern",
        "#rimcraft:quartz_vibrant_glass",
      ]),
      create.deploying("rimcraft:incomplete_blank_pattern", ["rimcraft:incomplete_blank_pattern", "ae2:certus_quartz_crystal"]),
      vintageimprovements
        .curving("rimcraft:incomplete_blank_pattern", "rimcraft:incomplete_blank_pattern")
        .head("rimcraft:cell_housing_curving_head"),
    ])
    .transitionalItem("rimcraft:incomplete_blank_pattern")
    .loops(1)
    .id("rimcraft:blank_pattern_1");
  create
    .sequenced_assembly("4x ae2:blank_pattern", "#forge:plates/iron", [
      create.deploying("rimcraft:incomplete_blank_pattern", ["rimcraft:incomplete_blank_pattern", "#forge:dusts/glowstone"]),
      create.deploying("rimcraft:incomplete_blank_pattern", ["rimcraft:incomplete_blank_pattern", "#rimcraft:quartz_glass"]),
      create.deploying("rimcraft:incomplete_blank_pattern", ["rimcraft:incomplete_blank_pattern", "ae2:certus_quartz_crystal"]),
      vintageimprovements
        .curving("rimcraft:incomplete_blank_pattern", "rimcraft:incomplete_blank_pattern")
        .head("rimcraft:cell_housing_curving_head"),
    ])
    .transitionalItem("rimcraft:incomplete_blank_pattern")
    .loops(1)
    .id("rimcraft:blank_pattern_2");

  // 样板修改器
  create
    .sequenced_assembly("expatternprovider:pattern_modifier", "ae2:blank_pattern", [
      create.deploying("rimcraft:incomplete_pattern_modifier", ["rimcraft:incomplete_pattern_modifier", "ae2:logic_processor"]),
      create.deploying("rimcraft:incomplete_pattern_modifier", ["rimcraft:incomplete_pattern_modifier", "#forge:dyes/green"]),
      vintageimprovements
        .curving("rimcraft:incomplete_pattern_modifier", "rimcraft:incomplete_pattern_modifier")
        .head("rimcraft:cell_housing_curving_head"),
    ])
    .transitionalItem("rimcraft:incomplete_pattern_modifier")
    .loops(1)
    .id("rimcraft:pattern_modifier_1");
  event.remove({ id: "expatternprovider:pattern_modifier" });

  // 无线终端
  create
    .sequenced_assembly("ae2:wireless_terminal", "ae2:terminal", [
      create.deploying("rimcraft:incomplete_wireless_terminal", ["rimcraft:incomplete_wireless_terminal", "ae2:dense_energy_cell"]),
      create.deploying("rimcraft:incomplete_wireless_terminal", ["rimcraft:incomplete_wireless_terminal", "ae2:wireless_receiver"]),
      create.deploying("rimcraft:incomplete_wireless_terminal", ["rimcraft:incomplete_wireless_terminal", "#ae2:quartz_wrench"]).keepHeldItem(),
    ])
    .loops(1)
    .transitionalItem("rimcraft:incomplete_wireless_terminal")
    .id("rimcraft:wireless_terminal");
  event.remove({ id: "ae2:network/wireless_terminal" });

  create
    .sequenced_assembly("ae2:wireless_crafting_terminal", "ae2:crafting_terminal", [
      create.deploying("rimcraft:incomplete_wireless_crafting_terminal", ["rimcraft:incomplete_wireless_crafting_terminal", "ae2:dense_energy_cell"]),
      create.deploying("rimcraft:incomplete_wireless_crafting_terminal", ["rimcraft:incomplete_wireless_crafting_terminal", "ae2:wireless_receiver"]),
      create
        .deploying("rimcraft:incomplete_wireless_crafting_terminal", ["rimcraft:incomplete_wireless_crafting_terminal", "#ae2:quartz_wrench"])
        .keepHeldItem(),
    ])
    .loops(1)
    .transitionalItem("rimcraft:incomplete_wireless_crafting_terminal")
    .id("rimcraft:wireless_crafting_terminal_1");
  event.remove({ id: "ae2:network/wireless_crafting_terminal" });

  create
    .sequenced_assembly(
      "ae2wtlib:wireless_pattern_access_terminal",
      "ae2:pattern_access_terminal",
      [
        create.deploying("rimcraft:incomplete_wireless_pattern_access_terminal", [
          "rimcraft:incomplete_wireless_pattern_access_terminal",
          "ae2:dense_energy_cell",
        ]),
        create.deploying("rimcraft:incomplete_wireless_pattern_access_terminal", [
          "rimcraft:incomplete_wireless_pattern_access_terminal",
          "ae2:wireless_receiver",
        ]),
        create
          .deploying("rimcraft:incomplete_wireless_pattern_access_terminal", [
            "rimcraft:incomplete_wireless_pattern_access_terminal",
            "#ae2:quartz_wrench",
          ])
          .keepHeldItem(),
      ]
    )
    .loops(1)
    .transitionalItem("rimcraft:incomplete_wireless_pattern_access_terminal")
    .id("rimcraft:wireless_pattern_access_terminal");
  event.remove({ id: "ae2wtlib:pattern_access/wireless_pattern_access_terminal" });

  create
    .sequenced_assembly(
      "ae2wtlib:wireless_pattern_encoding_terminal",
      "ae2:pattern_encoding_terminal",
      [
        create.deploying("rimcraft:incomplete_wireless_pattern_encoding_terminal", [
          "rimcraft:incomplete_wireless_pattern_encoding_terminal",
          "ae2:dense_energy_cell",
        ]),
        create.deploying("rimcraft:incomplete_wireless_pattern_encoding_terminal", [
          "rimcraft:incomplete_wireless_pattern_encoding_terminal",
          "ae2:wireless_receiver",
        ]),
        create
          .deploying("rimcraft:incomplete_wireless_pattern_encoding_terminal", [
            "rimcraft:incomplete_wireless_pattern_encoding_terminal",
            "#ae2:quartz_wrench",
          ])
          .keepHeldItem(),
      ]
    )
    .loops(1)
    .transitionalItem("rimcraft:incomplete_wireless_pattern_encoding_terminal")
    .id("rimcraft:wireless_pattern_encoding_terminal");
  event.remove({ id: "ae2wtlib:pattern_encoding/wireless_pattern_encoding_terminal" });

  create
    .sequenced_assembly(
      "expatternprovider:wireless_ex_pat",
      "expatternprovider:ex_pattern_access_part",
      [
        create.deploying("rimcraft:incomplete_wireless_ex_pat", [
          "rimcraft:incomplete_wireless_ex_pat",
          "ae2:dense_energy_cell",
        ]),
        create.deploying("rimcraft:incomplete_wireless_ex_pat", [
          "rimcraft:incomplete_wireless_ex_pat",
          "ae2:wireless_receiver",
        ]),
        create
          .deploying("rimcraft:incomplete_wireless_ex_pat", [
            "rimcraft:incomplete_wireless_ex_pat",
            "#ae2:quartz_wrench",
          ])
          .keepHeldItem(),
      ]
    )
    .loops(1)
    .transitionalItem("rimcraft:incomplete_wireless_ex_pat")
    .id("rimcraft:wireless_ex_pat");
  event.remove({ id: "expatternprovider:wireless_ex_pat" });

  create
    .sequenced_assembly("ae2:wireless_crafting_terminal", "ae2:wireless_terminal", [
      create.deploying("rimcraft:incomplete_wireless_crafting_terminal", ["rimcraft:incomplete_wireless_crafting_terminal", "minecraft:crafting_table"]),
      create.deploying("rimcraft:incomplete_wireless_crafting_terminal", [
        "rimcraft:incomplete_wireless_crafting_terminal",
        "ae2:calculation_processor",
      ]),
    ])
    .transitionalItem("rimcraft:incomplete_wireless_crafting_terminal")
    .loops(1)
    .id("rimcraft:wireless_crafting_terminal_2");
  event.remove({ id: "ae2:network/upgrade_wireless_crafting_terminal" });
});
