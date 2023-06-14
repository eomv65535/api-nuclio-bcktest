<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Http;
use Illuminate\Auth\AuthenticationException;
use App\Services\RecortaurlService;
use App\Http\Requests\RecortaurlRequest;

class RecortaurlController extends Controller
{
    private $recortaService;

    public function __construct(RecortaurlService $recortaService)
    {
        $this->recortaService = $recortaService;
    }

    public function crearurl(RecortaurlRequest $request)
    {
        try {
            $nueva_url = $this->recortaService->crearurl(
                $request->url,
                $request->header('Authorization')
            );
            return response()->json(['url' => $nueva_url]);
        } catch (AuthenticationException $e) {
            return response()->json(['error' => $e->getMessage()], 401);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Error al crear la URL'], 500);
        }
    }

    public function gestionget()
    {
        return response()->json(['error' => 'Token no valido'], 401);
    }
}
