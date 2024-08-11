document.addEventListener('DOMContentLoaded', function() {
    const map = document.getElementById('election-map');
    const infoBox = document.getElementById('info-box');

    const electionResults = {
        "İstanbul": {
            "winner": "CHP",
            "percentage": "48.80%",
            "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/CHP_logo.svg/1200px-CHP_logo.svg.png"
        },
        "Ankara": {
            "winner": "CHP",
            "percentage": "50.93%",
            "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/CHP_logo.svg/1200px-CHP_logo.svg.png"
        },
        "İzmir": {
            "winner": "CHP",
            "percentage": "58.10%",
            "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/CHP_logo.svg/1200px-CHP_logo.svg.png"
        },
        "Bursa": {
            "winner": "AKP",
            "percentage": "49.62%",
            "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Akparti_logo.png/1200px-Akparti_logo.png"
        },
        // Diğer şehirler ve sonuçları
    };

    map.addEventListener('mousemove', function(event) {
        const x = event.clientX;
        const y = event.clientY;

        const city = getCityFromCoordinates(x, y);
        if (city && electionResults[city]) {
            const result = electionResults[city];
            infoBox.style.display = 'block';
            infoBox.style.left = x + 'px';
            infoBox.style.top = y + 'px';
            infoBox.innerHTML = `
                <strong>${city}</strong><br>
                Kazanan: ${result.winner}<br>
                Oy Oranı: ${result.percentage}<br>
                <img src="${result.logo}" alt="${result.winner} logosu" width="50">
            `;
        } else {
            infoBox.style.display = 'none';
        }
    });

    function getCityFromCoordinates(x, y) {
        // Haritadaki koordinatlara göre şehir belirleme
        // Burada basit bir fonksiyon örneği var. Harita üzerinde her şehir için
        // belirli bir koordinat aralığı atanmalıdır. 

        // Örnek:
        if(x > 100 && x < 200 && y > 50 && y < 150) return "İstanbul";
        if(x > 200 && x < 300 && y > 150 && y < 250) return "Ankara";
        return null;
    }
});
