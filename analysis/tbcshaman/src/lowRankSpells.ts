import * as SPELLS from './SPELLS';

export default {
  [SPELLS.ANCESTRAL_SPIRIT]: [20776, 20610, 20609, 2008],
  [SPELLS.CHAIN_HEAL]: [25422, 10623, 10622, 1064],
  [SPELLS.CHAIN_LIGHTNING]: [25439, 10605, 2860, 930, 421],
  [SPELLS.EARTH_SHOCK]: [10414, 10413, 10412, 8046, 8045, 8044, 8042],
  [SPELLS.FIRE_NOVA_TOTEM]: [25546, 11315, 11314, 8499, 8498, 1535],
  [SPELLS.FIRE_RESISTANCE_TOTEM]: [10538, 10537, 8184],
  [SPELLS.FLAME_SHOCK]: [29228, 10448, 10447, 8053, 8052, 8050],
  [SPELLS.FLAMETONGUE_TOTEM]: [16387, 10526, 8249, 8227],
  [SPELLS.FLAMETONGUE_WEAPON]: [16342, 16341, 16339, 8030, 8027, 8024],
  [SPELLS.FROST_RESISTANCE_TOTEM]: [10479, 10478, 8181],
  [SPELLS.FROST_SHOCK]: [10473, 10472, 8058, 8056],
  [SPELLS.FROSTBRAND_WEAPON]: [16356, 16355, 10456, 8038, 8033],
  [SPELLS.GRACE_OF_AIR_TOTEM]: [10627, 8835],
  [SPELLS.HEALING_STREAM_TOTEM]: [10463, 10462, 6377, 6375, 5394],
  [SPELLS.HEALING_WAVE]: [25391, 25357, 10396, 10395, 8005, 959, 939, 913, 547, 332, 331],
  [SPELLS.LESSER_HEALING_WAVE]: [10468, 10467, 10466, 8010, 8008, 8004],
  [SPELLS.LIGHTNING_BOLT]: [25448, 15208, 15207, 10392, 10391, 6041, 943, 915, 548, 529, 403],
  [SPELLS.LIGHTNING_SHIELD]: [25469, 10432, 10431, 8134, 945, 905, 325, 324],
  [SPELLS.MAGMA_TOTEM]: [10587, 10586, 10585, 8190],
  [SPELLS.MANA_SPRING_TOTEM]: [10497, 10496, 10495, 5675],
  [SPELLS.NATURE_RESISTANCE_TOTEM]: [10601, 10600, 10595],
  [SPELLS.PURGE]: [370],
  [SPELLS.ROCKBITER_WEAPON]: [25479, 16316, 16315, 16314, 10399, 8019, 8018, 8017],
  [SPELLS.SEARING_TOTEM]: [10438, 10437, 6365, 6364, 6363, 3599],
  [SPELLS.STONECLAW_TOTEM]: [10428, 10427, 6392, 6391, 6390, 5730],
  [SPELLS.STONESKIN_TOTEM]: [25508, 10408, 10407, 10406, 8155, 8154, 8071],
  [SPELLS.STRENGTH_OF_EARTH_TOTEM]: [25361, 10442, 8161, 8160, 8075],
  [SPELLS.WATER_SHIELD]: [24398],
  [SPELLS.WINDFURY_TOTEM]: [25585, 10614, 10613, 8512],
  [SPELLS.WINDFURY_WEAPON]: [16362, 10486, 8235, 8232],
  [SPELLS.WINDWALL_TOTEM]: [15112, 15111, 15107],
};

export const whitelist = {};

export interface LowRankSpells {
  [primarySpellId: number]: number[];
}
