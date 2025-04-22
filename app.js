mapboxgl.accessToken = 'pk.eyJ1IjoidmFhYWxhZ3VpbCIsImEiOiJjbGo2NzhpMjYwZnZmM3FreG1hOWNxMXlrIn0.P0SKixxpDVbWAa9zrCSutg';

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/vaaalaguil/cm3ajgnly01ns01pd0q0aec83',
    projection: 'globe',
    zoom: .6,
    center: [-102.552784, 23.634501] // Centrar en América del Norte
});

map.addControl(new mapboxgl.NavigationControl());
map.scrollZoom.disable();


const markers = [
    {
        coordinates: [-99.656824, 19.278533],
        title: 'Toluca, Mexico',
        videos: [
            'https://www.dropbox.com/scl/fi/5w7p0go5v9w8gfb8l7fut/20241028_155512-editado.mp4?rlkey=jpcmjn3lf2ow8aom4e6rxhu8m&st=e0axynrx&raw=1',
            'https://www.dropbox.com/scl/fi/dam00ejf78oraw236pm3ay/20241031_201120.mp4?rlkey=c509tpktrctqt20tisbu8imk9&st=sirv8sgw&raw=1',
            'https://www.dropbox.com/scl/fi/nr55l44om40mz42z33hpq/20241031_232414-2.mp4?rlkey=nz46qlr4wzh45i95332ccxmur&st=obergcas&raw=1',
            'https://www.dropbox.com/scl/fi/g6g1c6aaxchupif3701zs/20241105_141850.mp4?rlkey=wsa9azajbv2ua96yr93bpqz7q&st=c01zepby&raw=1',
            'https://www.dropbox.com/scl/fi/vsb9ce6uyfl1ak3v55s83/20241106_162115.mp4?rlkey=rcjqhhthcxhbm8s3j6vc6iczh&st=7ebhl1qg&raw=1',
            'https://www.dropbox.com/scl/fi/v6tq2c7r51p83n2cakd6z/20241106_162501.mp4?rlkey=u3u1dk31j524moa6iwx3kmy1x&st=p8kvrsku&raw=1'
        ]
    },
    {
        coordinates: [130.351745, 33.592697],
        title: 'Fukuoka, Japan',
        videos: [
            'https://www.dropbox.com/scl/fi/fyutvvb895ybrc61zhbvf/c0a983e9-b4f0-4e0d-81bc-d65cadb25e9b.mp4?rlkey=l04klg05f3a8xfej03u4a76ap&st=dxtnh0n5&raw=1',
            'https://www.dropbox.com/scl/fi/719cgdaajnzwehmnkfhj4/bb18e66d-f7c9-4373-9c11-406d9c7d4a06.mp4?rlkey=a1m30dt9nzuzbcz6d3rf0t6z0&st=gycwd0zi&raw=1',
            'https://www.dropbox.com/scl/fi/at9iper4gqbhan9obxzak/20241021_164926_1.mp4?rlkey=jzxqxunanmqisueh5e1k0auu1&st=3kq0ohev&raw=1',
            'https://www.dropbox.com/scl/fi/6sv0yeksij1ecfbxzxk0h/20241021_163009.mp4?rlkey=4e75la6fro744hf1lrd2zbyes&st=8b0rta62&raw=1',
            'https://www.dropbox.com/scl/fi/fgarsuwb45mzl206gl5eo/20241021_162324.mp4?rlkey=det7vg49qtokbloaz58u87elj&st=z9efrvzt&raw=1',
            'https://www.dropbox.com/scl/fi/1xq3okjh8h3ikn5hchvt4/20241021_161649-1.mp4?rlkey=43tcfz5tm6547jojysg0bcg1i&st=0pfuf26s&raw=1',
            'https://www.dropbox.com/scl/fi/631efnegfux4bbr96saui/42a1a26b-6ce0-4683-9ef0-043964a88436.mp4?rlkey=b3ft4p8t8j6lr2yv9ac3uq2c7&st=d7w7xpt1&raw=1',
            'https://www.dropbox.com/scl/fi/q5981qmrfatucdzi3vqxg/4fea1372-304f-43c5-829c-218bc37adb02.mp4?rlkey=8uwj53o3hn7lqh4limqqp69oq&st=yn6ezafe&raw=1',
            'https://www.dropbox.com/scl/fi/j2t2qwrwwdavn4ngcwau9/0db182e4-ac95-41bc-a6f1-b4e33832c4a6.mp4?rlkey=cgf9blzavt0ehpn0pi2mwpwpp&st=007t2p9a&raw=1'
        ]
    },
    {
        coordinates: [-79.384518, 43.649600], // Coordenadas de Toronto
        title: 'Toronto, Canada',
        videos: [
            'https://www.dropbox.com/scl/fi/a1bdd87oie6tv1ou4t2mu/sunset-stabilized.mp4?rlkey=u654km6dc8y0ckepmop8tpnhu&st=lqwjhbga&raw=1',
            'https://www.dropbox.com/scl/fi/0p2acmago6mm4dewmm1i4/stairs-stabilized.mp4?rlkey=2icgbo4llwwkq6gk4nx8k4iix&st=e0s4juw7&raw=1',
            'https://www.dropbox.com/scl/fi/zuelf4595lj3tg2oqmmgd/sheraton-stabilized.mp4?rlkey=d58n8b27ytc58wmbcpamir872&st=fkdxjqtr&raw=1',
            'https://www.dropbox.com/scl/fi/kacxsryocy5vvc3ria4j0/DSCF9968.MP4?rlkey=6j9xll797ecniueit4du1l9ax&st=9gc5udpf&raw=1',
            'https://www.dropbox.com/scl/fi/tbbh7a1mcu93nltn3y1f6/DSCF9919.MP4?rlkey=44ilbyhamnn7860as1yv2h9fe&st=j5uyn6fb&raw=1',
            'https://www.dropbox.com/scl/fi/k5e7f3d4j12m1jce2x0js/DSCF9916.MP4?rlkey=0sxrle5nwtim09qp83nnwft2f&st=1ofwy0e3&raw=1',
            'https://www.dropbox.com/scl/fi/qz2xox0esc351wq4rj5ih/DSCF9913.MP4?rlkey=s6hvn480uc4s2nl3i2l0ebzz1&st=w9w8axua&raw=1',
            'https://www.dropbox.com/scl/fi/9k37murmcxw74hcvyowc6/DSCF9907.MP4?rlkey=c90ivw8w9q0au2b8pbn9roski&st=axzykgdi&raw=1',
            'https://www.dropbox.com/scl/fi/702dvjooilyg8kl7yu8rm/DSCF9836.MP4?rlkey=re1e3xk3dvn5g5ejn1zia2n3k&st=ufr496n3&raw=1',
            'https://www.dropbox.com/scl/fi/wnx3wdhzj1ntgu04756tx/DSCF9829.MP4?rlkey=4h7dyzcf1iotvgs2tse6k441b&st=ytzc29be&raw=1',
            'https://www.dropbox.com/scl/fi/eh972nnfkpvg4yt1noxpm/DSCF9821.MP4?rlkey=l88xx2i0619ubytsp74yfg7os&st=73y27r3g&raw=1',
            'https://www.dropbox.com/scl/fi/mp3tdytseukg44ys3u0f5/DSCF9075.MP4?rlkey=gfj42ziptuj9it4kn90hscovl&st=ofaajrtr&raw=1',
            'https://www.dropbox.com/scl/fi/zi0cxx7ti5aymyh1l08tu/DSCF8745.MP4?rlkey=tfd5wv7p9ocy2vbwvc7pt0jfc&st=6pwupxed&raw=1',
            'https://www.dropbox.com/scl/fi/nl8a1ebwkerio37l74eo0/DSCF8726.MP4?rlkey=dz7ws935d0f4t15gggxtge4iw&st=ghwnol11&raw=1',
            'https://www.dropbox.com/scl/fi/g065xhge5cwljpdm7ye0s/DSCF1035.MP4?rlkey=5y2sfv8iuziwejeigc8p3ii39&st=stvvrs2b&raw=1',
            'https://www.dropbox.com/scl/fi/ug4ddp9ny02ci7lp1g0qc/DSCF1030.MP4?rlkey=iem0x6iepy7gd300prh1ijokq&st=zh5q5ywl&raw=1',
            'https://www.dropbox.com/scl/fi/zqi9pbqi8hnv3ev3z84pg/carride-stabilized.mp4?rlkey=plw9o9vbxs8twcsn8hw328889&st=e6ngajuj&raw=1'

        ]
    }


];

