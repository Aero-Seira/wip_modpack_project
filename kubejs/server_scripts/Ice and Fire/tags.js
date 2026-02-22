ServerEvents.tags("item", e => {
    e.add("curios:head", [
        'iceandfire:earplugs',
        'iceandfire:blindfold'
    ])
    e.add("rimcraft:dragon_flesh", [
        'iceandfire:fire_dragon_flesh', 
        'iceandfire:ice_dragon_flesh', 
        'iceandfire:lightning_dragon_flesh'])
})

ServerEvents.tags("block", e => {
    e.add("minecraft:logs", "iceandfire:dreadwood_log")
})

ServerEvents.tags("fluid", e => {
    e.add("rimcraft:molten_dragon_steel", [
        "rimcraftcore:molten_fire_steel",
        "rimcraftcore:molten_ice_steel",
        "rimcraftcore:molten_lightning_steel"
    ])
})