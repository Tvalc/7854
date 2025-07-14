// ui.js - User Interface components
// Handles dialogue, clues, and other UI elements with animations
// Implements Dialogue System from GDD

export function showDialogue(scene, suspect) {
    const dialogueBox = scene.add.text(scene.scale.width / 2, scene.scale.height / 2, `${suspect.name}: ${suspect.dialogue || suspectsData.find(s => s.name === suspect.name)?.dialogue}`, {
        fontSize: '18px',
        fill: '#000',
        backgroundColor: '#fff',
        padding: { x: 10, y: 5 }
    }).setOrigin(0.5).setDepth(10);
    // Animate fade in/out
    scene.tweens.add({
        targets: dialogueBox,
        alpha: { from: 0, to: 1 },
        duration: 500,
        onComplete: () => {
            scene.time.delayedCall(2000, () => {
                scene.tweens.add({
                    targets: dialogueBox,
                    alpha: 0,
                    duration: 500,
                    onComplete: () => dialogueBox.destroy()
                });
            });
        }
    });
}

export function showClueUI(scene, clueText) {
    const clueBox = scene.add.text(scene.scale.width / 2, 200, clueText, {
        fontSize: '16px',
        fill: '#00f',
        backgroundColor: '#fff',
        padding: { x: 10, y: 5 }
    }).setOrigin(0.5).setDepth(10);
    // Simple animation: scale up and fade
    scene.tweens.add({
        targets: clueBox,
        scale: { from: 0.5, to: 1 },
        alpha: { from: 0, to: 1 },
        duration: 300,
        onComplete: () => {
            scene.time.delayedCall(3000, () => clueBox.destroy());
        }
    });
}