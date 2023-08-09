<?php

namespace Database\Factories;

use App\Models\Box;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Parts>
 */
class PartsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' => User::inRandomOrder()->first()->id,  // Get an existing user randomly

            'sku' => $this->faker->unique()->randomNumber(5),
            'name' => ['Pneu', 'Retrovisor', 'Farol', 'Lanterna', 'Bateria'][rand(0, 4)],
            'description' => ['Pneu', 'Retrovisor', 'Farol', 'Lanterna', 'Bateria'][rand(0, 4)],
            'brand' => ['Fiat', 'Ford', 'Chevrolet', 'Volkswagen', 'Renault'][rand(0, 4)],
            'model' => ['Uno', 'Fiesta', 'Celta', 'Gol', 'Clio'][rand(0, 4)],
            'year' => $this->faker->year(),
            'price' => $this->faker->randomFloat(2, 0, 1000),
            'image' => $this->faker->imageUrl(),
            'quantity' => $this->faker->randomNumber(2),
            'box_id' => Box::inRandomOrder()->first()->id,  // Get an existing box randomly
        ];
    }
}
