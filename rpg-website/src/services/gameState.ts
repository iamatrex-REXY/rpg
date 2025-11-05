class GameState {
    constructor() {
        this.playerProgress = {};
        this.activeQuests = [];
    }

    setPlayerProgress(progress) {
        this.playerProgress = progress;
    }

    getPlayerProgress() {
        return this.playerProgress;
    }

    addQuest(quest) {
        this.activeQuests.push(quest);
    }

    completeQuest(questId) {
        const questIndex = this.activeQuests.findIndex(quest => quest.id === questId);
        if (questIndex !== -1) {
            this.activeQuests[questIndex].isCompleted = true;
        }
    }

    getActiveQuests() {
        return this.activeQuests;
    }
}

export default GameState;