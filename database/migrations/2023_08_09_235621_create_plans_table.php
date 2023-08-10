<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('plans', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            $table->string('name')->unique(); // Basic, Gold, Platinum, Premium, Custom and etc.
            $table->string('price')->nullable(); // Price of the plan
            $table->string('description')->nullable(); // How many parts can be added to the plan
            $table->string('parts_limit')->nullable(); // Number of parts that can be added
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('plans');
    }
};
