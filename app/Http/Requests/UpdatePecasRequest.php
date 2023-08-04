<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdatePecasRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'sku' => ['nullable', 'string', 'max:255', 'min:3'],
            'nome' => ['required', 'string', 'max:255', 'min:3'],
            'descricao' => ['nullable', 'string', 'max:255', 'min:3'],
            'marca' => ['required', 'string', 'max:255', 'min:3'],
            'modelo' => ['required', 'string', 'max:255', 'min:3'],
            'ano' => ['required', 'digits:4', 'min:0', 'max:9999'],
            'valor' => ['nullable', 'string', 'max:255', 'min:3'],
            'imagem' => ['nullable', 'string', 'max:255', 'min:3'],
            'quantidade' => ['required', 'numeric', 'min:0'],
        ];
    }
}
