<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Player extends Model
{

    protected $fillable = ['first_name', 'last_name'];

    protected $hidden = [
        'created_at',
        'updated_at',
        'deleted_at'
    ];

    /**
     * Get the Team that has the Player(s).
     */
    public function team()
    {
        return $this->belongsTo(Team::class);
    }
}
