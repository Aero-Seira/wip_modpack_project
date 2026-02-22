PlayerEvents.tick(e => {
    const { player } = e
    let item = player.mainHandItem
    if (!(item.item instanceof $ModularItem))
        return
    if (!TetraUtil.itemHasEffect(item, "rimcraft:forstall"))
        return
    let efficiency = TetraUtil.getEffectEfficiency(item, "rimcraft:forstall")
    let name = "tetra_effect_forstall_countdown"
    let count = player.persistentData.getInt(name)
    if (count == null)
        player.persistentData.putInt(name, efficiency * 20)
    else if (count > 0) {
        if (count == 1) {
            player.sendData("kubejs_player_playsound", {soundEvent: "minecraft:block.chain.place"})
        }
        player.persistentData.putInt(name, --count)
    }
})
/**
 * 
 * @param {Internal.LivingHurtEvent} e 
 */
global.TetraForstallAttackEffect = function (e) {
    let player = e.getSource().getPlayer()
    if (player == null || !player.isPlayer())
        return
    let item = player.mainHandItem

    if (item.item instanceof $ModularItem) {
        if (TetraUtil.itemHasEffect(item, "rimcraft:forstall")) {
            let efficiency = TetraUtil.getEffectEfficiency(item, "rimcraft:forstall")
            let level = TetraUtil.getEffectLevel(item, "rimcraft:forstall")
            let count = player.persistentData.get("tetra_effect_forstall_countdown")
            if (count == 0) {
                e.setAmount(e.amount * level)
            }
            player.persistentData.putInt("tetra_effect_forstall_countdown", efficiency * 20)
        }
    }
}