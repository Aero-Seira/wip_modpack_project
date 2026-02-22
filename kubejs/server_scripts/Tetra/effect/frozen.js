const $EntityDataProvider = Java.loadClass("com.github.alexthe666.iceandfire.entity.props.EntityDataProvider")

/**
 * 
 * @param {Internal.LivingHurtEvent} e 
 */
global.TetraFrozenAttackEffect = function(e) {
    let player = e.source.player
    if (player == null || !player.isPlayer()) return
    let item = player.mainHandItem
    if (!(item.item instanceof $ModularItem) || !TetraUtil.itemHasEffect(item, "rimcraft:frozen")) return
    let level = TetraUtil.getEffectLevel(item, "rimcraft:frozen")
    $EntityDataProvider.getCapability(e.entity).ifPresent(data => data.frozenData.setFrozen(e.entity, level * 20))
}