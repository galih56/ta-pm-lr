<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class DeleteSeveralTables extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if(Schema::hasColumn('project_members','roles_id')){
            Schema::table('project_members', function (Blueprint $table)
            {  $table->dropColumn('roles_id'); });
        }
        
        if(Schema::hasColumn('team_members','roles_id')){
            Schema::table('team_members', function (Blueprint $table)
            { $table->dropColumn('roles_id'); });
        }
        
        if(Schema::hasColumn('roles','root')){
            Schema::table('roles', function (Blueprint $table)
            { $table->dropColumn('root'); });
        }
        Schema::dropIfExists('github_repositories');
        Schema::dropIfExists('occupation_relations');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::create('project_members', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('users_id');
            $table->foreign('users_id')->references('id')->on('users');
            $table->unsignedBigInteger('projects_id');
            $table->foreign('projects_id')->references('id')->on('projects');
            $table->timestamps();
        });
    }
}
