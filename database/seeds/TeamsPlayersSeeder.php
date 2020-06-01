<?php

use Illuminate\Database\Seeder;

use App\Team;
use App\Player;

class TeamsAndPlayersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        // Create 10 records of Teams
        factory(Team::class, 10)->create()->each(function ($team) {

            // Seed the relation with 10 Players
            $players = factory(Player::class, 10)->make();
            $team->players()->saveMany($players);
        });
    }
}
