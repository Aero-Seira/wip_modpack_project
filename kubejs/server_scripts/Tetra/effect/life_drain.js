/**
 * 
 * @param {Internal.LivingHurtEvent} e 
 */
global.TetraLifeDrainEffect = function (e) {
    let player = e.getSource().getPlayer()
    if (player == null || !player.isPlayer())
        return
    let item = player.mainHandItem

    if (item.item instanceof $ModularItem) {
        if (TetraUtil.itemHasEffect(item, "rimcraft:life_drain")) {
            let level = TetraUtil.getEffectLevel(item, "rimcraft:life_drain")
                player.heal(level / 100 * e.amount)
        }
    }
}