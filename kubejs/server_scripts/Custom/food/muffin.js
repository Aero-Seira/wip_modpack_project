let muffin_list = [
  'seasonals:red_velvet_cupcake',
  'seasonals:mixed_berry_muffin',
  'seasonals:chocolate_pumpkin_muffin',
  'fruitsdelight:blueberry_muffin',
  'fruitsdelight:cranberry_muffin',
  'dungeonsdelight:monster_muffin'
]
muffin_list.forEach(muffin => {
  ItemEvents.foodEaten(muffin, e => {
    e.server.scheduleInTicks(1, func => {
      if(!e.player.isCreative()) {
        if(!e.player.getInventory().add("bakeries:paper_cup")) {
          e.player.drop("bakeries:paper_cup", false)
        }
      }
    })
  })
  ServerEvents.recipes(e => {
    baking(e, `rimcraft:unbaked_${muffin.split(":")[1]}`, muffin, 1, "food", 100)
  })
})
ServerEvents.tags("item", e => {
  e.add("forge:unbaked_muffin", [
    'bakeries:paper_cup_cake_paste'
  ])
  e.add("forge:muffin", [
    'seasonals:red_velvet_cupcake',
    'seasonals:mixed_berry_muffin',
    'seasonals:chocolate_pumpkin_muffin',
    'fruitsdelight:blueberry_muffin',
    'fruitsdelight:cranberry_muffin',
    'dungeonsdelight:monster_muffin',
    'bakeries:cup_cake'
  ])
})
ServerEvents.recipes(e => {
  remove_recipes_id(e, [
    "farmersdelight:cooking/blueberry_muffin",
    "farmersdelight:cooking/cranberry_muffin",
    "seasonals:crafting/red_velvet_cupcake",
    "seasonals:crafting/chocolate_pumpkin_muffin",
    "seasonals:crafting/mixed_berry_muffin",
    "dungeonsdelight:monster_cooking/misc/monster_muffin"
  ])
  e.recipes.create.deploying(
    'rimcraft:unbaked_cranberry_muffin',
    [
      'bakeries:paper_cup_cake_paste',
      'fruitsdelight:cranberry'
    ]
  ).id("rimcraft:unbaked_cranberry_muffin")
  e.recipes.create.deploying(
    'rimcraft:unbaked_blueberry_muffin',
    [
      'bakeries:paper_cup_cake_paste',
      'fruitsdelight:blueberry'
    ]
  ).id("rimcraft:unbaked_blueberry_muffin")
  e.recipes.create.deploying(
    'rimcraft:unbaked_red_velvet_cupcake',
    [
      'bakeries:paper_cup_cake_paste',
      'some_assembly_required:chopped_beetroot'
    ]
  ).id("rimcraft:unbaked_red_velvet_cupcake")
  {
    let iner = 'bakeries:paper_cup_cake_paste'
    e.recipes.create.sequenced_assembly('rimcraft:unbaked_chocolate_pumpkin_muffin', 'bakeries:paper_cup_cake_paste', [
      e.recipes.create.deploying(iner, [iner, '#seasonals:pumpkin_puree']),
      e.recipes.create.deploying(iner, [iner, '#forge:bars/chocolate'])
    ])
      .loops(1)
      .transitionalItem(iner)
      .id("rimcraft:unbaked_chocolate_pumpkin_muffin")
  }
  {
    let iner = 'bakeries:paper_cup_cake_paste'
    e.recipes.create.sequenced_assembly('rimcraft:unbaked_mixed_berry_muffin', 'bakeries:paper_cup_cake_paste', [
      e.recipes.create.deploying(iner, [iner, '#alexscaves:sweet_berries']),
      e.recipes.create.deploying(iner, [iner, 'minecraft:glow_berries'])
    ])
      .loops(1)
      .transitionalItem(iner)
      .id("rimcraft:unbaked_mixed_berry_muffin")
  }
  {
    let iner = 'bakeries:paper_cup_cake_paste'
    e.recipes.create.sequenced_assembly('rimcraft:unbaked_monster_muffin', 'bakeries:paper_cup_cake_paste', [
      e.recipes.create.deploying(iner, [iner, 'dungeonsdelight:spider_extract']),
      e.recipes.create.deploying(iner, [iner, 'dungeonsdelight:rotbulb'])
    ])
      .loops(1)
      .transitionalItem(iner)
      .id("rimcraft:unbaked_monster_muffin")
  }
})