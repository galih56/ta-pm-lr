<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterClientsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('clients', function (Blueprint $table) {
            if(Schema::hasColumn('clients','name')) $table->dropColumn('name');
            if(Schema::hasColumn('clients','phone_number')) $table->dropColumn('phone_number');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('clients', function (Blueprint $table) {
            if(!Schema::hasColumn('name')) $table->string('name');
            if(!Schema::hasColumn('phone_number')) $table->string('phone_number');
        });
    }
}
