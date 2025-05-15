function scrollPosters(direction) {
    const container = document.getElementById('posterContainer')
    const scrollAmount = 500;
    container.scrollLeft += direction * scrollAmount;
}