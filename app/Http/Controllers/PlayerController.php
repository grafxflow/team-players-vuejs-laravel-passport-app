<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Player;

class PlayerController extends Controller
{
    
    public function store(Request $request)
    {
        $this->validate($request, [
            'first_name' => 'required|string',
            'last_name' => 'required|string',
            'team_id' => 'required'
        ], [],
        [
            'fname' => 'First Name',
            'lname' => 'Last Name',
            'team_id' => 'Team'
        ]);

        $player = new Player();
        $player->first_name = $request->first_name;
        $player->last_name = $request->last_name;
        $player->team_id = $request->team_id;
        $player->save();

        return response()->json(null, 200);
    }

    public function edit($id)
    {
        $player = Player::find($id);
        return response()->json($player);
    }

    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'first_name' => 'required|string',
            'last_name' => 'required|string',
            'team_id' => 'required'
        ], [],
        [
            'fname' => 'First Name',
            'lname' => 'Last Name',
            'team_id' => 'Team'
        ]);

        $player = Player::findOrFail($id);
        $player->first_name = $request->first_name;
        $player->last_name = $request->last_name;
        $player->team_id = $request->team_id;
        $player->save();

        return response()->json(null, 200);
    }
}
