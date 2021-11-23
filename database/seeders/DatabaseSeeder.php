<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Eloquent\Model;
use DB;

class DatabaseSeeder extends Seeder
{
    protected $toTruncate=['occupations'];

    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        
        Model::unguard();
        Schema::disableForeignKeyConstraints();
        
        foreach($this->toTruncate as $table) {
            DB::table($table)->truncate();
        }

        Schema::enableForeignKeyConstraints();
        Model::reguard();
        
        $this->call(RoleSeeder::class);
    }
}
