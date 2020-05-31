<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Team extends Model
{

    protected $fillable = ['name'];

    protected $hidden = [
        'created_at',
        'updated_at',
        'deleted_at'
    ];

    /**
     * Get the Player(s) for the Team.
     */
    public function players()
    {
        return $this->hasMany(Player::class);
    }
}
