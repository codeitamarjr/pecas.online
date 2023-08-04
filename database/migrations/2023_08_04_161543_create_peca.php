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
        Schema::create('peca', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');

            $table->string('sku')->unique()->nullable();
            $table->string('nome');
            $table->string('descricao')->nullable();
            $table->string('marca');
            $table->string('modelo');
            $table->string('ano');
            $table->string('valor')->nullable();
            $table->string('imagem')->nullable();
            $table->string('quantidade')->nullable();

            // $table->foreignId('categoria_id')->constrained('categoria')->onDelete('cascade');

            $table->index('sku');
            $table->index('nome');
            $table->index('marca');
            $table->index('modelo');
            $table->index('ano');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('peca');
    }
};