// Función para generar el HTML del carrusel
function createCarousel(videos) {
    let carouselHTML = `
    <div class="carousel">
        <div class="slides">
    `;
    videos.forEach((video, index) => {
        carouselHTML += `
            <div class="slide ${index === 0 ? 'active' : ''}">
                <video controls  muted loop>
                    <source src="${video}" type="video/mp4">
                    Tu navegador no soporta el video.
                </video>
            </div>
        `;
    });
    carouselHTML += `
        </div>
        <div class="carousel-controls">
            <button class="prev">←</button>
            <button class="next">→</button>
        </div>
    </div>`;
    return carouselHTML;
}

// Función para inicializar la lógica del carrusel
function initCarousel(popupElement) {
    const slides = popupElement.querySelectorAll('.slide');
    const prevButton = popupElement.querySelector('.prev');
    const nextButton = popupElement.querySelector('.next');
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    });
}

// Agregar marcadores con popups que contienen el carrusel
markers.forEach(marker => {
    const popupContent = `
        <h3>${marker.title}</h3>
        ${createCarousel(marker.videos)}
    `;
    const popup = new mapboxgl.Popup({ offset: 10 })
        .setHTML(popupContent);

    const el = document.createElement('div');
    el.className = 'marker';

    new mapboxgl.Marker(el)
        .setLngLat(marker.coordinates)
        .setPopup(popup)
        .addTo(map);

    // Iniciar carrusel cuando se abre el popup
    popup.on('open', () => {
        const popupElement = document.querySelector('.mapboxgl-popup-content');
        initCarousel(popupElement);
    });
});