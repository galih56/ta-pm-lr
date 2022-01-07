<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class RemoveUnusedColumnsUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if(Schema::hasColumn('lists','position')){
            Schema::table('lists', function (Blueprint $table) {
                $table->dropColumn('position');
            });
        }
        if(Schema::hasColumn('users','verified')){
            Schema::table('users', function (Blueprint $table) {
                $table->dropColumn('verified');
            });
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
    }
}
