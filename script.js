//your JS code here. If required.
document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('text');
    const delayInput = document.getElementById('delay');
    const submitButton = document.getElementById('btn');
    const outputDiv = document.getElementById('output');

    submitButton.addEventListener('click', async () => {
        const text = textInput.value;
        const delay = parseInt(delayInput.value);

        await displayMessageAfterDelay(text, delay);
    });

    async function displayMessageAfterDelay(text, delay) {
        outputDiv.textContent = 'Loading...';  // Display loading text
        await new Promise(resolve => setTimeout(resolve, delay));
        outputDiv.textContent = text;
    }
});
