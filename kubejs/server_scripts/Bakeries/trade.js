MoreJSEvents.villagerTrades(e => {
  TradeUtil.replaceVillageTradeIndex(e, "bakeries:pistrinamaster", [
    [["8x rimcraftcore:copper_coin"], "2x vintagedelight:salt_dust"],
    [["4x rimcraftcore:copper_coin"], "2x bakeries:flour"],
    [["4x rimcraftcore:copper_coin"], "2x rimcraft:corn_flour"]
  ], 1)
  TradeUtil.replaceVillageTradeIndex(e, "bakeries:pistrinamaster", [
    [["6x rimcraftcore:copper_coin"], "bakeries:bottle_yeast"],
    [["8x rimcraftcore:copper_coin"], "rimcraft:dry_yeast"],
  ], 2)
  TradeUtil.replaceVillageTradeIndex(e, "bakeries:pistrinamaster", [
    [['4x rimcraft:butter'], "2x rimcraftcore:copper_coin"],
    [['4x bakeries:brown_sugar_cube'], "rimcraftcore:copper_coin"],
    [['cosmopolitan:cream'], "rimcraftcore:copper_coin"],
    [['bakeries:foamed_cream'], "rimcraftcore:copper_coin"],
    [['bakeries:sweet_dough'], "2x rimcraftcore:copper_coin"],
    [['bakeries:round_bread_dough'], "3x rimcraftcore:copper_coin"],
    [['bakeries:baguette_dough'], "3x rimcraftcore:copper_coin"],
    [['bakeries:croissant_dough'], "3x rimcraftcore:copper_coin"],
  ], 3)
})
