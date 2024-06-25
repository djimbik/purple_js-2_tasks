function reqPokemonEffect(pokemonName) {
    const request = new XMLHttpRequest();
    request.open('GET', `https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    request.send();

    request.addEventListener('load', function () {
        const pokemonData = JSON.parse(this.responseText);

        const request = new XMLHttpRequest();
        request.open('GET', pokemonData.abilities[0].ability.url);
        request.send();

        request.addEventListener('load', function () {
            const abilityData = JSON.parse(this.responseText);
            const effect_entrie = abilityData.effect_entries.find(item => item.language.name === 'en');

            if (effect_entrie) {
                console.log(effect_entrie.effect);
            } else {
                console.log('No effect entry found');
            }
        });
    });
}

reqPokemonEffect('ditto');
/*
This Pokémon cannot be paralyzed.

If a Pokémon is paralyzed and acquires this ability,
its paralysis is healed; this includes when regaining a lost ability upon leaving battle.
 */