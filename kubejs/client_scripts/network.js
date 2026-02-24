
const $FluidFX = Java.loadClass("com.simibubi.create.content.fluids.FluidFX")


NetworkEvents.dataReceived("kubejs_player_playsound", e => {
    e.player.playSound(e.data.get("soundEvent").getAsString())
})

NetworkEvents.dataReceived("spawn_create_particle", e => {
    const {fluid, x, y, z, vx, vy, vz, count, speed} = e.data
    let particle = $FluidFX.getFluidParticle(Fluid.of(fluid).fluidStack)
    e.player.level.spawnParticles(particle, true, x, y, z, vx, vy, vz, count, speed)
})


// 发送玩家是否按下了Alt键，用于 批量套壳 server_scripts/Custom/encase.js
let playerAltDown = false
let playerAltDown1 = false
PlayerEvents.tick(event => {
    playerAltDown = Client.isAltDown()
    if (playerAltDown1 != playerAltDown) {
        event.player.sendData("isPlayerAltDown", { "Alt": playerAltDown })
        playerAltDown1 = playerAltDown
    }
})