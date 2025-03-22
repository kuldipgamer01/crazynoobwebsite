// Fetch latest videos from Crazy Boy's YouTube channel
document.addEventListener("DOMContentLoaded", function() {
    let channelId = "UCPcEArJHJ6AvFOQFgbWmZCA"; // Replace with actual channel ID
    let apiKey = "YOUR_YOUTUBE_API_KEY"; // You need to get a YouTube API key
    let videoContainer = document.getElementById("video-list");

    fetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=5`)
    .then(response => response.json())
    .then(data => {
        data.items.forEach(item => {
            let videoId = item.id.videoId;
            let videoTitle = item.snippet.title;
            let thumbnail = item.snippet.thumbnails.medium.url;
            
            let videoElement = `
                <div>
                    <img src="${thumbnail}" alt="${videoTitle}">
                    <p>${videoTitle}</p>
                    <a href="https://www.youtube.com/watch?v=${videoId}" target="_blank">Watch Now</a>
                </div>
            `;
            videoContainer.innerHTML += videoElement;
        });
    })
    .catch(error => console.log("Error fetching videos:", error));
});

// Show total views (Placeholder, requires API)
document.getElementById("total-views").innerText = "1,000,000+";
