MoreJSEvents.villagerTrades(e => {
  TradeUtil.replaceVillageTradeIndex(e, "vinery:winemaker", [
    [["rimcraftcore:gold_coin"], "vinery:straw_hat"],
    [["rimcraftcore:gold_coin"], "vinery:winemaker_apron"],
    [["rimcraftcore:gold_coin"], "vinery:winemaker_leggings"],
    [["rimcraftcore:gold_coin"], "vinery:winemaker_boots"],
  ], 4)
  TradeUtil.replaceVillageTradeIndex(e, "vinery:winemaker", [
    [["rimcraftcore:gold_coin"], "vinery:clark_wine"],
    [["rimcraftcore:gold_coin"], "vinery:lilitu_wine"],
    [["rimcraftcore:gold_coin"], "vinery:jellie_wine"],
    [["rimcraftcore:netherite_coin"], "vinery:vinery_standard"],
  ], 5)
})