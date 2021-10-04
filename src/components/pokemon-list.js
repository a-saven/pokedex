
import React, { useEffect } from 'react'
import {
    useQuery,
    gql
} from "@apollo/client";

const POKEMONS = gql`
query pokemons($first: Int!){
  pokemons(first: $first){
    id
    number
    name
    weight{
      minimum
      maximum
    }
    height{
      minimum
      maximum
    }
    classification
    types
    resistant
    weaknesses
    fleeRate
    maxCP
    maxHP
    image
  }
}
`;

export default function PokemonList({ updatePokemons }) {
    const { loading, error, data } = useQuery(POKEMONS, { variables: { first: 1000 } });

    useEffect(() => {
        if (data?.pokemons) {
            updatePokemons(data.pokemons)
        }
    }, [data])

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return data.pokemons.map(({ name, number }) => (
        <div key={number}>
            <p>
                {name}: {number}
            </p>
        </div>
    ));
}