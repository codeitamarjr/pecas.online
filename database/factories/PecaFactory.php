<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Peca>
 */
class PecaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' => User::inRandomOrder()->first()->id,  // Pegue um usuário existente aleatoriamente

            'sku' => $this->faker->unique()->randomNumber(5),
            'nome' => ['Pneu', 'Retrovisor', 'Farol', 'Lanterna', 'Bateria'][rand(0, 4)],
            'descricao' => ['Pneu', 'Retrovisor', 'Farol', 'Lanterna', 'Bateria'][rand(0, 4)],
            'marca' => ['Fiat', 'Ford', 'Chevrolet', 'Volkswagen', 'Renault'][rand(0, 4)],
            'modelo' => ['Uno', 'Fiesta', 'Celta', 'Gol', 'Clio'][rand(0, 4)],
            'ano' => $this->faker->year(),
            'valor' => $this->faker->randomFloat(2, 0, 1000),
            'imagem' => $this->faker->imageUrl(),
            'quantidade' => $this->faker->randomNumber(2),
        ];
    }
}
