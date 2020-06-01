<?php

use Illuminate\Database\Seeder;

use App\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Create 1 User
        $user = new User();
        $user->name = 'adminUser';
        $user->password = Hash::make('adminUserPassword51');
        $user->email = 'adminUser@company.com';
        $user->save();
    }
}
