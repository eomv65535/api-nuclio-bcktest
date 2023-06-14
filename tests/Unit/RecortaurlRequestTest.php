<?php

namespace Tests\Unit;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Http\Requests\RecortaurlRequest;
use Illuminate\Support\Facades\Validator;

class RecortaurlRequestTest extends TestCase
{
    public function testValidaUrl()
    {
        $data = [
            'url' => 'https://www.linkedin.com/in/ingeomv',
        ];

        $validator = Validator::make($data, (new RecortaurlRequest())->rules());

        $this->assertFalse($validator->fails());
    }

    public function testUrlincorrecta()
    {
        $data = [
            'url' => 'asdfdfgasd',
        ];

        $validator = Validator::make($data, (new RecortaurlRequest())->rules());

        $this->assertTrue($validator->fails());
        $this->assertArrayHasKey('url', $validator->errors()->messages());
    }
}
