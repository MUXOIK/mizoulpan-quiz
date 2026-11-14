// MIZOULPAN – lecture des données (vocabulaire, leçons, phrases)
// Sur le site : on lit les fichiers du site.
// Dans l'appli installée (Android / iPhone) : on lit d'abord la version en ligne,
// pour avoir les derniers cours sans réinstaller ; sans internet, on prend la copie de l'appli.
(function () {
    var EN_LIGNE = 'https://muxoik.github.io/mizoulpan-quiz/';
    var dansAppli = location.protocol === 'capacitor:' ||
        (location.hostname === 'localhost' && !location.port && location.protocol === 'https:');

    window.mizData = function (fichier, options) {
        if (!dansAppli) return fetch(fichier, options);
        return fetch(EN_LIGNE + encodeURI(fichier), Object.assign({ cache: 'no-store' }, options || {}))
            .then(function (r) { if (!r.ok) throw new Error('hors ligne'); return r; })
            .catch(function () { return fetch(fichier.split('?')[0], options); });
    };
})();
