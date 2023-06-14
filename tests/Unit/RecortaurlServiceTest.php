<?php

use App\Services\RecortaurlService;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Support\Facades\Http;
use Tests\TestCase;

class RecortaurlServiceTest extends TestCase
{
    public function testCrearUrl()
    {
        // Configuración de prueba
        $url = 'https://www.linkedin.com/in/ingeomv';
        $token = '{asdadsaASD}';

        // Mock de la respuesta de la API externa
        $mockedResponse = 'https://tinyurl.com/23zelf3x';
        Http::fake(['*' => Http::response($mockedResponse)]);

        // Instancia de la clase RecortaurlService
        $recortaService = new RecortaurlService();

        // Ejecución del método crearUrl
        $nuevaUrl = $recortaService->crearUrl($url, $token);

        // Verificación de la URL generada
        $this->assertEquals($mockedResponse, $nuevaUrl);
    }

    public function testCrearUrlTokenVacio()
    {
        // Configuración de prueba
        $url = 'https://www.linkedin.com/in/ingeomv';
        $token = '';

        // Instancia de la clase RecortaurlService
        $recortaService = new RecortaurlService();

        // Verificación de la excepción esperada
        $this->expectException(AuthenticationException::class);

        // Ejecución del método crearUrl
        $recortaService->crearUrl($url, $token);
    }

    public function testCrearUrlCierreSinApertura()
    {
        // Configuración de prueba
        $url = 'https://www.linkedin.com/in/ingeomv';
        $token = '({ABC})}';

        // Instancia de la clase RecortaurlService
        $recortaService = new RecortaurlService();

        // Verificación de la excepción esperada
        $this->expectException(AuthenticationException::class);

        // Ejecución del método crearUrl
        $recortaService->crearUrl($url, $token);
    }

    public function testCrearUrlPosicionIncorrectaDeCierre()
    {
        // Configuración de prueba
        $url = 'https://www.linkedin.com/in/ingeomv';
        $token = '({ABC])';

        // Instancia de la clase RecortaurlService
        $recortaService = new RecortaurlService();

        // Verificación de la excepción esperada
        $this->expectException(AuthenticationException::class);

        // Ejecución del método crearUrl
        $recortaService->crearUrl($url, $token);
    }
}
