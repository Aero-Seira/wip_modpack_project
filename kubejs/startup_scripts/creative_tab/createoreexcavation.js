StartupEvents.modifyCreativeTab("createoreexcavation:create_ore_excavation", e => {
  e.add([
    'rimcraft:prospector',
    'rimcraft:prospector_core',
    'rimcraft:overworld_metal_ore_cluster',
    'rimcraft:overworld_noble_metal_ore_cluster',
    'rimcraft:nether_ore_cluster',
    'rimcraft:moon_ore_cluster',
    'rimcraft:mars_ore_cluster',
    'rimcraft:mars_gemstone_cluster',
    'rimcraft:mercury_ore_cluster',
    'rimcraft:venus_ore_cluster',
    'rimcraft:glacio_ore_cluster',
  ])
  e.remove([
    'createoreexcavation:vein_finder',
  ])
})
