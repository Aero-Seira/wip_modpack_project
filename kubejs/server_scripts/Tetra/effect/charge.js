/**
 * 
 * @param {Internal.LivingHurtEvent} e 
 */
global.TetraChargeAttackEffect = function(e) {
    const {entity, source} = e
    const {player} = source
    if (player == null || !player.player)
        return
    let item = player.mainHandItem
    if (item == null || item.empty)
        return
    if (!(item.item instanceof $ModularItem) || !TetraUtil.itemHasEffect(item, "rimcraft:charge"))
        return
    let level = TetraUtil.getEffectLevel(item, "rimcraft:charge")
    let efficiency = TetraUtil.getEffectEfficiency(item, "rimcraft:charge")
    let energy = item.nbt.getInt("energy")
    if (efficiency > energy)
        return
    item.nbt.putInt("energy", energy - efficiency)
    e.setAmount(e.amount + level)
}