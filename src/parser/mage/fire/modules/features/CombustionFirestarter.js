import React from 'react';

import SPELLS from 'common/SPELLS';
import SpellLink from 'common/SpellLink';
import Analyzer, { SELECTED_PLAYER } from 'parser/core/Analyzer';
import Events from 'parser/core/Events';
import SUGGESTION_IMPORTANCE from 'parser/core/ISSUE_IMPORTANCE';

const DAMAGE_SPELLS = [
  SPELLS.FIREBALL,
  SPELLS.PYROBLAST,
  SPELLS.SCORCH,
  SPELLS.FIRE_BLAST,
  SPELLS.PHOENIX_FLAMES_TALENT,
];

const FIRESTARTER_HEALTH_THRESHOLD = .90;

const debug = false;

class CombustionFirestarter extends Analyzer {
  combustionCast = false;
  combustionCastEvent = null;
  combustionDuringFirestarter = false;

  constructor(...args) {
    super(...args);
    this.active = this.selectedCombatant.hasTalent(SPELLS.FIRESTARTER_TALENT.id);
    this.addEventListener(Events.applybuff.by(SELECTED_PLAYER).spell(SPELLS.COMBUSTION), this.onCombustion);
    this.addEventListener(Events.damage.by(SELECTED_PLAYER).spell(DAMAGE_SPELLS), this.onDamage);
  }

  //Checks to see if a new Combustion was cast. This variable is marked false once a damage event is triggered since we only want the first damage event in the Combustion (to get the health percentage)
  onCombustion(event) {
    this.combustionCast = true;
    this.combustionCastEvent = event;
  }

  //The Combustion Cast/Apply Buff event uses the Players Health/Max Health instead of the target, so we need to check the first direct damage event during combustion to get the target's health. If above 90% then Combustion was cast during Firestarter, which is a waste.
  onDamage(event) {
    const hasCombustion = this.selectedCombatant.hasBuff(SPELLS.COMBUSTION.id);
    if (!hasCombustion || !this.combustionCast) {
      return;
    }

    const healthPercent = event.hitPoints / event.maxHitPoints;
    if (healthPercent > FIRESTARTER_HEALTH_THRESHOLD) {
      this.combustionDuringFirestarter = true;
      this.combustionCastEvent.meta = this.combustionCastEvent.meta || {};
      this.combustionCastEvent.meta.isInefficientCast = true;
      this.combustionCastEvent.meta.inefficientCastReason = `This Combustion was cast while Firestarter was active. Firestarter makes all your spells guaranteed to crit while the target is above 90% health, so stacking Combustion on top of that is a waste. Instead, you should wait until the target is at 89% before you cast Combustion. `;
      debug && this.log("Combustion Used During Firestarter");
    }
  }

  get SuggestionThresholds() {
    return {
      actual: this.combustionDuringFirestarter,
      isEqual: true,
      style: 'boolean',
    };
  }

  suggestions(when) {
    when(this.SuggestionThresholds)
      .addSuggestion((suggest) => {
        return suggest(<>You used <SpellLink id={SPELLS.COMBUSTION.id} /> while <SpellLink id={SPELLS.FIRESTARTER_TALENT.id} /> was active (While the boss was at 90% health or higher). Since Firestarter makes your spells a guaranteed crit anyway, you should wait until the boss is at 89% to use your Combustion.</>)
          .icon(SPELLS.COMBUSTION.icon)
          .staticImportance(SUGGESTION_IMPORTANCE.MAJOR);
      });
  }
}
export default CombustionFirestarter;
