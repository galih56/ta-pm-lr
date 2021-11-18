<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateColumnsMeetings extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('meetings', function (Blueprint $table) {
            $table->json('google_calendar_info')->nullable();
        });
        Schema::table('meeting_members', function (Blueprint $table) {
            $table->json('google_calendar_info')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('meetings', function (Blueprint $table) {
            
        	Schema::table('meetings', function (Blueprint $table) {
            		$table->dropColumn('google_calendar_info');
        	});
        	Schema::table('meeting_members', function (Blueprint $table) {
            		$table->dropColumn('google_calendar_info');
        	});
        });
    }
}
