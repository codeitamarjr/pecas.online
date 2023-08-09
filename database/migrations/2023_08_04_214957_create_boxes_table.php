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
        Schema::create('boxes', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');


            $table->string('reference');
            $table->string('name')->nullable();
            $table->string('number')->nullable();
            $table->string('description')->nullable();

            // Box belongs to a shelf or null if it is not in a shelf
            $table->bigInteger('shelf_id')->unsigned()->nullable();

            $table->foreign('shelf_id')->references('id')->on('shelves')->onDelete('cascade');

            $table->index('reference');
            $table->index('name');
            $table->index('number');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('boxes');
    }
};
