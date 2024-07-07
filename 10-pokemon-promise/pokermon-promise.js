function getData(url, errorText) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`${errorText} ${response.status}`);
            }
            return response.json();
        });
}

function reqPokemon(pokemonName) {
    return getData(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`, 'error in pokemons')
        .then(({abilities}) => {
            return getData(`${abilities[0].ability.url}`, 'error in ability')
        })
        .then(abilityData => {
            const effect_entrie = abilityData.effect_entries.find(item => item.language.name === 'en');
            if (effect_entrie) {
                console.log(effect_entrie.effect);
            } else {
                throw new Error('No effect entry found');
            }
        })
        .catch(error => console.log(error));
}

reqPokemon('ditto');

/*
This Pokémon cannot be paralyzed.

If a Pokémon is paralyzed and acquires this ability,
its paralysis is healed; this includes when regaining a lost ability upon leaving battle.
 */