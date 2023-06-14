<?php

use Tests\TestCase;
use App\Http\Controllers\Api\RecortaurlController;
use App\Services\RecortaurlService;
use Illuminate\Auth\AuthenticationException;
use App\Http\Requests\RecortaurlRequest;
use Illuminate\Http\Request;

class RecortaurlControllerTest extends TestCase
{
    public function testCrearurl()
    {
        // Mock del servicio RecortaurlService
        $recortaServiceMock = Mockery::mock(RecortaurlService::class);
        $recortaServiceMock
            ->shouldReceive('crearUrl')
            ->andReturn('https://tinyurl.com/23zelf3x');

        // Crear una instancia del controlador y establecer el mock del servicio
        $controller = new RecortaurlController($recortaServiceMock);

        // Crear una instancia de RecortaurlRequest con los datos de prueba
        $request = RecortaurlRequest::create('/api/v1/short-urls', 'POST', [
            'url' => 'https://www.linkedin.com/in/ingeomv',
        ]);
        $request->headers->set('Authorization', 'Bearer ((token))');

        // Ejecutar el método crearurl del controlador
        $response = $controller->crearUrl($request);

        // Verificar la respuesta
        $this->assertEquals(200, $response->getStatusCode());
        $this->assertEquals(
            ['url' => 'https://tinyurl.com/23zelf3x'],
            $response->getData(true)
        );
    }

    public function testCrearurlAuthenticationException()
    {
        // Mock del servicio RecortaurlService que arroja una excepción de autenticación
        $recortaServiceMock = Mockery::mock(RecortaurlService::class);
        $recortaServiceMock
            ->shouldReceive('crearUrl')
            ->andThrow(new AuthenticationException('Token no valido'));

        // Crear una instancia del controlador y establecer el mock del servicio
        $controller = new RecortaurlController($recortaServiceMock);

        // Crear una instancia de RecortaurlRequest con los datos de prueba
        $request = RecortaurlRequest::create('/api/v1/short-urls', 'POST', [
            'url' => 'https://www.linkedin.com/in/ingeomv',
        ]);

        // Ejecutar el método crearurl del controlador
        $response = $controller->crearUrl($request);

        // Verificar la respuesta
        $this->assertEquals(401, $response->getStatusCode());
        $this->assertEquals(
            ['error' => 'Token no valido'],
            $response->getData(true)
        );
    }

    // ... otros métodos de prueba para el controlador RecortaurlController

    protected function tearDown(): void
    {
        parent::tearDown();
        Mockery::close();
    }
}
