<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterProjectsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('projects', function (Blueprint $table) {
            $table->text('description')->nullable(true)->change();
            $table->datetime('start',$precision=0)->nullable()->default(null)->change();
            $table->datetime('end',$precision=0)->nullable()->default(null)->change();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('projects', function (Blueprint $table) {
            $table->datetime('start',$precision=0)->nullable(false)->change();
            $table->datetime('end',$precision=0)->nullable(false)->change();
        });
    }
}
