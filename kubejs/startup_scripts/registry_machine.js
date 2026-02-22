StartupEvents.registry("block", (event) => {
    const MODID = "rimcraft:"

    let machinery = [
        // "electrolyzer",
    ]
    machinery.forEach((name) => {
        event.create(MODID + name, "custommachinery")
            .machine(MODID + name)
    })
})
