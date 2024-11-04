export async function getAnsw (expression:string) {
    const response = await fetch('https://localhost:7199/api/Calculate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(expression)
    });
    return response.json();
}