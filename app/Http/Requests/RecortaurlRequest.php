<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;

class RecortaurlRequest extends FormRequest
{
    public function rules()
    {
        return [
            'url' => 'required|url',
        ];
    }

    public function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json($validator->errors()));
    }

    public function messages()
    {
        return [
            'url.required' => 'Url es requerido',
            'url.url' => 'El formato de la URL no es válido.',
        ];
    }
}
