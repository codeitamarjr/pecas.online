<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Box;
use App\Models\Parts;
use App\Models\Peca;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        \App\Models\User::factory(5)->create();

        \App\Models\User::factory()->create([
            'name' => 'Test User',
            'email' => 'm@m.com',
            'password' => \bcrypt('123456789'),
        ]);

        Box::factory(10)->create();

        Peca::factory(10000)->create();

        Parts::factory(10000)->create();
    }
}
