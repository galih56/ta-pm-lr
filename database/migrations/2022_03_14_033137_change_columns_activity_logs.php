<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ChangeColumnsActivityLogs extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('activity_logs', function (Blueprint $table) {
            $table->dropColumn('tasks_id');
            $table->dropColumn('lists_id');
            $table->dropColumn('projects_id');
            $table->string('loggable_type');
            $table->bigInteger('loggable_id');
            $table->bigInteger('users_id')->nullable()->change();
            $table->string('url');
            $table->string('method');
            $table->string('ip');
            $table->string('agent');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('activity_logs', function (Blueprint $table) {
            $table->bigInteger('tasks_id');
            $table->bigInteger('lists_id');
            $table->bigInteger('projects_id');
            $table->dropColumn('loggable_type');
            $table->dropColumn('loggable_id');
            $table->dropColumn('url');
            $table->dropColumn('method');
            $table->dropColumn('ip');
            $table->dropColumn('agent');
        });
    }
}
