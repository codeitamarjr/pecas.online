<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Peca extends Model
{
    use HasFactory;

    protected $table = 'peca';

    protected $fillable = [
        'user_id',

        'sku',
        'nome',
        'descricao',
        'marca',
        'modelo',
        'ano',
        'valor',
        'imagem',
        'quantidade',

        'categoria_id',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
