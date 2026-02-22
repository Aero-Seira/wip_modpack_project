MoreJSEvents.villagerTrades(e => {
    e.removeModdedTrades("iceandfire:scribe", 2)
    TradeUtil.replaceVillageTradeIndex(e, "iceandfire:scribe", [
        [["8x iceandfire:fire_lily"], "rimcraftcore:copper_coin"],
        [["7x iceandfire:frost_lily"], "rimcraftcore:copper_coin"],
        [["8x iceandfire:lightning_lily"], "rimcraftcore:copper_coin"],
        [["tetra:pristine_amethyst"], "2x rimcraftcore:gold_coin"],
    ], 2)
})