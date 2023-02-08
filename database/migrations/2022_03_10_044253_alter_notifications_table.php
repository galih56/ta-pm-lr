<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterNotificationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        
        Schema::table('notifications', function (Blueprint $table) {
            $table->increments('id')->change();
            $table->string('message')->nullable()->change();
            $table->datetime('read_at')->nullable()->change();
            $table->string('route')->nullable()->change();
            $table->dropColumn('data');
        });
     
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('notifications', function (Blueprint $table) {
            $table->string('message')->default(null)->change();
            $table->datetime('read_at')->default(null)->change();
            $table->string('route')->default(null)->change();
            $table->text('data')->nullable();
        });
    }
}
