document.getElementById('randomEpisodeBtn').addEventListener('click', function() {
    fetch('episodes.json')
        .then(response => response.json())
        .then(data => {
            const episodes = data.flatMap(season => season.episodes);
            const randomIndex = Math.floor(Math.random() * episodes.length);
            const randomEpisode = episodes[randomIndex];
            const netflixBaseUrl = 'https://www.netflix.com';

            window.location.href = netflixBaseUrl + randomEpisode.urls.netflix;
        })
        .catch(error => console.error('Error fetching episodes:', error));
});
