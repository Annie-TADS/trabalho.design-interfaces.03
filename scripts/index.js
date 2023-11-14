async function getData() {
    try {
        const response = await import('../json/gears.json');
        return response.json();
    } catch (err) {
        setTimeout(() => {
            getData();
        }, 5000);
    }
}

getData();