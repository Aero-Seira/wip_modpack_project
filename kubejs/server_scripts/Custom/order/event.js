
let RimCraft = global.RimCraft

/**
 * 计算订单货物属性事件
 * @param {string} id 
 * @param {(item: Internal.ItemStack) => number} itemFunc
 */
RimCraftServerEvent.onCalculateGoodsQuality = function(id, itemFunc) {
    RimCraft.goodsMap.put(id, itemFunc)
}

RimCraftServerEvent.onCalculateGoodsQuality("western_wine", item => {
    if (item.hasNBT() && item.nbt.contains("EffectAmplifier"))
        return Math.min(item.nbt.getInt("EffectAmplifier") + 1, 3)
    return 2
})