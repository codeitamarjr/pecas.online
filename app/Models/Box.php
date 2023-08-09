<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Box extends Model
{
    use HasFactory;

    protected $fillable = [
        'reference',
        'name',
        'number',
        'description',
        'user_id',
        'shelf_id'
    ];
}
