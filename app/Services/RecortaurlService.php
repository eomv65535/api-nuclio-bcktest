<?php

namespace App\Services;

use Illuminate\Auth\AuthenticationException;
use Illuminate\Support\Facades\Http;

class RecortaurlService
{
    public function crearUrl($url, $token)
    {
        $this->validaToken($token);

        // Generar la URL acortada
        $response = Http::get(
            'https://tinyurl.com/api-create.php?url=' . urlencode($url)
        );
        $nueva_url = $response->body();
        return $nueva_url;
    }

    private function validaToken($token)
    {
        $temporal = [];
        $letra_apertura = ['{', '[', '('];
        $letra_cierre = ['}', ']', ')'];

        // Si viene vacio el token
        if (empty($token)) {
            throw new AuthenticationException('Token no valido');
        }

        for ($i = 0; $i < strlen($token); $i++) {
            $caracter = $token[$i];

            if (in_array($caracter, $letra_apertura)) {
                // se añade el caracter al temporal
                array_push($temporal, $caracter);
            } elseif (in_array($caracter, $letra_cierre)) {
                // si el temporal está vacio, no hay apertura que corresponda con este caracter de cierre
                if (empty($temporal)) {
                    throw new AuthenticationException(
                        'Token no valido. Cierre sin apertura'
                    );
                }
                // extrae el último caracter del temporal para comparar
                $ultima_de_entrada = array_pop($temporal);
                // buscamos el indice del array de apertura para indexar el cierre adecuado
                $indice = array_search($ultima_de_entrada, $letra_apertura);
                $letra_cierre_esperada = $letra_cierre[$indice];

                if ($caracter !== $letra_cierre_esperada) {
                    throw new AuthenticationException(
                        'Token no valido. La posicion del cierre no corresponde'
                    );
                }
            }
        }
        // Si el array temporal tiene alguna letra de apertura o cierre
        if (!empty($temporal)) {
            throw new AuthenticationException('Token no valido');
        }
    }
}
