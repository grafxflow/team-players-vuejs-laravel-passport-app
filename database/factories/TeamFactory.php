<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Team;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

$factory->define(Team::class, function (Faker $faker) {
    return [
        'name' => $faker->company
    ];
});
