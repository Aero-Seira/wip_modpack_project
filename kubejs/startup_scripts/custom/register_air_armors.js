/** @format */

// 无任何加成的空气套装 唯一的亮点就是无法破坏（在配方里加无法破坏tag）
ItemEvents.armorTierRegistry((event) => {
  event.add("rimcraft:air", (tier) => {
    tier.slotProtections = [0, 0, 0, 0];
    tier.enchantmentValue = 9;
    tier.equipSound = "minecraft:block.moss.step";
    tier.toughness = 0;
    tier.knockbackResistance = 0;
    tier.repairIngredient = "minecraft:glass_bottle";
  });
});

StartupEvents.registry("item", (event) => {
  ["helmet", "chestplate", "leggings", "boots"].forEach((a) => {
    event
      .create(`rimcraft:air_${a}`, a)
      .rarity("uncommon")
      .maxDamage(1)
      .tier("rimcraft:air")
      .translationKey(`item.rimcraft.air_${a}`);
  });
});
