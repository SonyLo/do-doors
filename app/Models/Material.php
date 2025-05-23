<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Material extends Model
{
    use HasFactory, SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title',
        'is_base',
        'order_position',
        'wrapper_variants',
        'door_variants',
        'deleted_at',
        'config',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
        'order_position' => 'integer',
        'is_base' => 'boolean',
        'wrapper_variants' => 'array',
        'door_variants' => 'array',
        'config' => 'array',
        'updated_at' => 'datetime:Y-m-d H:i:s',
    ];

    public function sizes(): HasMany
    {
        return $this->hasMany(Size::class);
    }
}
