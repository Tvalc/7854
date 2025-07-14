// procedural.js - Procedural generation for mysteries
// Implements sophisticated algorithms for generating balanced, replayable mysteries
// Based on Game Design Document specifications for procedural narrative

export function generateMystery() {
    // Define possible suspects from Character Design (aligns with GDD)
    const suspects = [
        { name: 'Wizard Wizzle', trait: 'magical', motive: 'stole potion recipe', alibi: 'in the tower' },
        { name: 'Elf Elara', trait: 'sneaky', motive: 'wanted shiny gems', alibi: 'in the forest' },
        { name: 'Dragon Drax', trait: 'fiery', motive: 'hoarded treasure', alibi: 'in the cave' },
        { name: 'Fairy Faye', trait: 'playful', motive: 'prank gone wrong', alibi: 'at the party' }
    ];

    // Procedural algorithm: Randomly select culprit and generate clues/red herrings
    // Ensures no duplicates and logical consistency
    const culpritIndex = Phaser.Math.Between(0, suspects.length - 1);
    const culprit = suspects[culpritIndex];
    const clues = [];
    const redHerrings = [];

    // Generate 3 unique clues pointing to culprit
    for (let i = 0; i < 3; i++) {
        clues.push(`Clue ${i + 1}: Evidence of ${culprit.trait} activity.`);
    }

    // Generate red herrings for other suspects
    suspects.forEach((sus, idx) => {
        if (idx !== culpritIndex) {
            redHerrings.push(`Red Herring: Suspicious ${sus.trait} mark near ${sus.alibi}.`);
        }
    });

    // Shuffle for randomness
    Phaser.Utils.Array.Shuffle(clues);
    Phaser.Utils.Array.Shuffle(redHerrings);

    return {
        culprit: culprit.name,
        suspects,
        clues,
        redHerrings: redHerrings.slice(0, 3) // Limit to 3 for balance
    };
}