function renderDownloads(songs) {
    const downloads = document.getElementById('downloads');
    console.log(songs);
    
    songs.forEach((song) => {
        const songElement = document.createElement('div');
        songElement.innerHTML = `
        <div class="song">
            <div class="song-title downloaded-song" >${song}</div>
        </div>
        `;
        downloads.appendChild(songElement);
    });
}

export default renderDownloads;