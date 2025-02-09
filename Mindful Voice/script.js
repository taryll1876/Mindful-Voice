function selectMood(mood) {
    document.getElementById('mood-selection').style.display = 'none';
    document.getElementById('quotes').style.display = 'block';

    const quotes = {
        happy: [
            "Keep shining, your light is beautiful!",
            "Every day is a new chance to be happy.",
            "Spread your joy, it's contagious."
        ],
        okay: [
            "You're doing great, keep moving forward.",
            "Take a deep breath, everything will be fine.",
            "One step at a time is all it takes."
        ],
        sad: [
            "It's okay to feel down, just don't stay there.",
            "You are stronger than you think.",
            "It's just a bad day, not a bad life."
        ],
        angry: [
            "Take a deep breath, let go of what you can't control.",
            "Channel your anger into something productive.",
            "Peace is not the absence of conflict, but the ability to cope."
        ]
    };

    document.getElementById('quote-text').innerText = quotes[mood];
}

function backToMoodSelection() {
    document.getElementById('quotes').style.display = 'none';
    document.getElementById('mood-selection').style.display = 'block';
}

function saveEntry() {
    const entry = document.getElementById('journal-entry').value;
    if (entry.trim() === '') return;

    const entriesDiv = document.getElementById('journal-entries');
    const entryDiv = document.createElement('div');
    entryDiv.className = 'journal-entry';
    entryDiv.innerText = entry;

    entriesDiv.appendChild(entryDiv);
    document.getElementById('journal-entry').value = '';
    alert('Journal entry saved!');
}
