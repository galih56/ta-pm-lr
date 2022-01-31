<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Doctrine\DBAL\Types\FloatType;
use Doctrine\DBAL\Types\Type;

class ChangeProgressColumns extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // https://stackoverflow.com/questions/56864556/migration-cannot-change-double-data-type-value
        // if (!Type::hasType('double')) {
        //     Type::addType('double', FloatType::class);
        // }
        Schema::table('tasks', function (Blueprint $table) {
            $table->dropColumn('progress')->change();
        });
        Schema::table('lists', function (Blueprint $table) {
            $table->dropColumn('progress')->change();
        });
        Schema::table('projects', function (Blueprint $table) {
            $table->dropColumn('progress')->change();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('tasks', function (Blueprint $table) {
            $table->string('progress')->nullable();
        });
        Schema::table('lists', function (Blueprint $table) {
            $table->string('progress')->nullable();
        });
        Schema::table('projects', function (Blueprint $table) {
            $table->string('progress')->nullable();
        });
    }
}
