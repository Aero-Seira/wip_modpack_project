MoreJSEvents.villagerTrades(e => {
  TradeUtil.replaceVillageTradeIndex(e, "minecraft:farmer", [
    [['32x minecraft:wheat'], "rimcraftcore:copper_coin"],
    [['32x vintagedelight:oat'], "rimcraftcore:copper_coin"],
    [['32x farmersdelight:rice_panicle'], "rimcraftcore:copper_coin"],
    [['32x culturaldelights:corn_cob'], "rimcraftcore:copper_coin"],
    [['32x minecraft:potato'], "rimcraftcore:copper_coin"],
    [['32x minecraft:carrot'], "rimcraftcore:copper_coin"],
    [['32x minecraft:beetroot'], "rimcraftcore:copper_coin"],
    [['32x frycooks_delight:canola'], "rimcraftcore:copper_coin"],
    [['32x vintagedelight:peanut'], "rimcraftcore:copper_coin"],
    [['16x vintagedelight:cucumber'], "rimcraftcore:copper_coin"],
    [['16x culturaldelights:eggplant'], "rimcraftcore:copper_coin"],
    [['16x festival_delicacies:eggplant'], "rimcraftcore:copper_coin"],
    [['16x farmersdelight:tomato'], "rimcraftcore:copper_coin"],
    [['16x farmersdelight:onion'], "rimcraftcore:copper_coin"],
    [['16x festival_delicacies:greenonion'], "rimcraftcore:copper_coin"],
    [['16x vintagedelight:ghost_pepper'], "rimcraftcore:copper_coin"],
    [["rimcraftcore:copper_coin"], '8x minecraft:bread'],
  ], 1)
  TradeUtil.addVillageTradeIndex(e, "minecraft:farmer", [
    [['16x festival_delicacies:chinese_cabbage'], "rimcraftcore:copper_coin"],
  ], 2)
  TradeUtil.replaceVillageTradeIndex(e, "minecraft:farmer", [
    [['4x minecraft:melon'], "2x rimcraftcore:copper_coin"],
    [['8x neapolitan:banana'], "2x rimcraftcore:copper_coin"],
    [['22x supplementaries:flax_seeds'], "rimcraftcore:copper_coin"],
    [["3x rimcraftcore:copper_coin"], '18x minecraft:cookie'],
    [["3x rimcraftcore:copper_coin"], '12x neapolitan:strawberry_scones'],
  ], 3)
})